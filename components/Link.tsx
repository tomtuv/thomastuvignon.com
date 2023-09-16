"use client";

import NextLink from "next/link";
import { useIntl } from "react-intl";
import styles from "./Link.module.css";
import { useViewTransitionsRouter } from "@/hooks/useViewTransitionsRouter";
import { LOCALES } from "@/lib/constants";

export default function Link({
  href,
  variant,
  ...props
}: React.ComponentProps<typeof NextLink> & {
  variant?: "underline" | "underline-inverse";
}) {
  const { locale } = useIntl();
  const router = useViewTransitionsRouter();

  const handleClick: React.MouseEventHandler<HTMLAnchorElement> = (event) => {
    event.preventDefault();

    router.push(href.toString());
  };

  if (
    href.toString().startsWith("/") &&
    !href.toString().startsWith("/api") &&
    !LOCALES.includes(href.toString().split("/")[1] as (typeof LOCALES)[number])
  ) {
    href = `/${locale}${href}`;
  }

  return (
    <NextLink
      className={styles.root}
      href={href}
      data-variant={variant}
      onClick={handleClick}
      {...props}
    />
  );
}
