import type { GetServerSideProps } from "next";
import { getAllProjectsWithSlug, getAllPagesWithSlug } from "@/lib/api";

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;

export default function SiteMap() {
  return null;
}

export const getServerSideProps: GetServerSideProps = async ({
  res,
  locales,
  defaultLocale,
}) => {
  const [projects, pages] = await Promise.all([
    getAllProjectsWithSlug(),
    getAllPagesWithSlug(),
  ]);

  const sitemap = /* XML */ `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
    ${locales
      ?.map(
        (locale) => /* XML */ `
          <url>
            <loc>${SITE_URL}${
          locale !== defaultLocale ? `/${locale}` : ""
        }</loc>
            ${locales
              ?.map((alternateLocale) => {
                return /* XML */ `
                  <xhtml:link rel="alternate" hreflang="${alternateLocale}" href="${`${SITE_URL}${
                  alternateLocale !== defaultLocale ? `/${alternateLocale}` : ""
                }`}" />
                `;
              })
              .join("")}
          </url>
        `
      )
      .join("")}
      ${projects
        .map((project) => {
          if (!project) return null;

          return locales
            ?.map(
              (locale) => /* XML */ `
                <url>
                  <loc>${`${SITE_URL}${
                    locale !== defaultLocale ? `/${locale}` : ""
                  }/projects/${project.slug}`}</loc>
                  <xhtml:link rel="alternate" hreflang="x-default" href="${`${SITE_URL}/projects/${project.slug}`}" />
                  ${locales
                    ?.map((locale) => {
                      return /* XML */ `
                        <xhtml:link rel="alternate" hreflang="${locale}" href="${`${SITE_URL}${
                        locale !== defaultLocale ? `/${locale}` : ""
                      }/projects/${project.slug}`}" />
                      `;
                    })
                    .join("")}
                </url>
              `
            )
            .join("");
        })
        .join("")}
      ${pages
        .map((page) => {
          if (!page) return null;

          return locales
            ?.map(
              (locale) => /* XML */ `
                <url>
                  <loc>${`${SITE_URL}${
                    locale !== defaultLocale ? `/${locale}` : ""
                  }/${page.slug}`}</loc>
                  <xhtml:link rel="alternate" hreflang="x-default" href="${`${SITE_URL}/${page.slug}`}" />
                  ${locales
                    ?.map((locale) => {
                      return /* XML */ `
                        <xhtml:link rel="alternate" hreflang="${locale}" href="${`${SITE_URL}${
                        locale !== defaultLocale ? `/${locale}` : ""
                      }/${page.slug}`}" />
                      `;
                    })
                    .join("")}
                </url>
              `
            )
            .join("");
        })
        .join("")}
    </urlset>
  `;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};
