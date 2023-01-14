import type { GetServerSideProps } from "next";
import { getAllProjectsWithSlug, getAllPagesWithSlug } from "@/lib/api";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  process.env.NEXT_PUBLIC_VERCEL_URL ??
  "http://localhost:3000";

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
    <urlset xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd http://www.w3.org/TR/xhtml11/xhtml11_schema.html http://www.w3.org/2002/08/xhtml/xhtml1-strict.xsd" xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/TR/xhtml11/xhtml11_schema.html">
      <url>
        <loc>${SITE_URL}</loc>
        <xhtml:link rel="alternate" hreflang="x-default" href="${SITE_URL}"></xhtml:link>
        ${locales!
          .map((locale) => {
            return xml`
              <xhtml:link rel="alternate" hreflang="${locale}" href="${`${SITE_URL}${
              locale !== defaultLocale ? `/${locale}` : ""
            }`}"></xhtml:link>
            `;
          })
          .join("")}
      </url>
      ${projects
        .map(({ slug }: { slug: string }) => {
          return xml`
            <url>
              <loc>${`${SITE_URL}/projects/${slug}`}</loc>
              <xhtml:link rel="alternate" hreflang="x-default" href="${`${SITE_URL}/projects/${slug}`}"></xhtml:link>
              ${locales!
                .map((locale) => {
                  return xml`
                    <xhtml:link rel="alternate" hreflang="${locale}" href="${`${SITE_URL}${
                    locale !== defaultLocale ? `/${locale}` : ""
                  }/projects/${slug}`}"></xhtml:link>
                  `;
                })
                .join("")}
            </url>
          `;
        })
        .join("")}
      ${pages
        .map(({ slug }: { slug: string }) => {
          return xml`
            <url>
              <loc>${`${SITE_URL}/${slug}`}</loc>
              <xhtml:link rel="alternate" hreflang="x-default" href="${`${SITE_URL}/${slug}`}"></xhtml:link>
              ${locales!
                .map((locale) => {
                  return xml`
                    <xhtml:link rel="alternate" hreflang="${locale}" href="${`${SITE_URL}${
                    locale !== defaultLocale ? `/${locale}` : ""
                  }/${slug}`}"></xhtml:link>
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

  return { props: {} };
};
