"use client";

import { FormattedMessage as IntlFormattedMessage } from "react-intl";

export default function FormattedMessage(
  props: React.ComponentProps<typeof IntlFormattedMessage>
) {
  return <IntlFormattedMessage {...props} />;
}
