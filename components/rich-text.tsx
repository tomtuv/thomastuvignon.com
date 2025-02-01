import {
  documentToReactComponents,
  type Options,
} from "@contentful/rich-text-react-renderer";
import { INLINES, type Document } from "@contentful/rich-text-types";
import Link from "./link";
import styles from "./rich-text.module.css";

const RICH_TEXT_OPTIONS: Options = {
  renderNode: {
    [INLINES.HYPERLINK]: (node, children) => {
      const isExternal = node.data.uri.startsWith("http");

      return (
        <Link
          href={node.data.uri}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
          underline
        >
          {children}
        </Link>
      );
    },
  },
};

export default function RichText({
  className,
  text,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  text: Document;
}) {
  return (
    <div className={[styles.root, className].join(" ")} {...props}>
      {documentToReactComponents(text, RICH_TEXT_OPTIONS)}
    </div>
  );
}
