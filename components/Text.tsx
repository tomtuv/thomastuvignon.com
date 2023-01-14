import { FormattedMessage } from "react-intl";
import RichText from "./RichText";
import Link from "./Link";
import type { Text as TextType } from "@/lib/types";
import styles from "./Text.module.css";

export default function Text({ block }: { block: TextType }) {
  return (
    <section className={styles.root} aria-labelledby={block.sys.id}>
      <header className={styles.header}>
        <h2 id={block.sys.id}>{block.title}</h2>
        <p>{block.subtitle}</p>
      </header>
      <div className={styles.text}>
        <RichText text={block.body.json} />
      </div>
      {block.link && (
        <Link
          href={block.link}
          target="_blank"
          rel="noopener noreferrer"
          variant="underline"
        >
          <FormattedMessage id="projectLink" />
        </Link>
      )}
    </section>
  );
}
