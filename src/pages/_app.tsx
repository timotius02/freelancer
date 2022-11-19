import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ClerkLoaded, ClerkProvider, SignedIn, SignedOut } from "@clerk/nextjs";
import { useRouter } from "next/router";
import { trpc } from "../utils/trpc";
import Nav from "../components/Nav";

/**
 * List pages you want to be publicly accessible, or leave empty if
 * every page requires authentication. Use this naming strategy:
 *  "/"              for pages/index.js
 *  "/foo"           for pages/foo/index.js
 *  "/foo/bar"       for pages/foo/bar.js
 *  "/foo/[...bar]"  for pages/foo/[...bar].js
 */
const publicPages = ["/"];

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <ClerkProvider {...pageProps}>
      <ClerkLoaded>
        <Nav />
        {publicPages.includes(router.pathname) ? (
          <main>
            <Component {...pageProps} />
          </main>
        ) : (
          <>
            <SignedIn>
              <Component {...pageProps} />
            </SignedIn>
            <SignedOut>
              <div className="protected">
                <p>You need to be signed in to access this page.</p>
              </div>
            </SignedOut>
          </>
        )}

        {/* footer */}
        <footer>Footer</footer>
      </ClerkLoaded>
    </ClerkProvider>
  );
}

export default trpc.withTRPC(MyApp);
