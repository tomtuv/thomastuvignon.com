"use client";

import {
  useContentfulInspectorMode,
  useContentfulLiveUpdates,
} from "@contentful/live-preview/react";
import React, { Fragment } from "react";
import { useIntl } from "react-intl";
import Media from "./Media";
import Text from "./Text";
import type { Project } from "@/lib/types";

export default function Blocks({ project }: { project: Project }) {
  const { locale } = useIntl();
  const updatedProject = useContentfulLiveUpdates(project, { locale });

  const inspectorProps = useContentfulInspectorMode({
    entryId: project.sys.id,
  });

  return (
    <div {...inspectorProps({ fieldId: "blocksCollection" })}>
      {updatedProject.blocksCollection?.items.map((block) => (
        <Fragment key={block?.sys.id}>
          {block?.__typename === "Text" ? (
            <Text text={block} />
          ) : (
            block?.__typename === "Media" && <Media media={block} />
          )}
        </Fragment>
      ))}
    </div>
  );
}
