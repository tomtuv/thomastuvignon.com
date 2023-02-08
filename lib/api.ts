import { GraphQLClient, gql } from "graphql-request";
import type {
  EntryCollection,
  HomePageCollection,
  PageCollection,
  ProjectCollection,
} from "./types";

function getHeaders(preview: boolean) {
  return new Headers({
    Authorization: `Bearer ${
      preview
        ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
        : process.env.CONTENTFUL_ACCESS_TOKEN
    }`,
  });
}

const client = new GraphQLClient(
  `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
  { headers: getHeaders(false) }
);

export async function getEntryForPreview(id: string) {
  const query = gql`
    query ($id: String!, $preview: Boolean!) {
      entryCollection(
        where: { sys: { id: $id } }
        limit: 1
        preview: $preview
      ) {
        items {
          __typename
          ... on Project {
            slug
          }
          ... on Page {
            slug
          }
        }
      }
    }
  `;

  const variables = { id, preview: true };

  const { entryCollection } = await client.request<{
    entryCollection: EntryCollection;
  }>(query, variables, getHeaders(true));

  return entryCollection?.items?.[0] ?? null;
}

export async function getHomePage(locale: string, preview: boolean) {
  const query = gql`
    query ($locale: String!, $preview: Boolean!) {
      homePageCollection(locale: $locale, limit: 1, preview: $preview) {
        items {
          __typename
          title
          jobTitle
          profilePicture {
            url
            width
            height
          }
          intro {
            json
          }
          projectsCollection {
            items {
              sys {
                id
              }
              title
              slug
              thumbnail {
                url
                width
                height
              }
            }
          }
        }
      }
    }
  `;

  const variables = { locale, preview };

  const { homePageCollection } = await client.request<{
    homePageCollection: HomePageCollection;
  }>(query, variables, getHeaders(preview));

  return homePageCollection?.items?.[0] ?? null;
}

export async function getProject(
  slug: string,
  locale: string,
  preview: boolean
) {
  const query = gql`
    query ($slug: String!, $locale: String!, $preview: Boolean!) {
      projectCollection(
        where: { slug: $slug }
        locale: $locale
        limit: 1
        preview: $preview
      ) {
        items {
          __typename
          title
          slug
          description
          blocksCollection {
            items {
              ... on Text {
                __typename
                sys {
                  id
                }
                title
                subtitle
                body {
                  json
                }
                link
              }
              ... on Media {
                __typename
                sys {
                  id
                }
                title
                layout
                imagesCollection {
                  items {
                    sys {
                      id
                    }
                    url
                    width
                    height
                    description
                  }
                }
              }
            }
          }
        }
      }
    }
  `;

  const variables = { slug, locale, preview };

  const { projectCollection } = await client.request<{
    projectCollection: ProjectCollection;
  }>(query, variables, getHeaders(preview));

  return projectCollection?.items?.[0] ?? null;
}

export async function getAllProjectsWithSlug() {
  const query = gql`
    query {
      projectCollection(where: { slug_exists: true }) {
        items {
          slug
        }
      }
    }
  `;

  const { projectCollection } = await client.request<{
    projectCollection: ProjectCollection;
  }>(query);

  return projectCollection?.items ?? [];
}

export async function getPage(slug: string, locale: string, preview: boolean) {
  const query = gql`
    query ($slug: String!, $locale: String!, $preview: Boolean!) {
      pageCollection(
        where: { slug: $slug }
        locale: $locale
        limit: 1
        preview: $preview
      ) {
        items {
          __typename
          title
          slug
          description
          body {
            json
          }
        }
      }
    }
  `;

  const variables = { slug, locale, preview };

  const { pageCollection } = await client.request<{
    pageCollection: PageCollection;
  }>(query, variables, getHeaders(preview));

  return pageCollection?.items?.[0] ?? null;
}

export async function getAllPagesWithSlug() {
  const query = gql`
    query {
      pageCollection(where: { slug_exists: true }) {
        items {
          slug
        }
      }
    }
  `;

  const { pageCollection } = await client.request<{
    pageCollection: PageCollection;
  }>(query);

  return pageCollection?.items ?? [];
}
