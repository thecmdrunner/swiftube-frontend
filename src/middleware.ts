import { authMiddleware } from "@clerk/nextjs";
import { URLs } from "./lib/constants";

export default authMiddleware({
  // * Routes excluded from mandatory authentication.
  publicRoutes: [
    // Normal Paths
    URLs.home,
    URLs.about,
    URLs.pricing,
    URLs.explore,

    "/video(.*)",

    // ! All APIs
    "/api(.*)",
  ],
});

// Stop Middleware running on static files and public folder
export const config = {
  matcher: [
    // From the old docs (Pages dir)
    /*
     * Match all request paths except for the ones starting with:
     * - _next
     * - static (static files)
     * - favicon.ico (favicon file)
     * - public folder
     * - public folder
     */
    // '/(.*?trpc.*?|(?!static|.*\\..*|_next|favicon.ico).*)',
    // '/',

    // * From the new docs: https://clerk.com/docs/nextjs/middleware
    "/((?!.*\\..*|_next).*)",
    "/(api|trpc)(.*)",
    "/",
  ],
};
