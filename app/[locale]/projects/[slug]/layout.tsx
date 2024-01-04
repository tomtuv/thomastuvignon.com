import type { Metadata } from "next";
import { draftMode } from "next/headers";
import { notFound } from "next/navigation";
import PageLayout from "@/components/page-layout";
import { getAllProjectsWithSlug, getProject } from "@/lib/api";
import { SITE_NAME, TWITTER_USERNAME, LOCALES } from "@/lib/constants";

export async function generateStaticParams() {
  const allProjects = await getAllProjectsWithSlug();

  return allProjects.map((page) => ({ slug: page?.slug }));
}

export async function generateMetadata({
  params: { slug, locale },
}: {
  params: { slug: string; locale: string };
}): Promise<Metadata> {
  const { isEnabled } = draftMode();
  const project = await getProject(slug, { locale, preview: isEnabled });

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
        {}
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

export default async function Layout({
  children,
  params: { slug, locale },
}: React.PropsWithChildren<{
  params: { slug: string; locale: string };
}>) {
  const { isEnabled } = draftMode();
  const project = await getProject(slug, { locale, preview: isEnabled });

  if (!project) {
    return notFound();
  }

  return <PageLayout page={project}>{children}</PageLayout>;
}
