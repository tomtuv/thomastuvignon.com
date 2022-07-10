import { FormattedMessage } from "react-intl";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import styles from "./Text.module.css";

export default function Text({ block }) {
  return (
    <section data-container="" aria-labelledby={block.sys.id}>
      <div style={{ "--grid-column-lg": "2 / span 10" }}>
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
