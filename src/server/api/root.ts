import { createTRPCRouter } from "~/server/api/trpc";
import { dbRouter } from "~/server/api/routers/db";
import { adminRouter } from "./routers/admin";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  db: dbRouter,
  admin: adminRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
