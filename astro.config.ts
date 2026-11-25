import cloudflare from "@astrojs/cloudflare";
import sitemap from "@astrojs/sitemap";
import { defineConfig, fontProviders } from "astro/config";
import { Features } from "lightningcss";
import { SITE_URL } from "./src/lib/constants";
import { defaultLocale, locales } from "./src/lib/i18n";

export default defineConfig({
  adapter: cloudflare(),
  session: false,
  integrations: [
    sitemap({
      filter: (page) => new URL(page).pathname !== "/",
      i18n: {
        defaultLocale,
        locales: Object.fromEntries(locales.map((locale) => [locale, locale])),
      },
    }),
  ],
  site: SITE_URL,
  trailingSlash: "never",
  i18n: {
    defaultLocale,
    locales: [...locales],
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
  vite: {
    css: {
      transformer: "lightningcss",
      lightningcss: {
        exclude: Features.LightDark | Features.Nesting,
      },
    },
  },
});
