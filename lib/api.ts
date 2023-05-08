import type {
  HomePageCollection,
  PageCollection,
  ProjectCollection,
} from "./types";

async function fetchApi<T = Record<string, unknown>>(
  query: string,
  variables: Record<string, unknown> = {}
) {
  const response = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${
          process.env[
            process.env.NODE_ENV === "production"
              ? "CONTENTFUL_ACCESS_TOKEN"
              : "CONTENTFUL_PREVIEW_ACCESS_TOKEN"
          ]
        }`,
      },
      body: JSON.stringify({ query, variables }),
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

export async function getHomePage(locale: string) {
  const query = /* GraphQL */ `
    query ($locale: String!) {
      homePageCollection(locale: $locale, limit: 1) {
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

  const variables = { locale };

  const data = await fetchApi<{
    homePageCollection: HomePageCollection;
  }>(query, variables);

  return data?.homePageCollection.items[0];
}

export async function getProject(slug: string, locale: string) {
  const query = /* GraphQL */ `
    query ($slug: String!, $locale: String!) {
      projectCollection(where: { slug: $slug }, locale: $locale, limit: 1) {
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

  const variables = { slug, locale };

  const data = await fetchApi<{
    projectCollection: ProjectCollection;
  }>(query, variables);

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

export async function getPage(slug: string, locale: string) {
  const query = /* GraphQL */ `
    query ($slug: String!, $locale: String!) {
      pageCollection(where: { slug: $slug }, locale: $locale, limit: 1) {
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

  const variables = { slug, locale };

  const data = await fetchApi<{ pageCollection: PageCollection }>(
    query,
    variables
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
