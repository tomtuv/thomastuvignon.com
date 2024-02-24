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
      {updatedProject?.blocksCollection?.items.map((block) => {
        const data = readFragment(projectBlockFragment, block);

        return (
          <Fragment key={(data as unknown as { sys: { id: string } })?.sys?.id}>
            {data?.__typename === "Text" ? (
              <Text text={data} />
            ) : (
              data?.__typename === "Media" && <Media media={data} />
            )}
          </Fragment>
        );
      })}
    </div>
  );
}
