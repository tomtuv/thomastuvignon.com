"use client";

import {
  useContentfulInspectorMode,
  useContentfulLiveUpdates,
} from "@contentful/live-preview/react";
import type { Document } from "@contentful/rich-text-types";
import RichText from "@/components/rich-text";
import type { Page } from "@/lib/types";

export default function PageBody({ page }: { page: Page }) {
  const updatedPage = useContentfulLiveUpdates(page);
  const inspectorProps = useContentfulInspectorMode({ entryId: page?.sys.id });

  return (
    <article>
      <RichText
        text={updatedPage?.body?.json as Document}
        {...inspectorProps({ fieldId: "body" })}
      />
    </article>
  );
}
