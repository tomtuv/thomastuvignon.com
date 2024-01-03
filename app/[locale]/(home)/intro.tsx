"use client";

import {
  useContentfulInspectorMode,
  useContentfulLiveUpdates,
} from "@contentful/live-preview/react";
import type { Document } from "@contentful/rich-text-types";
import { useId } from "react";
import styles from "./intro.module.css";
import FormattedMessage from "@/components/formatted-message";
import RichText from "@/components/rich-text";
import VisuallyHidden from "@/components/visually-hidden";
import type { HomePage } from "@/lib/types";

export default function Intro({ homePage }: { homePage: HomePage }) {
  const id = useId();
  const updatedHomePage = useContentfulLiveUpdates(homePage);

  const inspectorProps = useContentfulInspectorMode({
    entryId: homePage.sys.id,
  });

  return (
    <section className={styles.root} aria-labelledby={id}>
      <VisuallyHidden as="h2" id={id}>
        <FormattedMessage id="introduction" />
      </VisuallyHidden>
      <RichText
        text={updatedHomePage.intro?.json as Document}
        {...inspectorProps({ fieldId: "intro" })}
      />
    </section>
  );
}
