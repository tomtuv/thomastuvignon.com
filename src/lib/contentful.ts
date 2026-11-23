import { GraphQLClient } from "graphql-request";
import {
  homePageQuery,
  projectQuery,
  pageQuery,
  projectSlugsQuery,
  pageSlugsQuery,
} from "./queries";

const { CONTENTFUL_SPACE_ID, CONTENTFUL_ACCESS_TOKEN } = import.meta.env;

if (!CONTENTFUL_SPACE_ID || !CONTENTFUL_ACCESS_TOKEN) {
  throw new Error(
    "Set CONTENTFUL_SPACE_ID and CONTENTFUL_ACCESS_TOKEN to fetch content during the Astro build.",
  );
}

const client = new GraphQLClient(
  `https://graphql.contentful.com/content/v1/spaces/${CONTENTFUL_SPACE_ID}`,
  {
    headers: { Authorization: `Bearer ${CONTENTFUL_ACCESS_TOKEN}` },
  },
);

export async function getHomePage(locale: string) {
  const data = await client.request(homePageQuery, { locale });

  return (
    data.homePageCollection?.items.find((item) => item !== null) ?? undefined
  );
}

export async function getProject(slug: string, locale: string) {
  const data = await client.request(projectQuery, { slug, locale });

  return (
    data.projectCollection?.items.find((item) => item !== null) ?? undefined
  );
}

export async function getPage(slug: string, locale: string) {
  const data = await client.request(pageQuery, { slug, locale });

  return data.pageCollection?.items.find((item) => item !== null) ?? undefined;
}

export async function getProjectSlugs(locale: string) {
  const data = await client.request(projectSlugsQuery, { locale });

  return (data.projectCollection?.items ?? [])
    .map((item) => item?.slug)
    .filter((slug): slug is string => Boolean(slug));
}

export async function getPageSlugs(locale: string) {
  const data = await client.request(pageSlugsQuery, { locale });

  return (data.pageCollection?.items ?? [])
    .map((item) => item?.slug)
    .filter((slug): slug is string => Boolean(slug));
}
