import { useState, useEffect } from "react";
import type { AppProps } from "next/app";
import { MotionConfig } from "framer-motion";
import { IntlProvider } from "react-intl";
import Layout from "../components/Layout";
import fr from "../locales/fr.json";
import en from "../locales/en.json";
import "../styles/index.css";

const MESSAGES: any = { fr, en };

export default function App({ Component, pageProps, router }: AppProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (
      navigator.userAgent.match(/Android/i) ||
      navigator.userAgent.match(/webOS/i) ||
      navigator.userAgent.match(/iPhone/i) ||
      navigator.userAgent.match(/iPad/i)
    ) {
      setIsMobile(true);
    }
  }, []);

  return (
    <MotionConfig
      reducedMotion="user"
      transition={{ duration: isMobile ? 0 : 0.3 }}
    >
      <IntlProvider
        locale={router.locale ?? "fr"}
        defaultLocale={router.defaultLocale}
        messages={MESSAGES[router.locale ?? "fr"]}
      >
        <Layout {...pageProps} key={router.asPath}>
          <Component {...pageProps} />
        </Layout>
      </IntlProvider>
    </MotionConfig>
  );
}
