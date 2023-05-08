"use client";

import { usePathname } from "next/navigation";
import { useIntl } from "react-intl";
import { LANGUAGE_NAMES, LOCALES } from "../lib/constants";
import Link from "./Link";

export default function Languages() {
  const pathname = usePathname();
  const { locale: activeLocale } = useIntl();

  const redirectedPathName = (locale: string) => {
    if (!pathname) return "/";
    const segments = pathname.split("/");
    segments[1] = locale;

    return segments.join("/");
  };

  return (
    <ul role="list">
      {LOCALES.map((locale) => (
        <li key={locale}>
          <Link
            href={redirectedPathName(locale)}
            hrefLang={locale}
            variant="underline-inverse"
            aria-current={locale === activeLocale ? "page" : undefined}
          >
            {LANGUAGE_NAMES[locale]}
          </Link>
        </li>
      ))}
    </ul>
  );
}
