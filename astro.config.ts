import cloudflare from "@astrojs/cloudflare";
import sitemap from "@astrojs/sitemap";
import { defineConfig, fontProviders } from "astro/config";
import { SITE_URL } from "./src/lib/constants";
import { DEFAULT_LOCALE, LOCALES } from "./src/lib/i18n";

export default defineConfig({
  adapter: cloudflare(),
  integrations: [
    sitemap({
      filter: (page) => new URL(page).pathname !== "/",
      i18n: {
        defaultLocale: DEFAULT_LOCALE,
        locales: Object.fromEntries(LOCALES.map((locale) => [locale, locale])),
      },
    }),
  ],
  site: SITE_URL,
  trailingSlash: "never",
  i18n: {
    defaultLocale: DEFAULT_LOCALE,
    locales: [...LOCALES],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: true,
    },
  },
  image: {
    remotePatterns: [{ protocol: "https", hostname: "images.ctfassets.net" }],
    layout: "full-width",
  },
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: "Inter",
      cssVariable: "--font-family",
      weights: [400, 500, 600, 700],
      fallbacks: ["ui-sans-serif", "system-ui", "sans-serif"],
    },
  ],
});
