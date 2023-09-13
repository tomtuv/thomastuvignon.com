import type { Metadata } from "next";
import { draftMode } from "next/headers";
import { notFound } from "next/navigation";
import PageLayout from "@/components/PageLayout";
import { getAllProjectsWithSlug, getProject } from "@/lib/api";
import { SITE_NAME, TWITTER_USERNAME, LOCALES } from "@/lib/constants";

export async function generateStaticParams() {
  const allProjects = await getAllProjectsWithSlug();

  return allProjects.map((page) => ({ slug: page?.slug }));
}

export async function generateMetadata({
  params: { slug, lang },
}: {
  params: { slug: string; lang: string };
}): Promise<Metadata> {
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
    openGraph: {
      title: project?.title ?? undefined,
      siteName: SITE_NAME,
      description: project?.description ?? undefined,
      url: `/${lang}/projects/${slug}`,
      locale: lang,
      alternateLocale: LOCALES.filter((locale) => locale !== lang),
    },
    twitter: {
      title: project?.title ?? undefined,
      description: project?.description ?? undefined,
      card: "summary_large_image",
      creator: TWITTER_USERNAME,
    },
  };
}

export default async function Layout({
  children,
  params: { slug, lang },
}: {
  children: React.ReactNode;
  params: { slug: string; lang: string };
}) {
  const { isEnabled } = draftMode();
  const project = await getProject(slug, { locale: lang, preview: isEnabled });

  if (!project) {
    return notFound();
  }

  return <PageLayout page={project}>{children}</PageLayout>;
}