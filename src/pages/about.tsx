// Taken from:
// https://flowbite.com/blocks/publisher/blog-templates/

import { LucideMail, LucideTwitter } from "lucide-react";
import { LucideGithub } from "lucide-react";
import Link from "next/link";
import Base from "~/components/Base";
import { Button } from "~/components/shadcnui/button";
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
                Launch Swiftube v0.1
              </h1>
            </header>

            <p>
              Swiftube is a platform for creating videos with AI, kind of like
              ChatGPT for videos.
              <br />
              Just write a prompt, supply some content, and your video will be
              ready in a minute or two!
            </p>

            <h2 className="mb-4 text-2xl font-extrabold leading-tight text-gray-900 lg:my-6 lg:text-3xl">
              How to use?
            </h2>

            <p className="my-4 font-semibold">
              <i>Pending</i>
            </p>

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
