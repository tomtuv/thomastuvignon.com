import en from "../locales/en.json";
import fr from "../locales/fr.json";

export const SITE_NAME = "Thomas Tuvignon";
export const LOCALES = ["fr", "en"] as const;
export const DEFAULT_LOCALE = "fr";
export const MESSAGES = { fr, en };
export const LANGUAGE_NAMES = { fr: "Français", en: "English" };
