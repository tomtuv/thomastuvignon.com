import { useRouter } from "next/router";
import { MotionConfig } from "framer-motion";
import { IntlProvider } from "react-intl";
import fr from "locales/fr.json";
import en from "locales/en.json";
import "styles/index.css";

const MESSAGES = { fr, en };

export default function App({ Component, pageProps }) {
  const { locale, defaultLocale } = useRouter();

  return (
    <MotionConfig reducedMotion="user">
      <IntlProvider
        locale={locale}
        defaultLocale={defaultLocale}
        messages={MESSAGES[locale]}
      >
        <Component {...pageProps} />
      </IntlProvider>
    </MotionConfig>
  );
}
