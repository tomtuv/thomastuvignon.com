import en from "../locales/en.json";
import fr from "../locales/fr.json";
import openGraphImage from "../public/open-graph-image.jpg";

export const SITE_NAME = "Thomas Tuvignon";
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL as string;

export const OPEN_GRAPH_IMAGE = {
  url: openGraphImage.src,
  width: openGraphImage.width,
  height: openGraphImage.height,
  type: "image/jpeg",
};

export const TWITTER_USERNAME = "@tomtuv";
export const LOCALES = ["fr", "en"] as const;
export const DEFAULT_LOCALE = "fr";
export const MESSAGES = { fr, en };
export const LANGUAGE_NAMES = { fr: "Français", en: "English" };
