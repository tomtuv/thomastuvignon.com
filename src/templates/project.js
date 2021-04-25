import React from "react"
import { graphql } from "gatsby"
import { useIntl, Link } from "gatsby-plugin-react-intl"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Header from "../components/header"
import Text from "../components/text"
import Media from "../components/media"

const ProjectTemplate = ({ data }) => {
  const intl = useIntl()
  const project = data.contentfulProject
  return (
    <Layout>
      <Seo
        title={project.title}
        description={project.description.description}
      />
      <Header project={project} />
      <main className="content">
        <div className="container">
          <article>
            {project.blocks.map(block => {
              if (block.__typename === "ContentfulText") {
                return <Text block={block} key={block.contentful_id} />
              } else {
                return (
                  <Media
                    project={project}
                    block={block}
                    key={block.contentful_id}
                  />
                )
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
          contentful_id
          __typename
          title
          subtitle
          body {
            raw
          }
          link
        }
        ... on ContentfulMedia {
          contentful_id
          __typename
          layout
          images {
            id
            localFile {
              childImageSharp {
                gatsbyImageData(width: 1040, quality: 80)
              }
            }
          }
        }
      }
    }
  }
`
