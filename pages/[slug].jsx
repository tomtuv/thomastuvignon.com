import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import Layout from "components/Layout";
import Seo from "components/Seo";
import Back from "components/Back";
import { getPage, getAllPagesWithSlug } from "lib/api";

const richTextOptions = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => {
      const [{ value }] = node.content;
      if (value === "" && node.content.length <= 1) return null;
      return <p>{children}</p>;
    },
  },
};

export default function Page({ page, preview }) {
  return (
    <Layout page={page} preview={preview}>
      <Seo title={page.title} description={page.description} />
      <article>
        <div className="container">
          <div
            style={{
              "--grid-column-md": "3 / span 8",
            }}
          >
            {documentToReactComponents(page.body.json, richTextOptions)}
          </div>
        </div>
      </article>
      <Back />
    </Layout>
  );
}

export async function getStaticProps({ params, locale, preview = false }) {
  const page = (await getPage(params.slug, locale, preview)) ?? {};

  return {
    props: { page, preview },
  };
}

export async function getStaticPaths({ locales }) {
  const allPages = (await getAllPagesWithSlug()) ?? [];

  const reducer = (acc, locale) => [
    ...acc,
    ...(allPages.map(({ slug }) => ({
      params: {
        slug,
      },
      locale,
    })) ?? []),
  ];

  return {
    paths: locales.reduce(reducer, []) ?? [],
    fallback: false,
  };
}
