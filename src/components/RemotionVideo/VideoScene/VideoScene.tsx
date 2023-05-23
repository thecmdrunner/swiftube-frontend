import {
  AbsoluteFill,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
  spring,
  Img,
} from "remotion";
// import WordCloud from "react-wordcloud";
import type {
  PresentationMetadata,
  VideoSectionToPass,
} from "~/lib/interfaces";

// import { Flex } from "@mantine/core";
import fonts from "~/lib/fonts";
import { Ellipse } from "@remotion/shapes";
import { useEffect } from "react";
import { preloadAudio } from "@remotion/preload";
import MadeByAI from "~/components/MadeByAI";
import { bgMusic } from "~/lib/constants";

const words = [
  { text: "apple", value: 10 },
  { text: "banana", value: 7 },
  { text: "orange", value: 5 },
  { text: "grape", value: 3 },
  { text: "pineapple", value: 1 },
];

const VideoScene = (props: {
  videoSection: VideoSectionToPass;
  metadata: PresentationMetadata;
}) => {
  const { videoSection, metadata } = props;

  const frame = useCurrentFrame();
  const { durationInFrames, fps } = useVideoConfig();

  const translateTitle = spring({
    frame,
    fps,
    from: -12,
    to: 4,
    config: {
      stiffness: 1000,
      overshootClamping: true,
    },
  }).toFixed(6);

  // Make array of characters from some provided text.
  // const arrayOfText = Array.from(PresentationPoint.talkingPoint);
  const arrayOfText = Array.from(
    // metadata.allData.data.videoSections[videoTalkingPoint.index]?.talkingPoint as string
    videoSection.talkingPoint
  );

  // Set speed of typewriter - For Example: 2x, 0.5x, etc.
  const typewriterSpeed = 2;
  // Determine length of sentence relative to frame.
  const newTextLength = interpolate(
    frame * typewriterSpeed,
    [0, durationInFrames / 1.5],
    [0, arrayOfText.length]
    // { extrapolateRight: "clamp" }
  );

  // Returns array with manipulated length, which then gets converted to string.
  // So basically, gives a string of the desired length.
  const interpolateText = (length: number) => {
    const interpolatedArrayOfText = arrayOfText;
    interpolatedArrayOfText.length = Math.floor(length);

    let text = "";
    interpolatedArrayOfText.forEach((char) => (text += char));

    return text;
  };

  // Get the sentence with updated length for each frame.
  const newSentence = interpolateText(newTextLength);

  const imageToShow = videoSection?.images
    ? Math.floor((frame / durationInFrames) * videoSection?.images?.length ?? 1)
    : 0;

  useEffect(() => {
    const isLastMainSection =
      videoSection.index + 1 === metadata.allData.data.videoSections.length;

    const nextSectionIndex = videoSection.index + 1;

    const isTableNext =
      isLastMainSection && metadata.allData.data.table.isPresent;
    if (!isLastMainSection) {
      // Preload the next normal video section's audios
      preloadAudio(
        metadata.allData.data.videoSections[nextSectionIndex]!.voiceAudio
          .urls[0]
      );
      preloadAudio(
        metadata.allData.data.videoSections[nextSectionIndex]!.voiceAudio
          .urls[1]
      );
    } else if (isTableNext) {
      // Preload Table audio
      preloadAudio(metadata.allData.data.table.voiceAudio.urls[0]);
      preloadAudio(metadata.allData.data.table.voiceAudio.urls[1]);
    } else {
      // Preload Outro audio
      preloadAudio(metadata.allData.data.outro.voiceAudio.urls[0]);
      preloadAudio(metadata.allData.data.outro.voiceAudio.urls[1]);
      // Preload Outro Background Music at very last
      preloadAudio(bgMusic.outro);
    }
  }, [
    metadata.allData.data.outro.voiceAudio.urls,
    metadata.allData.data.table.isPresent,
    metadata.allData.data.table.voiceAudio.urls,
    metadata.allData.data.videoSections,
    videoSection.index,
  ]);

  const translateBannerX = spring({
    fps,
    frame,
    from: 0,
    to: 100,
    delay: fps * 1.5,
    config: {
      stiffness: 40,
    },
    durationInFrames: 50,
  });
  return (
    <>
      <AbsoluteFill
        style={{
          transform: `translateX(-${translateBannerX}%)`,
        }}
        className="z-20"
      >
        <div
          style={
            {
              // background: `linear-gradient(37deg, #2563eb 0%, #1A3EBA 100%)`,
              // left: interpolate(
              //   springy,
              //   [0, 1920],
              //   [1920, 0]
              // [0, 3 * fps, 3 * fps + fps / 2],
              // [1440, 1440, 0]
              // ),
            }
          }
          className="absolute flex h-full w-full flex-col items-center bg-gradient-to-tr from-blue-950 to-indigo-950 text-center shadow-2xl"
        >
          <p
            className={`${fonts.bebasNeue.className} mt-48 text-7xl font-bold uppercase text-white`}
          >
            Chapter {videoSection.index + 1}:
          </p>
          <p
            className={`${fonts.bebasNeue.className} text-bold mt-16 text-7xl text-white`}
          >
            {videoSection.title}
          </p>
        </div>
      </AbsoluteFill>

      <AbsoluteFill className="bg-white">
        <AbsoluteFill
          // className="h-[100vh] w-full"
          style={{
            background: `linear-gradient(90deg, rgba(218,165,255,0.3) 0%, rgba(152,154,255,0.3) 50%, rgba(105,234,255,0.3) 100%)`,

            // background: `linear-gradient(90deg, rgba(209,143,255,1) 0%, rgba(118,121,255,1) 50%, rgba(69,226,252,1) 100%)`,
          }}
        >
          {/* ${metadata.playerSize.name === "9:16" ? "py-12 text-center" : ""} */}

          {/* // * Title */}
          <div
            className={`flex h-[10%] w-full items-center justify-start px-8 text-7xl text-white`}
            style={{
              background: `linear-gradient(37deg, #2563eb 0%, #1A3EBA 100%)`,
            }}

            // bg-gradient-to-tr from-blue-600 to-cyan-500
          >
            {/* <div className="flex w-full items-center justify-center font-semibold text-white"> */}
            {/* <Code className="mr-4 px-4 text-7xl">
              {PresentationPoint.index + 1}
            </Code> */}
            <b
              style={{ opacity: interpolate(frame, [0, fps / 4], [0, 1]) }}
              className={`${fonts.k2d.className} px-2 text-[3.2rem] font-semibold selection:bg-blue-100 selection:text-blue-800`}
            >
              {videoSection.title}
            </b>
            {/* </div> */}
          </div>
          <div className="bg-white-200 flex h-[90%] w-full flex-col justify-start pb-4 text-7xl text-white">
            {/* // * Progress bar */}
            {/* For now, Keep progress bar without custom color */}
            <div
              style={{
                width: `${((frame / durationInFrames) * 100).toFixed(2)}%`,
                marginTop: "2px",
                // background: "white",
                background: `linear-gradient(37deg, ${
                  metadata.allData.metadata.color?.gradientStartColor ||
                  "#2563eb"
                } 0%, ${
                  metadata.allData.metadata.color?.gradientEndColor || "#06b6d4"
                } 100%)`,
              }}
              className={`block ${
                metadata.playerSize.name === "9:16" ? "h-6" : "h-4"
              }
          bg-gradient-to-r

          ${
            metadata.allData.metadata.color?.gradientStartColor
              ? `from-[${metadata.allData.metadata.color?.gradientStartColor}]`
              : "from-indigo-500"
          }
          ${
            metadata.allData.metadata.color?.gradientEndColor
              ? `from-[${metadata.allData.metadata.color?.gradientEndColor}]`
              : "to-pink-500"
          }
          `}
              // bg-gradient-to-r from-indigo-500 to-pink-500
            />

            {/* Main Content of the video */}
            {/* backdrop-blur-3xl */}
            <div className="z-10 mx-6 mt-6 flex h-[90%] justify-between gap-x-5 rounded-[2rem] border border-solid border-indigo-600 bg-white bg-opacity-60 px-16 pl-10">
              <p
                className={`${fonts.rubik.className} mt-6 max-w-[58rem] text-[2.4rem] font-medium leading-relaxed text-gray-900`}
              >
                {/* {kw.map((word, index) => {
              return (
                <span
                  style={{
                    opacity: `${100 - (index + 1)}%`,
                    fontSize: `${100 - (index + 1) * 20}px`,
                  }}
                  className="m-1 rounded-md bg-blue-600 px-2 py-2"
                  key={index}
                >
                  {word}
                </span>
              );
            })} */}

                {/* {getKeywords(
              `${PresentationPoint.shortDescription} ${PresentationPoint.talkingPoint}`
            )} */}

                {newSentence}
              </p>

              <div
                style={{
                  opacity: interpolate(
                    frame,
                    [0, fps / 4, durationInFrames - fps / 4, durationInFrames],
                    [0, 1, 1, 0],
                    {
                      extrapolateRight: "clamp",
                    }
                  ),
                }}
                className="mt-20 h-[45rem] max-w-[45rem] overflow-hidden rounded-3xl"
              >
                <Img
                  className="rounded-3xl object-cover object-center"
                  // @ts-expect-error Trust me it works...
                  src={videoSection?.images[imageToShow]?.contentUrl ?? ""}
                />
              </div>
            </div>

            <p className="mt-2 px-8 text-right text-3xl text-gray-800">
              <span className="font-semibold">Image source: </span>

              <span className="italic">
                {/* @ts-expect-error Trust me it works... */}
                {videoSection?.images[imageToShow]?.hostPageDisplayUrl ??
                  "(Not found)"}
              </span>
            </p>
            <div className="relative bottom-[45rem] left-[70rem] z-0 h-0 w-0 -rotate-6 opacity-60 blur-[100px]">
              <Ellipse
                rx={200}
                ry={50}
                fill="#69a8ff" // blue-ish
                // stroke="red"
                // strokeWidth={1}
              />
            </div>
            <div className="relative bottom-[3rem] left-[-2rem] z-0 h-0 w-0 -rotate-12 opacity-40 blur-[100px]">
              <Ellipse
                rx={300}
                ry={100}
                fill="#0500F4" // purple-ish
                // stroke="red"
                // strokeWidth={1}
              />
            </div>
          </div>

          {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}

          {/* Follow this: */}
          {/* https://www.jasondavies.com/wordcloud/ */}
          {/* <WordCloud
        words={words}
        options={{
          deterministic: true,
          fontSizes: [16, 28],
          fontFamily: "sans",
          fontWeight: "bold",
          padding: 5,
          transitionDuration: 0,
          colors: [
            "text-blue-400",
            "text-purple-400",
            "text-pink-400",
            "text-yellow-400",
            "text-green-400",
          ],
        }}
      /> */}
        </AbsoluteFill>
      </AbsoluteFill>

      <AbsoluteFill>
        <MadeByAI />
      </AbsoluteFill>
    </>
  );
};

export default VideoScene;

/**
 * <AbsoluteFill className="flex flex-col items-center bg-gray-100 text-4xl">
<div
  style={{
    opacity,
    transform: `translateY(${Number(translateTitle) * 10}px)`,
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    backgroundColor: `${PresentationPoint.allData?.metadata?.color?.accentColor}FF`,
  }}
  className={`mb-[4rem] flex h-max w-11/12 flex-col items-center justify-center rounded-3xl p-4 text-center text-5xl font-bold leading-relaxed text-white`}
>
  // /* {PresentationPoint.shortDescription} */
// {PresentationPoint.allData.data.titles[PresentationPoint.index]}
// </div>
// {/* Progress bar */}
// <div
//   style={{
//     width: `${((frame / durationInFrames) * 100).toFixed(2)}%`,
//     marginTop: "2px",
//     // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
//     background: `linear-gradient(90deg, ${PresentationPoint.allData?.metadata?.color?.gradientStartColor} 0%, ${PresentationPoint.allData?.metadata?.color?.gradientEndColor} 100%)`,
//   }}
//   className="block h-6 self-start rounded-r-full"
// ></div>

// <div
//   style={{
// opacity,
// background: `linear-gradient(90deg, ${finalJSONData.metadata.color.gradientStartColor} 0%, ${finalJSONData.metadata.color.gradientEndColor} 100%)`,
// }}
// className="mx-auto mt-32 flex w-full rounded-xl p-6 text-5xl leading-normal"
// >
// {newSentence}
// </div>
// </AbsoluteFill>
//  */
