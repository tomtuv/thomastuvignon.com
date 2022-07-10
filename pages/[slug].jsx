import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Layout from "components/Layout";
import Seo from "components/Seo";
import Back from "components/Back";
import { getPage, getAllPagesWithSlug } from "lib/api";

export default function Page({ page, preview }) {
  return (
    <Layout page={page} preview={preview}>
      <Seo title={page.title} description={page.description} />
      <article>
        <div data-container="">
          <div
            style={{
              "--grid-column-md": "3 / span 8",
            }}
          >
            {documentToReactComponents(page.body.json)}
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
    ...(allPages.map(({ slug }) => ({ params: { slug }, locale })) ?? []),
  ];

  return {
    paths: locales.reduce(reducer, []) ?? [],
    fallback: false,
  };
}
