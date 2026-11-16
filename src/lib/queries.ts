import { projectCardFragment, projectFragment } from "./fragments";
import { graphql } from "./graphql";

export const homePageQuery = graphql(
  `
    query HomePage($locale: String!) {
      homePageCollection(locale: $locale, limit: 1) {
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
              ...projectCardFields
            }
          }
        }
      }
    }
  `,
  [projectCardFragment],
);

export const projectQuery = graphql(
  `
    query Project($slug: String!, $locale: String!) {
      projectCollection(where: { slug: $slug }, locale: $locale, limit: 1) {
        items {
          ...projectFields
        }
      }
    }
  `,
  [projectFragment],
);

export const pageQuery = graphql(`
  query Page($slug: String!, $locale: String!) {
    pageCollection(where: { slug: $slug }, locale: $locale, limit: 1) {
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
`);

export const projectSlugsQuery = graphql(`
  query ProjectSlugs($locale: String!) {
    projectCollection(
      where: { slug_exists: true }
      locale: $locale
      limit: 1000
    ) {
      items {
        slug
      }
    }
  }
`);

export const pageSlugsQuery = graphql(`
  query PageSlugs($locale: String!) {
    pageCollection(where: { slug_exists: true }, locale: $locale, limit: 1000) {
      items {
        slug
      }
    }
  }
`);
