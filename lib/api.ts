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
  `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`
);

async function getHeaders() {
  let isDraftMode: boolean;

  try {
    isDraftMode = (await draftMode()).isEnabled;
  } catch {
    isDraftMode = false;
  }

  if (isDraftMode) {
    await connection();
  }

  return {
    Authorization: `Bearer ${
      process.env[
        isDraftMode
          ? "CONTENTFUL_PREVIEW_ACCESS_TOKEN"
          : "CONTENTFUL_ACCESS_TOKEN"
      ]
    }`,
  };
}

export async function getHomePage({ locale }: { locale: string }) {
  const data = await client.request(
    homePageQuery,
    {
      locale,
      preview: (await draftMode()).isEnabled,
    },
    await getHeaders()
  );

  return data?.homePageCollection?.items[0];
}

export async function getProject(slug: string, { locale }: { locale: string }) {
  const data = await client.request(
    projectQuery,
    {
      slug,
      locale,
      preview: (await draftMode()).isEnabled,
    },
    await getHeaders()
  );

  return data?.projectCollection?.items[0];
}

export async function getAllProjectsWithSlug() {
  const data = await client.request(
    allProjectsWithSlugQuery,
    undefined,
    await getHeaders()
  );

  return data?.projectCollection?.items ?? [];
}

export async function getPage(slug: string, { locale }: { locale: string }) {
  const data = await client.request(
    pageQuery,
    {
      slug,
      locale,
      preview: (await draftMode()).isEnabled,
    },
    await getHeaders()
  );

  return data?.pageCollection?.items[0];
}

export async function getAllPagesWithSlug() {
  const data = await client.request(
    allPagesWithSlugQuery,
    undefined,
    await getHeaders()
  );

  return data?.pageCollection?.items ?? [];
}
