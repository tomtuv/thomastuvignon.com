"use client";

import { MotionConfig } from "framer-motion";
import { usePathname } from "next/navigation";
import { IntlProvider } from "react-intl";
import { DEFAULT_LOCALE, MESSAGES } from "../lib/constants";

export default function Providers({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const locale = pathname?.split("/")[1];

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
