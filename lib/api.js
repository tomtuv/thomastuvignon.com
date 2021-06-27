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

export async function getAllProjectsForHome() {
  const entries = await fetchGraphQL(
    `query {
      projectCollection {
        items {
          title
          slug
        }
      }
    }`
  );

  return extractProjectEntries(entries);
}

export async function getProject(slug) {
  const entry = await fetchGraphQL(
    `query {
      projectCollection(where: { slug: "${slug}" }) {
        items {
          title
          description
        }
      }
    }`
  );

  return extractProject(entry);
}
