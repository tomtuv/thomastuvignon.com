"use client";

import {
  useContentfulInspectorMode,
  useContentfulLiveUpdates,
} from "@contentful/live-preview/react";
import type { Document } from "@contentful/rich-text-types";
import React from "react";
import RichText from "./RichText";
import type { Page } from "@/lib/types";

export default function PageBody({ page }: { page: Page }) {
  const updatedPage = useContentfulLiveUpdates(page);
  const inspectorProps = useContentfulInspectorMode({ entryId: page.sys.id });

  return (
    <article>
      <RichText
        text={updatedPage.body?.json as Document}
        {...inspectorProps({ fieldId: "body" })}
      />
    </article>
  );
}
