import Seo from "components/Seo";
import Block from "components/Block";
import Back from "components/Back";
import { getProject, getAllProjectsWithSlug } from "lib/api";

export default function Project({ title, description, blocksCollection }) {
  return (
    <>
      <Seo title={title} description={description} />
      <article>
        {blocksCollection.items?.map((block) => (
          <Block block={block} key={block.sys.id} />
        ))}
      </article>
      <Back />
    </>
  );
}

export async function getStaticProps({ params, locale, preview = false }) {
  const project = (await getProject(params.slug, locale, preview)) ?? {};
  const { title, description, blocksCollection } = project;

  return {
    props: { title, description, blocksCollection, preview },
  };
}

export async function getStaticPaths({ locales }) {
  const allProjects = (await getAllProjectsWithSlug()) ?? [];

  const reducer = (acc, locale) => [
    ...acc,
    ...(allProjects.map(({ slug }) => ({ params: { slug }, locale })) ?? []),
  ];

  return {
    paths: locales.reduce(reducer, []) ?? [],
    fallback: false,
  };
}
