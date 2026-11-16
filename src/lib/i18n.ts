import en from "@/locales/en.json";
import fr from "@/locales/fr.json";

export const LOCALES = ["fr", "en"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "fr";

export const LANGUAGE_NAMES: Record<Locale, string> = {
  fr: "Français",
  en: "English",
};

export const MESSAGES = { fr, en };
