import { Fragment } from "react";
import type {
  GetStaticPathsContext,
  GetStaticPathsResult,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from "next";
import Layout from "../../components/Layout";
import SEO from "../../components/SEO";
import Text from "../../components/Text";
import Media from "../../components/Media";
import Back from "../../components/Back";
import { getProject, getAllProjectsWithSlug } from "../../lib/api";
import type { Project as ProjectType } from "../../interfaces";

export default function Project({
  project,
  preview,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout page={project} preview={preview}>
      <SEO title={project.title} description={project.description} />
      {project.blocksCollection.items?.map((block) => (
        <Fragment key={block.sys.id}>
          {block.__typename === "Text" ? (
            <Text block={block} />
          ) : (
            <Media block={block} />
          )}
        </Fragment>
      ))}
      <Back />
    </Layout>
  );
}

export async function getStaticProps({
  params,
  locale,
  preview = false,
}: GetStaticPropsContext) {
  const { slug } = params as { slug: string };
  const project: ProjectType = (await getProject(slug, locale!, preview)) ?? {};

  return {
    props: { project, preview },
  };
}

export async function getStaticPaths({ locales }: GetStaticPathsContext) {
  const allProjects: ProjectType[] = (await getAllProjectsWithSlug()) ?? [];
  const paths: GetStaticPathsResult["paths"] = [];

  allProjects.forEach(({ slug }) => {
    locales!.forEach((locale) => {
      paths.push({
        params: { slug },
        locale,
      });
    });
  });

  return {
    paths: paths ?? [],
    fallback: false,
  };
}
