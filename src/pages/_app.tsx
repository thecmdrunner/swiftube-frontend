import { type AppType } from "next/app";
import { ClerkProvider } from "@clerk/nextjs";
import { MantineProvider } from "@mantine/core";
import { api } from "~/utils/api";
import "~/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";

// * Page protection Taken from:
// https://beta-docs.clerk.com/quickstarts/nextjs/stable

//  List pages you want to be publicly accessible, or leave empty if
//  every page requires authentication. Use this naming strategy:
//   "/"              for pages/index.js
//   "/foo"           for pages/foo/index.js
//   "/foo/bar"       for pages/foo/bar.js
//   "/foo/[...bar]"  for pages/foo/[...bar].js

// const publicPages = ["/", "/sign-in/[[...index]]", "/sign-up/[[...index]]"];

const MyApp: AppType = ({ Component, pageProps }) => {
  // Get the pathname
  // const { pathname } = useRouter();

  // Check if the current route matches a public page
  // const isPublicPage = publicPages.includes(pathname);

  // If the current route is listed as public, render it directly
  // Otherwise, use Clerk to require authentication

  // http://localhost:3000/video/e94822428c2edda0b8b6071861b71ddee08124393a496138ebc10041eeb68849

  // * Currently not using Clerk's page protection through _app.tsx,
  // * using middleware instead.

  return (
    <ClerkProvider {...pageProps}>
      {/* <HighlightInit
        projectId={env.NEXT_PUBLIC_HIGHLIGHT_PROJECT_ID}
        tracingOrigins
        networkRecording={{
          enabled: true,
          recordHeadersAndBody: true,
          urlBlocklist: [],
        }}
      /> */}

      {/* <ErrorBoundary> */}
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: "light",
        }}
      >
        <Component {...pageProps} />
      </MantineProvider>
      {/* </ErrorBoundary> */}

      <Analytics />

      {/* 
      {isPublicPage ? (
        <>
          <Component {...pageProps} />
          <ToastProvider />
        </>
      ) : (
        <>
          <SignedIn>
            <Component {...pageProps} />
            <ToastProvider />
          </SignedIn>
          <SignedOut>
            <RedirectToSignIn />
          </SignedOut>
        </>
      )} */}
    </ClerkProvider>
  );
};

export default api.withTRPC(MyApp);
