import type { Document } from "@contentful/rich-text-types";
import FormattedMessage from "@/components/formatted-message";
import Link from "@/components/link";
import RichText from "@/components/rich-text";
import type { Text as TextType } from "@/lib/types";
import styles from "./text.module.css";

export default function Text({ text }: { text: TextType }) {
  return (
    <section className={styles.root} aria-labelledby={text.sys.id}>
      <header className={styles.header}>
        <h2 id={text.sys.id}>{text.title}</h2>
        <p>{text.subtitle}</p>
      </header>
      <RichText className={styles.text} text={text.body?.json as Document} />
      {text.link && (
        <Link
          href={text.link}
          target="_blank"
          rel="noopener noreferrer"
          underline
        >
          <FormattedMessage id="projectLink" />
        </Link>
      )}
    </section>
  );
}
