const path = require("path")

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions

  createPage({
    ...page,
    context: {
      ...page.context,
      locale: page.context.intl.language,
    },
  })

  if (page.path === "/en/offline-plugin-app-shell-fallback/") {
    deletePage(page)
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const projectTemplate = path.resolve("./src/templates/project.js")

  const result = await graphql(`
    {
      allContentfulProject {
        nodes {
          slug
        }
      }
    }
  `)

  if (result.errors) {
    throw result.errors
  }

  const projects = result.data.allContentfulProject.nodes
  projects.forEach(project => {
    createPage({
      path: `/projects/${project.slug}/`,
      component: projectTemplate,
      context: {
        slug: project.slug,
      },
    })
  })
}
