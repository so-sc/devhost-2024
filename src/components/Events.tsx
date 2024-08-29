import { Link } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function Events() {
  interface CardData {
    id: number;
    title: string;
    date: string;
    time: string;
    caption: string;
    description: string;
    imageSrc: string;
  }

  const cardData: CardData[] = [
    {
      id: 1,
      title: "UI-Battles",
      caption: "Put your web design chops to the test!",
      description:
        "A dynamic web-based competition that tests your design and coding skills. Join to showcase stunning UI using HTML, CSS, JavaScript, and / or other CSS libraries.",
      date: "7th Nov",
      time: "11:30am - 12:45pm",
      imageSrc: "temp.jpg",
    },
  ];
  return (
    <div className="flex justify-center pb-10 items-center w-full">
      <div className="max-w-6xl mb-20 w-full">
        <h1 className="select-none text-center text-3xl md:text-4xl font-semibold md:pb-16 pb-10">
          Events
        </h1>
        <div className="grid md:grid-cols-2 gap-10">
          {cardData.map((card) => (
            <div key={card.id} className="md:relative flex flex-col">
              <Image
                className="bg-background md:ml-0 ml-5 border shadow-sm border-white/10 rounded-md z-10 md:flex hidden absolute w-40 h-40 aspect-square"
                src={`/events/${card.imageSrc}`}
                alt="speaker"
                width={500}
                height={500}
              ></Image>
              <div className="md:ml-20 event_card md:mt-10 border-white/10 border rounded-xl">
                <Image
                  className="bg-background m-5 border shadow-sm border-white/10 rounded-md z-10 flex md:hidden w-40 h-40 aspect-square"
                  src={`/events/${card.imageSrc}`}
                  alt="speaker"
                  width={500}
                  height={500}
                ></Image>
                <div className="ml-5 md:mt-5 md:ml-[6.5rem] my-5 md:mr-5 mr-5">
                  <h1 className="leading-6 mb-1 font-semibold text-xl tracking-wider">
                    {card.title}
                  </h1>
                  <time className="block mb-2 font-semibold leading-none text-white/80 pt-2">
                    {card.date}
                  </time>

                  <time className="block mb-2 font-normal leading-none text-white/60">
                    {card.time}
                  </time>
                  <h1 className="leading-6 mb-1 pt-2 font-semibold text-base text-primary tracking-wider">
                    {card.caption}
                  </h1>
                  <p className="text-sm tracking-wider py-2">
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
