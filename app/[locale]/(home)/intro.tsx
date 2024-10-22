"use client";

import type { Document } from "@contentful/rich-text-types";
import { useId } from "react";
import FormattedMessage from "@/components/formatted-message";
import RichText from "@/components/rich-text";
import VisuallyHidden from "@/components/visually-hidden";
import type { HomePage } from "@/lib/types";
import styles from "./intro.module.css";

export default function Intro({ homePage }: { homePage: HomePage }) {
  const id = useId();

  return (
    <section className={styles.root} aria-labelledby={id}>
      <VisuallyHidden as="h2" id={id}>
        <FormattedMessage id="introduction" />
      </VisuallyHidden>
      <RichText text={homePage?.intro?.json as Document} />
    </section>
  );
}
