"use client";

import NextLink from "next/link";
import { useIntl } from "react-intl";
import styles from "./Link.module.css";

export default function Link({
  href,
  variant,
  ...props
}: React.ComponentProps<typeof NextLink> & {
  variant?: "underline" | "underline-inverse";
}) {
  const { locale } = useIntl();

  if (
    href.toString().startsWith("/") &&
    !href.toString().startsWith(`/${locale}`) &&
    !href.toString().startsWith("/api")
  ) {
    href = `/${locale}${href}`;
  }

  return (
    <NextLink
      className={styles.root}
      href={href}
      data-variant={variant}
      {...props}
    />
  );
}
