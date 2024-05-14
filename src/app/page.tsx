"use client";

import Speakers from "@/components/Speakers";
import FAQ from "@/components/Faq";
import Hero from "@/components/Hero";
import Schedule from "@/components/Schedule";
import CursorTrailCanvas from "@/components/CursorTrailCanvas";

export default function Home() {
  return (
    <main className="max-w-6xl px-5 mx-auto">
      <CursorTrailCanvas className="pointer-events-none z-50 md:flex hidden fixed inset-0 -z-10 h-full w-full" />
      <Hero />
      <Schedule />
      {/* <Speakers /> */}
      {/* <FAQ /> */}
    </main>
  );
}
