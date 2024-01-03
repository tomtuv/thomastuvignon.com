"use client";

import { ContentfulLivePreviewProvider } from "@contentful/live-preview/react";
import { MotionConfig } from "framer-motion";
import { IntlProvider } from "react-intl";
import { DEFAULT_LOCALE, MESSAGES } from "@/lib/constants";
import "@contentful/live-preview/style.css";

export default function Providers({
  children,
  locale,
  draftMode,
}: React.PropsWithChildren<{ locale: string; draftMode: boolean }>) {
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
