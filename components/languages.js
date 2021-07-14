import { useRouter } from "next/router";
import Link from "next/link";

const languageNames = {
  fr: "Français",
  en: "English",
};

export default function Languages() {
  const router = useRouter();

  return (
    <ul className="footer-languages">
      {router.locales.map((locale) => (
        <li key={locale}>
          <Link href={router.asPath} locale={locale}>
            <a aria-current={router.locale === locale ? "page" : null}>
              {languageNames[locale]}
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
}
