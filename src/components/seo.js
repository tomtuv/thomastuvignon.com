import React from "react"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"
import { useStaticQuery, graphql } from "gatsby"
import { IntlContextConsumer, useIntl } from "gatsby-plugin-intl"

const SEO = ({ title, description }) => {
  const { pathname } = useLocation()
  const intl = useIntl()
  const { site, image } = useStaticQuery(query)
  const {
    defaultTitle,
    titleTemplate,
    siteUrl,
    twitterUsername,
  } = site.siteMetadata
  const defaultDescription = intl.formatMessage({ id: "general.description" })
  const defaultImage = image.publicURL

  const seo = {
    title: title ? `${title} | ${defaultTitle}` : defaultTitle,
    description: description || defaultDescription,
    image: siteUrl + defaultImage,
    url: siteUrl + pathname,
  }

  return (
    <IntlContextConsumer>
      {({ languages, language: currentLocale }) => (
        <Helmet
          title={title}
          titleTemplate={titleTemplate}
          defaultTitle={defaultTitle}
          htmlAttributes={{
            lang: currentLocale,
            dir: "ltr",
          }}
        >
          <link rel="canonical" href={seo.url} />
          {languages.map(language => (
            <link
              rel="alternate"
              hrefLang={language}
              href={seo.url.replace(`/${currentLocale}/`, `/${language}/`)}
              key={language}
            />
          ))}
          <link
            rel="alternate"
            hrefLang="x-default"
            href={seo.url.replace(`/${currentLocale}/`, "/")}
          />
          <meta name="description" content={seo.description} />
          <meta name="image" content={seo.image} />
          <meta property="og:url" content={seo.url} />
          {languages.map(language => (
            <meta
              property={`og:locale${
                language !== currentLocale ? ":alternate" : ""
              }`}
              content={language}
              key={language}
            />
          ))}
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
      )}
    </IntlContextConsumer>
  )
}

export default SEO

const query = graphql`
  query {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        siteUrl
        twitterUsername
      }
    }
    image: file(absolutePath: { regex: "/og-image.jpg/" }) {
      publicURL
    }
  }
`
