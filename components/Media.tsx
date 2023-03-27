import { motion } from "framer-motion";
import { useIntl } from "react-intl";
import Image from "./Image";
import styles from "./Media.module.css";
import VisuallyHidden from "./VisuallyHidden";
import type { Media as MediaType } from "@/lib/types";

export default function Media({ block }: { block: MediaType }) {
  const { formatMessage } = useIntl();

  return (
    <section
      className={styles.root}
      data-variant={block?.layout === "Columns" ? "columns" : undefined}
      aria-labelledby={block.sys.id}
    >
      <VisuallyHidden as="h2" id={block.sys.id}>
        {block?.title}
      </VisuallyHidden>
      {block?.imagesCollection?.items?.map((image, index) => (
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
