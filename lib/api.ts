import { unstable_cache } from "next/cache";
import { draftMode } from "next/headers";
import { GraphQLClient } from "graphql-request";
import {
  allPagesWithSlugQuery,
  allProjectsWithSlugQuery,
  homePageQuery,
  pageQuery,
  projectQuery,
} from "./queries";

const client = new GraphQLClient(
  `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
);

function getHeaders(preview: boolean) {
  return {
    Authorization: `Bearer ${
      process.env[
        preview ? "CONTENTFUL_PREVIEW_ACCESS_TOKEN" : "CONTENTFUL_ACCESS_TOKEN"
      ]
    }`,
  };
}

async function getPreviewMode() {
  try {
    return (await draftMode()).isEnabled;
  } catch {
    return false;
  }
}

async function fetchHomePage(locale: string, preview: boolean) {
  const data = await client.request(
    homePageQuery,
    { locale, preview },
    getHeaders(preview),
  );

  return data?.homePageCollection?.items[0];
}

const getCachedHomePage = unstable_cache(
  (locale: string) => fetchHomePage(locale, false),
  ["contentful-home-page"],
  { tags: ["contentful"] },
);

export async function getHomePage({ locale }: { locale: string }) {
  if (await getPreviewMode()) {
    return fetchHomePage(locale, true);
  }

  return getCachedHomePage(locale);
}

async function fetchProject(slug: string, locale: string, preview: boolean) {
  const data = await client.request(
    projectQuery,
    { slug, locale, preview },
    getHeaders(preview),
  );

  return data?.projectCollection?.items[0];
}

const getCachedProject = unstable_cache(
  (slug: string, locale: string) => fetchProject(slug, locale, false),
  ["contentful-project"],
  { tags: ["contentful"] },
);

export async function getProject(
  slug: string,
  { locale }: { locale: string },
) {
  if (await getPreviewMode()) {
    return fetchProject(slug, locale, true);
  }

  return getCachedProject(slug, locale);
}

async function fetchAllProjectsWithSlug(preview: boolean) {
  const data = await client.request(
    allProjectsWithSlugQuery,
    undefined,
    getHeaders(preview),
  );

  return data?.projectCollection?.items ?? [];
}

const getCachedAllProjectsWithSlug = unstable_cache(
  () => fetchAllProjectsWithSlug(false),
  ["contentful-all-projects-with-slug"],
  { tags: ["contentful"] },
);

export async function getAllProjectsWithSlug() {
  if (await getPreviewMode()) {
    return fetchAllProjectsWithSlug(true);
  }

  return getCachedAllProjectsWithSlug();
}

async function fetchPage(slug: string, locale: string, preview: boolean) {
  const data = await client.request(
    pageQuery,
    { slug, locale, preview },
    getHeaders(preview),
  );

  return data?.pageCollection?.items[0];
}

const getCachedPage = unstable_cache(
  (slug: string, locale: string) => fetchPage(slug, locale, false),
  ["contentful-page"],
  { tags: ["contentful"] },
);

export async function getPage(slug: string, { locale }: { locale: string }) {
  if (await getPreviewMode()) {
    return fetchPage(slug, locale, true);
  }

  return getCachedPage(slug, locale);
}

async function fetchAllPagesWithSlug(preview: boolean) {
  const data = await client.request(
    allPagesWithSlugQuery,
    undefined,
    getHeaders(preview),
  );

  return data?.pageCollection?.items ?? [];
}

const getCachedAllPagesWithSlug = unstable_cache(
  () => fetchAllPagesWithSlug(false),
  ["contentful-all-pages-with-slug"],
  { tags: ["contentful"] },
);

export async function getAllPagesWithSlug() {
  if (await getPreviewMode()) {
    return fetchAllPagesWithSlug(true);
  }

  return getCachedAllPagesWithSlug();
}
