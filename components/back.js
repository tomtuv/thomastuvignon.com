import Link from "next/link";
import { useIntl } from "react-intl";

export default function Back() {
  const intl = useIntl();

  return (
    <aside>
      <Link href="/">
        <a className="link link-back">{intl.formatMessage({ id: "back" })}</a>
      </Link>
    </aside>
  );
}
