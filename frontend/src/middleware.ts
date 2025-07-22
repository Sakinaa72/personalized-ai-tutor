import NextAuth from "next-auth";
import authConfig from "./auth/auth.config";

const { auth } = NextAuth(authConfig);


export default auth((req) => {
  const isLoggedIn = !!req.auth;
  const { nextUrl } = req;

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