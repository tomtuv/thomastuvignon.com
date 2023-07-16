"use client";

import {
  useContentfulInspectorMode,
  useContentfulLiveUpdates,
} from "@contentful/live-preview/react";
import type { Document } from "@contentful/rich-text-types";
import { FormattedMessage } from "react-intl";
import styles from "./Intro.module.css";
import RichText from "./RichText";
import VisuallyHidden from "./VisuallyHidden";
import type { HomePage } from "@/lib/types";

export default function Intro({ homePage }: { homePage: HomePage }) {
  const updatedHomePage = useContentfulLiveUpdates(homePage);

  const inspectorProps = useContentfulInspectorMode({
    entryId: homePage.sys.id,
  });

  return (
    <section className={styles.root} aria-labelledby={homePage.sys.id}>
      <VisuallyHidden as="h2" id={homePage.sys.id}>
        <FormattedMessage id="introduction" />
      </VisuallyHidden>
      <RichText
        text={updatedHomePage.intro?.json as Document}
        {...inspectorProps({ fieldId: "intro" })}
      />
    </section>
  );
}
