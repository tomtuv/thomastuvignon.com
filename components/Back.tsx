import Link from "next/link";
import { FormattedMessage } from "react-intl";
import styles from "./Back.module.css";

export default function Back() {
  return (
    <aside className={styles.root}>
      <Link href="/" data-link="" data-variant="back">
        <FormattedMessage id="back" />
      </Link>
    </aside>
  );
}
