import type { MetadataRoute } from "next";
import { getAllPagesWithSlug, getAllProjectsWithSlug } from "@/lib/api";
import { DEFAULT_LOCALE, LOCALES, SITE_URL } from "@/lib/constants";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [allPages, allProjects] = await Promise.all([
    getAllPagesWithSlug(),
    getAllProjectsWithSlug(),
  ]);

  return [
    {
      url: `${SITE_URL}/${DEFAULT_LOCALE}`,
      lastModified: new Date(),
      alternates: {
        languages: LOCALES.reduce(
          (acc, locale) => ({
            ...acc,
            [locale]: `${SITE_URL}/${locale}`,
          }),
          {}
        ),
      },
    },
    ...allPages.map((page) => ({
      url: `${SITE_URL}/${page?.slug}`,
      lastModified: new Date(),
      alternates: {
        languages: LOCALES.reduce(
          (acc, locale) => ({
            ...acc,
            [locale]: `${SITE_URL}/${locale}/${page?.slug}`,
          }),
          {}
        ),
      },
    })),
    ...allProjects.map((project) => ({
      url: `${SITE_URL}/projects/${project?.slug}`,
      lastModified: new Date(),
      alternates: {
        languages: LOCALES.reduce(
          (acc, locale) => ({
            ...acc,
            [locale]: `${SITE_URL}/${locale}/projects/${project?.slug}`,
          }),
          {}
        ),
      },
    })),
  ];
}
