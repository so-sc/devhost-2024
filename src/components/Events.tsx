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
    organizer: string;
    imageSrc: string;
  }

  const cardData: CardData[] = [
    {
      id: 1,
      title: "CSS action",
      caption: "Put your web design chops to the test!",
      description:
        "A dynamic web-based competition that tests your design and coding skills. Join to showcase stunning UI using HTML, CSS, JavaScript, and / or other CSS libraries.",
      organizer: "Koshin Hegde - 7899715941",
      date: "7th Nov",
      time: "11:30am - 12:45pm",
      imageSrc: "ui-battle.png",
    },
    {
      id: 2,
      title: "Competitive Programming",
      caption: "Competitive Programming Battle: Unleash Your Coding Prowess",
      description:
        "Are you a coding virtuoso ready to take on the ultimate challenge? Join our competitive programming battle and prove your skills against the best minds in the field.",
      organizer: "Nithesh Alva - 7843775694",
      date: "8th Nov",
      time: "8:45am - 9:45am",
      imageSrc: "cp.jpg",
    },
    {
      id: 3,
      title: "Capture the Flag",
      caption: "Are you ready for a mind-bending challenge?",
      description:
        "Showcase your problem-solving skills and advance through rounds in our Capture the Flag competition. It’s an exciting quest where your talent and ingenuity will lead you to victory. Uncover clues and capture flags to rise to the top!",
      organizer: "Yash Laxman - 6362072050",
      date: "8th Nov",
      time: "10:30am - 12:00pm",
      imageSrc: "ctf.png",
    },
    {
      id: 4,
      title: "Blind Coding",
      caption: "Are you a coding mastermind?",
      description:
        "Solve complex problems without the aid of external tools. Can you conquer this mind-bending challenge and prove your mental acuity?",
      organizer: "Rithuparna K.S - 7019821295",
      date: "8th Nov",
      time: "12:00pm - 1:30pm",
      imageSrc: "blind-coding.jpeg",
    },
    {
      id: 5,
      title: "Tech-Pitch",
      caption: "Spark Innovation and Inspire Change!",
      description:
        "Bring your innovative ideas to the forefront, gain valuable exposure, and compete for a role in the future of technology and entrepreneurship in this ‘Tech-Pitch’ competition.",
      organizer: "Apeksha L Naik - 8904315769",
      date: "8th Nov",
      time: "10:30am - 1:30pm",
      imageSrc: "tech-pitch.png",
    },
    {
      id: 6,
      title: "BGMI: Battlegrounds Mobile India",
      caption: "Dominate the battlefield in our BGMI tournament!",
      description:
        "Win the tournament by demonstrating your abilities and emerging victorious. Showcase your strategic brilliance, accuracy shooting, and collaborative spirit.",
      organizer: "Advaith S Shetty - 9902698070",
      date: "8th Nov",
      time: "2:00pm - 4:00pm",
      imageSrc: "bgmi.jpg",
    },
    {
      id: 7,
      title: "Rubix Cube",
      caption: "Are you a Rubik's Cube prodigy?",
      description:
        "Showcase your speedcubing talent and race against top competitors in this exhilarating contest. Push your limits and achieve new personal bests while striving for the top spot!",
      organizer: "Manushree P B - 6363316781",
      date: "Date not allotted",
      time: "Time not allotted",
      imageSrc: "rubix-cube.jpeg",
    },
    {
      id: 8,
      title: "Speed Typing",
      caption: "Are you a typing speed demon?",
      description:
        "Show off your skills in our typing competition! Demonstrate your lightning-fast fingers and accuracy to outlast your competitors. Compete for the top spot and earn bragging rights as the fastest typist!",
      organizer: "Kshama S - 9741433993",
      date: "Date not allotted",
      time: "Time not allotted",
      imageSrc: "speed-typing.jpg",
    },

    {
      id: 9,
      title: "Valorent",
      caption: "Become the ultimate agent in our Valorant competition!",
      description:
        "Demonstrate your tactical skills, sharp aim, and strategic thinking. Outsmart your opponents, master the unique abilities of various agents, and achieve victory in exhilarating matches.",
      organizer: "Not yet decided",
      date: "7th Nov",
      time: "2:15pm - 4:30pm",
      imageSrc: "Valorant.png",
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
                  <p className="block mb-2 font-semibold leading-none text-white/80 pt-2">
                    {card.date}
                  </p>

                  <time className="block mb-2 font-normal leading-none text-white/60">
                    {card.time}
                  </time>
                  <h1 className="leading-6 mb-1 pt-2 font-semibold text-base text-primary tracking-wider">
                    {card.caption}
                  </h1>
                  <p className="text-sm tracking-wider py-2">
                    {card.description}
                  </p>
                  <p className="block font-semibold leading-none text-white mt-2 text-sm">
                    Organizer:
                  </p>
                  <p className="block pb-2 font-normal leading-none text-white/90 mt-1 text-sm">
                    {card.organizer}
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
