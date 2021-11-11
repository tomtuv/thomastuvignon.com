const apiUrl = `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`;
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;
const previewAccessToken = process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN;

async function fetchApi(query, preview = false) {
  const data = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${preview ? previewAccessToken : accessToken}`,
    },
    body: JSON.stringify({ query }),
  });

  return data.json();
}

export async function getHomePage(locale, preview) {
  const entries = await fetchApi(
    `
      query {
        homePageCollection(
          where: { sys: { id: "3TZF0RiyxTwqbNlFOopGw3" } }
          locale: "${locale}"
          limit: 1
          preview: ${preview ? "true" : "false"}
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
    preview
  );

  return entries?.data?.homePageCollection?.items?.[0];
}

export async function getProject(slug, locale, preview) {
  const entries = await fetchApi(
    `
      query {
        projectCollection(
          where: { slug: "${slug}" }
          locale: "${locale}"
          limit: 1
          preview: ${preview ? "true" : "false"}
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
                    }
                  }
                }
              }
            }
          }
        }
      }
    `,
    preview
  );

  return entries?.data?.projectCollection?.items?.[0];
}

export async function getAllProjectsWithSlug() {
  const entries = await fetchApi(
    `
      query {
        projectCollection(where: { slug_exists: true }) {
          items {
            slug
          }
        }
      }
    `
  );

  return entries?.data?.projectCollection?.items;
}

export async function getPage(slug, locale, preview) {
  const entries = await fetchApi(
    `
      query {
        pageCollection(
          where: { slug: "${slug}" }
          locale: "${locale}"
          limit: 1
          preview: ${preview ? "true" : "false"}
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
    preview
  );

  return entries?.data?.pageCollection?.items?.[0];
}

export async function getAllPagesWithSlug() {
  const entries = await fetchApi(
    `
      query {
        pageCollection(where: { slug_exists: true }) {
          items {
            slug
          }
        }
      }
    `
  );

  return entries?.data?.pageCollection?.items;
}
