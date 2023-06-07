import { getAuth, withClerkMiddleware } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { URLs } from "./lib/constants";
// import { Ratelimit } from "@upstash/ratelimit";
// import { Redis } from "@upstash/redis";

// TODO: This is now deprecated, please follow this:
// https://clerk.com/docs/nextjs/middleware

// TODO: Add rate limit to tRPC using Upstash Ratelimiter.

// const ratelimit = new Ratelimit({
//   redis: Redis.fromEnv(),
//   limiter: Ratelimit.cachedFixedWindow(30, "10s"),
//   ephemeralCache: new Map(),
//   analytics: true,
// });

// Set the paths that don't require the user to be signed in
const publicPaths = [
  "/",
  "/about*",
  "/api/uploadthing",
  "/explore*",
  "/video*",
  "/sign-in*",
  "/sign-up*",
  "/api/trpc*",
];

const isPublic = (path: string) => {
  return publicPaths.find((x) =>
    path.match(new RegExp(`^${x}$`.replace("*$", "($|/)")))
  );
};

export default withClerkMiddleware((request: NextRequest) => {
  // /video/122f707cffe9248012f418c902c0078306f49f08b6548cd1957c5bdaae79eb30

  const pathname = request.nextUrl.pathname;

  // console.log("MIDDLEWARE HIT PATHNAME:", pathname);
  if (isPublic(pathname)) return NextResponse.next();

  // if the user is not signed in redirect them to the sign in page.
  const { userId } = getAuth(request);

  if (!userId) {
    // redirect the users to /pages/sign-in/[[...index]].ts

    const signInUrl = new URL(URLs.signIn, request.url);
    signInUrl.searchParams.set("redirect_url", request.url);
    return NextResponse.redirect(signInUrl);
  }
  return NextResponse.next();
});

// Stop Middleware running on static files and public folder
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next
     * - static (static files)
     * - favicon.ico (favicon file)
     * - public folder
     */

    // Without tRPC
    // "/((?!static|.*\\..*|_next|favicon.ico).*)",

    // With tRPC
    "/(.*?trpc.*?|(?!static|.*\\..*|_next|favicon.ico).*)",

    "/",
  ],
};
