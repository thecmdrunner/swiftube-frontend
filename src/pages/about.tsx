// Taken from:
// https://flowbite.com/blocks/publisher/blog-templates/

import { LucideMail, LucideTwitter } from "lucide-react";
import { LucideGithub } from "lucide-react";
import Link from "next/link";
import Base from "~/components/Base";
import { Button } from "~/components/ui/button";
import fonts from "~/lib/fonts";

const About = () => {
  return (
    <Base>
      <main
        style={{ ...fonts.inter.style }}
        className="bg-white pb-16 pt-8 dark:bg-gray-900 lg:pb-24 lg:pt-16"
      >
        <div className="mx-auto flex max-w-screen-xl justify-between px-4 ">
          <article className="format format-sm sm:format-base lg:format-lg format-blue mx-auto w-full max-w-2xl">
            <header className="not-format mb-4 lg:mb-6">
              <address className="mb-6 flex items-center not-italic">
                <div className="mr-3 inline-flex items-center text-sm text-gray-900">
                  <img
                    className="mr-4 h-16 w-16 rounded-full"
                    src="https://avatars.githubusercontent.com/u/38887390?v=4"
                    alt="Pranav"
                  />
                  <div>
                    <a
                      href="#"
                      rel="author"
                      className="text-xl font-bold text-gray-900"
                    >
                      Pranav
                    </a>
                    <p className="text-base font-light text-gray-500">Hacker</p>
                    <p className="text-base font-light text-gray-500">
                      <time dateTime="2023-05-23" title="May 23rd, 2023">
                        May 23, 2023
                      </time>
                    </p>
                  </div>
                </div>
              </address>
              <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl">
                Swiftube v0.1 Beta
              </h1>
            </header>

            <p>
              Swiftube is a platform for creating videos with AI, kind of like
              ChatGPT for videos.
              <br />
              Just write a prompt, supply some content, and your video will be
              ready in a minute or two!
            </p>

            {/* <h2 className="mb-4 text-2xl font-extrabold leading-tight text-gray-900 lg:my-6 lg:text-3xl">
              How to use?
            </h2>

            <p className="my-4 font-semibold">
              <i>Pending</i>
            </p> */}

            <p className="my-4 font-semibold">
              Swiftube makes use of these core technologies under the hood:
            </p>

            <ul className="mt-4 flex flex-col gap-y-2">
              <li>
                <Link
                  className="font-medium text-blue-600 hover:underline"
                  href="https://remotion.dev/"
                >
                  Remotion
                </Link>
              </li>
              <li>
                <Link
                  className="font-medium text-blue-600 hover:underline"
                  href={"https://cloud.google.com/text-to-speech/"}
                >
                  Text to Speech
                </Link>
              </li>
              <li>
                <Link
                  className="font-medium text-blue-600 hover:underline"
                  href={"https://openai.com/"}
                >{`OpenAI's GPT`}</Link>
              </li>
            </ul>

            <h2
              id="contact"
              className="mb-4 text-2xl font-extrabold leading-tight text-gray-900 lg:my-6 lg:text-3xl"
            >
              Contact
            </h2>
            <div className="my-4 flex w-full flex-wrap gap-3">
              <Link href="https://github.com/thecmdrunner/">
                <Button className="h-12 rounded-full">
                  <LucideGithub strokeWidth={1.3} className="h-8 w-8" />
                </Button>
              </Link>
              <Link href="mailto:thecmdrunner@proton.me?subject=Swiftube&body=Hello!%20I'd%20love%20to%20know%20more%20about%20Swiftube%20%3A)">
                <Button className="h-12 rounded-full">
                  <LucideMail strokeWidth={1.3} className="h-8 w-8" />
                </Button>
              </Link>
              <Link href="https://discordapp.com/users/768013898385063936/">
                <Button className="h-12 rounded-full">
                  <svg
                    viewBox="0 -28.5 256 256"
                    version="1.1"
                    fill="#000000"
                    className="h-8 w-8"
                    preserveAspectRatio="xMidYMid"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <g>
                        {" "}
                        <path
                          d="M216.856339,16.5966031 C200.285002,8.84328665 182.566144,3.2084988 164.041564,0 C161.766523,4.11318106 159.108624,9.64549908 157.276099,14.0464379 C137.583995,11.0849896 118.072967,11.0849896 98.7430163,14.0464379 C96.9108417,9.64549908 94.1925838,4.11318106 91.8971895,0 C73.3526068,3.2084988 55.6133949,8.86399117 39.0420583,16.6376612 C5.61752293,67.146514 -3.4433191,116.400813 1.08711069,164.955721 C23.2560196,181.510915 44.7403634,191.567697 65.8621325,198.148576 C71.0772151,190.971126 75.7283628,183.341335 79.7352139,175.300261 C72.104019,172.400575 64.7949724,168.822202 57.8887866,164.667963 C59.7209612,163.310589 61.5131304,161.891452 63.2445898,160.431257 C105.36741,180.133187 151.134928,180.133187 192.754523,160.431257 C194.506336,161.891452 196.298154,163.310589 198.110326,164.667963 C191.183787,168.842556 183.854737,172.420929 176.223542,175.320965 C180.230393,183.341335 184.861538,190.991831 190.096624,198.16893 C211.238746,191.588051 232.743023,181.531619 254.911949,164.955721 C260.227747,108.668201 245.831087,59.8662432 216.856339,16.5966031 Z M85.4738752,135.09489 C72.8290281,135.09489 62.4592217,123.290155 62.4592217,108.914901 C62.4592217,94.5396472 72.607595,82.7145587 85.4738752,82.7145587 C98.3405064,82.7145587 108.709962,94.5189427 108.488529,108.914901 C108.508531,123.290155 98.3405064,135.09489 85.4738752,135.09489 Z M170.525237,135.09489 C157.88039,135.09489 147.510584,123.290155 147.510584,108.914901 C147.510584,94.5396472 157.658606,82.7145587 170.525237,82.7145587 C183.391518,82.7145587 193.761324,94.5189427 193.539891,108.914901 C193.539891,123.290155 183.391518,135.09489 170.525237,135.09489 Z"
                          fill="#ffffff"
                          fillRule="nonzero"
                        ></path>
                      </g>
                    </g>
                  </svg>
                </Button>
              </Link>
              <Link href="https://twitter.com/thecmdrunner/">
                <Button className="h-12 rounded-full">
                  <LucideTwitter
                    strokeWidth={0}
                    fill="white"
                    className="h-8 w-8"
                  />
                </Button>
              </Link>
            </div>
          </article>
        </div>
      </main>
    </Base>
  );
};

export default About;
