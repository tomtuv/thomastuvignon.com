import { projectCardFragment, mediaFragment, textFragment } from "./fragments";
import { graphql } from "./graphql";

export const draftEntryQuery = graphql(/* GraphQL */ `
  query DraftEntry($id: String!, $preview: Boolean = false) {
    entryCollection(where: { sys: { id: $id } }, limit: 1, preview: $preview) {
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
`);

export const homePageQuery = graphql(
  /* GraphQL */ `
    query HomePage($locale: String!, $preview: Boolean = false) {
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
              ...projectCardFields
            }
          }
        }
      }
    }
  `,
  [projectCardFragment]
);

export const projectQuery = graphql(
  /* GraphQL */ `
    query Project($slug: String!, $locale: String!, $preview: Boolean = false) {
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
              __typename
              ...mediaFields
              ...textFields
            }
          }
        }
      }
    }
  `,
  [mediaFragment, textFragment]
);

export const allProjectsWithSlugQuery = graphql(/* GraphQL */ `
  query ProjectsWithSlug {
    projectCollection(where: { slug_exists: true }) {
      items {
        slug
      }
    }
  }
`);

export const pageQuery = graphql(/* GraphQL */ `
  query Page($slug: String!, $locale: String!, $preview: Boolean = false) {
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
`);

export const allPagesWithSlugQuery = graphql(/* GraphQL */ `
  query PagesWithSlug {
    pageCollection(where: { slug_exists: true }) {
      items {
        slug
      }
    }
  }
`);
