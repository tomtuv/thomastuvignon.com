import { FormattedMessage } from "react-intl";
import Link from "./Link";
import styles from "./Alert.module.css";

export default function Alert() {
  return (
    <div className={styles.root}>
      <p>
        <FormattedMessage id="previewMode" />{" "}
        <Link href="/api/exit-preview" variant="underline">
          <FormattedMessage id="exit" />
        </Link>
      </p>
    </div>
  );
}
