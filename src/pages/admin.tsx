import { clerkClient, useUser } from "@clerk/nextjs";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Base from "~/components/Base";
import { LoadingFlexComponent } from "~/components/Loader";
import { api } from "~/utils/api";

const Admin = () => {
  const { isSignedIn, user, isLoaded: isUserLoaded } = useUser();
  const isAdmin = !!user?.publicMetadata.isAdmin;

  const { data, error, isError } = api.admin.hello.useQuery({ text: "there" });
  const { data: allVideos, isSuccess: didVideosLoad } =
    api.admin.getAllVideos.useQuery(undefined, {
      enabled: isUserLoaded && isAdmin,
      refetchInterval: false,
    });

  const router = useRouter();

  useEffect(() => {
    if (isUserLoaded && !isAdmin) setTimeout(() => router.replace("/"), 2000);
  }, [user, isUserLoaded, isSignedIn]);

  if (!isUserLoaded) return <LoadingFlexComponent size={40} />;
  if (!isAdmin) {
    return (
      <Base>
        <div className="flex items-center justify-center">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            You're not an admin... 🕺
            <br />
            Redirecting...
          </h1>
        </div>
      </Base>
    );
  }

  return (
    <Base>
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          {!!data && data.greeting} 🕺
        </h1>

        <div className="mt-6 flex w-full max-w-sm flex-col items-center justify-center">
          {didVideosLoad &&
            allVideos.map((vid, index) => {
              // const isVideoNotSuccess = !(
              //   vid.status == "SUCCESS" ||
              //   vid.status == "IN_PROGRESS" ||
              //   vid.status == "INITIALIZED"
              // );

              // if (isVideoNotSuccess)
              //   setNonSuccessVideos([...nonSuccessVideos, vid]);

              return (
                <Link
                  key={index}
                  className="mb-2 block w-full"
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

                          <span>
                            {vid.status === "SUCCESS"
                              ? vid?.metadata?.title || vid?.metadata?.topic
                              : vid?.error
                              ? `ERR: ${vid?.error}`
                              : `Msg: ${vid?.message}`}
                          </span>
                        </div>
                      )}

                      <span className="ml-auto mr-2 rounded px-2.5 py-0.5 text-xs font-normal text-gray-600">
                        {vid.createdAt}
                      </span>

                      <span
                        className={`
                      ${
                        vid.status === "SUCCESS"
                          ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                          : vid.status === "HALTED"
                          ? "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"
                          : vid.status === "INITIALIZED"
                          ? "bg-sky-100 text-sky-800 dark:bg-sky-900 dark:text-sky-300"
                          : vid.status === "IN_PROGRESS"
                          ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                          : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
                      }

                      ml-auto mr-2 rounded px-2.5 py-0.5 text-xs font-medium`}
                      >
                        {vid.status}
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
        </div>

        {isError && error.message}
      </div>
    </Base>
  );
};

export default Admin;
