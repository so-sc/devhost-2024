import React from "react";
import Image from "next/image";
import Link from "next/link";

interface CardData {
  id: number;
  title: string;
  date: string;
  description: string;
  speaker: string;
  linkedin: string;
  imageSrc: string;
}

const cardData: CardData[] = [
  {
    id: 1,
    title: "Unlocking Business Potential with Salesforce Cloud",
    date: "23rd, 05:00 pm - 07:00 pm",
    description:
      "Experienced Salesforce Developer specializing in Apex, Triggers, Aura, and LWC, currently serving as the team lead at Novigo Solutions.",
    speaker: "Mohammed Shahid",
    linkedin: "https://www.linkedin.com/in/shahidbit/",
    imageSrc: "shahid.jpg",
  },

  {
    id: 2,
    title: "Exploring DevOps Essentials for Modern Innovation",
    date: "23rd, 07:00 pm - 08:30 pm",
    description:
      "Master of Science and Graduate Research Assistant at The University of Texas at Arlington, USA. Former Java Full Stack Developer at IBM with expertise in Spring Boot, Angular, Cloud, CI/CD, Node.js, and Python.",
    speaker: "Arjun Suvarna",
    linkedin: "https://www.linkedin.com/in/arjun-suvarna/",
    imageSrc: "arjun.jpg",
  },

  {
    id: 3,
    title: "Engineering and UX Synergy",
    date: "24th, 11:00 am - 12:30 pm",
    description:
      "Senior UI/UX Designer at Novigo Solutions with a strong background in graphic design. Former Design Head at SOSC, bringing 5 years of expertise in UI/UX.",
    speaker: "Adib Ghani Ahamed",
    linkedin: "https://www.linkedin.com/in/adib-kalopsia/",
    imageSrc: "adib.jpg",
  },

  {
    id: 4,
    title: "Ask me anything about Placements",
    date: "24th, 02:00 pm - 03:30 pm",
    description:
      "Cloud Solutions Engineer at Google. Formerly led open-source communities, including GitHub Campus Expert, Microsoft LSA, HackClub, Codechef, and SOSC.",
    speaker: "Swasthik Shetty",
    linkedin: "https://www.linkedin.com/in/swaaz/",
    imageSrc: "swaaz.jpg",
  },

  {
    id: 5,
    title: "Promising with JavaScript",
    date: "24th, 03:30 pm - 05:00 pm",
    description:
      "Frontend Developer and the President of Sahyadri Open Source Community, Postman Student Leader at SCEM. Intern at Niveus Solutions, Mangalore. Loves building projects. Exploring Cloud and DevOps.",
    speaker: "Deveesh Shetty",
    linkedin: "https://www.linkedin.com/in/deveesh-shetty/",
    imageSrc: "deveesh.jpeg",
  },
];

export default function Speakers() {
  return (
    <div className="flex justify-center items-center w-full">
      <div className="max-w-5xl my-20">
        <h1 className="select-none text-center text-4xl md:text-5xl font-semibold md:pb-16 pb-10">
          Panel Members
        </h1>
        <div className="grid md:grid-cols-2 gap-10">
          {cardData.map((card) => (
            <div key={card.id} className="md:relative flex flex-col">
              {/* <Image
                className="z-10 md:mt-0 mt-32 rotate-90 md:rotate-0 right-3 md:left-0 absolute w-32"
                src="/smth.svg"
                alt="logo"
                width={500}
                height={500}
              ></Image> */}
              <Image
                className="bg-background md:ml-0 ml-5 border shadow-sm border-white/10 rounded-md z-10 md:flex hidden absolute w-40 h-40 aspect-square"
                src={`/speakers/${card.imageSrc}`}
                alt="speaker"
                width={500}
                height={500}
              ></Image>
              <div className="md:ml-20 speaker_card md:mt-10 border-white/10 border rounded-xl">
                <Image
                  className="bg-background m-5 border shadow-sm border-white/10 rounded-md z-10 flex md:hidden w-40 h-40 aspect-square"
                  src={`/speakers/${card.imageSrc}`}
                  alt="speaker"
                  width={500}
                  height={500}
                ></Image>
                <div className="ml-5 md:mt-5 md:ml-[6.5rem] my-5 md:mr-5 mr-5">
                  <h1 className="leading-6 mb-1 font-semibold text-xl tracking-wider">
                    {card.speaker}
                  </h1>
                  <p className="text-sm tracking-wider py-2">
                    {card.description}
                  </p>
                  <div className="flex justify-between text-primary font-nebulaR tracking-wide">
                    <Link
                      className="underlined_link hover:text-white"
                      href={card.linkedin}
                      target="_blank"
                    >
                      linkedin
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
