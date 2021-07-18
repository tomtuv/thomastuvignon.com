import { useRouter } from "next/router";
import { IntlProvider } from "react-intl";
import { DataProvider } from "../context/data";
import fr from "../locales/fr.json";
import en from "../locales/en.json";
import "../styles/index.scss";

const messages = { fr, en };

function MyApp({ Component, pageProps }) {
  const { locale, defaultLocale } = useRouter();

  return (
    <DataProvider value={pageProps}>
      <IntlProvider
        locale={locale}
        defaultLocale={defaultLocale}
        messages={messages[locale]}
      >
        <Component {...pageProps} />
      </IntlProvider>
    </DataProvider>
  );
}

export default MyApp;
