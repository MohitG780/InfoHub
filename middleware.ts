import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const isPublicRoute = createRouteMatcher([
  '/',
  '/sign-in(.*)',
  '/sign-up(.*)',
  '/search(.*)',
  '/activity(.*)',
  '/thread(.*)',
]);

export default clerkMiddleware(async (auth, req) => {
  try {
    if (!isPublicRoute(req)) {
      await auth.protect({
        unauthorized: () => {
          console.warn("⛔️ Unauthorized access attempt.");
          return new Response("Unauthorized", { status: 401 });
        },
      });
    }
  } catch (error) {
    console.error("🔥 Clerk middleware crashed:", error);
    return new Response("Internal middleware error", { status: 500 });
  }
});

export const config = {
  matcher: [
    '/((?!_next|.*\\..*).*)',
    '/(api|trpc)(.*)',
  ],
};
