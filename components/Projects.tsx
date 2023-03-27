import { motion } from "framer-motion";
import { useId } from "react";
import { FormattedMessage } from "react-intl";
import Image from "./Image";
import Link from "./Link";
import styles from "./Projects.module.css";
import type { Project } from "@/lib/types";

export default function Projects({
  projects,
}: {
  projects?: (Project | null)[];
}) {
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
            key={project?.sys.id}
          >
            <Link href={`/projects/${project?.slug}/`}>
              {project?.thumbnail?.url && (
                <Image
                  src={project.thumbnail.url}
                  alt={project.title ?? ""}
                  width={Number(project.thumbnail.width)}
                  height={Number(project.thumbnail.height)}
                  sizes="(min-width: 80rem) 251px, (min-width: 64rem) 366px, 50vw"
                />
              )}
            </Link>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
