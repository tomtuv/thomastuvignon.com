import OpengraphImage from "@/components/opengraph-image";
import { getAllProjectsWithSlug, getProject } from "@/lib/api";
import { LOCALES } from "@/lib/constants";

export const dynamic = "force-static";

export async function generateStaticParams() {
  const allProjects = await getAllProjectsWithSlug({ preview: false });

  return LOCALES.flatMap((locale) =>
    allProjects.map((project) => ({ locale, slug: project?.slug })),
  );
}

export default async function Image({
  params,
}: PageProps<"/[locale]/projects/[slug]">) {
  const { slug, locale } = await params;
  const project = await getProject(slug, { locale, preview: false });

  return await OpengraphImage({ title: project?.title ?? undefined });
}
