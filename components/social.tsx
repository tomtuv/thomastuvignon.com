import FormattedMessage from "./formatted-message";
import Github from "./github";
import Link from "./link";
import Linkedin from "./linkedin";
import Mail from "./mail";
import Mastodon from "./mastodon";
import VisuallyHidden from "./visually-hidden";
import X from "./x";
import styles from "./social.module.css";

export default function Social() {
  return (
    <ul className={styles.root} role="list">
      <li>
        <Link
          href="https://github.com/tomtuv"
          target="_blank"
          rel="me noopener noreferrer"
        >
          <VisuallyHidden>GitHub</VisuallyHidden>
          <Github />
        </Link>
      </li>
      <li>
        <Link
          href="https://www.linkedin.com/in/thomastuvignon"
          target="_blank"
          rel="me noopener noreferrer"
        >
          <VisuallyHidden>LinkedIn</VisuallyHidden>
          <Linkedin />
        </Link>
      </li>
      <li>
        <Link
          href="https://techhub.social/@tomtuv"
          target="_blank"
          rel="me noopener noreferrer"
        >
          <VisuallyHidden>Mastodon</VisuallyHidden>
          <Mastodon />
        </Link>
      </li>
      <li>
        <Link
          href="https://x.com/tomtuv"
          target="_blank"
          rel="me noopener noreferrer"
        >
          <VisuallyHidden>X</VisuallyHidden>
          <X />
        </Link>
      </li>
      <li>
        <Link href="mailto:ttuvignon@icloud.com">
          <VisuallyHidden>
            <FormattedMessage id="email" />
          </VisuallyHidden>
          <Mail />
        </Link>
      </li>
    </ul>
  );
}
