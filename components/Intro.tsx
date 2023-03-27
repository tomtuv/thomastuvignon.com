import type { Document } from "@contentful/rich-text-types";
import { useId } from "react";
import { FormattedMessage } from "react-intl";
import styles from "./Intro.module.css";
import RichText from "./RichText";
import VisuallyHidden from "./VisuallyHidden";

export default function Intro({ intro }: { intro: Document }) {
  const id = useId();

  return (
    <section className={styles.root} aria-labelledby={id}>
      <VisuallyHidden as="h2" id={id}>
        <FormattedMessage id="introduction" />
      </VisuallyHidden>
      <RichText text={intro} />
    </section>
  );
}
