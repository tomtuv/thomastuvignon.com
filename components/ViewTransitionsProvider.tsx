"use client";

import { startTransition, useEffect, useLayoutEffect, useRef } from "react";

export default function ViewTransitionsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const promiseCallbacks = useRef<Record<
    "resolve" | "reject",
    (value: unknown) => void
  > | null>(null);

  useEffect(() => {
    window.onpopstate = function () {
      document.startViewTransition(() => undefined);
      startTransition(() => undefined);
    };
  }, []);

  useLayoutEffect(() => {
    return () => {
      if (promiseCallbacks.current) {
        promiseCallbacks.current.resolve(undefined);
        promiseCallbacks.current = null;
      }
    };
  });

  return children;
}
