"use client";

import { ContentfulLivePreviewProvider } from "@contentful/live-preview/react";
import { MotionConfig } from "framer-motion";
import { usePathname } from "next/navigation";
import { IntlProvider } from "react-intl";
import "@contentful/live-preview/style.css";
import { DEFAULT_LOCALE, MESSAGES } from "../lib/constants";

export default function Providers({
  children,
  draftMode,
}: React.PropsWithChildren<{ draftMode: boolean }>) {
  const pathname = usePathname();
  const locale = pathname?.split("/")[1];

  return (
    <MotionConfig reducedMotion="user">
      <IntlProvider
        locale={locale}
        defaultLocale={DEFAULT_LOCALE}
        messages={MESSAGES[locale as keyof typeof MESSAGES]}
      >
        <ContentfulLivePreviewProvider
          locale={locale}
          enableInspectorMode={draftMode}
          enableLiveUpdates={draftMode}
        >
          {children}
        </ContentfulLivePreviewProvider>
      </IntlProvider>
    </MotionConfig>
  );
}
