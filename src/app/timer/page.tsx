"use client";

import Confetti from "react-confetti";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
const Countdown = () => {
  const getCurrentTimeInSeconds = () => {
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();
    return hours * 3600 + minutes * 60 + seconds;
  };

  const DAY = 24 * 60 * 60; // seconds in a day
  const HOUR = 60 * 60; // seconds in an hour
  const MINUTE = 60; // seconds in a minute

  const [remaining, setRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [countingDown, setCountingDown] = useState(true);
  const [timerStopped, setTimerStopped] = useState(false);

  useEffect(() => {
    const countdownEnd = 14 * HOUR + 0 * MINUTE; // 02:00 pm in seconds
    const countupEnd = countdownEnd + 20 * HOUR; // 20 hours after the start, the hackathon end is displayed

    const currentTimeInSeconds = getCurrentTimeInSeconds();

    if (currentTimeInSeconds < countdownEnd) {
      // Countdown logic
      setRemaining({
        days: Math.floor((countdownEnd - currentTimeInSeconds) / DAY),
        hours: Math.floor(((countdownEnd - currentTimeInSeconds) % DAY) / HOUR),
        minutes: Math.floor(
          ((countdownEnd - currentTimeInSeconds) % HOUR) / MINUTE
        ),
        seconds: Math.floor((countdownEnd - currentTimeInSeconds) % MINUTE),
      });
    } else if (currentTimeInSeconds < countupEnd) {
      // Count up logic
      setRemaining({
        days: 0,
        hours: Math.floor((currentTimeInSeconds - countdownEnd) / HOUR),
        minutes: Math.floor(
          ((currentTimeInSeconds - countdownEnd) % HOUR) / MINUTE
        ),
        seconds: Math.floor((currentTimeInSeconds - countdownEnd) % MINUTE),
      });
      setCountingDown(false);
    } else {
      // Timer has stopped
      setRemaining({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      });
      setTimerStopped(true);
    }

    const intervalId = setInterval(() => {
      const currentTimeInSeconds = getCurrentTimeInSeconds();

      if (currentTimeInSeconds < countdownEnd) {
        // Countdown logic
        setRemaining({
          days: Math.floor((countdownEnd - currentTimeInSeconds) / DAY),
          hours: Math.floor(
            ((countdownEnd - currentTimeInSeconds) % DAY) / HOUR
          ),
          minutes: Math.floor(
            ((countdownEnd - currentTimeInSeconds) % HOUR) / MINUTE
          ),
          seconds: Math.floor((countdownEnd - currentTimeInSeconds) % MINUTE),
        });
      } else if (currentTimeInSeconds < countupEnd) {
        // Count up logic
        setRemaining({
          days: 0,
          hours: Math.floor((currentTimeInSeconds - countdownEnd) / HOUR),
          minutes: Math.floor(
            ((currentTimeInSeconds - countdownEnd) % HOUR) / MINUTE
          ),
          seconds: Math.floor((currentTimeInSeconds - countdownEnd) % MINUTE),
        });
        setCountingDown(false);
      } else {
        // Timer has stopped
        setRemaining({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
        setTimerStopped(true);
        clearInterval(intervalId);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="p-4 space-y-3 h-screen flex flex-col justify-center items-center">
      {countingDown ? (
        ""
      ) : (
        <Confetti
          width={window.innerWidth - 10}
          height={window.innerHeight - 10}
          recycle={false}
          numberOfPieces={1000}
          initialVelocityX={-10}
        />
      )}
      {!timerStopped && (
        <div
          className={`${
            remaining.hours >= 15 ? "text-red-400" : "text-primary"
          } w-full font-poppinsR max-w-5xl mx-auto flex items-center`}
        >
          <CountdownItem num={remaining.days} text="days" />
          <CountdownItem num={remaining.hours} text="hours" />
          <CountdownItem num={remaining.minutes} text="minutes" />
          <CountdownItem num={remaining.seconds} text="seconds" />
        </div>
      )}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="text-center w-full h-[90%] flex justify-center items-center absolute"
      >
        {remaining.hours == 20 &&
          remaining.minutes == 0 &&
          remaining.seconds <= 5 && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="lg:text-7xl md:text-5xl text-4xl py-10 px-20 rounded-full border-[2px] border-gray-400/20 bg-black/40 backdrop-blur-lg select-none tracking-wide font-poppinsSB"
            >
              20 Hours has passed<span className="text-pink-400">!</span>
            </motion.div>
          )}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        {timerStopped && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="md:text-8xl sm:text-7xl text-5xl select-none tracking-wide py-5 font-poppinsSB"
          >
            Times Up<span className="text-primary">!</span>
          </motion.div>
        )}
      </motion.div>
      <div className="pt-5">
        <Image
          priority
          src="/logo_h.png"
          alt="logo"
          className="w-60 h-6"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
};

const CountdownItem = ({ num, text }: { num: number; text: string }) => {
  return (
    <div className="w-1/4 h-24 md:h-36 flex flex-col gap-1 md:gap-2 items-center justify-center">
      <div className="w-full text-center relative overflow-hidden">
        <AnimatePresence mode="popLayout">
          <motion.span
            key={num}
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            exit={{ y: "-100%" }}
            transition={{ ease: "backIn", duration: 0.75 }}
            className="block font-poppinsSB md:text-7xl text-5xl lg:text-8xl font-medium"
          >
            {num}
          </motion.span>
        </AnimatePresence>
      </div>
      <span className="text-xs md:text-sm lg:text-base font-poppinsSB tracking-wide text-white">
        {text}
      </span>
    </div>
  );
};

export default Countdown;
