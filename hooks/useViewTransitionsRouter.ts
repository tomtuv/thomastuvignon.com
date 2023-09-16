import { useRouter as useNextRouter, usePathname } from "next/navigation";
import { useLayoutEffect, useRef } from "react";

export function transitionHelper({
  skipTransition = false,
  classNames = [],
  updateDOM,
}: {
  skipTransition?: boolean;
  classNames?: string[];
  updateDOM: () => Promise<void> | void;
}) {
  if (skipTransition || !document.startViewTransition) {
    const updateCallbackDone = Promise.resolve(updateDOM()).then(
      () => undefined
    );
    const ready = Promise.reject(Error("View Transitions API unsupported"));

    ready.catch(() => undefined);

    return {
      ready,
      updateCallbackDone,
      finished: updateCallbackDone,
      skipTransition: () => undefined,
    };
  }

  document.documentElement.classList.add(...classNames);

  const transition = document.startViewTransition(updateDOM);

  transition.finished.finally(() =>
    document.documentElement.classList.remove(...classNames)
  );

  return transition;
}

export function useViewTransitionsRouter(): ReturnType<typeof useNextRouter> {
  const router = useNextRouter();
  const pathname = usePathname();

  const promiseCallbacks = useRef<Record<
    "resolve" | "reject",
    (value: unknown) => void
  > | null>(null);

  useLayoutEffect(() => {
    return () => {
      if (promiseCallbacks.current) {
        promiseCallbacks.current.resolve(undefined);
        promiseCallbacks.current = null;
      }
    };
  }, [pathname]);

  return {
    ...router,
    back: () => {
      transitionHelper({
        updateDOM: () => router.back(),
      });
    },
    forward: () => {
      transitionHelper({
        updateDOM: () => router.forward(),
      });
    },
    push: (...args: Parameters<typeof router.push>) => {
      transitionHelper({
        updateDOM: () => {
          const url = args[0] as string;
          if (url === pathname) {
            router.push(...args);
          } else {
            return new Promise((resolve, reject) => {
              promiseCallbacks.current = {
                resolve: resolve as (value: unknown) => void,
                reject,
              };
              router.push(...args);
            });
          }
        },
      });
    },
    replace: (...args: Parameters<typeof router.replace>) => {
      transitionHelper({
        updateDOM: () => router.replace(...args),
      });
    },
  };
}
