import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby-plugin-react-intl"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Header from "../components/header"

const IndexPage = ({ data }) => {
  const homePage = data.contentfulHomePage
  return (
    <Layout>
      <Seo />
      <Header homePage={homePage} />
      <main className="content">
        <div className="container">
          <div className="grid">
            {homePage.projects.map(project => (
              <Link
                data-column="6"
                data-column-lg="4"
                data-aos="fade-up"
                key={project.contentful_id}
                to={`/projects/${project.slug}/`}
              >
                <figure>
                  <GatsbyImage
                    image={
                      project.thumbnail.localFile.childImageSharp
                        .gatsbyImageData
                    }
                    alt={project.title}
                    style={{ display: "block" }}
                  />
                </figure>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query($locale: String!) {
    contentfulHomePage(node_locale: { eq: $locale }) {
      title
      jobTitle
      profilePicture {
        localFile {
          childImageSharp {
            gatsbyImageData(
              width: 170
              height: 170
              quality: 80
              transformOptions: { cropFocus: CENTER }
            )
          }
        }
      }
      video {
        localFile {
          publicURL
        }
      }
      projects {
        contentful_id
        title
        slug
        thumbnail {
          localFile {
            childImageSharp {
              gatsbyImageData(
                width: 400
                height: 300
                quality: 80
                transformOptions: { cropFocus: CENTER }
              )
            }
          }
        }
      }
    }
  }
`
