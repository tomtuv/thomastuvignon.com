"use client";

import {
  useContentfulInspectorMode,
  useContentfulLiveUpdates,
} from "@contentful/live-preview/react";
import { motion } from "framer-motion";
import { useIntl } from "react-intl";
import Image from "./Image";
import styles from "./Media.module.css";
import VisuallyHidden from "./VisuallyHidden";
import type { Asset, Media as MediaType } from "@/lib/types";

function MediaImage({ image, index }: { image: Asset; index: number }) {
  const { formatMessage } = useIntl();
  const updatedImage = useContentfulLiveUpdates(image);

  const inspectorProps = useContentfulInspectorMode({
    entryId: image.sys.id,
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      {updatedImage?.url && (
        <Image
          src={updatedImage.url}
          alt={`${formatMessage({ id: "page" })} ${index + 1}`}
          width={Number(updatedImage.width)}
          height={Number(updatedImage.height)}
          sizes="(min-width: 80rem) 800px, (min-width: 64rem) 757px, 100vw"
          {...inspectorProps({ fieldId: "image" })}
        />
      )}
    </motion.div>
  );
}

export default function Media({ media }: { media: MediaType }) {
  const updatedMedia = useContentfulLiveUpdates(media);

  const inspectorProps = useContentfulInspectorMode({
    entryId: media.sys.id,
  });

  return (
    <section
      className={styles.root}
      data-variant={media?.layout === "Columns" ? "columns" : undefined}
      aria-labelledby={media.sys.id}
    >
      <VisuallyHidden
        as="h2"
        id={updatedMedia.sys.id}
        {...inspectorProps({ fieldId: "title" })}
      >
        {updatedMedia?.title}
      </VisuallyHidden>
      {updatedMedia?.imagesCollection?.items?.map((image, index) =>
        image ? (
          <MediaImage image={image} index={index} key={image.sys.id} />
        ) : null
      )}
    </section>
  );
}
