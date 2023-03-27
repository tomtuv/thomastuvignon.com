import { FormattedMessage } from "react-intl";
import styles from "./Alert.module.css";
import Link from "./Link";

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
