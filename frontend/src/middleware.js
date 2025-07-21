import NextAuth from "next-auth";
import authConfig from "./auth.config";

const { auth } = NextAuth(authConfig);

const publicRoutes = ["/"];

const authRoutes = ["/login"];

const apiAuthPrefix = "/api/auth";

const DEFAULT_LOGIN_REDIRECT = "/profile";

export default auth((req) => {
  const isLoggedIn = !!req.auth;
  const { nextUrl } = req;

  console.log("url : ", nextUrl);
  console.log("islogged : ", isLoggedIn);

  // const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
  // const isAuthRoute = authRoutes.includes(nextUrl.pathname);
  // const isPublicRoute = publicRoutes.includes(nextUrl.pathname);

  // if (isApiAuthRoute) {
  //   return null;
  // } else if (isAuthRoute) {
  //   if (isLoggedIn) {
  //     return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
  //   }
  //   return null;
  // } else if (!isLoggedIn && !isPublicRoute) {
  //   return Response.redirect(new URL("/login", nextUrl));
  // }
  // return null;
});

export const config = {
  // from https://clerk.com/docs/references/nextjs/clerk-middleware#usage
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
