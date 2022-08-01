import type { GetStaticPathsContext, GetStaticPropsContext } from "next";
import Seo from "../../components/Seo";
import Text from "../../components/Text";
import Media from "../../components/Media";
import Back from "../../components/Back";
import { getProject, getAllProjectsWithSlug } from "../../lib/api";
import React from "react";

export default function Project({ title, description, blocksCollection }: any) {
  return (
    <>
      <Seo title={title} description={description} />
      <article>
        {blocksCollection.items?.map((block: any) => (
          <React.Fragment key={block.sys.id}>
            {block.__typename === "Text" ? (
              <Text block={block} />
            ) : (
              <Media block={block} />
            )}
          </React.Fragment>
        ))}
      </article>
      <Back />
    </>
  );
}

export async function getStaticProps({
  params = {},
  locale = "fr",
  preview = false,
}: GetStaticPropsContext) {
  const project = (await getProject(params.slug, locale, preview)) ?? {};
  const { title, description, blocksCollection } = project;

  return {
    props: { title, description, blocksCollection, preview },
  };
}

export async function getStaticPaths({ locales = [] }: GetStaticPathsContext) {
  const allProjects = (await getAllProjectsWithSlug()) ?? [];
  const paths: any[] = [];

  allProjects.forEach(({ slug }: { slug: string }) => {
    for (const locale of locales) {
      paths.push({
        params: { slug },
        locale,
      });
    }
  });

  return {
    paths: paths ?? [],
    fallback: false,
  };
}
