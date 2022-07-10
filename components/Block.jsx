import Text from "./Text";
import Media from "./Media";

export default function Block({ block }) {
  switch (block.__typename) {
    case "Text":
      return <Text block={block} />;

    case "Media":
      return <Media block={block} />;

    default:
      return null;
  }
}
