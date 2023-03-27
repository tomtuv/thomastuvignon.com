import type { GetServerSideProps } from "next";
import { getAllProjectsWithSlug, getAllPagesWithSlug } from "@/lib/api";

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;
const xml = String.raw;

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

  const sitemap = xml`<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
      <url>
        <loc>${SITE_URL}</loc>
        <xhtml:link rel="alternate" hreflang="x-default" href="${SITE_URL}" />
        ${locales
          ?.map((locale) => {
            return xml`
              <xhtml:link rel="alternate" hreflang="${locale}" href="${`${SITE_URL}${
              locale !== defaultLocale ? `/${locale}` : ""
            }`}" />
            `;
          })
          .join("")}
      </url>
      ${projects
        .map((project) => {
          if (!project) return null;

          return xml`
            <url>
              <loc>${`${SITE_URL}/projects/${project.slug}`}</loc>
              <xhtml:link rel="alternate" hreflang="x-default" href="${`${SITE_URL}/projects/${project.slug}`}" />
              ${locales
                ?.map((locale) => {
                  return xml`
                    <xhtml:link rel="alternate" hreflang="${locale}" href="${`${SITE_URL}${
                    locale !== defaultLocale ? `/${locale}` : ""
                  }/projects/${project.slug}`}" />
                  `;
                })
                .join("")}
            </url>
          `;
        })
        .join("")}
      ${pages
        .map((page) => {
          if (!page) return null;

          return xml`
            <url>
              <loc>${`${SITE_URL}/${page.slug}`}</loc>
              <xhtml:link rel="alternate" hreflang="x-default" href="${`${SITE_URL}/${page.slug}`}" />
              ${locales
                ?.map((locale) => {
                  return xml`
                    <xhtml:link rel="alternate" hreflang="${locale}" href="${`${SITE_URL}${
                    locale !== defaultLocale ? `/${locale}` : ""
                  }/${page.slug}`}" />
                  `;
                })
                .join("")}
            </url>
          `;
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
