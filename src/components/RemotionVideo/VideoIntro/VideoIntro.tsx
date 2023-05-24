import { preloadAudio } from "@remotion/preload";
import { useEffect } from "react";
import {
  AbsoluteFill,
  Audio,
  Series,
  Video,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import {
  bgMusic,
  chaptersIntros,
  greetsAudios,
  greetsVideos,
} from "~/lib/constants";
import fonts from "~/lib/fonts";
import type {
  PresentationMetadata,
  FinalVideoDataFromServer,
} from "~/lib/interfaces";
import { getSectionDurationInFrames, type getTimeOfTheDay } from "~/utils";

const VideoIntro = (props: {
  videoData: FinalVideoDataFromServer;
  videoMetadata: PresentationMetadata;
  timeOfTheDay: ReturnType<typeof getTimeOfTheDay>;
}) => {
  const introImages = props.videoData.data.intro.images;
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const voiceIndex = props.videoMetadata.speakingVoiceGender === "male" ? 0 : 1;

  const isTablePresent = props.videoData.data.table.isPresent;

  const totalSections = props.videoData.data.videoSections.length;

  const greetVoiceAudio = greetsAudios[props.timeOfTheDay];

  const introGreetDuration = getSectionDurationInFrames(
    greetVoiceAudio,
    props.videoMetadata.speakingVoiceGender
  );

  const introChaptersDuration = getSectionDurationInFrames(
    { urls: chaptersIntros.audioURLs, durations: chaptersIntros.durations },
    props.videoMetadata.speakingVoiceGender
  );

  const introDurationInFrames = getSectionDurationInFrames(
    props.videoData.data.intro.voiceAudio,
    props.videoMetadata.speakingVoiceGender
  );

  const IntroAudioURL = props.videoData.data.intro.voiceAudio.urls[voiceIndex];

  // const chaptersIntroURL = chaptersIntros.audioURLs[voiceIndex];

  // Preload Intro Background Music
  useEffect(() => preloadAudio(bgMusic.videoSections), []);

  return (
    <AbsoluteFill className="bg-white">
      <div
        className={`flex h-full w-full flex-col items-center justify-center ${
          props.videoMetadata.speakingVoiceGender === "male"
            ? "bg-gradient-to-br from-blue-950 to-pink-950"
            : "bg-gradient-to-br from-pink-950 to-purple-950"
        }`}
      >
        <Series>
          {/* Good Morning/Afternoon/Evening Greeting Audio */}
          <Series.Sequence durationInFrames={introGreetDuration}>
            {/* <Audio src={greetVoiceAudio.urls[voiceIndex]} /> */}
            <div className="m-auto mt-48 flex flex-col items-center justify-center">
              <div
                className={`flex h-96 w-96 overflow-hidden rounded-full bg-[#F3F2F7] outline outline-[10px] outline-offset-[10px] ${
                  props.videoMetadata.speakingVoiceGender === "male"
                    ? "outline-blue-400"
                    : "outline-indigo-400"
                }`}
              >
                <Video
                  // muted
                  style={{
                    // objectPosition: props.videoMetadata.speakingVoiceGender === "male" ? '30% 50%' : undefined,
                    marginLeft:
                      props.videoMetadata.speakingVoiceGender === "male"
                        ? "20px"
                        : undefined,
                    opacity: interpolate(
                      frame,
                      [introGreetDuration - fps / 4, introGreetDuration],
                      [1, 0]
                    ),
                  }}
                  className="h-full w-full object-cover"
                  // src={`/videos/${props.videoMetadata.speakingVoiceGender}-greet-${props.timeOfTheDay}.mp4`}
                  src={greetsVideos[props.timeOfTheDay].urls[voiceIndex]}
                />
              </div>

              <p className="mt-16 text-6xl font-semibold text-white">
                {props.videoMetadata.speakingVoiceGender === "male"
                  ? "John Parker"
                  : "Jenny Parker"}
              </p>
              <p className="mt-8 text-4xl font-medium text-white">HOST</p>
              {/* <AudioVisualizer audioURL="/audios/bg-music-corporate.m4a" /> */}
            </div>
          </Series.Sequence>

          {/* Actual Intro */}
          <Series.Sequence durationInFrames={introDurationInFrames}>
            <Audio src={IntroAudioURL} />

            <div
              className={`${fonts.bebasNeue.className} flex h-full w-full flex-col items-start justify-start gap-y-8 p-6 pt-12 text-6xl`}
            >
              {/* <p
                className={`${fonts.bebasNeue.className} mb-10 mt-3 font-bold text-white`}
              >
                This video covers {totalSections} sections{" "}
                {!isTablePresent && "and a Table"}
              </p> */}

              {props.videoData.data.videoSections.map((section, index) => {
                return (
                  <div key={index}>
                    <div
                      style={{
                        opacity: interpolate(
                          frame - introGreetDuration,
                          [0 + fps * index, fps / 4 + fps * index],
                          // [0, fps],
                          [0, 1]
                        ),
                        paddingLeft: `${interpolate(
                          frame - introGreetDuration,
                          [0 + fps * index, fps / 4 + fps * index],
                          // [0, fps],
                          [1, 2],
                          { extrapolateRight: "clamp" }
                        )}rem`,
                      }}
                      className="rounded-2xl border-0 border-l-8 border-gray-100 bg-white/20 px-16 py-9 tracking-normal text-white"
                    >
                      {section.title}
                    </div>
                  </div>
                );
              })}

              {props.videoData.data.table.isPresent && (
                <div>
                  <div
                    style={{
                      opacity: interpolate(
                        frame - introGreetDuration,
                        [
                          0 + fps * totalSections - 1,
                          fps / 4 + fps * totalSections - 1,
                        ],
                        // [0, fps],
                        [0, 1]
                      ),
                      paddingLeft: `${interpolate(
                        frame - introGreetDuration,
                        [
                          0 + fps * totalSections - 1,
                          fps / 4 + fps * totalSections - 1,
                        ],
                        // [0, fps],
                        [1, 2],
                        { extrapolateRight: "clamp" }
                      )}rem`,
                    }}
                    className="rounded-2xl border-0 border-l-8 border-gray-100 bg-white/20 px-16 py-9 tracking-normal text-white"
                  >
                    Table: {props.videoData.metadata.table?.label ?? ""}
                  </div>
                </div>
              )}
            </div>
          </Series.Sequence>

          {/* Chapters Intro */}
          <Series.Sequence durationInFrames={introChaptersDuration}>
            {/* <Audio src={chaptersIntroURL} /> */}

            <div className="m-auto mt-48 flex flex-col items-center justify-center">
              <div
                className={`flex h-96 w-96 overflow-hidden rounded-full bg-[#F3F2F7] outline outline-[10px] outline-offset-[10px] ${
                  props.videoMetadata.speakingVoiceGender === "male"
                    ? "outline-blue-400"
                    : "outline-indigo-400"
                }`}
              >
                <Video
                  // muted
                  style={{
                    marginLeft:
                      props.videoMetadata.speakingVoiceGender === "male"
                        ? "20px"
                        : undefined,
                    opacity: interpolate(
                      frame,
                      [
                        introGreetDuration + introDurationInFrames,
                        introGreetDuration + introDurationInFrames + fps / 4,
                        introGreetDuration +
                          introDurationInFrames +
                          (introChaptersDuration - fps / 4),
                        introGreetDuration +
                          introDurationInFrames +
                          introChaptersDuration,
                      ],
                      [0, 1, 1, 0]
                    ),
                  }}
                  className="h-full w-full object-cover"
                  // src={`/videos/${props.videoMetadata.speakingVoiceGender}-greet-${props.timeOfTheDay}.mp4`}
                  src={chaptersIntros.videoURLs[voiceIndex]}
                />
              </div>

              <p className="mt-16 text-6xl font-semibold text-white">
                {props.videoMetadata.speakingVoiceGender === "male"
                  ? "John Parker"
                  : "Jenny Parker"}
              </p>
              <p className="mt-8 text-4xl font-medium text-white">HOST</p>
              {/* <AudioVisualizer audioURL="/audios/bg-music-corporate.m4a" /> */}
            </div>
          </Series.Sequence>
        </Series>
      </div>

      <AbsoluteFill>
        <div
          className={`${fonts.k2d.className} absolute right-[3%] top-[10%] z-50 m-8 flex w-max cursor-not-allowed items-center justify-center rounded-full bg-white px-6 py-5 text-center text-black drop-shadow-[0px_3px_4px_#00000090]`}
        >
          <span className="select-none text-4xl font-semibold uppercase">
            Made by A.I.
          </span>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

export default VideoIntro;
