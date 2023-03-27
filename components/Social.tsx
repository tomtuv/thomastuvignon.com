import { useIntl } from "react-intl";
import Github from "./Github";
import Link from "./Link";
import Linkedin from "./Linkedin";
import Mail from "./Mail";
import Mastodon from "./Mastodon";
import styles from "./Social.module.css";
import Twitter from "./Twitter";

export default function Social() {
  const { formatMessage } = useIntl();

  return (
    <ul className={styles.root} role="list">
      <li>
        <Link
          href="https://github.com/tomtuv"
          target="_blank"
          rel="me noopener noreferrer"
          title="GitHub"
        >
          <Github />
        </Link>
      </li>
      <li>
        <Link
          href="https://www.linkedin.com/in/thomastuvignon"
          target="_blank"
          rel="me noopener noreferrer"
          title="LinkedIn"
        >
          <Linkedin />
        </Link>
      </li>
      <li>
        <Link
          href="https://techhub.social/@tomtuv"
          target="_blank"
          rel="me noopener noreferrer"
          title="Mastodon"
        >
          <Mastodon />
        </Link>
      </li>
      <li>
        <Link
          href="https://twitter.com/tomtuv"
          target="_blank"
          rel="me noopener noreferrer"
          title="Twitter"
        >
          <Twitter />
        </Link>
      </li>
      <li>
        <Link
          href="mailto:ttuvignon@icloud.com"
          title={formatMessage({ id: "email" })}
        >
          <Mail />
        </Link>
      </li>
    </ul>
  );
}
