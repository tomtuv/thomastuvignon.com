import Link from "next/link";
import { FormattedMessage } from "react-intl";

export default function Back() {
  return (
    <aside>
      <Link href="/">
        <a className="link" data-link="back">
          <FormattedMessage id="back" />
        </a>
      </Link>
    </aside>
  );
}
