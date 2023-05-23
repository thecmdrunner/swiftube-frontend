// Sticky Navbar from:
// https://flowbite.com/docs/components/navbar/

import { UserButton, useUser } from "@clerk/nextjs";
import { LucidePlay } from "lucide-react";
import Link from "next/link";
import fonts from "~/lib/fonts";
import { Button } from "./shadcnui/button";

const Navbar = () => {
  // const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const { isSignedIn } = useUser();

  return (
    <nav className="fixed left-0 top-0 z-20 w-full border-0 border-gray-200 bg-white">
      <div className="mx-auto flex max-w-screen-xl justify-between px-8 py-4 md:flex-wrap md:items-center">
        <Link
          href="/"
          className="flex items-center text-2xl text-indigo-600 md:text-3xl"
        >
          {/* <LucideFastForward className="mr-3 h-8" /> */}
          {/* <LucideFileVideo2 strokeWidth={2} className="mr-3" /> */}

          <div className="mr-2 flex rounded-3xl bg-indigo-50 py-1 pl-3 pr-2">
            <LucidePlay
              strokeWidth={1}
              stroke="#5653DB"
              className="fill-indigo-600 bg-blend-multiply"
            />
            <LucidePlay
              strokeWidth={1.5}
              stroke="#EEF2FE"
              className="-ml-4 fill-indigo-400 bg-blend-multiply"
            />
          </div>

          <p
            className={`${fonts.unbounded.className} self-center whitespace-nowrap font-semibold`}
          >
            Swiftube ⚡
          </p>
        </Link>
        <div className="flex items-center gap-3 md:order-2">
          {/* <button
            type="button"
            className="btn mr-3 rounded-lg bg-indigo-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 md:mr-0"
          >
            Get started
          </button> */}
          {/* <Link href={"/create"}>
            <button className="group relative hidden cursor-pointer items-center justify-center overflow-hidden rounded-full border-none bg-gradient-to-br from-purple-600 to-blue-500 text-sm hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 group-hover:from-purple-600 group-hover:to-blue-500 sm:inline-flex">
              <span className="relative rounded-md bg-white bg-opacity-0 px-5 py-2.5 font-semibold text-white transition-all duration-75 ease-in group-hover:bg-opacity-10">
                Create a video
              </span>
            </button>
          </Link> */}

          <Link href={"/about"}>
            <Button className="rounded-full" variant={"secondary"}>
              About
            </Button>
          </Link>

          {isSignedIn && (
            <UserButton
              appearance={{
                variables: {
                  fontFamily: "Rubik, sans-serif",
                },
              }}
            />
          )}

          {/* <button
            onClick={() => setIsDrawerOpen(!isDrawerOpen)}
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <LucideMenu className="h-6 w-6" />
          </button> */}
        </div>
        {/* <div
          className="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto"
          id="navbar-sticky"
        >
          <div className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0">
            {[
              {
                label: "Home",
                URL: "/",
              },
            ].map((item, index) => (
              <Link
                key={index}
                href={item.URL}
                className="rounded-lg bg-indigo-200 py-2 pl-3 pr-4 text-center text-indigo-700"
                aria-current="page"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div> */}
      </div>
    </nav>
  );
};

export default Navbar;
