import { NextRequest, NextResponse } from "next/server";
import { defaultLocale, locales } from "@/locales";

// Get the preferred locale, similar to the above or using a library
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getLocale(request: NextRequest) {
  // const preferredLanguages = request.headers
  //   .get("Accept-Language")
  //   ?.split(/,|;/);
  // const detectedLang = locales.find((locale) =>
  //   preferredLanguages?.some((el) => el === locale)
  // );
  // return detectedLang ?? defaultLocale;
  return defaultLocale;
}

export function middleware(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale || pathname.startsWith("/static/") || pathname.startsWith("/api/")) return;
  if (/\.(png|jpg|jpeg|xml|txt|pdf)$/gm.test(pathname)) return;

  // // Redirect if there is no locale
  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  // // e.g. incoming request is /products
  // // The new URL is now /en-US/products
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    "/((?!_next).*)",
    // Optional: only run on root (/) URL
    // '/'
  ],
};
