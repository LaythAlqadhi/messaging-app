import { NextResponse } from "next/server";

import { withAuth } from "next-auth/middleware";
import type { NextRequestWithAuth } from "next-auth/middleware";

import { withoutSuffix } from "@/lib/string";

const HOME_PAGE_URL = "/";

const redirect = (url: string, request: NextRequestWithAuth) => {
  let _url = url;

  const redirectUrl = new URL(_url, request.url).toString();

  return NextResponse.redirect(redirectUrl);
};

export default withAuth(
  async function middleware(request: NextRequestWithAuth) {
    const pathname = request.nextUrl.pathname;

    // If the user is logged in, `token` will be an object containing the user's details
    const token = request.nextauth.token;

    // Check if the user is logged in
    const isUserLoggedIn = !!token;

    // Guest routes (Routes that can be accessed by guest users who are not logged in)
    const guestRoutes = ["auth", "signin", "register", "forgot-password"];

    // Shared routes (Routes that can be accessed by both guest and logged in users)
    const sharedRoutes = ["shared-route"];

    // Private routes (All routes except guest and shared routes that can only be accessed by logged in users)
    const privateRoute = ![...guestRoutes, ...sharedRoutes].some((route) =>
      pathname.endsWith(route),
    );

    // If the user is not logged in and is trying to access a private route, redirect to the login page
    if (!isUserLoggedIn && privateRoute) {
      let redirectUrl = "/auth";

      if (pathname !== "/") {
        const searchParamsStr = new URLSearchParams({
          redirectTo: withoutSuffix(pathname, "/"),
        }).toString();

        redirectUrl += `?${searchParamsStr}`;
      }

      return redirect(redirectUrl, request);
    }

    // If the user is logged in and is trying to access a guest route, redirect to the root page
    const isRequestedRouteIsGuestRoute = guestRoutes.some((route) =>
      pathname.endsWith(route),
    );

    if (isUserLoggedIn && isRequestedRouteIsGuestRoute) {
      return redirect(HOME_PAGE_URL, request);
    }

    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: () => true,
    },
  },
);

// Matcher Config
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - all items inside the public folder
     *    - images (public images)
     *    - next.svg (Next.js logo)
     *    - vercel.svg (Vercel logo)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|.+?/hook-examples|.+?/menu-examples|images|next.svg|vercel.svg).*)",
  ],
};