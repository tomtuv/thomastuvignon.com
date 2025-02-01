"use client";

import { Link as ViewTransitionsLink } from "next-view-transitions";
import { useIntl } from "react-intl";
import { LOCALES } from "@/lib/constants";
import styles from "./link.module.css";

export default function Link({
  href,
  underline,
  ...props
}: React.ComponentPropsWithoutRef<typeof ViewTransitionsLink> & {
  underline?: "hover" | boolean;
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
    <ViewTransitionsLink
      className={styles.root}
      href={href}
      data-underline={underline || undefined}
      {...props}
    />
  );
}
