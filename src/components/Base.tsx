import Head from "next/head";
import { type ReactNode } from "react";
import Navbar from "./Navbar";
import fonts from "~/lib/fonts";
import Link from "next/link";
import { Button } from "./shadcnui/button";

const Base = (props: { children: ReactNode }) => {
  return (
    <>
      <Head>
        <title>📽️ Swiftube</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={{ ...fonts.rubik.style }}>
        <Navbar />

        <section className="pb-2 pt-[4.5rem]">{props.children}</section>
        <p className="pb-7 text-center leading-6 [&:not(:first-child)]:mt-9">
          <span className="font-medium">Free Research Preview.</span>{" "}
          <span className="mr-[0.5ch] underline">Swiftube</span>
          may produce inaccurate information about people, places, or facts.
          <br />
          Something seems wrong?
          <Link
            className="pl-1 font-medium text-blue-600 hover:underline dark:text-blue-500"
            href={"/about#contact"}
          >
            Contact us
          </Link>
        </p>
      </main>
    </>
  );
};

export default Base;
