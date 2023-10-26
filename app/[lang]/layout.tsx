import { Analytics } from "@vercel/analytics/react";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { draftMode } from "next/headers";
import Providers from "@/components/Providers";
import {
  SITE_NAME,
  SITE_URL,
  TWITTER_USERNAME,
  LOCALES,
  MESSAGES,
  DEFAULT_LOCALE,
} from "@/lib/constants";
import "../globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  fallback: ["ui-sans-serif", "system-ui", "sans-serif"],
  adjustFontFallback: false,
  variable: "--font-family",
});

export const viewport: Viewport = {
  colorScheme: "dark light",
};

export async function generateStaticParams() {
  return LOCALES.map((locale) => ({ lang: locale }));
}

export async function generateMetadata({
  params: { lang },
}: {
  params: { lang: string };
}): Promise<Metadata> {
  lang = lang.replace("worker.js", DEFAULT_LOCALE);
  const description = MESSAGES[lang as keyof typeof MESSAGES].description;

  return {
    title: {
      template: `%s | ${SITE_NAME}`,
      absolute: SITE_NAME,
    },
    description,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: `/${lang}`,
      languages: LOCALES.reduce(
        (acc, locale) => ({
          ...acc,
          [locale]: `/${locale}`,
        }),
        {}
      ),
    },
    openGraph: {
      title: SITE_NAME,
      siteName: SITE_NAME,
      description,
      url: `/${lang}`,
      locale: lang,
      alternateLocale: LOCALES.filter((locale) => locale !== lang),
    },
    twitter: {
      title: SITE_NAME,
      description,
      card: "summary_large_image",
      creator: TWITTER_USERNAME,
    },
  };
}

export default function RootLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  const { isEnabled } = draftMode();

  return (
    <html lang={lang} className={inter.variable}>
      <body>
        <Providers draftMode={isEnabled}>
          {children}
          {!isEnabled && <Analytics />}
        </Providers>
      </body>
    </html>
  );
}
