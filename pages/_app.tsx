import { Analytics } from "@vercel/analytics/react";
import { MotionConfig } from "framer-motion";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import Script from "next/script";
import { IntlProvider } from "react-intl";
import en from "@/locales/en.json";
import fr from "@/locales/fr.json";
import "@/styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  fallback: ["ui-sans-serif", "system-ui", "sans-serif"],
  adjustFontFallback: false,
});

export default function App({ Component, pageProps, router }: AppProps) {
  const messages = { fr, en };

  return (
    <MotionConfig reducedMotion="user">
      <IntlProvider
        locale={router.locale ?? "fr"}
        defaultLocale={router.defaultLocale}
        messages={messages[router.locale as keyof typeof messages]}
      >
        <style jsx global>{`
          :root {
            --font-family: ${inter.style.fontFamily};
          }
        `}</style>
        <Component {...pageProps} />
        <Analytics />
        {process.env.NODE_ENV === "production" && (
          <Script
            data-domain={process.env.NEXT_PUBLIC_DOMAIN}
            src={`${process.env.NEXT_PUBLIC_PLAUSIBLE_HOST_URL}/js/plausible.js`}
            strategy="afterInteractive"
          />
        )}
      </IntlProvider>
    </MotionConfig>
  );
}
