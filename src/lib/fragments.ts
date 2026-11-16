import { graphql } from "./graphql";

export const projectCardFragment = graphql(`
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

export const mediaFragment = graphql(`
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

export const textFragment = graphql(`
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

export const projectFragment = graphql(
  `
    fragment projectFields on Project {
      __typename
      sys {
        id
      }
      title
      slug
      description
      thumbnail {
        url
        width
        height
      }
      blocksCollection {
        items {
          __typename
          ...mediaFields
          ...textFields
        }
      }
    }
  `,
  [mediaFragment, textFragment],
);
