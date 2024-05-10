"use client";

import Speakers from "@/components/Speakers";
import FAQ from "@/components/Faq";
import Hero from "@/components/Hero";
import Schedule from "@/components/Schedule";

export default function Home() {
  return (
    <main className="max-w-6xl px-5 mx-auto">
      <Hero />
      <Schedule />
      {/* <Speakers /> */}
      {/* <FAQ /> */}
    </main>
  );
}
