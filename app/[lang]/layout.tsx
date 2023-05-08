import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";
import Providers from "../../components/Providers";
import { LOCALES, MESSAGES, SITE_NAME, SITE_URL } from "@/lib/constants";
import "../globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  fallback: ["ui-sans-serif", "system-ui", "sans-serif"],
  adjustFontFallback: false,
  variable: "--font-family",
});

export async function generateStaticParams() {
  return LOCALES.map((locale) => ({ lang: locale }));
}

export async function generateMetadata({
  params: { lang },
}: {
  params: { lang: string };
}) {
  return {
    title: {
      template: `%s | ${SITE_NAME}`,
      absolute: SITE_NAME,
    },
    description: MESSAGES[lang as keyof typeof MESSAGES].description,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: "/",
      languages: LOCALES.reduce(
        (acc, locale) => ({
          ...acc,
          [locale]: `/${locale}`,
        }),
        {}
      ),
    },
    colorScheme: "dark light",
    twitter: {
      card: "summary_large_image",
      creator: "@tomtuv",
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
  return (
    <html lang={lang} className={inter.variable}>
      <body>
        <Providers>
          {children}
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
