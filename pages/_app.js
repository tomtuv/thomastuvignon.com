import { useRouter } from "next/router";
import { IntlProvider } from "react-intl";
import { AppWrapper } from "../components/context";
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
    <AppWrapper value={pageProps}>
      <IntlProvider
        locale={locale}
        defaultLocale={defaultLocale}
        messages={messages[locale]}
      >
        <Component {...pageProps} />
      </IntlProvider>
    </AppWrapper>
  );
}

export default MyApp;
