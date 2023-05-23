import {
  AbsoluteFill,
  Audio,
  Series,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import VideoScene from "../VideoScene";
import type { PlayerPresentationProps } from "~/lib/interfaces";
import VideoTable from "../VideoTable/VideoTable";
import VideoIntro from "../VideoIntro";
import VideoOutro from "../VideoOutro";
import {
  getSectionDurationInFrames,
  getDurationWithPadding,
  getTimeOfTheDay,
} from "~/utils";
import { bgMusic, chaptersIntros, greetsAudios } from "~/lib/constants";

const tabledata = {
  table:
    "| Year | British Casualties | Indian Casualties |\n |------|-------------------|------------------|\n | 1857 | 2,500             | 100,000+         |\n | 1919 | 1,500             | 1,000+           |\n | 1929 | 26                | 300+             |\n | 1930 | 20                | 80+              |\n | 1942 | 0                 | 4,000+           |\n",
  summary:
    "The table compares the casualties suffered by British and Indian forces during the Indian Independence Movement. The data reveals that the Indian casualties were significantly higher than the British casualties in all the years listed, with the exception of 1942. In the year 1857, the Indian casualties were especially high, with over 100,000 deaths. In general, the British casualties were much lower and remained under 2,000, except in 1919. In that year, the British suffered roughly 1,500 casualties due to a nonviolent protest that turned deadly when British troops fired on the peaceful protesters. Overall, the data highlights the price paid by Indians in their struggle for independence from British colonial rule.",
};

const VideoSequences: React.FC<PlayerPresentationProps> = ({
  // presentationData,
  videoData: video,
  videoMetadata,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const outroDurationInFrames = getSectionDurationInFrames(
    video.data.outro.voiceAudio,
    videoMetadata.speakingVoiceGender
  );

  const voiceIndex = videoMetadata.speakingVoiceGender === "male" ? 0 : 1;

  const IntroAudioURL = video.data.intro.voiceAudio.urls[voiceIndex];

  const chaptersIntroURL = chaptersIntros.audioURLs[voiceIndex];

  const timeOfTheDay = getTimeOfTheDay();

  const greetVoiceAudio = greetsAudios[timeOfTheDay];

  const introGreetDuration = getSectionDurationInFrames(
    greetVoiceAudio,
    videoMetadata.speakingVoiceGender
  );

  const introChaptersDuration = getSectionDurationInFrames(
    { urls: chaptersIntros.audioURLs, durations: chaptersIntros.durations },
    videoMetadata.speakingVoiceGender
  );

  const introDurationInFrames = getSectionDurationInFrames(
    video.data.intro.voiceAudio,
    videoMetadata.speakingVoiceGender
  );

  const tableDurationInFrames = getSectionDurationInFrames(
    video.data.table.voiceAudio,
    videoMetadata.speakingVoiceGender
  );

  const totalIntroDurationInFrames =
    introDurationInFrames + introChaptersDuration + introGreetDuration;

  return (
    <AbsoluteFill>
      <Series>
        <Series.Sequence
          // ! FIXME: Change this duration addition to proper duration for each greet!
          durationInFrames={totalIntroDurationInFrames}
          name={`Video-Intro`}
        >
          <VideoIntro
            timeOfTheDay={timeOfTheDay}
            videoMetadata={videoMetadata}
            videoData={video}
          />
          <Audio
            volume={interpolate(
              frame,
              [
                totalIntroDurationInFrames - 1.5 * fps,
                totalIntroDurationInFrames,
              ],
              [0.2, 0],
              { extrapolateRight: "clamp", extrapolateLeft: "clamp" }
            )}
            src={bgMusic.intro}
          />
        </Series.Sequence>

        {video.data.videoSections.map((videoSection, index) => {
          const sequenceDurationInSeconds = getDurationWithPadding(
            videoSection.voiceAudio?.durations[voiceIndex] || 15 // 15 seconds as fallback
          );
          const sequenceDurationInFrames =
            Math.round(sequenceDurationInSeconds) * fps;

          let durationSoFarInFrames =
            introDurationInFrames + introChaptersDuration + introGreetDuration;

          // ! ADD DURATIONS UPTO BEFORE THE CURRENT SECTION STARTS!
          for (let durIndex = 0; durIndex < index; durIndex++) {
            const durSeconds = getDurationWithPadding(
              video.data.videoSections[durIndex]!.voiceAudio?.durations[
                voiceIndex
              ]
            );
            const durFrames = Math.round(durSeconds) * fps;

            durationSoFarInFrames = durationSoFarInFrames + durFrames;
          }

          return (
            <Series.Sequence
              /**
               *
               * * Only using 5 seconds as stop gap.
               */

              durationInFrames={sequenceDurationInFrames}
              key={index}
              name={`Info-Section-${index + 1}`}
            >
              <VideoScene
                metadata={videoMetadata}
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                videoSection={{
                  ...videoSection,
                  index,
                  gender: videoMetadata.speakingVoiceGender,
                  sequenceDurationInFrames,
                }}
              />

              {/* Audio doesn't already exists inside the Scene */}
              <Audio
                volume={interpolate(
                  frame,
                  [
                    durationSoFarInFrames,
                    durationSoFarInFrames + 2 * fps,
                    durationSoFarInFrames + sequenceDurationInFrames - 2 * fps,
                    durationSoFarInFrames + sequenceDurationInFrames,
                  ],
                  [0.6, 0.2, 0.2, 0],
                  { extrapolateRight: "clamp", extrapolateLeft: "clamp" }
                )}
                src={bgMusic.intro}
              />
              <Audio src={videoSection.voiceAudio.urls[voiceIndex]} />
            </Series.Sequence>
          );
        })}

        {video.data.table?.isPresent && (
          <Series.Sequence
            durationInFrames={tableDurationInFrames}
            name={`Video-Table`}
          >
            <VideoTable videoData={video} />(
            {/* Define and calling this expression here itself */}
            {(() => {
              let durationSoFarInFrames =
                introDurationInFrames +
                introChaptersDuration +
                introGreetDuration;

              // ! ADD DURATIONS UPTO BEFORE THE CURRENT SECTION STARTS!
              for (
                let durIndex = 0;
                durIndex < video.data.videoSections.length;
                durIndex++
              ) {
                const durSeconds = getDurationWithPadding(
                  video.data.videoSections[durIndex]!.voiceAudio?.durations[
                    voiceIndex
                  ]
                );
                const durFrames = Math.round(durSeconds) * fps;

                durationSoFarInFrames = durationSoFarInFrames + durFrames;
              }

              return (
                <Audio
                  volume={interpolate(
                    frame,
                    [
                      durationSoFarInFrames,
                      durationSoFarInFrames + tableDurationInFrames - 2 * fps,
                      durationSoFarInFrames + tableDurationInFrames,
                    ],
                    [0.6, 0.6, 0],
                    { extrapolateRight: "clamp", extrapolateLeft: "clamp" }
                  )}
                  src={bgMusic.videoSections}
                />
              );
            })()}
            )
            <Audio src={video.data.table.voiceAudio.urls[voiceIndex]} />
          </Series.Sequence>
        )}
        <Series.Sequence
          durationInFrames={outroDurationInFrames}
          name={`Video-Outro`}
        >
          <VideoOutro
            channelLogoURL={videoMetadata.channelLogoURL ?? ""}
            videoData={video}
          />

          {/* Best to keep audio separate? */}
          <Audio volume={0.4} src={bgMusic.outro} />
          <Audio src={video.data.outro.voiceAudio.urls[voiceIndex]} />
        </Series.Sequence>
      </Series>
    </AbsoluteFill>
  );
};

export default VideoSequences;
