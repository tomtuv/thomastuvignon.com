import type { MetadataRoute } from "next";
import { getAllPagesWithSlug, getAllProjectsWithSlug } from "@/lib/api";
import { LOCALES, SITE_URL } from "@/lib/constants";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [allPages, allProjects] = await Promise.all([
    getAllPagesWithSlug(),
    getAllProjectsWithSlug(),
  ]);

  return LOCALES.flatMap((locale) => [
    {
      url: `${SITE_URL}/${locale}`,
      lastModified: new Date(),
      alternates: {
        languages: LOCALES.reduce(
          (acc, locale) => ({
            ...acc,
            [locale]: `${SITE_URL}/${locale}`,
          }),
          {},
        ),
      },
    },
    ...allPages.map((page) => ({
      url: `${SITE_URL}/${locale}/${page?.slug}`,
      lastModified: new Date(),
      alternates: {
        languages: LOCALES.reduce(
          (acc, locale) => ({
            ...acc,
            [locale]: `${SITE_URL}/${locale}/${page?.slug}`,
          }),
          {},
        ),
      },
    })),
    ...allProjects.map((project) => ({
      url: `${SITE_URL}/${locale}/projects/${project?.slug}`,
      lastModified: new Date(),
      alternates: {
        languages: LOCALES.reduce(
          (acc, locale) => ({
            ...acc,
            [locale]: `${SITE_URL}/${locale}/projects/${project?.slug}`,
          }),
          {},
        ),
      },
    })),
  ]);
}
