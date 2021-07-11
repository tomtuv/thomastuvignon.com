async function fetchApi(query) {
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

export async function getHomePage(locale) {
  const entries = await fetchApi(
    `query {
      homePageCollection(
        where: { sys: { id: "3TZF0RiyxTwqbNlFOopGw3" } }
        locale: "${locale}"
        limit: 1
        preview: ${process.env.NODE_ENV === "development" ? true : false}
      ) {
        items {
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
    }`
  );

  return entries.data.homePageCollection.items[0];
}

export async function getProject(slug, locale) {
  const entries = await fetchApi(
    `query {
      projectCollection(
        where: { slug: "${slug}" }
        locale: "${locale}"
        limit: 1
        preview: ${process.env.NODE_ENV === "development" ? true : false}
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
                    width
                    height
                  }
                }
              }
            }
          }
        }
      }
    }`
  );

  return entries.data.projectCollection.items[0];
}

export async function getAllProjectsWithSlug() {
  const entries = await fetchApi(
    `query {
      projectCollection(
        where: { slug_exists: true }
        preview: ${process.env.NODE_ENV === "development" ? true : false}
      ) {
        items {
          slug
        }
      }
    }`
  );

  return entries.data.projectCollection.items;
}
