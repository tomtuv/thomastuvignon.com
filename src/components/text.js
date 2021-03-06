import React from "react"
import { useIntl } from "gatsby-plugin-intl"
import { renderRichText } from "gatsby-source-contentful/rich-text"

const Text = ({ block }) => {
  const intl = useIntl()
  return (
    <section className="grid">
      <div data-column="12" data-column-lg="10" data-start-lg="2">
        <h2>{block.title}</h2>
        <p>{block.subtitle}</p>
        {renderRichText(block.body)}
        {block.link && (
          <a
            href={block.link}
            target="_blank"
            rel="noreferrer"
            className="link"
          >
            {intl.formatMessage({ id: "project.link" })}
          </a>
        )}
      </div>
    </section>
  )
}

export default Text
