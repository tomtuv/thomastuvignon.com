"use client";

import {
  useContentfulInspectorMode,
  useContentfulLiveUpdates,
} from "@contentful/live-preview/react";
import type { Document } from "@contentful/rich-text-types";
import { readFragment } from "gql.tada";
import styles from "./text.module.css";
import FormattedMessage from "@/components/formatted-message";
import Link from "@/components/link";
import RichText from "@/components/rich-text";
import { textFragment } from "@/lib/fragments";
import type { Text as TextType } from "@/lib/types";

export default function Text({ text }: { text: TextType }) {
  const data = readFragment(textFragment, text);
  const updatedText = useContentfulLiveUpdates(data);

  const inspectorProps = useContentfulInspectorMode({
    entryId: data.sys.id,
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
