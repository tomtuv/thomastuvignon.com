"use client";

import { Fragment } from "react";
import Media from "./media";
import Text from "./text";
import type { Project } from "@/lib/types";

export default function Blocks({ project }: { project: Project }) {
  return (
    <div>
      {project?.blocksCollection?.items.map((block) => (
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
