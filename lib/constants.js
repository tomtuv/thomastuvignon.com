import { BLOCKS } from "@contentful/rich-text-types";

export const RICH_TEXT_OPTIONS = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => {
      const [{ value }] = node.content;
      if (value === "" && node.content.length <= 1) return null;
      return <p>{children}</p>;
    },
  },
};
