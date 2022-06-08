import { FormattedMessage } from "react-intl";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { RICH_TEXT_OPTIONS } from "lib/constants";

export default function Text({ block }) {
  return (
    <section className="container" aria-labelledby={block.sys.id}>
      <div style={{ "--grid-column-lg": "2 / span 10" }}>
        <header>
          <h2 id={block.sys.id}>{block.title}</h2>
          <p>{block.subtitle}</p>
        </header>
        {documentToReactComponents(block.body.json, RICH_TEXT_OPTIONS)}
        {block.link && (
          <a
            className="link"
            href={block.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FormattedMessage id="projectLink" />
          </a>
        )}
      </div>
    </section>
  );
}
