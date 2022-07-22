import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { MotionConfig } from "framer-motion";
import { IntlProvider } from "react-intl";
import Layout from "components/Layout";
import fr from "locales/fr.json";
import en from "locales/en.json";
import "styles/index.css";

const MESSAGES = { fr, en };

export default function App({ Component, pageProps, router }) {
  const [isMobile, setIsMobile] = useState(false);
  const { locale, defaultLocale } = useRouter();

  useEffect(() => {
    if (
      navigator.userAgent.match(/Android/i) ||
      navigator.userAgent.match(/webOS/i) ||
      navigator.userAgent.match(/iPhone/i) ||
      navigator.userAgent.match(/iPad/i) ||
      navigator.userAgent.match(/iPod/i) ||
      navigator.userAgent.match(/BlackBerry/i) ||
      navigator.userAgent.match(/Windows Phone/i)
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
        locale={locale}
        defaultLocale={defaultLocale}
        messages={MESSAGES[locale]}
      >
        <Layout {...pageProps} key={router._key}>
          <Component {...pageProps} />
        </Layout>
      </IntlProvider>
    </MotionConfig>
  );
}
