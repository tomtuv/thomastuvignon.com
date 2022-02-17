const apiUrl = `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`;
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;
const previewAccessToken = process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN;

async function fetchApi(query, { variables } = {}) {
  const { preview } = variables ?? {};

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

export async function getHomePage(locale, preview) {
  const entries = await fetchApi(
    `#graphql
      query($id: String!, $locale: String!, $preview: Boolean!) {
        homePageCollection(
          where: { sys: { id: $id } }
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
    `,
    {
      variables: {
        id: "3TZF0RiyxTwqbNlFOopGw3",
        locale,
        preview,
      },
    }
  );

  return entries?.data?.homePageCollection?.items?.[0];
}

export async function getProject(slug, locale, preview) {
  const entries = await fetchApi(
    `#graphql
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
    `,
    {
      variables: {
        slug,
        locale,
        preview,
      },
    }
  );

  return entries?.data?.projectCollection?.items?.[0];
}

export async function getAllProjectsWithSlug() {
  const entries = await fetchApi(`#graphql
    query {
      projectCollection(where: { slug_exists: true }) {
        items {
          slug
        }
      }
    }
  `);

  return entries?.data?.projectCollection?.items;
}

export async function getPage(slug, locale, preview) {
  const entries = await fetchApi(
    `#graphql
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
    `,
    {
      variables: {
        slug,
        locale,
        preview,
      },
    }
  );

  return entries?.data?.pageCollection?.items?.[0];
}

export async function getAllPagesWithSlug() {
  const entries = await fetchApi(`#graphql
    query {
      pageCollection(where: { slug_exists: true }) {
        items {
          slug
        }
      }
    }
  `);

  return entries?.data?.pageCollection?.items;
}
