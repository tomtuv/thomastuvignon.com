import React from "react"
import { useIntl, Link } from "gatsby-plugin-intl"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"

const NotFoundPage = () => {
  const intl = useIntl()
  return (
    <Layout>
      <SEO title="Page introuvable" />
      <Header />
      <main className="content content-404">
        <div className="container">
          <h2>{intl.formatMessage({ id: "404.title" })}</h2>
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
