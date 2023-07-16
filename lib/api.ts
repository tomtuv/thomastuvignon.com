import type {
  EntryCollection,
  HomePageCollection,
  PageCollection,
  ProjectCollection,
} from "./types";

async function fetchApi<T = Record<string, unknown>>(
  query: string,
  variables: Record<string, unknown> = {},
  preview = false
) {
  const response = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${
          process.env[
            preview
              ? "CONTENTFUL_PREVIEW_ACCESS_TOKEN"
              : "CONTENTFUL_ACCESS_TOKEN"
          ]
        }`,
      },
      body: JSON.stringify({ query, variables }),
      cache: preview ? "no-cache" : "force-cache",
    }
  );

  const { data, errors } = (await response.json()) as {
    data?: T;
    errors?: Array<{ message: string }>;
  };

  if (errors) {
    const message = errors.map((error) => error.message).join("\n");

    throw new Error(message);
  }

  return data;
}

export async function getDraftEntry(id: string) {
  const query = /* GraphQL */ `
    query ($id: String!) {
      entryCollection(where: { sys: { id: $id } }, limit: 1, preview: true) {
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

  const variables = { id };

  const data = await fetchApi<{
    entryCollection: EntryCollection;
  }>(query, variables, true);

  return data?.entryCollection.items[0];
}

export async function getHomePage({
  locale,
  preview,
}: {
  locale: string;
  preview: boolean;
}) {
  const query = /* GraphQL */ `
    query ($locale: String!, $preview: Boolean!) {
      homePageCollection(locale: $locale, limit: 1, preview: $preview) {
        items {
          __typename
          sys {
            id
          }
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

  const data = await fetchApi<{
    homePageCollection: HomePageCollection;
  }>(query, variables, preview);

  return data?.homePageCollection.items[0];
}

export async function getProject(
  slug: string,
  { locale, preview }: { locale: string; preview: boolean }
) {
  const query = /* GraphQL */ `
    query ($slug: String!, $locale: String!, $preview: Boolean!) {
      projectCollection(
        where: { slug: $slug }
        locale: $locale
        limit: 1
        preview: $preview
      ) {
        items {
          __typename
          sys {
            id
          }
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

  const data = await fetchApi<{
    projectCollection: ProjectCollection;
  }>(query, variables, preview);

  return data?.projectCollection.items[0];
}

export async function getAllProjectsWithSlug() {
  const query = /* GraphQL */ `
    query {
      projectCollection(where: { slug_exists: true }) {
        items {
          slug
        }
      }
    }
  `;

  const data = await fetchApi<{
    projectCollection: ProjectCollection;
  }>(query);

  return data?.projectCollection.items ?? [];
}

export async function getPage(
  slug: string,
  { locale, preview }: { locale: string; preview: boolean }
) {
  const query = /* GraphQL */ `
    query ($slug: String!, $locale: String!, $preview: Boolean!) {
      pageCollection(
        where: { slug: $slug }
        locale: $locale
        limit: 1
        preview: $preview
      ) {
        items {
          __typename
          sys {
            id
          }
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

  const data = await fetchApi<{ pageCollection: PageCollection }>(
    query,
    variables,
    preview
  );

  return data?.pageCollection.items[0];
}

export async function getAllPagesWithSlug() {
  const query = /* GraphQL */ `
    query {
      pageCollection(where: { slug_exists: true }) {
        items {
          slug
        }
      }
    }
  `;

  const data = await fetchApi<{ pageCollection: PageCollection }>(query);

  return data?.pageCollection.items ?? [];
}
