import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Seo from "components/Seo";
import Back from "components/Back";
import { getPage, getAllPagesWithSlug } from "lib/api";

export default function Page({ title, description, body }) {
  return (
    <>
      <Seo title={title} description={description} />
      <article>
        <div data-container="">
          <div
            style={{
              "--grid-column-md": "3 / span 8",
            }}
          >
            {documentToReactComponents(body.json)}
          </div>
        </div>
      </article>
      <Back />
    </>
  );
}

export async function getStaticProps({ params, locale, preview = false }) {
  const page = (await getPage(params.slug, locale, preview)) ?? {};
  const { title, description, body } = page;

  return {
    props: { title, description, body, preview },
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
