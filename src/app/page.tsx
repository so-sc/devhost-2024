"use client";

import Speakers from "@/components/Speakers";
import FAQ from "@/components/Faq";
import Hero from "@/components/Hero";
import Schedule from "@/components/Schedule";
import CursorTrailCanvas from "@/components/CursorTrailCanvas";
import Counter from "@/components/Counter";
import Image from "next/image";

export default function Home() {
  return (
    <main className="max-w-6xl px-5 mx-auto">
      <CursorTrailCanvas className="pointer-events-none z-50 md:flex hidden fixed inset-0 h-full w-full" />
      <Hero />
      <div className="absolute -z-20 inset-0">
        <Image
          src="/topo.svg"
          width={500}
          height={500}
          alt="background"
          className="object-right lg:w-80 lg:h-[52rem] md:w-60 md:h-[39rem] w-40 h-[26rem] md:mt-96 sm:mt-[30rem] mt-[40rem] object-cover"
        ></Image>
      </div>
      <Counter />
      <Schedule />
      {/* <Speakers /> */}
      {/* <FAQ /> */}
    </main>
  );
}
