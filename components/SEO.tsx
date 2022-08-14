import Head from "next/head";
import { useRouter } from "next/router";

const SITE_TITLE = "Thomas Tuvignon";
const SITE_URL = "https://thomastuvignon.com";
const OG_IMAGE = `${SITE_URL}/og-image.jpg`;
const TWITTER_USERNAME = "@tomtuv";

type Props = {
  title?: string;
  description?: string;
};

export default function SEO({ title, description }: Props) {
  const {
    asPath,
    locale: activeLocale = "fr",
    locales = [],
    defaultLocale = "fr",
  } = useRouter();

  const alternateLocale = locales.find((locale) => locale !== activeLocale);

  const getPageURL = (locale: string) => {
    return `${SITE_URL}${
      locale !== defaultLocale ? `/${locale}` : ""
    }${asPath}`;
  };

  return (
    <Head>
      <title>{title ? `${title} | ${SITE_TITLE}` : SITE_TITLE}</title>
      <link rel="canonical" href={getPageURL(activeLocale)} />
      <link
        rel="alternate"
        hrefLang="x-default"
        href={getPageURL(defaultLocale)}
      />
      {locales.map((locale) => (
        <link
          rel="alternate"
          hrefLang={locale}
          href={getPageURL(locale)}
          key={locale}
        />
      ))}
      <meta name="description" content={description} />
      <meta name="image" content={OG_IMAGE} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_TITLE} />
      <meta property="og:title" content={title} />
      <meta property="og:url" content={getPageURL(activeLocale)} />
      <meta property="og:locale" content={activeLocale} />
      <meta property="og:locale:alternate" content={alternateLocale} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={OG_IMAGE} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={TWITTER_USERNAME} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={OG_IMAGE} />
    </Head>
  );
}
