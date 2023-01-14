import Head from "next/head";

const SITE_TITLE = "Thomas Tuvignon";
const SITE_URL = "https://thomastuvignon.com";
const OG_IMAGE = `${SITE_URL}/og-image.jpg`;
const TWITTER_USERNAME = "@tomtuv";

interface Props {
  title?: string;
  description?: string;
}

export default function Seo({ title, description }: Props) {
  return (
    <Head>
      <title>{title ? `${title} | ${SITE_TITLE}` : SITE_TITLE}</title>
      <meta name="description" content={description} />
      <meta name="image" content={OG_IMAGE} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_TITLE} />
      <meta property="og:title" content={title} />
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
