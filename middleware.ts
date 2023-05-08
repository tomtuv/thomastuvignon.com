import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { DEFAULT_LOCALE, LOCALES } from "./lib/constants";

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  if (/\.(.*)$/.test(pathname)) {
    return;
  }

  const pathnameIsMissingLocale = LOCALES.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  if (pathnameIsMissingLocale) {
    const acceptLanguage = request.headers.get("Accept-Language");
    const acceptLanguageLocale = acceptLanguage?.split(",")[0].split("-")[0];
    const isLocaleSupported = LOCALES.includes(
      acceptLanguageLocale as (typeof LOCALES)[number]
    );

    const locale = isLocaleSupported ? acceptLanguageLocale : DEFAULT_LOCALE;

    return NextResponse.redirect(
      new URL(`/${locale}/${pathname}`, request.url)
    );
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
