import React from "react"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"
import { useStaticQuery, graphql } from "gatsby"
import { useIntl } from "gatsby-plugin-intl"

const SEO = ({ title, titleTemplate, description }) => {
  const { pathname } = useLocation()
  const intl = useIntl()
  const { site, image } = useStaticQuery(query)
  const { defaultTitle, siteUrl, twitterUsername } = site.siteMetadata
  const defaultDescription = intl.formatMessage({ id: "general.description" })
  const defaultImage = image.publicURL
  const url = siteUrl + pathname
  const alternate = intl.locale === "fr" ? "en" : "fr"

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: siteUrl + defaultImage,
    url: url,
    alternateUrl: url.replace(`/${intl.locale}/`, `/${alternate}/`),
    defaultUrl: url.replace(`/${intl.locale}/`, "/"),
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
      <link rel="alternate" hreflang={intl.locale} href={seo.url} />
      <link rel="alternate" hreflang={alternate} href={seo.alternateUrl} />
      <link rel="alternate" hreflang="x-default" href={seo.defaultUrl} />
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:locale" content={intl.locale} />
      <meta property="og:locale:alternate" content={alternate} />
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
        twitterUsername
      }
    }
    image: file(absolutePath: { regex: "/og-image.jpg/" }) {
      publicURL
    }
  }
`
