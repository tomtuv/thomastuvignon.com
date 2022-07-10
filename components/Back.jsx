import Link from "next/link";
import { FormattedMessage } from "react-intl";

export default function Back() {
  return (
    <aside>
      <Link className="link" href="/" data-variant="back">
        <FormattedMessage id="back" />
      </Link>
    </aside>
  );
}
