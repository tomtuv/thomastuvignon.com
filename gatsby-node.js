const Promise = require("bluebird");
const path = require("path");

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const project = path.resolve("./src/templates/project.js");
    resolve(
      graphql(
        `
          {
            allContentfulProject {
              edges {
                node {
                  title
                  slug
                }
              }
            }
          }
        `
      ).then((result) => {
        if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
        }

        const posts = result.data.allContentfulProject.edges;
        posts.forEach((post) => {
          createPage({
            path: `/projects/${post.node.slug}/`,
            component: project,
            context: {
              slug: post.node.slug,
            },
          });
        });
      })
    );
  });
};
