import { useEffect } from "react";
import { marked } from "marked";

import {
  AbsoluteFill,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import type { FinalVideoDataFromServer } from "~/lib/interfaces";
import { preloadAudio } from "@remotion/preload";
import { bgMusic } from "~/lib/constants";

const VideoTable = ({
  videoData: video,
}: {
  videoData: FinalVideoDataFromServer;
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const labelOpacity = interpolate(frame, [0, fps / 4], [0, 1]);

  const tableOpacity = interpolate(frame, [fps / 4, fps / 2], [0, 1]);

  useEffect(() => {
    // Preload Outro audio
    preloadAudio(video.data.outro.voiceAudio.urls[0]);
    preloadAudio(video.data.outro.voiceAudio.urls[1]);
    // Preload Outro Background Music at very last
    preloadAudio(bgMusic.outro);
  }, [video.data.outro.voiceAudio.urls]);

  return (
    <AbsoluteFill className="bg-yellow-300 py-8">
      <div
        style={{ opacity: labelOpacity }}
        className="mx-auto mb-5 w-11/12 rounded-3xl bg-black px-8 py-4 text-center text-4xl font-semibold text-white"
      >
        {video.metadata.table?.label}
      </div>

      <div
        style={{ opacity: tableOpacity }}
        className="pingpong mx-auto flex h-full w-11/12 items-center overflow-hidden rounded-3xl bg-red-200 shadow-2xl"
        dangerouslySetInnerHTML={{
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
          __html: marked(video.data.table.table),
        }}
      />
      <div className="mx-auto mt-5 w-max rounded-full bg-black px-16 py-3 text-center text-4xl font-semibold text-white">
        AI-generated data, may be inaccurate.
      </div>
    </AbsoluteFill>
  );
};

export default VideoTable;
