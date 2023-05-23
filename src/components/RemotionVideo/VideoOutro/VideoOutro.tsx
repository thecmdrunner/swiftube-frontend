import { LucideInstagram, LucideTwitch } from "lucide-react";
import { LucideTwitter } from "lucide-react";
import {
  LucideBellRing,
  LucideFacebook,
  LucideShare2,
  LucideThumbsUp,
  LucideYoutube,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  AbsoluteFill,
  interpolate,
  interpolateColors,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { CHANNEL_LOGOS } from "~/lib/constants";
import type { FinalVideoDataFromServer } from "~/lib/interfaces";

const VideoOutro = (props: {
  videoData: FinalVideoDataFromServer;
  channelLogoURL: string;
}) => {
  const { videoData } = props;
  const frame = useCurrentFrame();
  const { durationInFrames, fps } = useVideoConfig();

  const bgColor1 = interpolateColors(
    frame,
    [0, durationInFrames],
    ["#F7C94D", "#fd2d2e"]
  );

  const bgColor2 = interpolateColors(
    frame,
    [0, durationInFrames],
    ["#fd2dcc", "#f7f24d"]
  );

  const bgColor3 = interpolateColors(
    frame,
    [0, durationInFrames],
    ["#ffcc75", "#cf6433"]
  );

  const bgColor4 = interpolateColors(
    frame,
    [0, durationInFrames],
    ["#cf7b33", "#ffc375"]
  );

  return (
    <>
      <AbsoluteFill
        style={{
          background: `linear-gradient(50deg, ${bgColor3} 0%, ${bgColor4} 100%)`,
          opacity: interpolate(
            frame,
            [durationInFrames - fps / 4, durationInFrames],
            [1, 0]
          ),
        }}
        className="px-12"
      >
        <h2 className="mt-12 text-8xl font-black text-white drop-shadow-2xl">
          Thanks for watching!
        </h2>

        <div
          style={{
            opacity: interpolate(frame, [0, fps / 6], [0, 1]),
          }}
          className="mt-16 flex gap-x-6"
        >
          {[
            {
              label: "LIKE",
              icon: <LucideThumbsUp className="mr-4 h-16 w-16" />,
            },
            {
              label: "SUBSCRIBE",
              icon: <LucideBellRing className="mr-4 h-16 w-16" />,
            },

            {
              label: "SHARE",
              icon: <LucideShare2 className="mr-4 h-16 w-16" />,
            },
          ].map((item, index) => (
            <div
              className="flex items-center justify-between rounded-2xl bg-white px-12 py-5 text-7xl font-black"
              key={index}
            >
              <div className="mr-4">{item.icon}</div>

              <p>{item.label}</p>
            </div>
          ))}
        </div>

        {/* SOCIAL ICONS */}
        <div
          style={{
            opacity: interpolate(frame, [0, fps / 6], [0, 1]),
          }}
          className="mt-16 flex items-center gap-x-8"
        >
          <h5 className="ml-3 text-5xl font-bold">Also check us out on:</h5>

          <div className="flex gap-x-6">
            {[
              {
                href: "#",
                icon: <LucideYoutube className="h-16 w-16" />,
              },

              {
                href: "#",
                icon: <LucideTwitter className="h-16 w-16" />,
              },
              {
                href: "#",
                icon: <LucideTwitch className="h-16 w-16" />,
              },
              {
                href: "#",
                icon: <LucideInstagram className="h-16 w-16" />,
              },

              {
                href: "#",
                icon: <LucideFacebook className="h-16 w-16" />,
              },

              {
                href: "#",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#000000"
                    // width="800px"
                    // height="800px"
                    viewBox="0 0 512 512"
                    id="icons"
                    className="h-16 w-16"
                  >
                    <path d="M412.19,118.66a109.27,109.27,0,0,1-9.45-5.5,132.87,132.87,0,0,1-24.27-20.62c-18.1-20.71-24.86-41.72-27.35-56.43h.1C349.14,23.9,350,16,350.13,16H267.69V334.78c0,4.28,0,8.51-.18,12.69,0,.52-.05,1-.08,1.56,0,.23,0,.47-.05.71,0,.06,0,.12,0,.18a70,70,0,0,1-35.22,55.56,68.8,68.8,0,0,1-34.11,9c-38.41,0-69.54-31.32-69.54-70s31.13-70,69.54-70a68.9,68.9,0,0,1,21.41,3.39l.1-83.94a153.14,153.14,0,0,0-118,34.52,161.79,161.79,0,0,0-35.3,43.53c-3.48,6-16.61,30.11-18.2,69.24-1,22.21,5.67,45.22,8.85,54.73v.2c2,5.6,9.75,24.71,22.38,40.82A167.53,167.53,0,0,0,115,470.66v-.2l.2.2C155.11,497.78,199.36,496,199.36,496c7.66-.31,33.32,0,62.46-13.81,32.32-15.31,50.72-38.12,50.72-38.12a158.46,158.46,0,0,0,27.64-45.93c7.46-19.61,9.95-43.13,9.95-52.53V176.49c1,.6,14.32,9.41,14.32,9.41s19.19,12.3,49.13,20.31c21.48,5.7,50.42,6.9,50.42,6.9V131.27C453.86,132.37,433.27,129.17,412.19,118.66Z" />
                  </svg>
                ),
              },
              // { icon: <LucideT className="h-16 w-16" /> },
            ].map((item, index) => (
              <Link key={index} href={item.href}>
                <div className="flex items-center justify-between rounded-full bg-white px-5 py-5 text-7xl font-black">
                  {item.icon}
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Recommendations */}
        <div
          style={{
            opacity: interpolate(frame, [0, fps / 4], [0, 1]),
          }}
          className="mt-16 flex gap-x-20"
        >
          <div className="flex aspect-video h-80 items-center justify-center rounded-3xl bg-gray-900 outline outline-dashed outline-8 outline-offset-[10px] outline-white"></div>
          <div className="flex aspect-video h-80 items-center justify-center rounded-3xl bg-gray-900 outline outline-dashed outline-8 outline-offset-[10px] outline-white"></div>
          {/* LOGO HERE */}

          <div className="relative ml-6 cursor-pointer">
            <div
              style={{
                rotate: `${interpolate(
                  frame,
                  [0, durationInFrames],
                  [0, 360]
                )}deg`,
              }}
              className="flex h-80 w-80 rounded-full outline outline-dashed outline-[18px] outline-offset-[12px] outline-white"
            ></div>

            <div className="absolute bottom-[0%] flex h-80 w-80 items-center justify-center rounded-full bg-gray-900 text-white shadow-2xl transition-all duration-100 hover:rotate-12 hover:shadow-[0px_25px_50px_-12px_#00000075]">
              <Image
                className="cursor-pointer rounded-full object-cover object-center"
                src={props.channelLogoURL}
                width={320}
                height={320}
                alt="channel logo"
              />

              {/* <span className="text-center text-5xl">
            channel
            <br />
            logo
          </span> */}
            </div>
          </div>
        </div>

        <div className="mt-16 w-max rounded-full bg-white px-12 py-5 text-center text-4xl font-semibold text-black">
          ⚡ AI generated Video
        </div>

        {/* Images gallery here */}
        <div className="flex aspect-video h-96 items-center justify-center rounded-3xl">
          {/* loop images here */}
        </div>

        {/* <p>{videoData.data.outro.talkingPoint}</p> */}
      </AbsoluteFill>
    </>
  );
};

export default VideoOutro;
