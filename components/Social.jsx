import { useIntl } from "react-intl";
import Linkedin from "./Linkedin";
import Twitter from "./Twitter";
import Facebook from "./Facebook";
import Instagram from "./Instagram";
import Github from "./Github";
import Mail from "./Mail";
import styles from "./Social.module.css";

export default function Social() {
  const { formatMessage } = useIntl();

  return (
    <ul>
      <li>
        <a
          className={styles.icon}
          data-icon="linkedin"
          href="https://www.linkedin.com/in/thomastuvignon"
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn"
        >
          <Linkedin />
        </a>
      </li>
      <li>
        <a
          className={styles.icon}
          data-icon="twitter"
          href="https://twitter.com/tomtuv"
          target="_blank"
          rel="noopener noreferrer"
          title="Twitter"
        >
          <Twitter />
        </a>
      </li>
      <li>
        <a
          className={styles.icon}
          data-icon="facebook"
          href="https://www.facebook.com/thomas.tuvignon"
          target="_blank"
          rel="noopener noreferrer"
          title="Facebook"
        >
          <Facebook />
        </a>
      </li>
      <li>
        <a
          className={styles.icon}
          data-icon="instagram"
          href="https://www.instagram.com/tomtuv"
          target="_blank"
          rel="noopener noreferrer"
          title="Instagram"
        >
          <Instagram />
        </a>
      </li>
      <li>
        <a
          className={styles.icon}
          data-icon="github"
          href="https://github.com/tomtuv"
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub"
        >
          <Github />
        </a>
      </li>
      <li>
        <a
          className={styles.icon}
          data-icon="mail"
          href="mailto:ttuvignon@icloud.com"
          title={formatMessage({ id: "email" })}
        >
          <Mail />
        </a>
      </li>
    </ul>
  );
}
