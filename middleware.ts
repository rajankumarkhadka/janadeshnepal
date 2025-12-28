import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["en", "np"],
  defaultLocale: "en",
});

export const config = {
  matcher: [
    // Match all paths except:
    // - next internals
    // - api routes
    // - static files in public
    "/((?!api|_next|assets|fonts|favicon.ico).*)",
  ],
};
