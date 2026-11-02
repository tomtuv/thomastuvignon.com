import { GraphQLClient } from "graphql-request";
import { cacheLife, cacheTag } from "next/cache";
import { draftMode } from "next/headers";
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

async function getHeaders(preview: boolean) {
  return {
    Authorization: `Bearer ${
      process.env[
        preview ? "CONTENTFUL_PREVIEW_ACCESS_TOKEN" : "CONTENTFUL_ACCESS_TOKEN"
      ]
    }`,
  };
}

export async function getHomePage({ locale }: { locale: string }) {
  "use cache";
  cacheLife("max");
  cacheTag("contentful");

  const isPreviewMode = (await draftMode()).isEnabled;

  const data = await client.request(
    homePageQuery,
    {
      locale,
      preview: isPreviewMode,
    },
    await getHeaders(isPreviewMode),
  );

  return data?.homePageCollection?.items[0];
}

export async function getProject(
  slug: string,
  {
    locale,
  }: {
    locale: string;
  },
) {
  "use cache";
  cacheLife("max");
  cacheTag("contentful");

  const isPreviewMode = (await draftMode()).isEnabled;

  const data = await client.request(
    projectQuery,
    {
      slug,
      locale,
      preview: isPreviewMode,
    },
    await getHeaders(isPreviewMode),
  );

  return data?.projectCollection?.items[0];
}

export async function getAllProjectsWithSlug() {
  "use cache";
  cacheLife("max");
  cacheTag("contentful");

  const isPreviewMode = (await draftMode()).isEnabled;

  const data = await client.request(
    allProjectsWithSlugQuery,
    undefined,
    await getHeaders(isPreviewMode),
  );

  return data?.projectCollection?.items ?? [];
}

export async function getPage(
  slug: string,
  {
    locale,
  }: {
    locale: string;
  },
) {
  "use cache";
  cacheLife("max");
  cacheTag("contentful");

  const isPreviewMode = (await draftMode()).isEnabled;

  const data = await client.request(
    pageQuery,
    {
      slug,
      locale,
      preview: isPreviewMode,
    },
    await getHeaders(isPreviewMode),
  );

  return data?.pageCollection?.items[0];
}

export async function getAllPagesWithSlug() {
  "use cache";
  cacheLife("max");
  cacheTag("contentful");

  const isPreviewMode = (await draftMode()).isEnabled;

  const data = await client.request(
    allPagesWithSlugQuery,
    undefined,
    await getHeaders(isPreviewMode),
  );

  return data?.pageCollection?.items ?? [];
}
