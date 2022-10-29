import type { AppProps } from "next/app";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import { MotionConfig } from "framer-motion";
import { IntlProvider } from "react-intl";
import fr from "../locales/fr.json";
import en from "../locales/en.json";
import "../styles/index.css";

const MESSAGES: Record<string, any> = { fr, en };

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <MotionConfig reducedMotion="user">
      <IntlProvider
        locale={router.locale!}
        defaultLocale={router.defaultLocale}
        messages={MESSAGES[router.locale!]}
      >
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
