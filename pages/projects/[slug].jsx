import Layout from "components/Layout";
import Seo from "components/Seo";
import Block from "components/Block";
import Back from "components/Back";
import { getProject, getAllProjectsWithSlug } from "lib/api";

export default function Project({ project, preview }) {
  return (
    <Layout page={project} preview={preview}>
      <Seo title={project.title} description={project.description} />
      <article>
        {project.blocksCollection.items?.map((block) => (
          <Block block={block} key={block.sys.id} />
        ))}
      </article>
      <Back />
    </Layout>
  );
}

export async function getStaticProps({ params, locale, preview = false }) {
  const project = (await getProject(params.slug, locale, preview)) ?? {};

  return {
    props: { project, preview },
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
