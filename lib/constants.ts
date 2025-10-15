import en from "@/locales/en.json";
import fr from "@/locales/fr.json";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
export const SITE_NAME = "Thomas Tuvignon";
export const TWITTER_USERNAME = "@tomtuv";
export const LOCALES = ["fr", "en"];
export const DEFAULT_LOCALE = "fr";
export const MESSAGES = { fr, en };
export const LANGUAGE_NAMES = { fr: "Français", en: "English" };
