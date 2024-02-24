import { graphql } from "./graphql";

export const projectCardFragment = graphql(/* GraphQL */ `
  fragment projectCardFields on Project {
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
  fragment mediaFields on Media {
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
  fragment textFields on Text {
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
