import { useIntl } from "react-intl";
import Image from "./Image";
import Link from "./Link";
import { HomePage, Project, Page } from "../interfaces";
import styles from "./Header.module.css";

type Props = {
  page: HomePage | Project | Page;
};

export default function Header({ page }: Props) {
  const { formatMessage } = useIntl();

  return (
    <header className={styles.root}>
      {page.__typename === "HomePage" ? (
        <>
          <Image
            src={page.profilePicture.url}
            alt=""
            width={page.profilePicture.width}
            height={page.profilePicture.height}
            sizes="(min-width: 480px) 170px, 130px"
            priority
          />
          <h1>{page.title}</h1>
          <p>{page.jobTitle}</p>
        </>
      ) : (
        <>
          <Link
            href="/"
            variant="underline-inverse"
            aria-label={formatMessage({ id: "back" })}
          >
            Thomas Tuvignon
          </Link>
          <h1>{page.title}</h1>
        </>
      )}
    </header>
  );
}
