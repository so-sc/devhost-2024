import Image from "next/image";
import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

const testimonials = [
  {
    title: "Hackathon",
  },
  {
    title: "Registrations",
  },
  {
    title: "Open",
  },
  {
    title: "Hackathon",
  },
  {
    title: "Registrations",
  },
  {
    title: "Open",
  },
  {
    title: "Hackathon",
  },
  {
    title: "Registrations",
  },
  {
    title: "Open",
  },
];

export default function HackathonRegistration() {
  return (
    <div className="flex flex-col overflow-hidden justify-center items-center">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
      <Link
        href="https://unstop.com/o/8SGos2D?lb=ZReY3Op"
        target="_blank"
        className="pb-20 pt-5 md:pb-10"
      >
        {/* <HoverBorderGradient
          containerClassName="rounded-full"
          as="button"
          className="bg-primary font-semibold text-black tracking-wider text-lg px-10 group flex items-center space-x-2"
        >
          <span>Register Now</span>
          <span className="group-hover:text-black">
            <ArrowRightIcon />
          </span>
        </HoverBorderGradient> */}
        <button className="p-[3px] relative">
          <div className="absolute inset-0 bg-primary rounded-lg" />
          <div className="px-8 flex justify-center items-center gap-2 py-2  bg-background rounded-[6px]  relative group transition duration-200 text-white font-semibold tracking-wide hover:text-background hover:bg-transparent">
            <span>Register for Hackathon</span>
            <span>
              <ArrowRightIcon />
            </span>
          </div>
        </button>
      </Link>
    </div>
  );
}
