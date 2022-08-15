const API_URL = `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`;
const ACCESS_TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN;
const PREVIEW_ACCESS_TOKEN = process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN;

async function fetchAPI(query: string, variables: Record<string, any> = {}) {
  const { preview } = variables;

  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${preview ? PREVIEW_ACCESS_TOKEN : ACCESS_TOKEN}`,
    },
    body: JSON.stringify({ query, variables }),
  });

  if (!response.ok) {
    const { errors } = await response.json();
    throw new Error(errors[0].message);
  }

  return response.json();
}

export async function getEntryForPreview(id: string) {
  const query = `#graphql
    query($id: String!, $preview: Boolean!) {
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
  const { data } = await fetchAPI(query, variables);

  return data?.entryCollection?.items?.[0];
}

export async function getHomePage(locale: string, preview: boolean) {
  const query = `#graphql
    query($locale: String!, $preview: Boolean!) {
      homePageCollection(
        locale: $locale
        limit: 1
        preview: $preview
      ) {
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
  const { data } = await fetchAPI(query, variables);

  return data?.homePageCollection?.items?.[0];
}

export async function getProject(
  slug: string,
  locale: string,
  preview: boolean
) {
  const query = `#graphql
    query($slug: String!, $locale: String!, $preview: Boolean!) {
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
  const { data } = await fetchAPI(query, variables);

  return data?.projectCollection?.items?.[0];
}

export async function getAllProjectsWithSlug() {
  const query = `#graphql
    query {
      projectCollection(where: { slug_exists: true }) {
        items {
          slug
        }
      }
    }
  `;

  const { data } = await fetchAPI(query);

  return data?.projectCollection?.items;
}

export async function getPage(slug: string, locale: string, preview: boolean) {
  const query = `#graphql
    query($slug: String!, $locale: String!, $preview: Boolean!) {
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
  const { data } = await fetchAPI(query, variables);

  return data?.pageCollection?.items?.[0];
}

export async function getAllPagesWithSlug() {
  const query = `#graphql
    query {
      pageCollection(where: { slug_exists: true }) {
        items {
          slug
        }
      }
    }
  `;

  const entries = await fetchAPI(query);

  return entries?.data?.pageCollection?.items;
}
