import { FormattedMessage } from "react-intl";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";

const renderOptions = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => {
      const [{ value }] = node.content;
      if (value === "" && node.content.length <= 1) return null;
      return <p>{children}</p>;
    },
  },
};

export default function Text({ block }) {
  return (
    <section className="grid" aria-labelledby={block.sys.id}>
      <div style={{ "--grid-column-lg": "2 / span 10" }}>
        <header>
          <h2 id={block.sys.id}>{block.title}</h2>
          <p>{block.subtitle}</p>
        </header>
        {documentToReactComponents(block.body.json, renderOptions)}
        {block.link && (
          <a
            href={block.link}
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            <FormattedMessage id="projectLink" />
          </a>
        )}
      </div>
    </section>
  );
}
