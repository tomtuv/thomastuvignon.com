import { useId } from "react";
import { FormattedMessage } from "react-intl";
import { motion } from "framer-motion";
import Link from "./Link";
import Image from "./Image";
import type { Project } from "../interfaces";
import styles from "./Projects.module.css";

export default function Projects({ projects }: { projects: Project[] }) {
  const id = useId();

  return (
    <section className={styles.root} aria-labelledby={id}>
      <h2 id={id} className={styles.heading}>
        <FormattedMessage id="work" />
      </h2>
      <ul className={styles.grid} role="list">
        {projects?.map((project) => (
          <motion.li
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            key={project.sys.id}
          >
            <Link href={`/projects/${project.slug}/`}>
              <Image
                src={project.thumbnail.url}
                alt={project.title}
                width={project.thumbnail.width}
                height={project.thumbnail.height}
                sizes="(min-width: 1280px) 251px, (min-width: 1024px) 366px, (min-width: 768px) 463px, (min-width: 480px) 347px, 50vw"
              />
            </Link>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
