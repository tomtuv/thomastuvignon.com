import Link from "next/link";
import { motion } from "framer-motion";
import Image from "./Image";
import type { Project } from "../interfaces";
import styles from "./ProjectGrid.module.css";

const MotionLink = motion(Link);

type Props = {
  projects: Project[];
};

export default function ProjectGrid({ projects }: Props) {
  return (
    <div className={styles.root}>
      {projects?.map((project) => (
        <MotionLink
          className={styles.link}
          href={`/projects/${project.slug}/`}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          key={project.sys.id}
        >
          <figure className={styles.image} data-media="">
            <Image
              src={project.thumbnail.url}
              alt={project.title}
              width={project.thumbnail.width}
              height={project.thumbnail.height}
              sizes="(min-width: 1024px) 240px, (min-width: 768px) 458px, (min-width: 560px) 340px, 50vw"
            />
          </figure>
        </MotionLink>
      ))}
    </div>
  );
}
