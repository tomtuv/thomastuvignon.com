require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Thomas Tuvignon`,
    titleTemplate: `%s | Thomas Tuvignon`,
    description: `Intégration web. Design graphique. Motion design. Prototypage.`,
    siteUrl: `https://thomastuvignon.com`,
    image: `/og-image.jpg`,
    twitterUsername: `@tomtuv`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-83807816-2`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts-with-attributes`,
      options: {
        fonts: [`poppins\:400,500,600,700`],
        display: `swap`,
        attributes: {
          rel: `stylesheet preload prefetch`,
          as: `style`,
        },
      },
    },
  ],
};
