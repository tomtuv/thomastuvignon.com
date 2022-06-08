import Head from "next/head";
import { useRouter } from "next/router";

const SITE_TITLE = "Thomas Tuvignon";
const SITE_URL = "https://thomastuvignon.com";
const OG_IMAGE = `${SITE_URL}/og-image.jpg`;
const TWITTER_USERNAME = "@tomtuv";

export default function Seo({ title, description }) {
  const { asPath, locale: activeLocale, locales, defaultLocale } = useRouter();
  const alternateLocale = locales.find((locale) => locale !== activeLocale);

  const getPageUrl = (locale) => {
    return `${SITE_URL}${
      locale !== defaultLocale ? `/${locale}` : ""
    }${asPath}`;
  };

  return (
    <Head>
      <title>{title ? `${title} | ${SITE_TITLE}` : SITE_TITLE}</title>
      <link rel="canonical" href={getPageUrl(activeLocale)} />
      <link
        rel="alternate"
        hrefLang="x-default"
        href={getPageUrl(defaultLocale)}
      />
      {locales.map((locale) => (
        <link
          rel="alternate"
          hrefLang={locale}
          href={getPageUrl(locale)}
          key={locale}
        />
      ))}
      <meta name="description" content={description} />
      <meta name="image" content={OG_IMAGE} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_TITLE} />
      <meta property="og:title" content={title} />
      <meta property="og:url" content={getPageUrl(activeLocale)} />
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
