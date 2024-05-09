import Image from "next/image";
import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

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

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center min-h-[100dvh] px-10">
      <div className="absolute -z-20 inset-0 overflow-hidden">
        <img
          src="/bg2.svg"
          width={500}
          height={500}
          alt="background"
          className="object-right lg:h-full md:h-[75%] h-[50%] w-full object-cover"
        ></img>
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
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </div>
  );
}
