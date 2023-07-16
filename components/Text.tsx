"use client";

import {
  useContentfulInspectorMode,
  useContentfulLiveUpdates,
} from "@contentful/live-preview/react";
import type { Document } from "@contentful/rich-text-types";
import { FormattedMessage, useIntl } from "react-intl";
import Link from "./Link";
import RichText from "./RichText";
import styles from "./Text.module.css";
import type { Text as TextType } from "@/lib/types";

export default function Text({ text }: { text: TextType }) {
  const { locale } = useIntl();
  const updatedText = useContentfulLiveUpdates(text, { locale });

  const inspectorProps = useContentfulInspectorMode({
    entryId: text.sys.id,
  });

  return (
    <section className={styles.root} aria-labelledby={updatedText.sys.id}>
      <header className={styles.header}>
        <h2 id={updatedText.sys.id} {...inspectorProps({ fieldId: "title" })}>
          {updatedText.title}
        </h2>
        <p {...inspectorProps({ fieldId: "subtitle" })}>
          {updatedText.subtitle}
        </p>
      </header>
      <RichText
        className={styles.text}
        text={updatedText.body?.json as Document}
        {...inspectorProps({ fieldId: "body" })}
      />
      {updatedText.link && (
        <Link
          href={updatedText.link}
          target="_blank"
          rel="noopener noreferrer"
          variant="underline"
          {...inspectorProps({ fieldId: "link" })}
        >
          <FormattedMessage id="projectLink" />
        </Link>
      )}
    </section>
  );
}
