import { graphql } from "./graphql";

export const draftEntryFragment = graphql(/* GraphQL */ `
  fragment DraftEntry on Entry {
    __typename
    ... on Project {
      slug
    }
    ... on Page {
      slug
    }
  }
`);

export const projectCardFragment = graphql(/* GraphQL */ `
  fragment ProjectCard on Project {
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
`);

export const mediaFragment = graphql(/* GraphQL */ `
  fragment Media on Media {
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
`);

export const textFragment = graphql(/* GraphQL */ `
  fragment Text on Text {
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
`);

export const projectBlockFragment = graphql(
  /* GraphQL */ `
    fragment ProjectBlock on ProjectBlocksItem {
      __typename
      ... on Media {
        ...Media
      }
      ... on Text {
        ...Text
      }
    }
  `,
  [mediaFragment, textFragment]
);
