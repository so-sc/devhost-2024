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
    title: "Registrations Open",
  },
  {
    title: "Hackathon",
  },
  {
    title: "Registrations Open",
  },
  {
    title: "Hackathon",
  },
  {
    title: "Registrations Open",
  },
];

export default function HackathonRegistration() {
  return (
    <div className="flex flex-col justify-center items-center">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
      <Link href="/" target="_blank" className="pb-20 pt-5 md:pb-10">
        <HoverBorderGradient
          containerClassName="rounded-full"
          as="button"
          className="bg-primary font-semibold text-black tracking-wider text-lg px-10 group flex items-center space-x-2"
        >
          <span>Register Now</span>
          <span className="group-hover:text-black">
            <ArrowRightIcon />
          </span>
        </HoverBorderGradient>
      </Link>
    </div>
  );
}
