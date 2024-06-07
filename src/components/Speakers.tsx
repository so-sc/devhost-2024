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
    title: "Chief Executive Officer at Niveus Solutions Pvt. Ltd.",
    date: "24th, 02:00 pm - 03:30 pm",
    description:
      "Suyog Shetty, Co-founder & CEO at Niveus Solutions, a distinguished Google Cloud consulting company. 15+ years of experience in IT consulting, with expertise in cloud technologies, video broadcasting, and digital transformation. Formerly at Infosys and Wipro. 3-time winner of Google Cloud's Cloud Partner of the Year award.",
    speaker: "Suyog Shetty",
    linkedin: "",
    imageSrc: "suyog_shetty.png",
  },

  {
    id: 1,
    title: "Associate Professor, NITK Surathkal",
    date: "24th, 02:00 pm - 03:30 pm",
    description:
      "Mohit P. Tahiliani, Associate Professor at NITK Surathkal, specialises in Internet Traffic Engineering, focusing on TCP optimizations and Linux queue disciplines. He contributes to open source, co-maintaining TCP modules in ns-3 and contributing 'FQ-PIE' to the Linux kernel v5.6. Mohit holds leadership roles in IEEE Mangalore Subsection, ns-3 consortium, and the India Internet Engineering Society.",
    speaker: "Mohit P. Tahiliani",
    linkedin: "",
    imageSrc: "mohit.png",
  },

  {
    id: 1,
    title: "Co-Founder & CCO, Novigo Solutions Pvt. Ltd.",
    date: "24th, 02:00 pm - 03:30 pm",
    description:
      "Shihab Kalandar is the Co-Founder and Chief Commercial Officer at Novigo Solutions Pvt. Ltd. With over 15 years of experience in Sales & Marketing across the Middle East and North America, he leads the Business Development and Client Relations Team. Shihab started his career at Accenture and TCS, bringing expertise in IT solutions, customer relationship management, and strategic growth to Novigo.",
    speaker: "Shihab Kalandar",
    linkedin: "",
    imageSrc: "shihab.png",
  },

  {
    id: 2,
    title: "Engineer at Apple",
    date: "24th, 02:00 pm - 03:30 pm",
    description:
      "Deekshith Bellare, accomplished engineer at Apple, with 15+ years of experience in tech. Held key positions at Paytm and Robosoft. Expertise spans multiple engineering domains, known for innovative approach and dedication to excellence. Contributes to cutting-edge tech advancements at Apple.",
    speaker: "Deekshith Bellare",
    linkedin: "",
    imageSrc: "deekshith_bellare.png",
  },

  {
    id: 3,
    title: "Chief Growth Officer, Niveus Solutions Pvt. Ltd.",
    date: "24th, 02:00 pm - 03:30 pm",
    description:
      "Shasir Shetty, Chief Growth Officer at Niveus Solutions, driving expansion and strategic initiatives. Expertise in Diversity & Inclusion, Change Management, Management Consulting, HR Consulting, and HR. Fosters inclusive workplaces, guiding Niveus towards growth and innovation.",
    speaker: "Shasir Shetty",
    linkedin: "",
    imageSrc: "shasir_shetty.png",
  },

  {
    id: 4,
    title: "Solution Architect, Niveus Solutions Pvt. Ltd.",
    date: "24th, 02:00 pm - 03:30 pm",
    description:
      "Sujith Kumar, Solution Architect at Niveus Solutions, specializing in cloud, modernization, and migration solutions for BFSI. Brings extensive experience from Infosys, designing and managing modernization projects, ensuring seamless and secure migrations.",
    speaker: "Sujith Kumar",
    linkedin: "",
    imageSrc: "sujith_kumar.png",
  },

  {
    id: 5,
    title: "Cloud Engineer, Niveus Solutions Pvt. Ltd.",
    date: "24th, 02:00 pm - 03:30 pm",
    description:
      "Krishna Prasad N Rao is a Cloud Engineer at Niveus Solutions Pvt. Ltd. He brings valuable experience from his tenure as an assistant professor at N M A M Institute of Technology.",
    speaker: "Krishna Prasad N Rao",
    linkedin: "",
    imageSrc: "krishna_prasad_n_rao.png",
  },

  {
    id: 4,
    title: "Cloud Associate - Development, Niveus Solutions Pvt. Ltd.",
    date: "24th, 02:00 pm - 03:30 pm",
    description:
      "Jaison Dias, a self-taught software developer with 2+ years of experience, specialises in server architecture and infrastructure management. He actively contributes to development at Niveus Solutions Pvt. Ltd., leveraging his expertise in server planning, setup, migrations, and monitoring. Jaison holds three Google Cloud certifications.",
    speaker: "Jaison Dias",
    linkedin: "",
    imageSrc: "jaison.png",
  },

  {
    id: 4,
    title: "Founder, Flashmates.Inc",
    date: "24th, 02:00 pm - 03:30 pm",
    description:
      "Amrth Shenava, an engineer and entrepreneur, graduated with a Bachelor's in Computer Science from Kent State University. He is currently working on Flashmates, a startup building full-stack technology for housing and real estate, with a mission to create a positive impact by solving everyday problems.",
    speaker: "Amrth Shenava",
    linkedin: "",
    imageSrc: "amrth.png",
  },
];

export default function Speakers() {
  return (
    <div className="flex justify-center pb-10 items-center w-full">
      <div className="max-w-5xl mb-20">
        <h1 className="select-none text-center text-3xl md:text-4xl font-semibold md:pb-16 pb-10">
          Speakers & Mentors
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
                  <h1 className="leading-6 mb-1 pt-2 font-semibold text-base text-primary tracking-wider">
                    {card.title}
                  </h1>
                  <p className="text-sm tracking-wider py-2">
                    {card.description}
                  </p>
                  {card.linkedin && (
                    <div className="flex justify-between text-primary font-nebulaR tracking-wide">
                      <Link
                        className="underlined_link hover:text-white"
                        href={card.linkedin}
                        target="_blank"
                      >
                        linkedin
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
