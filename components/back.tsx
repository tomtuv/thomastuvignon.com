import FormattedMessage from "./formatted-message";
import Link from "./link";
import styles from "./back.module.css";

export default function Back() {
  return (
    <aside className={styles.root}>
      <Link href="/" underline>
        <FormattedMessage id="back" />
      </Link>
    </aside>
  );
}
