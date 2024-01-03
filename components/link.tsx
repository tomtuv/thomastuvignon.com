"use client";

import NextLink from "next/link";
import { useIntl } from "react-intl";
import styles from "./link.module.css";
import { LOCALES } from "@/lib/constants";

export default function Link({
  href,
  variant,
  ...props
}: React.ComponentPropsWithoutRef<typeof NextLink> & {
  variant?: "underline" | "underline-inverse";
}) {
  const { locale } = useIntl();

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
      {...props}
    />
  );
}
