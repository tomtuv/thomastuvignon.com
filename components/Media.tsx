import { motion } from "framer-motion";
import Image from "./Image";
import type { Media as MediaType } from "@/lib/types";
import styles from "./Media.module.css";

export default function Media({ block }: { block: MediaType }) {
  return (
    <section
      className={styles.root}
      data-variant={block.layout === "Columns" ? "columns" : undefined}
      aria-label={block.title}
    >
      {block.imagesCollection.items?.map((image) => (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          key={image.sys.id}
        >
          <Image
            src={image.url}
            alt={image.description ?? ""}
            width={image.width}
            height={image.height}
            sizes="(min-width: 1280px) 800px, (min-width: 1024px) 757px, 100vw"
          />
        </motion.div>
      ))}
    </section>
  );
}
