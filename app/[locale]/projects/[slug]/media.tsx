"use client";

import { motion } from "motion/react";
import { useIntl } from "react-intl";
import Image from "@/components/image";
import VisuallyHidden from "@/components/visually-hidden";
import type { Media as MediaType } from "@/lib/types";
import styles from "./media.module.css";

export default function Media({ media }: { media: MediaType }) {
  const { formatMessage } = useIntl();

  return (
    <section
      className={styles.root}
      data-variant={media.layout === "Columns" ? "columns" : undefined}
      aria-labelledby={media.sys.id}
    >
      <VisuallyHidden as="h2" id={media.sys.id}>
        {media.title}
      </VisuallyHidden>
      {media.imagesCollection?.items.map((image, index) => (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          key={image?.sys.id}
        >
          {image?.url && (
            <Image
              src={image.url}
              alt={`${formatMessage({ id: "page" })} ${index + 1}`}
              width={Number(image.width)}
              height={Number(image.height)}
              sizes="(min-width: 80rem) 800px, (min-width: 64rem) 757px, 100vw"
            />
          )}
        </motion.div>
      ))}
    </section>
  );
}
