module.exports = {
  siteMetadata: {
    title: "Thomas Tuvignon",
    titleTemplate: "%s | Thomas Tuvignon",
    description:
      "Intégration web. Design graphique. Motion design. Prototypage.",
    siteUrl: "https://thomastuvignon.com",
    image: "/cv.jpg",
    twitterUsername: "@tomtuv",
  },
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-83807816-2",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-remark-images",
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
        ],
      },
    },
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "projects",
        path: "./src/projects/",
      },
      __key: "projects",
    },
    {
      resolve: `gatsby-plugin-google-fonts-with-attributes`,
      options: {
        fonts: [`poppins\:400,500,600,700`],
        display: "swap",
        attributes: {
          rel: "stylesheet preload prefetch",
        },
      },
    },
  ],
};
