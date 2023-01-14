import Head from "next/head";

const SITE_NAME = "Thomas Tuvignon";
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;
const OG_IMAGE_URL = `${SITE_URL}/og-image.jpg`;
const TWITTER_USERNAME = "@tomtuv";

interface Props {
  title?: string;
  description?: string;
}

export default function Seo({ title, description }: Props) {
  return (
    <Head>
      <title>{title ? `${title} | ${SITE_NAME}` : SITE_NAME}</title>
      <meta name="description" content={description} />
      <meta name="image" content={OG_IMAGE_URL} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={OG_IMAGE_URL} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={TWITTER_USERNAME} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={OG_IMAGE_URL} />
    </Head>
  );
}
