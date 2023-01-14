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

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const [projects, pages] = await Promise.all([
    getAllProjectsWithSlug(),
    getAllPagesWithSlug(),
  ]);

  const sitemap = xml`<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>${SITE_URL}</loc>
      </url>
      ${projects
        .map(({ slug }: { slug: string }) => {
          return xml`
            <url>
              <loc>${`${SITE_URL}/projects/${slug}`}</loc>
            </url>
          `;
        })
        .join("")}
      ${pages
        .map(({ slug }: { slug: string }) => {
          return xml`
            <url>
              <loc>${`${SITE_URL}/${slug}`}</loc>
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
