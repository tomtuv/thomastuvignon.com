import { useIntl } from "react-intl";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";

const renderOptions = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => {
      const [{ value }] = node.content;

      if (value !== "" || node.content.length > 1) {
        return <p>{children}</p>;
      }

      return null;
    },
  },
};

export default function Text({ block }) {
  const intl = useIntl();

  return (
    <section className="grid">
      <div data-column="12" data-column-lg="10" data-start-lg="2">
        <h2>{block.title}</h2>
        <p className="subtitle">{block.subtitle}</p>
        {documentToReactComponents(block.body.json, renderOptions)}
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
