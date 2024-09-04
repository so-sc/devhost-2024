import Image from "next/image";
import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <motion.div
        initial={{ y: -10, opacity: 0, filter: "blur(5px)" }}
        animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
        transition={{
          ease: "linear",
          stiffness: 20,
          damping: 10,
          duration: 0.3,
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="flex flex-col pb-6 justify-center items-center">
              <div className="flex gap-5 justify-center items-center">
                <Image
                  priority
                  src="/sahyadri_logo.png"
                  className="w-14 h-12"
                  alt="logo"
                  width={500}
                  height={500}
                />
                <Image
                  priority
                  src="/sosc_logo.svg"
                  className="w-16 h-14"
                  alt="logo"
                  width={500}
                  height={500}
                />
                {/* <Image
                  priority
                  src="/niveus_logo_white.png"
                  alt="logo"
                  className="w-20 h-4"
                  width={500}
                  height={500}
                /> */}
              </div>
              <p className="pt-2 tracking-wide">Presents</p>
            </div>
            <div className="flex w-fit flex-col">
              <Image
                priority
                src="/logo.svg"
                alt="logo"
                className="md:w-80 md:h-[10.5rem] w-64 h-[8.4rem]"
                width={500}
                height={500}
              />
              <p className="md:text-sm text-xs pt-3 tracking-wide text-primary">
                Expertise Redefined, Experience Reimagined.
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.div>
      <motion.div
        initial={{ y: 10, opacity: 0, filter: "blur(5px)" }}
        animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
        transition={{
          ease: "linear",
          stiffness: 20,
          damping: 10,
          duration: 0.3,
        }}
      >
        <InfiniteMovingCards
          items={[
            { title: "Registrations Opening Soon" },
            { title: "|" },
            { title: "Stay Tuned" },
            { title: "|" },
          ]}
        />
        {/* <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
          >
            <div className="w-96 pt-5 md:w-auto md:max-w-3xl">
              <h1 className="text-2xl font-medium tracking-wide md:px-5 px-2 pb-10 text-center">
                7th - 9th November
              </h1>
            </div>
            <div className="flex md:flex-row flex-col gap-5 pb-20 md:pb-10 w-full">
              <Link
                href="https://unstop.com/o/8SGos2D?lb=ZReY3Op"
                target="_blank"
                className="md:px-0 px-5 flex mx-auto"
              >
                <HoverBorderGradient
                  containerClassName="rounded-full"
                  as="button"
                  className="bg-background md:w-60 w-80 px-10 group flex items-center justify-center space-x-2"
                >
                  <span>Hackathon</span>
                  <span className="group-hover:text-primary">
                    <ArrowRightIcon />
                  </span>
                </HoverBorderGradient>
              </Link>
              <Link href="/register" className="md:px-0 px-5 flex mx-auto">
                <HoverBorderGradient
                  containerClassName="rounded-full"
                  as="button"
                  className="bg-background md:w-60 w-80 px-10 group flex items-center justify-center space-x-2"
                >
                  <span>Events</span>
                  <span className="group-hover:text-primary">
                    <ArrowRightIcon />
                  </span>
                </HoverBorderGradient>
              </Link>
            </div>
          </motion.div>
        </AnimatePresence> */}
      </motion.div>

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
