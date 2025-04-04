import type { MESSAGES } from "./lib/constants";

type Locale = "en" | "fr";

declare global {
  namespace FormatjsIntl {
    interface IntlConfig {
      locale: Locale;
    }

    interface Message {
      ids: keyof (typeof MESSAGES)[Locale];
    }
  }
}
