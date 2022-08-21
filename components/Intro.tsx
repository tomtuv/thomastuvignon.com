import type { Document } from "@contentful/rich-text-types";
import RichText from "./RichText";
import styles from "./Intro.module.css";

export default function Intro({ intro }: { intro: Document }) {
  return (
    <section className={styles.root} aria-label="Introduction">
      <RichText text={intro} />
    </section>
  );
}
