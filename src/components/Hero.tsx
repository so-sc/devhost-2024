import Image from "next/image";
import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { ArrowRightIcon } from "@radix-ui/react-icons";

const testimonials = [
  {
    title: "Coming Soon",
  },
  {
    title: "Stay Tuned",
  },
  {
    title: "Coming Soon",
  },
  {
    title: "Stay Tuned",
  },
  {
    title: "Coming Soon",
  },
  {
    title: "Stay Tuned",
  },
];

export default function Hero() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <div className="absolute -z-20 inset-0 overflow-hidden">
        <Image
          src="/bg.svg"
          width={500}
          height={500}
          alt="background"
          className="object-right lg:h-full md:h-[75%] h-[50%] w-full object-cover"
        ></Image>
      </div>
      <div className="flex flex-col pb-6 justify-center items-center">
        <div className="flex gap-5 justify-center items-center">
          <Image
            src="/sosc_logo.svg"
            className="w-16 h-fit"
            alt="logo"
            width={500}
            height={500}
          />
          <Image
            src="/niveus_logo_white.png"
            alt="logo"
            className="w-20 h-fit"
            width={500}
            height={500}
          />
        </div>
        <p className="pt-2 tracking-wide">Presents</p>
      </div>
      <div className="flex w-fit flex-col">
        <Image
          src="/logo.svg"
          alt="logo"
          className="md:w-80 w-64"
          width={500}
          height={500}
        />
        <p className="md:text-sm text-xs pt-3 tracking-wide text-primary">
          An initiative towards the silicon beach.
        </p>
      </div>
      <div className="w-96 pt-5 md:w-auto md:max-w-3xl">
        {/* <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        /> */}
        <h1 className="text-2xl font-medium tracking-wide md:px-5 px-2 md:pb-10 pb-20 text-center">
          14th - 16th June
        </h1>
      </div>
      {/* <div className="pt-6">
        <HoverBorderGradient
          containerClassName="rounded-full"
          as="button"
          className="bg-background group flex items-center space-x-2"
        >
          <span>Register Now</span>
          <span className="group-hover:text-primary">
            <ArrowRightIcon />
          </span>
        </HoverBorderGradient>
      </div> */}
      <div className="absolute z-40 float1 bottom-0 py-10">
        <svg
          className="w-8"
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 1024 1024"
        >
          <path
            fill="currentColor"
            d="M104.704 338.752a64 64 0 0 1 90.496 0l316.8 316.8l316.8-316.8a64 64 0 0 1 90.496 90.496L557.248 791.296a64 64 0 0 1-90.496 0L104.704 429.248a64 64 0 0 1 0-90.496z"
          />
        </svg>
      </div>
    </div>
  );
}
