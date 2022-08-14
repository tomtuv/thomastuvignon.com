import { FormattedMessage } from "react-intl";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import styles from "./Text.module.css";
import React from "react";
import type { Text as TextType } from "../interfaces";

export default function Text({ block }: { block: TextType }) {
  return (
    <section aria-labelledby={block.sys.id}>
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
            data-variant="arrow"
          >
            <FormattedMessage id="projectLink" />
          </a>
        )}
      </div>
    </section>
  );
}
