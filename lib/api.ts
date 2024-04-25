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
  `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
  {
    headers: () => {
      let isDraftMode: boolean;

      try {
        isDraftMode = draftMode().isEnabled;
      } catch {
        isDraftMode = false;
      }

      if (isDraftMode) {
        noStore();
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
    },
  }
);

export async function getDraftEntry(id: string) {
  const data = await client.request(
    draftEntryQuery,
    { id, preview: true },
    { Authorization: `Bearer ${process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN}` }
  );

  return data?.entryCollection?.items[0];
}

export async function getHomePage({ locale }: { locale: string }) {
  const data = await client.request(homePageQuery, {
    locale,
    preview: draftMode().isEnabled,
  });

  return data?.homePageCollection?.items[0];
}

export async function getProject(slug: string, { locale }: { locale: string }) {
  const data = await client.request(projectQuery, {
    slug,
    locale,
    preview: draftMode().isEnabled,
  });

  return data?.projectCollection?.items[0];
}

export async function getAllProjectsWithSlug() {
  const data = await client.request(allProjectsWithSlugQuery);

  return data?.projectCollection?.items ?? [];
}

export async function getPage(slug: string, { locale }: { locale: string }) {
  const data = await client.request(pageQuery, {
    slug,
    locale,
    preview: draftMode().isEnabled,
  });

  return data?.pageCollection?.items[0];
}

export async function getAllPagesWithSlug() {
  const data = await client.request(allPagesWithSlugQuery);

  return data?.pageCollection?.items ?? [];
}
