import { useRouter } from "next/router";
import { IntlProvider } from "react-intl";
import { AppProvider } from "../context/app-context";
import fr from "../lang/fr.json";
import en from "../lang/en.json";
import "../styles/index.scss";

const messages = {
  fr: fr,
  en: en,
};

function MyApp({ Component, pageProps }) {
  const { locale, defaultLocale } = useRouter();

  return (
    <AppProvider value={pageProps}>
      <IntlProvider
        locale={locale}
        defaultLocale={defaultLocale}
        messages={messages[locale]}
      >
        <Component {...pageProps} />
      </IntlProvider>
    </AppProvider>
  );
}

export default MyApp;
