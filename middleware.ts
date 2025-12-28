import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["en", "np"],
  defaultLocale: "en",
});

export const config = {
  matcher: [
    // Match all routes EXCEPT:
    // - next internals
    // - api routes
    // - static files (images, fonts, etc.)
    "/((?!api|_next|assets|fonts|favicon.ico|.*\\.(png|jpg|jpeg|webp|svg|ico)).*)",
  ],
};
