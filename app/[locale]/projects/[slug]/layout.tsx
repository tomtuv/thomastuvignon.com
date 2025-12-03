import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Layout from "@/components/layout";
import { getAllProjectsWithSlug, getProject } from "@/lib/api";
import { SITE_NAME, TWITTER_USERNAME, LOCALES } from "@/lib/constants";

export async function generateStaticParams() {
  const allProjects = await getAllProjectsWithSlug();

  return allProjects.map((page) => ({ slug: page?.slug }));
}

export async function generateMetadata({
  params,
}: LayoutProps<"/[locale]/projects/[slug]">): Promise<Metadata> {
  const { slug, locale } = await params;
  const project = await getProject(slug, { locale });

  return {
    title: project?.title,
    description: project?.description,
    alternates: {
      canonical: `/${locale}/projects/${slug}`,
      languages: LOCALES.reduce(
        (acc, locale) => ({
          ...acc,
          [locale]: `/${locale}/projects/${slug}`,
        }),
        {},
      ),
    },
    openGraph: {
      title: project?.title ?? undefined,
      siteName: SITE_NAME,
      description: project?.description ?? undefined,
      url: `/${locale}/projects/${slug}`,
      locale,
      alternateLocale: LOCALES.filter((l) => l !== locale),
    },
    twitter: {
      title: project?.title ?? undefined,
      description: project?.description ?? undefined,
      card: "summary_large_image",
      creator: TWITTER_USERNAME,
    },
  };
}

export default async function ProjectLayout({
  params,
  children,
}: LayoutProps<"/[locale]/projects/[slug]">) {
  const { slug, locale } = await params;
  const project = await getProject(slug, { locale });

  if (!project) {
    return notFound();
  }

  return <Layout page={project}>{children}</Layout>;
}
