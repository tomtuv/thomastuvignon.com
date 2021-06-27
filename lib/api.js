async function fetchGraphQL(query) {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
      },
      body: JSON.stringify({ query }),
    }
  ).then((response) => response.json());
}

function extractHomePage(fetchResponse) {
  return fetchResponse?.data?.homePageCollection?.items?.[0];
}

function extractProject(fetchResponse) {
  return fetchResponse?.data?.projectCollection?.items?.[0];
}

function extractProjectEntries(fetchResponse) {
  return fetchResponse?.data?.projectCollection?.items;
}

export async function getAllProjectsWithSlug() {
  const entries = await fetchGraphQL(
    `query {
      projectCollection(where: { slug_exists: true }) {
        items {
          slug
        }
      }
    }`
  );

  return extractProjectEntries(entries);
}

export async function getHomePage(locale) {
  const entries = await fetchGraphQL(
    `query {
      homePageCollection(
        where: { sys: { id: "3TZF0RiyxTwqbNlFOopGw3" } }
        locale: "${locale}"
        limit: 1
      ) {
        items {
          title
          jobTitle
          profilePicture {
            url
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
              }
            }
          }
        }
      }
    }`
  );

  return extractHomePage(entries);
}

export async function getProject(slug, locale) {
  const entry = await fetchGraphQL(
    `query {
      projectCollection(
        where: { slug: "${slug}" }
        locale: "${locale}"
        limit: 1
      ) {
        items {
          title
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
                layout
                imagesCollection {
                  items {
                    sys {
                      id
                    }
                    url
                  }
                }
              }
            }
          }
        }
      }
    }`
  );

  return extractProject(entry);
}
