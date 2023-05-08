import { draftMode } from "next/headers";
import { notFound } from "next/navigation";
import { Fragment } from "react";
import Back from "@/components/Back";
import Media from "@/components/Media";
import PageLayout from "@/components/PageLayout";
import Text from "@/components/Text";
import { getProject, getAllProjectsWithSlug } from "@/lib/api";
import { LOCALES } from "@/lib/constants";

export async function generateStaticParams() {
  const allProjects = await getAllProjectsWithSlug();

  return allProjects.map((page) => ({ slug: page?.slug }));
}

export async function generateMetadata({
  params: { slug, lang },
}: {
  params: { slug: string; lang: string };
}) {
  const { isEnabled } = draftMode();
  const project = await getProject(slug, { locale: lang, preview: isEnabled });

  return {
    title: project?.title,
    description: project?.description,
    alternates: {
      canonical: `/projects/${slug}`,
      languages: LOCALES.reduce(
        (acc, locale) => ({
          ...acc,
          [locale]: `/${locale}/projects/${slug}`,
        }),
        {}
      ),
    },
  };
}

export default async function Project({
  params: { slug, lang },
}: {
  params: { slug: string; lang: string };
}) {
  const { isEnabled } = draftMode();
  const project = await getProject(slug, { locale: lang, preview: isEnabled });

  if (!project) notFound();

  return (
    <PageLayout page={project}>
      {project.blocksCollection?.items.map((block) => (
        <Fragment key={block?.sys.id}>
          {block?.__typename === "Text" ? (
            <Text block={block} />
          ) : (
            block?.__typename === "Media" && <Media block={block} />
          )}
        </Fragment>
      ))}
      <Back />
    </PageLayout>
  );
}
