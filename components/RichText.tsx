import {
  documentToReactComponents,
  Options,
} from "@contentful/rich-text-react-renderer";
import { INLINES, type Document } from "@contentful/rich-text-types";
import Link from "./Link";
import styles from "./RichText.module.css";

const RICH_TEXT_OPTIONS: Options = {
  renderNode: {
    [INLINES.HYPERLINK]: (node, children) => {
      const isExternal = node.data.uri.startsWith("http");

      return (
        <Link
          href={node.data.uri}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
          variant="underline"
        >
          {children}
        </Link>
      );
    },
  },
};

export default function RichText({ text }: { text: Document }) {
  return (
    <div className={styles.root}>
      {documentToReactComponents(text, RICH_TEXT_OPTIONS)}
    </div>
  );
}
