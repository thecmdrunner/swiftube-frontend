import { useUser } from "@clerk/nextjs";
import {
  CheckCircle,
  LucideCircleOff,
  LucideFileVideo,
  LucideInfo,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import Base from "~/components/Base";
import { LoadingFlexComponent } from "~/components/Loader";
import { Button } from "~/components/shadcnui/button";
import { Textarea } from "~/components/shadcnui/textarea";
import { samplePrompts } from "~/lib/constants";
import fonts from "~/lib/fonts";
import type { VideoCreated } from "~/lib/interfaces";
import { api } from "~/utils/api";

const Test = () => {
  const { user, isLoaded: isUserLoaded, isSignedIn } = useUser();

  const {
    data: customerDetails,
    isSuccess: isCustomerDetailsSuccess,
    isLoading: isCustomerLoading,
  } =
    // #ts-expect-error - It works, but only when the email and id are loaded. Thanks Clerk!
    // { userEmail: user?.primaryEmailAddress?.emailAddress, userId: user?.id },
    api.db.getCustomerDetails.useQuery(undefined, {
      enabled: !!user?.primaryEmailAddress?.emailAddress && !!user?.id,
      /**
       * * Avoid making more than 1 request to the db for user details */
      staleTime: 10 * 60 * 100, // 10 minutes in milliseconds
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    });

  const {
    data: userCreatedVideos,
    isLoading: isFetchingVideos,
    isSuccess: isFetchingVideosSuccess,
    // isInitialLoading: isFetchingVideos,
  } = api.db.getVideosByIds.useQuery(
    { videos: customerDetails?.videosCreated as VideoCreated[] },
    {
      enabled: isCustomerDetailsSuccess,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    }
  );

  const {
    mutate: submitPrompt,
    data: videoInitData,
    isError: isVideoInitError,
    error: videoInitError,
    isSuccess: videoInitSuccess,
    isLoading: isVideoInitLoading,
  } = api.db.createVideo.useMutation();

  const router = useRouter();

  const [userPrompt, setUserPrompt] = useState("");
  const [referenceData, setReferenceData] = useState("");
  const [activeExample, setActiveExample] = useState(-1);

  if (videoInitSuccess)
    setTimeout(() => {
      if (
        typeof videoInitData?.videoId === "string" &&
        videoInitData.videoId?.length > 2
      )
        void router.push(`/video/${videoInitData.videoId}`);
    }, 2000);

  // if (isFetchingVideosSuccess)
  //   console.log("here are the vids:", userCreatedVideos.videos);

  const previouslyCreatedVideos =
    isFetchingVideosSuccess &&
    userCreatedVideos.videos.length > 0 &&
    userCreatedVideos.videos.map(
      (vid, index) =>
        vid?.uniqueId && (
          <Link
            key={index}
            className="mb-2 block"
            href={`/video/${vid.uniqueId}`}
          >
            <div className="group rounded-lg border border-l-[5px] border-gray-300 border-l-indigo-600 bg-gray-50 px-4 py-4 text-sm font-medium hover:bg-gray-100">
              <div className="flex flex-wrap items-center justify-between">
                {vid.status === "IN_PROGRESS" ||
                vid.status === "INITIALIZED" ? (
                  <div className="inline-block h-2.5 w-48 animate-pulse rounded-full bg-white group-hover:bg-gray-300" />
                ) : (
                  <div>
                    <span className="mr-2">{index + 1}. </span>

                    <span>{vid?.metadata?.title || vid?.metadata?.topic}</span>
                  </div>
                )}

                <span className="ml-auto mr-2 rounded px-2.5 py-0.5 text-xs font-normal text-gray-600">
                  {vid.createdAt}
                </span>
                <span className="ml-auto mr-2 rounded bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300">
                  {vid.status}
                </span>
              </div>
            </div>
          </Link>
        )
    );

  const appendToPrompt = "Make a video about";
  const customersTotalCredits = isCustomerDetailsSuccess
    ? customerDetails.credits + customerDetails.initialFreeCredits
    : 0;

  const MainUI = (
    <>
      {isVideoInitLoading ? (
        <LoadingFlexComponent size={30} />
      ) : (
        <div className="flex w-full max-w-2xl flex-col items-start justify-between gap-3 rounded-lg">
          {/* <h2 className="mb-2 mt-0 flex w-full scroll-m-20 flex-wrap justify-end text-2xl font-semibold">
            <span>Create a new video</span>

            <Link href={"/user#credits"}>
              <Button
                variant={"ghost"}
                type="button"
                className="rounded-3xl"
                // className="rounded border border-indigo-400 bg-indigo-100 px-2.5 py-0.5 text-xs font-medium text-indigo-800"
              >
                {isCustomerDetailsSuccess &&
                  customerDetails.credits +
                    customerDetails.initialFreeCredits}{" "}
                Credits
              </Button>
            </Link>
          </h2> */}

          <form
            className="flex w-full flex-col items-start justify-between gap-3 border-0 border-gray-300 pt-2 md:border-l md:pl-5"
            onSubmit={(e) => {
              e.preventDefault();
              submitPrompt({
                prompt: `${appendToPrompt} ${userPrompt}`,
                referenceData,
              });
            }}
          >
            <p className="pl-3 text-2xl font-bold leading-none text-indigo-600 md:text-3xl">
              {appendToPrompt}...
            </p>

            {videoInitData?.message && !!!videoInitData?.error && (
              <div className="max-w-sm rounded-md border-l-4 border-green-500 bg-green-100 p-4">
                <div className="flex items-center justify-between space-x-4">
                  <div>
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-green-600">
                      {videoInitData.message}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {(!!videoInitData?.error || isVideoInitError) && (
              <div className="max-w-sm rounded-md border-l-4 border-red-500 bg-red-100 p-4">
                <div className="flex items-center justify-between space-x-4">
                  <div>
                    <CheckCircle className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-red-600">
                      {videoInitData?.error || videoInitError?.shape?.message}
                    </p>
                  </div>
                </div>
              </div>
            )}

            <textarea
              required
              minLength={20}
              maxLength={200}
              id="userPrompt"
              rows={3}
              onChange={(e) => setUserPrompt(e.target.value)}
              value={userPrompt}
              className={`${
                fonts.rubik.className
              } mx-auto min-h-[9rem] w-full rounded-lg bg-indigo-50 px-3 py-2 text-xl font-medium caret-indigo-700 outline-none hover:bg-indigo-100 focus:bg-indigo-100 md:min-h-[7rem] ${
                userPrompt.length === 0 ? "text-indigo-300" : "text-indigo-600"
              }`}
              placeholder={"What is the video going to be about?"}
            />

            <p className="mt-5 pl-3 text-2xl font-bold leading-none text-indigo-600">
              And use this as a point of reference:
            </p>
            <Textarea
              required
              minLength={10}
              maxLength={1200}
              id="referenceData"
              rows={6}
              onChange={(e) => setReferenceData(e.target.value)}
              value={referenceData}
              className="mx-auto min-h-[9rem]"
              placeholder="(required) Please provide a paragraph or two describing the main content you would like to see in the video."
            />

            <div className="flex w-full items-center justify-between gap-3">
              {isCustomerDetailsSuccess && customersTotalCredits < 1 && (
                <div
                  className={`${fonts.inter.className} grow items-center justify-self-start rounded-md border-l-4 border-gray-500 bg-gray-100 px-4 py-2`}
                >
                  <div className="flex items-center justify-start space-x-3">
                    <div>
                      <LucideInfo className="h-6 w-6 text-gray-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-600">
                        {customersTotalCredits} credits left.{" "}
                        <div className="block h-[0.1px] select-none md:hidden" />
                        <Link href={"/about#contact"}>
                          <Button className="px-0.5 underline" variant={"link"}>
                            Contact me
                          </Button>
                        </Link>{" "}
                        to get more!
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* <Button
                variant={"outline"}
                type="button"
                // className="rounded-3xl"
              >
                Get more credits
              </Button> */}
              {/* ({isCustomerDetailsSuccess && customersTotalCredits}{" "}
              {customersTotalCredits === 1 ? "Credit" : "Credits"}) */}
              <Button
                disabled={
                  !!!customerDetails?.credits &&
                  !!!customerDetails?.initialFreeCredits
                }
                className={`px-4 ${
                  !!!customerDetails?.credits &&
                  !!!customerDetails?.initialFreeCredits
                    ? "cursor-not-allowed"
                    : "cursor-pointer"
                }`}
                type="submit"
              >
                Create
                <span className="sr-only">create a video</span>
              </Button>
            </div>

            <p className="font-semibold leading-7 [&:not(:first-child)]:mt-3">
              Examples:{" "}
            </p>
            <div
              id="examples"
              className="flex w-full items-center justify-start gap-3"
            >
              {samplePrompts.map((item, index) => (
                <button
                  type="button"
                  key={index}
                  onClick={() => {
                    setUserPrompt(item.prompt);
                    setReferenceData(item.referenceData);
                    setActiveExample(index);
                  }}
                  className={`flex rounded-lg border p-6 text-center
${
  activeExample === index
    ? "border-solid border-indigo-400 bg-indigo-100 text-indigo-800"
    : "border-dashed border-gray-300 bg-gray-50"
}`}
                >
                  {item.title}
                </button>
              ))}
            </div>
          </form>
        </div>
      )}

      <section className="w-full md:max-w-sm">
        <h2 className="mb-2 flex scroll-m-20 gap-x-3 pb-5 text-2xl font-semibold first:mt-0">
          <LucideFileVideo className="h-8 w-8" /> Previously created
        </h2>

        {/* When user created video list is not empty */}
        {isFetchingVideosSuccess && previouslyCreatedVideos}

        {/* When user created video list is empty */}
        {/* typeof userCreatedVideos?.videos[0] === "undefined" && ( */}
        {isFetchingVideosSuccess && userCreatedVideos?.videos.length === 0 && (
          <div className="w-full rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 p-2">
            {isFetchingVideos && <LoadingFlexComponent size={20} />}

            <div
              role="status"
              className="flex h-[20rem] grow flex-col items-center"
            >
              <LucideCircleOff size={40} className="mb-4 mt-28" />
              <p className="text-xl font-medium">No videos yet.</p>
            </div>
          </div>
        )}

        {isFetchingVideos && (
          <div className="w-full rounded-lg border-2 border-dashed border-gray-300 bg-gray-100 p-2">
            <LoadingFlexComponent size={20} />
          </div>
        )}

        {/* {!!!userCreatedVideos ? (
            <div className="w-full rounded-lg border-2 border-dashed border-gray-300 bg-gray-100 p-2">
              <LoadingFlexComponent size={20} />
            </div>
          ) : (
            <>{previouslyCreatedVideos}</>
          )} */}
      </section>
    </>
  );

  return (
    <Base>
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-center gap-x-4 gap-y-6 px-8 md:flex-row-reverse">
        {MainUI}
      </div>
    </Base>
  );
};

export default Test;
