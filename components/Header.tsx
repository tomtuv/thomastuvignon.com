import Image from "./Image";
import Link from "./Link";
import type { HomePage, Project, Page } from "@/lib/types";
import styles from "./Header.module.css";

export default function Header({ page }: { page: HomePage | Project | Page }) {
  return (
    <header className={styles.root}>
      {page.__typename === "HomePage" ? (
        <>
          {page.profilePicture?.url && (
            <Image
              src={page.profilePicture.url}
              alt=""
              width={page.profilePicture.width!}
              height={page.profilePicture.height!}
              sizes="(min-width: 30rem) 170px, 130px"
              priority
            />
          )}
          <h1>{page.title}</h1>
          <p>{page.jobTitle}</p>
        </>
      ) : (
        <>
          <Link href="/" variant="underline-inverse">
            Thomas Tuvignon
          </Link>
          <h1>{page.title}</h1>
        </>
      )}
    </header>
  );
}
