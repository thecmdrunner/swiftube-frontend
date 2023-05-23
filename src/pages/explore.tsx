import { LucideVerified } from "lucide-react";
import Link from "next/link";
import Base from "~/components/Base";
import { LoadingFlexComponent } from "~/components/Loader";
import { CHANNEL_LOGOS } from "~/lib/constants";
import fonts from "~/lib/fonts";
import { api } from "~/utils/api";

export default function Explore() {
  const { data } = api.db.getSafeVideos.useQuery();

  if (!data?.videos) return <LoadingFlexComponent size={40} />;
  // if (!!!data.videos[0]?.metadata.title)
  // return <LoadingFlexComponent size={40} />;

  console.log(data?.videos);

  return (
    <Base>
      <h2
        className={`${fonts.unbounded.className} scroll-m-20 px-5 pb-2 text-center text-4xl font-bold tracking-tight first:mt-0`}
      >
        Explore all videos here
      </h2>
      <p className="px-7 text-center leading-7 [&:not(:first-child)]:mt-2">
        📽️ Curated Videos made by everyone will appear here!
      </p>

      <div className="container mx-auto flex w-full max-w-7xl flex-col items-center justify-center gap-6 py-12 sm:flex-row sm:flex-wrap ">
        {data.videos.map((video, index) => {
          return (
            <Link
              className={`${fonts.inter.className} block h-72 w-11/12 sm:w-64 md:w-72`}
              href={`/video/${video.uniqueId}`}
              key={index}
            >
              <div className="flex aspect-video flex-nowrap overflow-hidden rounded-lg bg-gray-100">
                {video?.images &&
                  video.images?.map((image, index) => (
                    <div
                      key={index}
                      style={{
                        backgroundImage: `url(${image.contentUrl})`,
                      }}
                      className="render h-full w-1/3 bg-red-300 bg-cover bg-center bg-no-repeat blur-[1px]"
                    >
                      {/* <img
                        className="object-fill object-center"
                        src={image.contentUrl}
                        alt={image.name}
                      /> */}
                    </div>
                  ))}
              </div>
              <div className="mt-3 flex items-start space-x-2">
                <div className="mr-1.5 h-9 w-9 flex-shrink-0 overflow-hidden rounded-full bg-white">
                  <img src={CHANNEL_LOGOS.digital_artist} alt="channel_logo" />
                </div>
                <div className="text-md flex flex-col leading-snug">
                  <div className="overflow-ellipsis">
                    {video.title || video.topic}
                  </div>
                  <div className="mt-1.5 flex items-center space-x-1">
                    <div className="text-gray-600">John Parker</div>

                    <LucideVerified
                      stroke="white"
                      strokeWidth={1.4}
                      className="fill-[#369FE8]"
                    />
                  </div>
                  <div className="mt-0.5 text-sm text-gray-400">9K views</div>
                  {/* <div className="mt-1 w-max rounded-sm border border-red-500 px-1 py-0.5 text-xs font-bold tracking-wide text-red-600">
                    LIVE NOW
                  </div> */}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </Base>
  );
}
