import { FormattedMessage } from "react-intl";
import { motion } from "framer-motion";
import Link from "./Link";
import Image from "./Image";
import type { Project } from "../interfaces";
import styles from "./Projects.module.css";

type Props = {
  projects: Project[];
};

export default function Projects({ projects }: Props) {
  return (
    <section className={styles.root} aria-labelledby="projects-heading">
      <h2 id="projects-heading" className={styles.heading}>
        <FormattedMessage id="work" />
      </h2>
      <ul className={styles.grid} role="list">
        {projects?.map((project) => (
          <motion.li
            className={styles.link}
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
                sizes="(min-width: 1024px) 240px, (min-width: 768px) 458px, (min-width: 560px) 340px, 50vw"
              />
            </Link>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
