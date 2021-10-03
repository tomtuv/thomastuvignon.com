import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import Layout from "components/layout";
import Seo from "components/seo";
import Back from "components/back";
import { getPage, getAllPagesWithSlug } from "lib/api";

const renderOptions = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => {
      const [{ value }] = node.content;

      if (value !== "" || node.content.length > 1) {
        return <p>{children}</p>;
      }

      return null;
    },
  },
};

export default function Page({ page, preview }) {
  return (
    <Layout preview={preview}>
      <Seo title={page.title} description={page.description} />
      <article>
        <div className="grid">
          <div style={{ "--grid-column-lg": "2 / span 10" }}>
            {documentToReactComponents(page.body.json, renderOptions)}
          </div>
        </div>
      </article>
      <Back />
    </Layout>
  );
}

export async function getStaticProps({ params, locale, preview = false }) {
  const page = await getPage(params.slug, locale, preview);

  return {
    props: { page, preview },
  };
}

export async function getStaticPaths({ locales }) {
  const allPages = await getAllPagesWithSlug();

  const paths = locales.reduce(
    (acc, locale) => [
      ...acc,
      ...allPages.map(({ slug }) => ({
        params: {
          slug,
        },
        locale,
      })),
    ],
    []
  );

  return {
    paths,
    fallback: false,
  };
}
