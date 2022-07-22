import { getPlaiceholder } from "plaiceholder";
import Seo from "components/Seo";
import Block from "components/Block";
import Back from "components/Back";
import { getProject, getAllProjectsWithSlug } from "lib/api";

export default function Project({ title, description, blocks }) {
  return (
    <>
      <Seo title={title} description={description} />
      <article>
        {blocks?.map((block) => (
          <Block block={block} key={block.sys.id} />
        ))}
      </article>
      <Back />
    </>
  );
}

export async function getStaticProps({ params, locale, preview = false }) {
  const project = (await getProject(params.slug, locale, preview)) ?? {};
  const { title, description } = project;
  const blocks =
    (await Promise.all(
      project.blocksCollection?.items.map(async (block) => {
        if (block.__typename === "Media") {
          return {
            ...block,
            images:
              (await Promise.all(
                block.imagesCollection?.items.map(async (image) => ({
                  ...image,
                  base64: await (await getPlaiceholder(image.url)).base64,
                }))
              )) ?? [],
          };
        }

        return block;
      })
    )) ?? [];

  return {
    props: { title, description, blocks, preview },
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
