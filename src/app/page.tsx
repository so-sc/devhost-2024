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
      <div className="absolute top-0 right-0 -z-20">
        <Image
          src="/topo1.svg"
          priority
          width={500}
          height={500}
          alt="background"
          className="object-right lg:w-[40rem] lg:h-[40rem] md:w-[30rem] md:h-[30rem] w-96 h-96 object-cover"
        ></Image>
      </div>
      <div className="absolute top-0 left-0 -z-20">
        <Image
          src="/topo2.svg"
          priority
          width={500}
          height={500}
          alt="background"
          className="object-right lg:w-[53rem] lg:h-[53rem] md:w-[40rem] md:h-[40rem] w-[30rem] h-[30rem] md:mt-96 sm:mt-[30rem] mt-[40rem] object-cover"
        ></Image>
      </div>
      <Counter />
      <Schedule />
      <Speakers />
      {/* <FAQ /> */}
    </main>
  );
}
