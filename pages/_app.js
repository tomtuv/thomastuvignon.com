import { useRouter } from "next/router";
import { IntlProvider } from "react-intl";
import fr from "locales/fr.json";
import en from "locales/en.json";
import "styles/index.css";

const messages = { fr, en };

export default function App({ Component, pageProps }) {
  const { locale, defaultLocale } = useRouter();

  return (
    <IntlProvider
      locale={locale}
      defaultLocale={defaultLocale}
      messages={messages[locale]}
    >
      <Component {...pageProps} />
    </IntlProvider>
  );
}
