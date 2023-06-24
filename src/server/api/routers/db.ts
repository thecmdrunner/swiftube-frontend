import { z } from "zod";
import {
  createTRPCRouter,
  privateProcedure,
  publicProcedure,
} from "~/server/api/trpc";
import {
  type FinalVideoDataFromServer,
  videoCreated,
  CustomImageDataFromBing,
} from "../../../lib/interfaces";
import {
  initializeNewVideo,
  getCustomerDetails,
  getVideoFromDB,
  getVideosByIds,
  getSafePublicVideos,
  getCompletedVideos,
} from "~/lib/firebase/firestore/utils";

export const dbRouter = createTRPCRouter({
  getVideosByIds: privateProcedure
    .input(
      z.object({
        // The video ids come from db.
        // videoIds: z.string().optional().array(),
        videos: videoCreated.array(),
      })
    )
    .query(async ({ input }) => {
      const showExamplesInstead = input.videos.length > 0 ? false : true;

      let videos = [] as FinalVideoDataFromServer[];

      if (input.videos.length === 0) return { videos, showExamplesInstead };

      // ! Here you may filter those which are "Halted" or "Flagged" etc.
      const ids = input.videos.map((item) => item.videoId);

      videos = await getVideosByIds(ids);

      return { videos, showExamplesInstead };
    }),

  getCustomerDetails: privateProcedure.query(async ({ ctx }) => {
    const userId = ctx.userSession.userId;

    const customer = await getCustomerDetails({
      userId,
    });
    return customer;
  }),

  getVideo: publicProcedure
    .input(z.object({ videoId: z.string() }))
    .query(async ({ input }) => {
      const videoData = await getVideoFromDB(input.videoId);
      return { video: videoData };
    }),
  getSafeVideos: privateProcedure.query(async () => {
    const safeVideos = await getSafePublicVideos();

    const videos: {
      title: string;
      topic: string;
      createdAt: string;
      uniqueId: string;
      images: CustomImageDataFromBing[];
    }[] = [];

    if (safeVideos.length > 0)
      safeVideos.forEach((video) =>
        videos.push({
          title: video.metadata.title,
          topic: video.metadata.topic,
          createdAt: video.createdAt,
          uniqueId: video.uniqueId,
          images: [
            // @ts-expect-error this works trust me!
            video.data.videoSections[0]?.images[0],
            // @ts-expect-error this works trust me!
            video.data.videoSections[1]?.images[0],
            // @ts-expect-error this works trust me!
            video.data.videoSections[2]?.images[0],
          ],
        })
      );

    if (videos.length > 1)
      videos.sort(
        (a, b) => Number(new Date(b.createdAt)) - Number(new Date(a.createdAt))
      );

    return { videos };
  }),
  getCompletedVideos: privateProcedure.query(async () => {
    const safeVideos = await getCompletedVideos();
    return { videos: safeVideos };
  }),

  createVideo: privateProcedure
    .input(
      z.object({
        prompt: z.string().max(230).min(10),
        referenceData: z.string().max(1200).min(20),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const { isSuccess, videoId, error } = await initializeNewVideo({
        ...input,
        userId: ctx.userSession.userId,
      });

      const data = {
        videoId: isSuccess ? videoId : "",
        isSuccess,
        message: isSuccess
          ? "Video created successfully, redirecting..."
          : "An error occurred...",
        error: error ?? "",
      };

      if (!isSuccess) console.log(error);
      else console.log("⛏️ New video creation response was success");

      return data;
    }),
});
