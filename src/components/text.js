import React from "react";
import { renderRichText } from "gatsby-source-contentful/rich-text";

const Text = ({ block }) => (
  <div className="col-lg-10 offset-lg-1">
    <h2>{block.title}</h2>
    <p>{block.subtitle}</p>
    {renderRichText(block.body)}
    {block.link && (
      <a href={block.link} target="_blank" rel="noreferrer" className="link">
        Voir le site web
      </a>
    )}
  </div>
);

export default Text;
