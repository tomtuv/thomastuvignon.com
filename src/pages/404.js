import React from "react"
import { graphql } from "gatsby"
import { useIntl, Link } from "gatsby-plugin-react-intl"
import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => {
  const intl = useIntl()

  return (
    <Layout>
      <Seo
        title={intl.formatMessage({ id: "404.title" })}
        noIndex
        bodyClass="not-found"
      />
      <main className="content">
        <div className="container">
          <h2>{intl.formatMessage({ id: "404.text" })}</h2>
          <p>
            <Link to="/" className="link link-back">
              {intl.formatMessage({ id: "404.link" })}
            </Link>
          </p>
        </div>
      </main>
    </Layout>
  )
}

export default NotFoundPage

export const query = graphql`
  query ($locale: String!) {
    contentfulHomePage(node_locale: { eq: $locale }) {
      title
    }
  }
`
