import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Binary,
  Blocks,
  BookCheckIcon,
  Brain,
  BrainCircuit,
  Bug,
  Code2,
  Computer,
  Cookie,
  CookingPot,
  FerrisWheel,
  GitCompareArrows,
  Laptop2,
  LaptopIcon,
  Leaf,
  MicIcon,
  PartyPopper,
  Sandwich,
  ScrollIcon,
  SendToBack,
  Soup,
  Sparkle,
  Sparkles,
  Users,
  UsersRound,
  Utensils,
  Workflow,
} from "lucide-react";
import { PersonIcon } from "@radix-ui/react-icons";
import { Badge } from "@/components/ui/badge";

const scheduleData = [
  {
    day: "14th June",
    events: [
      {
        icon: <Leaf />,
        title: "Inaugural Keynote",
        time: "9:00 am - 09:30 am",
        description: "",
        speaker: "",
        type: "",
      },
      {
        icon: <GitCompareArrows />,
        title:
          "From Passion to Profit: Niveus' Journey from Startup to Scalability",
        time: "10:00 am - 11:00 am",
        description: "Ground Floor Seminar Hall",
        speaker: "Suyog Shetty",
        type: "Talk",
      },
      {
        icon: <LaptopIcon />,
        title:
          "The Multiverse of OS: A Deep Dive into Dual Boot, VMs, and Containers",
        time: "11:15 am - 12:15 pm",
        description: "Ground Floor Seminar Hall",
        speaker: "Nibraz Rehman",
        type: "Talk",
      },
      {
        icon: <Users />,
        title: "Open Networking",
        time: "12:15 pm - 12:45 pm",
        description: "Open Area Lounge",
        speaker: "Discuss and Interact with the speakers and guests",
        type: "",
      },
      {
        icon: <CookingPot />,
        title: "Lunch Break",
        time: "12:45 pm - 01:45 pm",
        description: "",
        speaker: "",
        type: "",
      },

      {
        icon: <Computer />,
        title: "DevOps Fundamentals: Building a Strong Foundation",
        time: "01:45 pm - 04:00 pm",
        description: "Skill Lab - 1",
        speaker: "Rajesh Nayak, Pruthvija Shetty, Roshan Y",
        type: "Master Class",
      },

      {
        icon: <Blocks />,
        title: "Level Up Your Web3 Game using Smart Contracts",
        time: "01:45 pm - 04:00 pm",
        description: "Skill Lab - 2",
        speaker: "Subodh",
        type: "Master Class",
      },

      {
        icon: <Users />,
        title: "Open Networking",
        time: "04:00 pm - 05:00 pm",
        description: "Open Area Lounge",
        speaker: "Discuss and Interact with the speakers and guests",
        type: "",
      },
    ],
  },
  {
    day: "15th June",
    events: [
      {
        icon: <MicIcon />,
        title: "Something Interesting 👀",
        time: "09:30 am - 10:15 am",
        description: "",
        speaker: "To be revealed soon",
        type: "Talk",
      },
      {
        icon: <Binary />,
        title: "Unlock Your Earning Potential: From Engineering to Corporate",
        time: "10:30 am - 11:15 am",
        description: "Ground Floor Seminar Hall",
        speaker: "Nikhil Raj",
        type: "Talk",
      },
      {
        icon: <BrainCircuit />,
        title:
          "From Coastal Town to IT Hub: The Rise of Mangalore's IT Industry",
        time: "11:30 am - 12:00 am",
        description: "Ground Floor Seminar Hall",
        speaker: "Shashir Shetty, Shihab Kalander, John Fernandes",
        type: "Panel Discussion",
      },
      // {
      //   icon: <Binary />,
      //   title: "Technical Talk",
      //   time: "11:15 am - 12:00 pm",
      //   description: "",
      //   speaker: "To be revealed soon",
      //   type: "",
      // },
      {
        icon: <Users />,
        title: "Open Networking",
        time: "12:15 pm - 12:45 pm",
        description: "Open Area Lounge",
        speaker: "Discuss and Interact with the speakers and guests",
        type: "",
      },
      {
        icon: <Soup />,
        title: "Lunch Break",
        time: "12:45 pm - 01:45 pm",
        description: "",
        speaker: "",
        type: "",
      },
      {
        icon: <Brain />,
        title:
          "Cracking the MAANG Code: What It Takes to Get Hired in Top IT Companies",
        time: "01:45 pm - 02:15 pm",
        description: "Ground Floor Seminar Hall",
        speaker: "Nikhil Raj, Prasanna, Ram Balakrishnan",
        type: "Panel Discussion",
      },
      {
        icon: <Workflow />,
        title: "10X Your API Productivity: Mastering APIs using Postman",
        time: "02:30 pm - 04:30 pm",
        description: "Skill Lab 1",
        speaker: "Mohit P. Tahiliani",
        type: "Master Class",
      },
      {
        icon: <Laptop2 />,
        title: "GEN AI for Dummies: A Beginner's Guide to LLMS",
        time: "02:30 pm - 04:30 pm",
        description: "Skill Lab 2",
        speaker: "Akshay Kumar U",
        type: "Master Class",
      },
      {
        icon: <Users />,
        title: "Open Networking",
        time: "04:30 pm - 05:00 pm",
        description: "Open Area Lounge",
        speaker: "Discuss and Interact with the speakers and guests",
        type: "",
      },
      {
        icon: <SendToBack />,
        title: "Hackathon Registration / Onboarding",
        time: "05:00 pm - 05:30 pm",
        description: "20 Teams to be participating offline in the Venue.",
        speaker: "Ground Floor Seminar Hall",
        type: "",
      },
      {
        icon: <Bug />,
        title: "Hackathon Kick-off",
        time: "06:00 pm",
        description: "",
        speaker: "",
        type: "",
      },
      // {
      //   icon: <Utensils />,
      //   title: "Dinner Window",
      //   time: "07:30 pm - 09:30 pm",
      //   description: "",
      //   speaker: "",
      //   type: "",
      // },
      // {
      //   icon: <Users />,
      //   title: "First round judging",
      //   time: "09:00 pm - 11:00 pm",
      //   description: "On their respective places",
      //   speaker: "",
      //   type: "",
      // },
    ],
  },
  {
    day: "16th June",
    events: [
      // {
      //   icon: <Sandwich />,
      //   title: "Midnight Snacks",
      //   time: "12:00 am - 04:00 am",
      //   description: "",
      //   speaker: "",
      //   type: "",
      // },
      {
        icon: <BrainCircuit />,
        title: "Mentoring",
        time: "12:00 am - 04:00 am",
        description: "On their respective places",
        speaker: "Jaison Dias, Amrit Shenava",
        type: "",
      },
      // {
      //   icon: <Cookie />,
      //   title: "Breakfast Window",
      //   time: "08:00 am - 10:00 am",
      //   description: "",
      //   speaker: "",
      //   type: "",
      // },
      // {
      //   icon: <Users />,
      //   title: "Second round judging",
      //   time: "08:00 am - 12:00 pm",
      //   description: "On their respective places",
      //   speaker: "",
      //   type: "",
      // },
      // {
      //   icon: <Code2 />,
      //   title: "Declaration of Top 8 Teams",
      //   time: "12:00 pm",
      //   description: "",
      //   speaker: "",
      //   type: "",
      // },
      // {
      //   icon: <FerrisWheel />,
      //   title: "Quizzes and Fun activities",
      //   time: "12:00 pm - 02:00 pm",
      //   description: "",
      //   speaker: "Open Area Lounge",
      //   type: "",
      // },
      // {
      //   icon: <Soup />,
      //   title: "Lunch Window",
      //   time: "12:00 pm - 03:00 pm",
      //   description: "",
      //   speaker: "",
      //   type: "",
      // },
      {
        icon: <Code2 />,
        title: "Hackathon Ends + Presentation",
        time: "02:00 pm - 04:00 pm",
        description: "Ground Floor Seminar Hall",
        type: "",
      },
      {
        icon: <Laptop2 />,
        title: "Keynote by Judges",
        time: "04:00 pm - 04:30 pm",
        description: "Ground Floor Seminar Hall",
        speaker: "",
        type: "",
      },
      {
        icon: <PartyPopper />,
        title: "Valedictory and Prize Distribution",
        time: "04:30 pm - 05:00 pm",
        description: "",
        speaker: "May the prize be with you!",
        type: "",
      },
    ],
  },
];

const Schedule = () => {
  return (
    <div className="overflow-hidden pt-20 pb-20">
      <h1 className="select-none text-center text-3xl md:text-4xl font-semibold md:pb-10 pb-6">
        Schedule
      </h1>
      <div className="mx-auto max-w-7xl px-5">
        <Tabs defaultValue="14th June">
          <div className="flex justify-center items-center">
            <TabsList>
              {scheduleData.map((day) => (
                <TabsTrigger key={day.day} value={day.day}>
                  {day.day.charAt(0).toUpperCase() + day.day.slice(1)}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          {scheduleData.map((day) => (
            <TabsContent key={day.day} value={day.day} className="pt-10">
              <div className="max-w-2xl mx-auto">
                <ol className="relative border-s border-primary">
                  {day.events.map((event, index) => (
                    <li key={index} className="mb-10 ms-10">
                      <span className="absolute flex items-center justify-center w-10 h-10 bg-background rounded-full -start-5 ring-8 ring-background">
                        {event.icon}
                      </span>
                      <div className="flex mb-2 items-center md:text-xl text-lg tracking-wider font-semibold">
                        <span>
                          {event.title}{" "}
                          {event.type && <Badge>{event.type}</Badge>}
                        </span>
                      </div>
                      <div className="mb-2 text-primary md:text-base text-sm tracking-wider">
                        {event.speaker}
                      </div>
                      <time className="block mb-2 font-normal leading-none text-white/60">
                        {event.time}
                      </time>
                      <p className="text-base font-normal text-white/85">
                        {event.description}
                      </p>
                    </li>
                  ))}
                </ol>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default Schedule;
