import React from "react";
import { renderRichText } from "gatsby-source-contentful/rich-text";

const Text = ({ block }) => (
  <section className="grid">
    <div
      className="grid-column"
      data-column="12"
      data-column-lg="10"
      data-start-lg="2"
    >
      <h2>{block.title}</h2>
      <p>{block.subtitle}</p>
      {renderRichText(block.body)}
      {block.link && (
        <a href={block.link} target="_blank" rel="noreferrer" className="link">
          Voir le site web
        </a>
      )}
    </div>
  </section>
);

export default Text;
