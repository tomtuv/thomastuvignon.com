import { draftMode } from "next/headers";
import { notFound } from "next/navigation";
import Back from "@/components/Back";
import Blocks from "@/components/Blocks";
import PageLayout from "@/components/PageLayout";
import { getAllProjectsWithSlug, getProject } from "@/lib/api";
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
      canonical: `/${lang}/projects/${slug}`,
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

  if (!project) {
    notFound();
  }

  return (
    <PageLayout page={project}>
      <Blocks project={project} />
      <Back />
    </PageLayout>
  );
}
