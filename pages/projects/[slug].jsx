import Layout from "components/Layout";
import Seo from "components/Seo";
import Text from "components/Text";
import Media from "components/Media";
import Back from "components/Back";
import { getProject, getAllProjectsWithSlug } from "lib/api";

export default function Project({ project, preview }) {
  return (
    <Layout page={project} preview={preview}>
      <Seo title={project.title} description={project.description} />
      <article>
        {project.blocksCollection.items?.map((block) => {
          switch (block.__typename) {
            case "Text":
              return <Text block={block} key={block.sys.id} />;

            case "Media":
              return <Media block={block} key={block.sys.id} />;

            default:
              return null;
          }
        })}
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
    ...(allProjects.map(({ slug }) => ({
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
