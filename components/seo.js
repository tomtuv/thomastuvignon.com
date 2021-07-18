import Head from "next/head";
import { useRouter } from "next/router";

export default function Seo({ title, description }) {
  const { asPath, locale: activeLocale, locales, defaultLocale } = useRouter();
  const siteTitle = "Thomas Tuvignon";
  const siteUrl = "https://thomastuvignon.com";
  const canonicalUrl = `${siteUrl}${
    activeLocale !== defaultLocale ? `/${activeLocale}` : ""
  }${asPath}`;
  const image = `${siteUrl}/og-image.jpg`;
  const twitter = "@tomtuv";

  return (
    <Head>
      <title>{title ? `${title} | ${siteTitle}` : siteTitle}</title>
      <link rel="canonical" href={canonicalUrl} />
      <link rel="alternate" hrefLang="x-default" href={`${siteUrl}${asPath}`} />
      {locales.map((locale) => (
        <link
          rel="alternate"
          hrefLang={locale}
          href={`${siteUrl}/${locale}${asPath}`}
          key={locale}
        />
      ))}
      <meta name="description" content={description} />
      <meta name="image" content={image} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteTitle} />
      <meta property="og:title" content={title} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:locale" content={activeLocale} />
      <meta
        property="og:locale:alternate"
        content={locales.find((locale) => locale !== activeLocale)}
      />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={twitter} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Head>
  );
}
