"use client";

import {
  useContentfulInspectorMode,
  useContentfulLiveUpdates,
} from "@contentful/live-preview/react";
import { Fragment } from "react";
import Media from "./media";
import Text from "./text";
import type { Project } from "@/lib/types";

export default function Blocks({ project }: { project: Project }) {
  const updatedProject = useContentfulLiveUpdates(project);

  const inspectorProps = useContentfulInspectorMode({
    entryId: project?.sys.id,
  });

  return (
    <div {...inspectorProps({ fieldId: "blocksCollection" })}>
      {updatedProject?.blocksCollection?.items.map((block) => (
        <Fragment key={(block as unknown as { sys: { id: string } })?.sys?.id}>
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
