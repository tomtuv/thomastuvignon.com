import styles from "./Alert.module.css";
import FormattedMessage from "./FormattedMessage";
import Link from "./Link";

export default function Alert() {
  return (
    <div className={styles.root}>
      <p>
        <FormattedMessage id="draftMode" />{" "}
        <Link href="/api/disable-draft" variant="underline">
          <FormattedMessage id="disable" />
        </Link>
      </p>
    </div>
  );
}
