import type { AppProps } from "next/app";
import { MotionConfig } from "framer-motion";
import { IntlProvider } from "react-intl";
import Analytics from "../components/Analytics";
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
        <Analytics />
        <Component {...pageProps} />
      </IntlProvider>
    </MotionConfig>
  );
}
