import type { AppProps } from "next/app";
import Script from "next/script";
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
        locale={router.locale ?? "fr"}
        defaultLocale={router.defaultLocale}
        messages={MESSAGES[router.locale ?? "fr"]}
      >
        {process.env.NODE_ENV === "production" && (
          <Script
            data-website-id={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}
            src={`${process.env.NEXT_PUBLIC_UMAMI_HOST_URL}/umami.js`}
            strategy="afterInteractive"
          />
        )}
        <Component {...pageProps} />
      </IntlProvider>
    </MotionConfig>
  );
}
