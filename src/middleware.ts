import { NextResponse, type NextRequest } from "next/server";
import { locales, defaultLocale } from "@/i18n/config";

const CANONICAL_HOST = "www.nortexsys.com";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Canonicalize domain: force www, avoid duplicate-content across hosts.
  const host = request.headers.get("host") ?? "";
  if (host && host !== CANONICAL_HOST && /(^|\.)nortexsys\.com$/.test(host)) {
    const url = request.nextUrl.clone();
    url.host = CANONICAL_HOST;
    url.port = "";
    url.protocol = "https";
    return NextResponse.redirect(url, 308);
  }

  // Skip Next internals and static assets
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  // Already under a locale prefix? leave it.
  const hasLocale = locales.some(
    (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`)
  );
  if (hasLocale) return NextResponse.next();

  // Negotiate locale from Accept-Language, default to es.
  const header = request.headers.get("accept-language") ?? "";
  const accepted = header
    .split(",")
    .map((p) => p.split(";")[0].trim().toLowerCase())
    .filter(Boolean);
  const match = accepted.find((a) => locales.includes(a.slice(0, 2) as never));
  const locale = match?.slice(0, 2) === "en" ? "en" : defaultLocale;

  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url, 308);
}

export const config = {
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
