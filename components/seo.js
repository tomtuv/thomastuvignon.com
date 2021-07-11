import Head from "next/head";
import { useRouter } from "next/router";
import { useIntl } from "react-intl";

export default function Seo({ title, description, noIndex, bodyClass }) {
  const { pathname } = useRouter();
  const intl = useIntl();
  const siteUrl = "https://thomastuvignon.com";
  const twitterUsername = "@tomtuv";
  const defaultTitle = "Thomas Tuvignon";
  const defaultDescription = intl.formatMessage({ id: "description" });
  const defaultImage = `image.publicURL`;

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: siteUrl + defaultImage,
    url: siteUrl + pathname,
  };

  return (
    <Head>
      <title>{seo.title}</title>
      <link rel="canonical" href={seo.url} />
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:site_name" content={defaultTitle} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={twitterUsername} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      {noIndex && <meta property="robots" content="noindex" />}
      <body className={bodyClass} />
    </Head>
  );
}
