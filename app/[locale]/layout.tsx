import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Providers from "./providers";
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
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const description = MESSAGES[locale as keyof typeof MESSAGES]?.description;

  return {
    title: {
      template: `%s | ${SITE_NAME}`,
      absolute: SITE_NAME,
    },
    description,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: `/${locale}`,
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
      url: `/${locale}`,
      locale,
      alternateLocale: LOCALES.filter((l) => l !== locale),
    },
    twitter: {
      title: SITE_NAME,
      description,
      card: "summary_large_image",
      creator: TWITTER_USERNAME,
    },
  };
}

export default async function RootLayout({
  params,
  children,
}: React.PropsWithChildren<{ params: Promise<{ locale: string }> }>) {
  let { locale } = await params;
  locale = locale.replace("worker.js", DEFAULT_LOCALE);

  return (
    <html lang={locale} className={inter.variable}>
      <body>
        <Providers locale={locale}>{children}</Providers>
      </body>
    </html>
  );
}
