import { useRouter } from "next/router";
import Link from "next/link";
import { useCookies } from "react-cookie";
import styles from "./Languages.module.css";

const LANGUAGE_NAMES = {
  fr: "Français",
  en: "English",
};

export default function Languages() {
  const { asPath, locale: activeLocale, locales } = useRouter();
  const [cookie, setCookie] = useCookies(["NEXT_LOCALE"]);

  return (
    <ul>
      {locales.map((locale) => (
        <li key={locale}>
          <Link
            className={styles.link}
            href={asPath}
            hrefLang={locale}
            aria-current={locale === activeLocale ? "page" : null}
            locale={locale}
            onClick={() => {
              if (cookie.NEXT_LOCALE !== locale) {
                setCookie("NEXT_LOCALE", locale, { path: "/" });
              }
            }}
          >
            {LANGUAGE_NAMES[locale]}
          </Link>
        </li>
      ))}
    </ul>
  );
}
