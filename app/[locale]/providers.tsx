"use client";

import { MotionConfig } from "motion/react";
import { IntlProvider } from "react-intl";
import { DEFAULT_LOCALE, MESSAGES } from "@/lib/constants";

export default function Providers({
  children,
  locale,
}: React.PropsWithChildren<{ locale: string }>) {
  return (
    <MotionConfig reducedMotion="user">
      <IntlProvider
        locale={locale}
        defaultLocale={DEFAULT_LOCALE}
        messages={MESSAGES[locale as keyof typeof MESSAGES]}
      >
        {children}
      </IntlProvider>
    </MotionConfig>
  );
}
