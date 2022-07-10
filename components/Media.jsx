import { motion } from "framer-motion";
import Image from "./Image";

export default function Media({ block }) {
  return (
    <section className="container" aria-label={block.title}>
      {block.imagesCollection.items.map((image) => (
        <motion.div
          style={{
            "--grid-column-md": block.layout !== "Full width" ? "span 6" : null,
            "--grid-column-lg": block.layout === "3 columns" ? "span 4" : null,
          }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          key={image.sys.id}
        >
          <figure>
            <Image
              src={image.url}
              alt={image.description || ""}
              width={image.width}
              height={image.height}
              layout="responsive"
              sizes="(min-width: 75em) 1040px, (min-width: 64em) 880px, (min-width: 48em) 640px, (min-width: 35em) 480px, 100vw"
            />
          </figure>
        </motion.div>
      ))}
    </section>
  );
}
