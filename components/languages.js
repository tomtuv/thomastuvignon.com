import { useRouter } from "next/router";
import { useCookies } from "react-cookie";
import Link from "next/link";

const languageNames = {
  fr: "Français",
  en: "English",
};

export default function Languages() {
  const { locale: activeLocale, locales, asPath } = useRouter();
  const [cookie, setCookie] = useCookies(["NEXT_LOCALE"]);

  return (
    <ul className="footer-languages">
      {locales.map((locale) => (
        <li key={locale}>
          <Link href={asPath} locale={locale}>
            <a
              aria-current={locale === activeLocale ? "page" : null}
              onClick={() => {
                if (cookie.NEXT_LOCALE !== locale) {
                  setCookie("NEXT_LOCALE", locale, { path: "/" });
                }
              }}
            >
              {languageNames[locale]}
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
}
