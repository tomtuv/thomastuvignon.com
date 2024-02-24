"use client";

import {
  useContentfulInspectorMode,
  useContentfulLiveUpdates,
} from "@contentful/live-preview/react";
import { readFragment } from "gql.tada";
import { Fragment } from "react";
import Media from "./media";
import Text from "./text";
import { projectBlockFragment } from "@/lib/fragments";
import type { Project } from "@/lib/types";

export default function Blocks({ project }: { project: Project }) {
  const updatedProject = useContentfulLiveUpdates(project);

  const inspectorProps = useContentfulInspectorMode({
    entryId: project?.sys.id,
  });

  return (
    <div {...inspectorProps({ fieldId: "blocksCollection" })}>
      {updatedProject?.blocksCollection?.items.map((item) => {
        const block = readFragment(projectBlockFragment, item);

        if (!block?.__typename) return null;

        return (
          <Fragment
            key={(block as unknown as { sys: { id: string } })?.sys?.id}
          >
            {block?.__typename === "Text" ? (
              <Text text={block} />
            ) : (
              block?.__typename === "Media" && <Media media={block} />
            )}
          </Fragment>
        );
      })}
    </div>
  );
}
