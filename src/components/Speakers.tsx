import Image from "next/image";
import Link from "next/link";
import React from "react";

interface CardData {
  id: number;
  title: string;
  description: string;
  speaker: string;
  linkedin: string;
  imageSrc: string;
}

const cardData: CardData[] = [
  {
    id: 1,
    title: "Chief Executive Officer at Niveus Solutions Pvt. Ltd.",
    description:
      "Suyog Shetty, Co-founder & CEO at Niveus Solutions, a distinguished Google Cloud consulting company. 15+ years of experience in IT consulting, with expertise in cloud technologies, video broadcasting, and digital transformation. Formerly at Infosys and Wipro. 3-time winner of Google Cloud's Cloud Partner of the Year award.",
    speaker: "Suyog Shetty",
    linkedin: "",
    imageSrc: "suyog_shetty.png",
  },

  {
    id: 2,
    title: "Principal Program Manager, Azure Microsoft, Seattle",
    description:
      "Ram Balakrishnan is the Principal Program Manager for Cloud Networking at Azure Networking. He is a strategic leader with hands-on network engineering expertise, known for fostering collaborative environments and achieving high-priority objectives. Ram has led global cloud network architecture initiatives, holds patents in intelligent routing algorithms, and authored a book on Advanced QoS for Multi-service IP/MPLS Networks.",
    speaker: "Ram Balakrishnan",
    linkedin: "",
    imageSrc: "ram-b.png",
  },

  {
    id: 3,
    title: "Former Head of Talent Management, TCS Europe",
    description:
      "Nikhil Raj is a seasoned professional with 25+ years of experience in talent supply chain management, workforce operations, and technical consulting, having held multiple leadership roles at TCS and founding PY Head Hunting, a staffing firm for startups.",
    speaker: "Nikhil Raj",
    linkedin: "",
    imageSrc: "nikhil-raj.png",
  },

  {
    id: 4,
    title: "Lead, Big Data Center of Excellence, TCS BFSI",
    description: "",
    speaker: "Prasanna",
    linkedin: "",
    imageSrc: "prasanna.png",
  },

  {
    id: 5,
    title: "Blockchain Developer, æ Labs",
    description:
      "Subodh I is a Blockchain Developer at æLabs, specialising in architecting robust systems with distributed ledger technologies. A contributor to Hyperledger Caliper, uPort, Quorum, and minor Ethereum projects on GitHub, Subhod emphasises going distributed if not decentralised. He is involved in blockchain research and development, cryptography, and exploring functional programming with Haskell.",
    speaker: "Subodh I",
    linkedin: "",
    imageSrc: "subodh.png",
  },

  {
    id: 6,
    title: "Associate Professor, NITK Surathkal",
    description:
      "Mohit P. Tahiliani, Associate Professor at NITK Surathkal, specialises in Internet Traffic Engineering, focusing on TCP optimizations and Linux queue disciplines. He contributes to open source, co-maintaining TCP modules in ns-3 and contributing 'FQ-PIE' to the Linux kernel v5.6. Mohit holds leadership roles in IEEE Mangalore Subsection, ns-3 consortium, and the India Internet Engineering Society.",
    speaker: "Mohit P. Tahiliani",
    linkedin: "",
    imageSrc: "mohit.png",
  },

  {
    id: 7,
    title: "Co-Founder & CCO, Novigo Solutions Pvt. Ltd.",
    description:
      "Shihab Kalandar is the Co-Founder and Chief Commercial Officer at Novigo Solutions Pvt. Ltd. With over 15 years of experience in Sales & Marketing across the Middle East and North America, he leads the Business Development and Client Relations Team. Shihab started his career at Accenture and TCS, bringing expertise in IT solutions, customer relationship management, and strategic growth to Novigo.",
    speaker: "Shihab Kalandar",
    linkedin: "",
    imageSrc: "shihab.png",
  },

  {
    id: 8,
    title: "Chief Architect (Enterprise), Niveus Solutions Pvt. Ltd.",
    description:
      "Sagar Vaidya is a seasoned cloud architect and DevOps engineer, with 17+ years of experience, specializing in designing and delivering high-performance cloud systems, proficient in GCP, AWS, NodeJS, Java, Python, and DevOps, with a passion for staying updated with the latest technologies and a proven track record of building scalable and secure solutions.",
    speaker: "Sagar Vaidya",
    linkedin: "",
    imageSrc: "sagar.png",
  },

  {
    id: 9,
    title: "Chief Growth Officer, Niveus Solutions Pvt. Ltd.",
    description:
      "Shasir Shetty, Chief Growth Officer at Niveus Solutions, driving expansion and strategic initiatives. Expertise in Diversity & Inclusion, Change Management, Management Consulting, HR Consulting, and HR. Fosters inclusive workplaces, guiding Niveus towards growth and innovation.",
    speaker: "Shashir Shetty",
    linkedin: "",
    imageSrc: "shasir_shetty.png",
  },

  {
    id: 10,
    title: "Founder, Abhyudaya Softech",
    description:
      "Akshay Kumar U is the founder of Abhyudaya Softech, focusing on transforming B2C brands with innovative tech solutions. He has expertise in developing e-commerce features and integrating music SDKs like Spotify and Apple Music. With a BE in Computer Science from Bangalore Institute of Technology and four years of experience in Flutter, Firebase, and Native Android, Akshay is an award-winning developer and active speaker at tech events.",
    speaker: "Akshay Kumar U",
    linkedin: "",
    imageSrc: "akshay-kumar.png",
  },

  {
    id: 11,
    title: "Cloud Specialist - DevOps, Niveus Solutions Pvt. Ltd.",
    description: "",
    speaker: "Roshan Y",
    linkedin: "",
    imageSrc: "rohan.jpg",
  },

  {
    id: 12,
    title: "Cloud Engineer - DevOps, Niveus Solutions Pvt. Ltd.",
    description: "",
    speaker: "Pruthvija Shetty",
    linkedin: "",
    imageSrc: "pruthvija.jpg",
  },

  {
    id: 11,
    title: "Cloud Leader - Architecture, Niveus Solutions Pvt. Ltd.",
    description: "",
    speaker: "Rajesh Nayak",
    linkedin: "",
    imageSrc: "rajesh.jpg",
  },

  {
    id: 11,
    title: "Engineering Manager, UniCourt Inc.",
    description:
      "John Fernandes is an Engineering Manager at UniCourt, specialising in legal data and analytics solutions. With a Bachelor of Engineering in Computer Science and over 7 years of software engineering experience, he leads a team of 20+ developers. John excels in building scalable APIs, optimising system performance, and delivering data-driven insights to enterprise clients. He is passionate about learning new technologies and staying updated with industry trends.",
    speaker: "John Fernandes",
    linkedin: "",
    imageSrc: "john-f.png",
  },

  {
    id: 12,
    title: "DevOps Engineer, Pace Wisdom Solutions",
    description:
      "Nibraz Rehaman is a DevOps Engineer at Pace Wisdom Solutions with a strong passion for DevOps practices. He holds a Microsoft certification as an Azure Administrator Associate (az-104) and has expertise in AWS, Terraform, Ansible, CI/CD, Git, Grafana, Prometheus, and Sonarqube. Nibraz is dedicated to optimising and automating processes to enhance efficiency and reliability in software development and deployment.",
    speaker: "Nibraz Rehaman",
    linkedin: "",
    imageSrc: "nibraz.png",
  },

  {
    id: 13,
    title: "Cloud Associate - Development, Niveus Solutions Pvt. Ltd.",
    description:
      "Jaison Dias, a self-taught software developer with 2+ years of experience, specialises in server architecture and infrastructure management. He actively contributes to development at Niveus Solutions Pvt. Ltd., leveraging his expertise in server planning, setup, migrations, and monitoring. Jaison holds three Google Cloud certifications.",
    speaker: "Jaison Dias",
    linkedin: "",
    imageSrc: "jaison.png",
  },

  {
    id: 14,
    title: "Founder, Flashmates.Inc",
    description:
      "Amrth Shenava, an engineer and entrepreneur, graduated with a Bachelor's in Computer Science from Kent State University. He is currently working on Flashmates, a startup building full-stack technology for housing and real estate, with a mission to create a positive impact by solving everyday problems.",
    speaker: "Amrth Shenava",
    linkedin: "",
    imageSrc: "amrth.png",
  },

  // {
  //   id: 15,
  //   title: "Solution Architect, Niveus Solutions Pvt. Ltd.",
  //
  //   description:
  //     "Sujith Kumar, Solution Architect at Niveus Solutions, specializing in cloud, modernization, and migration solutions for BFSI. Brings extensive experience from Infosys, designing and managing modernization projects, ensuring seamless and secure migrations.",
  //   speaker: "Sujith Kumar",
  //   linkedin: "",
  //   imageSrc: "sujith_kumar.png",
  // },

  // {
  //   id: 16,
  //   title: "Cloud Engineer, Niveus Solutions Pvt. Ltd.",
  //
  //   description:
  //     "Krishna Prasad N Rao is a Cloud Engineer at Niveus Solutions Pvt. Ltd. He brings valuable experience from his tenure as an assistant professor at N M A M Institute of Technology.",
  //   speaker: "Krishna Prasad N Rao",
  //   linkedin: "",
  //   imageSrc: "krishna_prasad_n_rao.png",
  // },
];

export default function Speakers() {
  return (
    <div className="flex justify-center pb-10 items-center w-full">
      <div className="max-w-6xl mb-20">
        <h1 className="select-none text-center text-3xl md:text-4xl font-semibold md:pb-16 pb-10">
          Speakers & Mentors
        </h1>
        <div className="grid md:grid-cols-2 gap-10">
          {cardData.map((card) => (
            <div key={card.id} className="md:relative flex flex-col">
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
