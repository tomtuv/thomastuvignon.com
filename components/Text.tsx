import { FormattedMessage } from "react-intl";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import styles from "./Text.module.css";
import React from "react";
import type { Text as TextType } from "../interfaces";

export default function Text({ block }: { block: TextType }) {
  return (
    <section data-container="" aria-labelledby={block.sys.id}>
      <div style={{ "--grid-column-lg": "2 / span 10" } as React.CSSProperties}>
        <header className={styles.header}>
          <h2 id={block.sys.id}>{block.title}</h2>
          <p>{block.subtitle}</p>
        </header>
        <div className={styles.text}>
          {documentToReactComponents(block.body.json)}
          {block.link && (
            <a
              href={block.link}
              target="_blank"
              rel="noopener noreferrer"
              data-link=""
            >
              <FormattedMessage id="projectLink" />
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
