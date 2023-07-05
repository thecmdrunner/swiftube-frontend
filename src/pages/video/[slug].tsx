import { Player, type PlayerRef } from "@remotion/player";
import { type ReactNode, useEffect, useRef, useState } from "react";
import Base from "~/components/Base";
import VideoSequences from "~/components/RemotionVideo/VideoSequences";
import {
  CHANNEL_LOGOS,
  bgMusic,
  chaptersIntros,
  fps,
  greetsVideos,
} from "~/lib/constants";
import fonts from "~/lib/fonts";
import type {
  FinalVideoDataFromServer,
  PresentationMetadata,
  VideoChaptersInFrames,
  VideoStatusCode,
  VoiceGender,
} from "~/lib/interfaces";
import {
  getAllChapterDurationsInFrames,
  getAspectRatio,
  getRelativeVideoChapter,
  getTimeOfTheDay,
  getTotalVideoDurationInSeconds,
} from "~/utils";
import { preloadAudio, preloadVideo } from "@remotion/preload";
import { useRouter } from "next/router";
import { api } from "~/utils/api";
import { LoadingFlexComponent } from "~/components/Loader";
import {
  LucideCheck,
  LucideCheckCircle2,
  LucideCircleOff,
  LucideCog,
  LucideCopy,
  LucideFlag,
  LucideLink,
  LucideMail,
  LucideTwitter,
  LucideX,
} from "lucide-react";
import { Button } from "~/components/ui/button";
import { Tooltip } from "@mantine/core";
import { LucideTrash2 } from "lucide-react";
import Link from "next/link";
import { CopyButton } from "@mantine/core";

const WatchVideo = () => {
  const router = useRouter();

  const queryVideoId = router.query.slug as string;
  // "122f707cffe9248012f418c902c0078306f49f08b6548cd1957c5bdaae79eb30"; // Types of Metals

  const {
    data,
    isLoading: isLoadingVideoData,
    isSuccess: isSuccessVideoData,
  } = api.db.getVideo.useQuery(
    { videoId: queryVideoId },
    {
      enabled:
        typeof router.query.slug !== "undefined" &&
        router.query.slug.length > 16, // usually these ID's are 64 chars long.

      refetchInterval: (unsureData) =>
        unsureData?.video.status === "IN_PROGRESS" ||
        unsureData?.video.status === "INITIALIZED"
          ? 15 * 1000
          : false,

      // staleTime: Infinity,
      // cacheTime: Infinity,
      trpc: {
        ssr: true,
      },
    }
  );

  const [speakingVoiceGender, setSpeakingVoiceGender] =
    useState<VoiceGender>("male");

  const MainUI = ({ videoData }: { videoData: FinalVideoDataFromServer }) => {
    const [videoChapters, setVideoChapters] = useState<VideoChaptersInFrames>({
      intro: 0,
      videoSections: [5, 5],
      table: undefined,
      outro: 0,
    });
    const [audioDurations, setAudioDurations] = useState([1.5]);

    const [totalVideoDurationInSeconds, setTotalVideoDurationInSeconds] =
      useState(1);
    const [channelLogoURL, setChannelLogoURL] = useState(
      CHANNEL_LOGOS.monkey_astronaut
    );
    const [playerSize, setPlayerSize] = useState({
      height: 1080, // videoData.metadata.height,
      width: 1920, // videoData.metadata.width,
      name: getAspectRatio({
        height: 1080, // videoData.metadata.height,
        width: 1920, // videoData.metadata.width,
      }),
    });

    const playerRef = useRef<PlayerRef>(null);

    useEffect(() => {
      const updateAudioDurations = () => {
        // console.log("trying to get dur in s");

        const durationInSeconds = getTotalVideoDurationInSeconds(
          videoData,
          speakingVoiceGender,
          Date.now()
        );
        // console.log(durationInSeconds);
        setTotalVideoDurationInSeconds(durationInSeconds);

        const chapters = getAllChapterDurationsInFrames(
          videoData,
          speakingVoiceGender,
          Date.now()
        );

        setVideoChapters(chapters);
      };

      updateAudioDurations();
    }, [videoData]);

    useEffect(() => {
      // Preload Greeting Intro Audios & Videos
      // * Audio probably not required anymore, because using video directly...
      // greetsAudios[timeOfTheDay].urls.forEach((url) => preloadAudio(url));
      preloadVideo(greetsVideos[getTimeOfTheDay()].urls[0]);
      preloadVideo(greetsVideos[getTimeOfTheDay()].urls[1]);

      // Preload Actual Intro Audios
      // videoData.data.intro.voiceAudio.urls.forEach((url) => preloadAudio(url));
      preloadAudio(videoData.data.intro.voiceAudio.urls[0]);
      preloadAudio(videoData.data.intro.voiceAudio.urls[1]);

      // Preload Chapter Intro Audios & Videos
      // * Audio probably not required anymore, because using video directly...
      // chaptersIntros.videoURLs.forEach((url) => preloadVideo(url));
      preloadVideo(chaptersIntros.videoURLs[0]);
      preloadVideo(chaptersIntros.videoURLs[1]);

      // Preload First Video Section Audios
      // videoData.data.videoSections[0]?.voiceAudio.urls.forEach((url) =>preloadAudio(url));
      preloadAudio(videoData.data.videoSections[0]!.voiceAudio.urls[0]);
      preloadAudio(videoData.data.videoSections[0]!.voiceAudio.urls[1]);

      // Preload Intro Background Music at the very last
      preloadAudio(bgMusic.intro);
    }, [videoData.data.intro.voiceAudio.urls, videoData.data.videoSections]);

    return (
      <main className="flex h-max flex-col items-center justify-center gap-x-3 gap-y-4 xl:flex-row xl:items-start">
        {/* Player */}

        <div
          className="flex min-h-[10rem] flex-col items-center justify-center drop-shadow-xl"
          // className="w-full" // lg:min-w-[40rem] lg:max-w-7xl
        >
          <div
            className="flex h-52 min-h-[10rem] flex-col items-center justify-center drop-shadow-xl sm:h-[22rem] sm:w-max md:h-[27rem] lg:h-[28rem]"
            // className="w-full" // lg:min-w-[40rem] lg:max-w-7xl
          >
            <Player
              initiallyShowControls={2000}
              ref={playerRef}
              className=" rounded-md" // border-2 border-solid border-gray-200 shadow-md
              style={{ height: "100%" }}
              // style={{
              //   width: playerSize.width,
              //   height: playerSize.height,
              // }}

              component={VideoSequences}
              // renderPoster={renderPoster}
              // showPosterWhenUnplayed={true}
              // durationInFrames={Math.floor(totalVideoDurationInSeconds * fps)}
              durationInFrames={totalVideoDurationInSeconds * fps}
              compositionWidth={playerSize.width}
              compositionHeight={playerSize.height}
              fps={60}
              autoPlay={false}
              spaceKeyToPlayOrPause
              loop={false} // Avoids audio delay and glitches
              controls
              inputProps={{
                videoData,
                // presentationData: presentation.presentationData,
                videoMetadata: {
                  totalDurationInFrames: totalVideoDurationInSeconds * fps,
                  totalDurationInSeconds: totalVideoDurationInSeconds,
                  allAudioDurations: audioDurations,
                  speakingVoiceGender,
                  videoStyle: "normal",
                  allData: videoData,
                  channelLogoURL,
                  // 🪄 some typescript magic here
                  playerSize: playerSize as PresentationMetadata["playerSize"],
                },
              }}
            />
          </div>

          <div className="">
            <h2
              className={`${fonts.rubik.className} mt-3 scroll-m-20 pb-2 text-center text-xl font-medium tracking-tight transition-colors`}
            >
              Video settings:
            </h2>

            <div id="video-settings" className="my-2 flex items-end gap-3 p-1">
              <div className="max-w-xs">
                <label className="label">
                  <span className="label-text">Host</span>
                </label>
                <select
                  value={speakingVoiceGender}
                  onChange={(e) => {
                    e.preventDefault();
                    setSpeakingVoiceGender(e.target.value as VoiceGender);
                  }}
                  className="select-bordered select w-full max-w-[9rem] shadow-none"
                >
                  <option value="male">John</option>
                  <option value="female">Jenny</option>
                </select>
              </div>

              <div className="max-w-xs">
                <label className="label">
                  <span className="label-text">Channel Logo (URL)</span>
                </label>
                <input
                  type="text"
                  value={channelLogoURL}
                  onChange={(e) => setChannelLogoURL(e.target.value)}
                  placeholder="Any image URL"
                  className="input-bordered input w-full max-w-xs drop-shadow-none"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Chapters */}
        <div className="bordery-gray-300 flex h-max grow flex-col gap-y-0.5 overflow-hidden rounded-lg border">
          <div
            className="flex cursor-pointer items-center justify-between px-3 py-4 hover:bg-gray-100"
            onClick={() => playerRef.current?.seekTo(videoChapters.intro)}
          >
            <div className="font-medium">Introduction</div>
            <div className="w-max rounded bg-gray-800 px-1 py-0.5 font-mono text-white">
              0:00
            </div>
          </div>

          {videoChapters.videoSections.map(
            (section, index) =>
              // Dont show the last item, because it is table/chart/outro, and we want to handle it differently.
              index + 1 !== videoChapters.videoSections.length && (
                <div
                  className="flex cursor-pointer items-center justify-between px-3 py-4 hover:bg-gray-100"
                  key={index}
                  onClick={() => playerRef.current?.seekTo(section)}
                >
                  <div className="font-normal">
                    {videoData.data.videoSections[index]?.title}
                  </div>
                  <div className="w-max rounded bg-gray-800 px-1 py-0.5 font-mono text-white">
                    {getRelativeVideoChapter(
                      videoChapters.videoSections[index]! / fps
                    )}
                  </div>
                </div>
              )
          )}

          {typeof videoChapters?.table === "number" && (
            <div
              className="flex cursor-pointer items-center justify-between gap-x-5 px-3 py-4 hover:bg-gray-100"
              onClick={() => playerRef.current?.seekTo(videoChapters.table!)}
            >
              <p className="font-medium">
                📊 {videoData.metadata.table?.label}
              </p>
              <div className="w-max rounded bg-gray-800 px-1 py-0.5 font-mono text-white">
                {getRelativeVideoChapter(videoChapters.table / fps)}
              </div>
            </div>
          )}

          <div
            className="flex cursor-pointer items-center justify-between px-3 py-4 hover:bg-gray-100"
            onClick={() => playerRef.current?.seekTo(videoChapters.outro)}
          >
            <div className="font-medium">Outro</div>

            <div className="w-max rounded bg-gray-800 px-1 py-0.5 font-mono text-white">
              {getRelativeVideoChapter(videoChapters.outro / fps)}
            </div>
          </div>
        </div>
      </main>
    );
  };

  const msgs: { [key in VideoStatusCode]: { msg: string; icon: ReactNode } } = {
    DELETED: {
      icon: (
        <div className="mx-auto mb-3.5 flex h-12 w-12 items-center justify-center rounded-full bg-gray-50 p-2">
          <LucideTrash2 className="h-8 w-8 text-gray-400" />
          <span className="sr-only">DELETED</span>
        </div>
      ),
      msg: "This video was deleted.",
    },
    FAILED: {
      icon: (
        <div className="mx-auto mb-3.5 flex h-12 w-12 items-center justify-center rounded-full bg-red-50 p-2">
          <LucideX className="h-8 w-8 text-red-400" />
          <span className="sr-only">FAILED</span>
        </div>
      ),
      msg: "An error occurred while processing this video.",
    },
    FLAGGED: {
      icon: (
        <div className="mx-auto mb-3.5 flex h-12 w-12 items-center justify-center rounded-full bg-orange-50 p-2">
          <LucideFlag className="h-8 w-8 text-orange-400" />
          <span className="sr-only">FLAGGED</span>
        </div>
      ),
      msg: "This video was flagged by OpenAI.",
    },
    HALTED: {
      icon: (
        <div className="mx-auto mb-3.5 flex h-12 w-12 items-center justify-center rounded-full bg-gray-50 p-2">
          <LucideCircleOff className="h-8 w-8 text-gray-400" />
          <span className="sr-only">HALTED</span>
        </div>
      ),
      msg: "Processing for this video was halted by our systems.",
    },
    IN_PROGRESS: {
      icon: (
        <div className="mx-auto mb-3.5 flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 p-2">
          <LucideCog className="h-8 w-8 animate-spin text-blue-400" />
          <span className="sr-only">HALTED</span>
        </div>
      ),
      msg: "[2/3] Please wait while the video is being processed...",
    },
    INITIALIZED: {
      icon: (
        <div className="mx-auto mb-3.5 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-50 p-2">
          <LucideCog className="h-8 w-8 animate-spin text-indigo-400" />
          <span className="sr-only">HALTED</span>
        </div>
      ),
      msg: "[1/3] Waiting for the video to process...",
    },
    SUCCESS: {
      icon: (
        <div className="mx-auto mb-3.5 flex h-12 w-12 items-center justify-center rounded-full bg-green-50 p-2">
          <LucideCheckCircle2 className="h-8 w-8 text-green-500" />
          <span className="sr-only">HALTED</span>
        </div>
      ),
      msg: "[3/3] Video was generated successfully!",
    },
  };

  const thisVideoLink = !!data?.video.uniqueId
    ? `https://swiftube.vercel.app/video/${data?.video.uniqueId}`
    : `https://swiftube.vercel.app/`;

  const shareText = `Hey! I just discovered Swiftube, it's like ChatGPT but for Videos, powered by @Remotion! \n\nCheck it out:\n${thisVideoLink}`;
  return (
    <Base>
      <div className="mx-auto flex flex-col px-3 lg:max-w-7xl">
        {isSuccessVideoData &&
          (data.video.status === "SUCCESS" ? (
            <>
              <div className="mb-4 flex max-w-5xl flex-wrap items-center justify-between">
                <h2
                  className={`${fonts.rubik.className} mt-2 scroll-m-20 pb-4 text-left text-2xl font-medium tracking-tight transition-colors`}
                >
                  {data.video.metadata.title || data.video.metadata.topic}
                </h2>

                <div className="flex flex-nowrap items-center justify-end gap-3">
                  <CopyButton value={thisVideoLink} timeout={2000}>
                    {({ copied, copy }) => (
                      <Tooltip
                        label={copied ? "Copied!" : "Copy URL"}
                        withArrow
                        position="right"
                      >
                        <Button
                          size={"sm"}
                          onClick={copy}
                          className="hidden rounded-lg sm:block"
                          variant={copied ? "secondary" : "default"}
                        >
                          {copied ? (
                            <LucideCheck size="1rem" />
                          ) : (
                            <LucideLink size="1rem" />
                          )}
                        </Button>
                      </Tooltip>
                    )}
                  </CopyButton>

                  <Link
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                      shareText
                    )}`}
                  >
                    <Button
                      size={"sm"}
                      className="rounded-lg"
                      variant={"outline"}
                    >
                      <LucideTwitter
                        stroke={"#369FE8"}
                        fill={"#369FE8"}
                        size="1rem"
                      />
                    </Button>
                  </Link>
                  <Link href={`mailto:?subject=Swiftube&body=${shareText}`}>
                    <Button
                      size={"sm"}
                      className="rounded-lg"
                      variant={"outline"}
                    >
                      <LucideMail className="stroke-gray-600" size="1rem" />
                    </Button>
                  </Link>

                  <Link
                    // href={`whatsapp://send?text=${encodeURIComponent(
                    //   shareText
                    // )}`}
                    href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
                      shareText
                    )}`}
                  >
                    <Button
                      size={"sm"}
                      className="rounded-lg"
                      variant={"outline"}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 fill-[#49BD65]"
                        viewBox="0 0 24 24"
                      >
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                      </svg>
                    </Button>
                  </Link>
                </div>
              </div>
              <MainUI videoData={data.video} />
            </>
          ) : (
            <div className="relative mx-auto h-full w-full max-w-md p-4 md:h-auto">
              <div className="relative rounded-lg bg-white p-4 text-center sm:p-5">
                {msgs[data.video.status].icon}

                <p className="mb-4 text-lg font-semibold text-gray-900">
                  {msgs[data.video.status].msg ??
                    "No additional info provided..."}
                </p>
                {!!data.video?.error && data.video?.error.length > 3 && (
                  <p className="mb-4 text-lg font-semibold text-gray-900">
                    Error: {data.video?.error}
                  </p>
                )}
              </div>
            </div>
          ))}

        {isLoadingVideoData && <LoadingFlexComponent size={40} />}
      </div>
      <p className="mx-auto -mb-8 max-w-3xl text-center [&:not(:first-child)]:mt-6">
        <b>Disclaimer:</b> This project uses the external APIs to include images
        for demonstration purposes. Some images may be copyrighted. We do not
        claim ownership or make commercial use of copyrighted content. If you
        have concerns, please
        <Link
          className="pl-1 font-medium text-blue-600 hover:underline dark:text-blue-500"
          href={"/about#contact"}
        >
          Contact us
        </Link>
        .
      </p>
    </Base>
  );
};

export default WatchVideo;
