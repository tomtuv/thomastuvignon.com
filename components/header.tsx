import Image from "./image";
import Link from "./link";
import type { HomePage, Page, Project } from "@/lib/types";
import styles from "./header.module.css";

export default function Header({ page }: { page: HomePage | Project | Page }) {
  return (
    <header className={styles.root}>
      {page && page.__typename === "HomePage" ? (
        <>
          {page.profilePicture?.url && (
            <Image
              src={page.profilePicture.url}
              alt=""
              width={Number(page.profilePicture.width)}
              height={Number(page.profilePicture.height)}
              sizes="(min-width: 30rem) 170px, 130px"
              priority
            />
          )}
          <h1>{page.title}</h1>
          <p>{page.jobTitle}</p>
        </>
      ) : (
        <>
          <Link href="/" underline="hover">
            Thomas Tuvignon
          </Link>
          <h1>{page?.title}</h1>
        </>
      )}
    </header>
  );
}
