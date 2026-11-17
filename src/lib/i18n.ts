import en from "@/translations/en.json";
import fr from "@/translations/fr.json";

export const locales = ["fr", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "fr";

const translations = { fr, en } satisfies Record<Locale, typeof fr>;

export function getTranslations(locale: string) {
  return translations[locale as Locale] ?? translations.fr;
}

export function getLanguageLabel(locale: string) {
  const label = new Intl.DisplayNames([locale], {
    type: "language",
    languageDisplay: "standard",
  }).of(locale);

  return label?.replace(/^./u, (c) => c.toLocaleUpperCase(locale)) ?? locale;
}
