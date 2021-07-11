import { useIntl } from "react-intl";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default function Text({ block }) {
  const intl = useIntl();

  return (
    <section className="grid">
      <div data-column="12" data-column-lg="10" data-start-lg="2">
        <h2>{block.title}</h2>
        <p>{block.subtitle}</p>
        {documentToReactComponents(block.body.json)}
        {block.link && (
          <a
            href={block.link}
            target="_blank"
            rel="noreferrer"
            className="link"
          >
            {intl.formatMessage({ id: "projectLink" })}
          </a>
        )}
      </div>
    </section>
  );
}
