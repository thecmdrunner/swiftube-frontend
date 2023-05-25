import { z } from "zod";
import { adminProcedure, createTRPCRouter } from "~/server/api/trpc";
import { getAllVideos } from "~/lib/firebase/firestore/utils";
import { clerkClient } from "@clerk/nextjs";

export const adminRouter = createTRPCRouter({
  hello: adminProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}, you're an admin!`,
      };
    }),
  getUser: adminProcedure
    .input(z.object({ userId: z.string() }))
    .mutation(async ({ input }) => {
      const [user] = await clerkClient.users.getUserList({
        userId: [input.userId],
      });

      return user;
    }),

  getAllVideos: adminProcedure.query(async () => {
    const allVideos = await getAllVideos();

    // Arrange them in the latest order...
    allVideos.sort(
      (a, b) => Number(new Date(b.createdAt)) - Number(new Date(a.createdAt))
    );

    return allVideos;
  }),
});
