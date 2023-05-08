import type { MetadataRoute } from "next";
import { getAllPagesWithSlug, getAllProjectsWithSlug } from "@/lib/api";
import { LOCALES, SITE_URL } from "@/lib/constants";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [allPages, allProjects] = await Promise.all([
    getAllPagesWithSlug(),
    getAllProjectsWithSlug(),
  ]);

  return [
    ...LOCALES.map((locale) => ({
      url: `${SITE_URL}/${locale}`,
      lastModified: new Date(),
    })),
    ...allPages.flatMap((page) =>
      LOCALES.map((locale) => ({
        url: `${SITE_URL}/${locale}/${page?.slug}`,
        lastModified: new Date(),
      }))
    ),
    ...allProjects.flatMap((project) =>
      LOCALES.map((locale) => ({
        url: `${SITE_URL}/${locale}/projects/${project?.slug}`,
        lastModified: new Date(),
      }))
    ),
  ];
}
