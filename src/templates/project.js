import React from "react"
import { graphql } from "gatsby"
import { useIntl, Link } from "gatsby-plugin-intl"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"
import Text from "../components/text"
import Media from "../components/media"

const ProjectTemplate = ({ data }) => {
  const intl = useIntl()
  const project = data.contentfulProject
  return (
    <Layout>
      <SEO
        title={project.title}
        titleTemplate="%s | Thomas Tuvignon"
        description={project.description.description}
      />
      <Header project={project} />
      <main className="content">
        <div className="container">
          <article>
            {project.blocks.map((block, i) => {
              if (block.__typename === "ContentfulText") {
                return <Text block={block} key={i} />
              } else {
                return <Media project={project} block={block} key={i} />
              }
            })}
          </article>
          <aside>
            <Link to="/" className="link link-back">
              {intl.formatMessage({ id: "general.back" })}
            </Link>
          </aside>
        </div>
      </main>
    </Layout>
  )
}

export default ProjectTemplate

export const query = graphql`
  query($slug: String!, $locale: String!) {
    contentfulProject(slug: { eq: $slug }, node_locale: { eq: $locale }) {
      title
      description {
        description
      }
      blocks {
        ... on ContentfulText {
          __typename
          title
          subtitle
          body {
            raw
          }
          link
        }
        ... on ContentfulMedia {
          __typename
          layout
          images {
            gatsbyImageData(
              height: 4000
              quality: 80
              placeholder: DOMINANT_COLOR
            )
          }
        }
      }
    }
  }
`
