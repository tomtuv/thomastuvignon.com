import { GraphQLClient } from "graphql-request";
import { draftMode } from "next/headers";
import { connection } from "next/server";
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

async function getPreviewMode(preview?: boolean) {
  if (preview !== undefined) {
    return preview;
  }

  try {
    return (await draftMode()).isEnabled;
  } catch {
    return false;
  }
}

async function getHeaders(preview: boolean) {
  if (preview) {
    await connection();
  }

  return {
    Authorization: `Bearer ${
      process.env[
        preview ? "CONTENTFUL_PREVIEW_ACCESS_TOKEN" : "CONTENTFUL_ACCESS_TOKEN"
      ]
    }`,
  };
}

export async function getHomePage({
  locale,
  preview,
}: {
  locale: string;
  preview?: boolean;
}) {
  const isPreviewMode = await getPreviewMode(preview);

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
    preview,
  }: {
    locale: string;
    preview?: boolean;
  },
) {
  const isPreviewMode = await getPreviewMode(preview);

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

export async function getAllProjectsWithSlug({
  preview,
}: { preview?: boolean } = {}) {
  const isPreviewMode = await getPreviewMode(preview);
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
    preview,
  }: {
    locale: string;
    preview?: boolean;
  },
) {
  const isPreviewMode = await getPreviewMode(preview);

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

export async function getAllPagesWithSlug({
  preview,
}: { preview?: boolean } = {}) {
  const isPreviewMode = await getPreviewMode(preview);

  const data = await client.request(
    allPagesWithSlugQuery,
    undefined,
    await getHeaders(isPreviewMode),
  );

  return data?.pageCollection?.items ?? [];
}
