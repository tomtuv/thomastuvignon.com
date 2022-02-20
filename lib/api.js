const apiUrl = `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`;
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;
const previewAccessToken = process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN;

async function fetchApi(query, variables = {}) {
  const { preview } = variables;

  const response = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${preview ? previewAccessToken : accessToken}`,
    },
    body: JSON.stringify({ query, variables }),
  });

  if (!response.ok) {
    const { errors } = await response.json();
    throw new Error(errors[0].message);
  }

  return response.json();
}

export async function getEntryForPreview(id) {
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
  const entries = await fetchApi(query, variables);

  return entries?.data?.entryCollection?.items?.[0];
}

export async function getHomePage(locale, preview) {
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
          video {
            url
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
  const entries = await fetchApi(query, variables);

  return entries?.data?.homePageCollection?.items?.[0];
}

export async function getProject(slug, locale, preview) {
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
  const entries = await fetchApi(query, variables);

  return entries?.data?.projectCollection?.items?.[0];
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

  const entries = await fetchApi(query);

  return entries?.data?.projectCollection?.items;
}

export async function getPage(slug, locale, preview) {
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
  const entries = await fetchApi(query, variables);

  return entries?.data?.pageCollection?.items?.[0];
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

  const entries = await fetchApi(query);

  return entries?.data?.pageCollection?.items;
}
