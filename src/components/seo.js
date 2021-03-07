import React from "react"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"
import { useStaticQuery, graphql } from "gatsby"
import { useIntl } from "gatsby-plugin-intl"

const SEO = ({ title, titleTemplate, description }) => {
  const { pathname } = useLocation()
  const intl = useIntl()
  const { site } = useStaticQuery(query)
  const { defaultTitle, siteUrl, image, twitterUsername } = site.siteMetadata
  const defaultDescription = intl.formatMessage({ id: "general.description" })

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    url: siteUrl + pathname,
    image: siteUrl + image,
  }

  return (
    <Helmet
      title={seo.title}
      titleTemplate={titleTemplate}
      htmlAttributes={{
        lang: intl.locale,
        dir: "ltr",
      }}
    >
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:locale" content={intl.locale} />
      <meta property="og:site_name" content={defaultTitle} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={twitterUsername} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
    </Helmet>
  )
}

export default SEO

const query = graphql`
  query {
    site {
      siteMetadata {
        defaultTitle: title
        siteUrl
        image
        twitterUsername
      }
    }
  }
`
