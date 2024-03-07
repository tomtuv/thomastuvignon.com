import type { TadaDocumentNode } from "gql.tada";
import { GraphQLClient } from "graphql-request";
import { unstable_noStore as noStore } from "next/cache";
import { draftMode } from "next/headers";
import {
  allPagesWithSlugQuery,
  allProjectsWithSlugQuery,
  draftEntryQuery,
  homePageQuery,
  pageQuery,
  projectQuery,
} from "./queries";

const client = new GraphQLClient(
  `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`
);

async function fetchAPI<T, V>(
  query: TadaDocumentNode<T, V>,
  variables?: Omit<V, "preview">,
  options: { preview: boolean } = { preview: false }
) {
  const { preview } = options;
  let isDraftMode: boolean;

  try {
    isDraftMode = draftMode().isEnabled || preview;
  } catch {
    isDraftMode = preview;
  }

  if (isDraftMode) {
    noStore();
  }

  const data = await client.request(
    query,
    {
      ...variables,
      preview: isDraftMode,
    },
    {
      Authorization: `Bearer ${
        process.env[
          isDraftMode
            ? "CONTENTFUL_PREVIEW_ACCESS_TOKEN"
            : "CONTENTFUL_ACCESS_TOKEN"
        ]
      }`,
    }
  );

  return data;
}

export async function getDraftEntry(id: string) {
  const data = await fetchAPI(draftEntryQuery, { id }, { preview: true });

  return data?.entryCollection?.items[0];
}

export async function getHomePage({ locale }: { locale: string }) {
  const data = await fetchAPI(homePageQuery, { locale });

  return data?.homePageCollection?.items[0];
}

export async function getProject(slug: string, { locale }: { locale: string }) {
  const data = await fetchAPI(projectQuery, { slug, locale });

  return data?.projectCollection?.items[0];
}

export async function getAllProjectsWithSlug() {
  const data = await fetchAPI(allProjectsWithSlugQuery);

  return data?.projectCollection?.items ?? [];
}

export async function getPage(slug: string, { locale }: { locale: string }) {
  const data = await fetchAPI(pageQuery, { slug, locale });

  return data?.pageCollection?.items[0];
}

export async function getAllPagesWithSlug() {
  const data = await fetchAPI(allPagesWithSlugQuery);

  return data?.pageCollection?.items ?? [];
}
