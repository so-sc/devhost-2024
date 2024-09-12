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
  CodeIcon,
  Computer,
  Cookie,
  CookingPot,
  FerrisWheel,
  Gamepad2,
  GitCompareArrows,
  Goal,
  Laptop2,
  LaptopIcon,
  Leaf,
  MicIcon,
  MicVocal,
  Monitor,
  PartyPopper,
  Sandwich,
  ScrollIcon,
  SendToBack,
  Soup,
  Sparkle,
  Sparkles,
  SquareCode,
  Users,
  UsersRound,
  Utensils,
  Workflow,
  Wrench,
} from "lucide-react";
import { PersonIcon } from "@radix-ui/react-icons";
import { Badge } from "@/components/ui/badge";
import { Code } from "mongodb";

const scheduleData = [
  {
    day: "7th November",
    events: [
      {
        icon: <Workflow />,
        title: "Registration",
        time: "08:30 am - 10:00 am",
        description: "",
        speaker: "",
        type: "",
      },
      {
        icon: <ScrollIcon />,
        title: "Inaugration",
        time: "10:00 am - 10:45 am",
        description: "",
        speaker: "",
        type: "",
      },
      {
        icon: <Monitor />,
        title: "Master class I",
        time: "11:00 am - 1:00 pm",
        description: "Learn cool stuff!!!",
        speaker: "TBA",
        type: "Master class",
      },
      {
        icon: <MicVocal />,
        title: "Dev Talk 1",
        time: "11:00 am - 11:45 am",
        description: "TBA",
        speaker: "TBA",
        type: "Talk",
      },
      {
        icon: <MicVocal />,
        title: "Dev Talk 2",
        time: "12:00 am - 12:45 pm",
        description: "TBA",
        speaker: "TBA",
        type: "Talk",
      },
      {
        icon: <Soup />,
        title: "Lunch Break",
        time: "12:45 pm - 02:00 pm",
        description: "",
        speaker: "",
        type: "",
      },
      {
        icon: <Gamepad2 />,
        title: "Valorant",
        time: "02:00 pm - 07:00 pm",
        description: "TBA",
        speaker: "Become the ultimate agent in our Valorant competition!",
        type: "Competition",
      },
      {
        icon: <Wrench />,
        title: "Master class II",
        time: "02:00 pm - 04:00 pm",
        description: "TBA",
        speaker: "TBA",
        type: "Master class",
      },
      {
        icon: <MicVocal />,
        title: "Dev Talk III",
        time: "02:00 pm - 02:45 pm",
        description: "TBA",
        speaker: "TBA",
        type: "Talk",
      },
      {
        icon: <MicVocal />,
        title: "Dev Talk IV",
        time: "03:00 pm - 03:45 pm",
        description: "TBA",
        speaker: "TBA",
        type: "Talk",
      },
    ],
  },
  {
    day: "8th November",
    events: [
      {
        icon: <Workflow />,
        title: "Registration",
        time: "08:00 am - 10:30 am",
        description: "",
        speaker: "",
        type: "",
      },
      {
        icon: <Sparkles />,
        title: "UI Battles",
        time: "09:00 am - 10:45 am",
        description: "",
        speaker: "",
        type: "Competition",
      },
      {
        icon: <SquareCode />,
        title: "Competitive programming",
        time: "09:00 am - 10:15 am",
        description: "Competitive Programming Battle: Unleash Your Coding Prowess",
        speaker: "",
        type: "Competition",
      },
      {
        icon: <Goal />,
        title: "Capture the flag",
        time: "10:30 am - 12:00 am",
        description: "Are you ready for a mind-bending challenge?",
        speaker: "",
        type: "Competition",
      },
      {
        icon: <BrainCircuit />,
        title: "Tech Pitch",
        time: "11:30 am - 1:30 pm",
        description: "Spark Innovation and Inspire Change!",
        speaker: "",
        type: "Competition",
      },
      {
        icon: <CodeIcon />,
        title: "Blind Coding",
        time: "12:00 pm - 01:30 pm",
        description: "Are you a coding mastermind?",
        speaker: "",
        type: "Competition",
      },
      {
        icon: <Soup />,
        title: "Lunch Break",
        time: "12:30 pm - 01:45 pm",
        description: "TBA",
        speaker: "",
        type: "",
      },
      {
        icon: <Gamepad2 />,
        title: "BGMI",
        time: "2:00 pm - 4:00 pm",
        description: "TBA",
        speaker: "",
        type: "Competition",
      },
      {
        icon: <MicVocal />,
        title: "Pre Hackathon talk",
        time: "2:00 am - 02:30 am",
        description: "TBA",
        speaker: "TBA",
        type: "Talk",
      },
      {
        icon: <Bug />,
        title: "Hackathon Kick-off",
        time: "02:30 pm",
        description: "TBA",
        speaker: "",
        type: "Competition",
      },
    ],
  },
  {
    day: "9th November",
    events: [
      {
        icon: <BrainCircuit />,
        title: "Hackathon Judging",
        time: "10:30 am - 01:30 pm",
        description: "On their respective places",
        speaker: "",
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
        <Tabs defaultValue="7th November">
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
                        {event.description}
                      </div>
                      {
                          <time className="block mb-2 font-normal leading-none text-white/60">
                            {event.time}
                          </time> 
                      }
                      <p className="text-base font-normal text-white/85">
                        {event.speaker}
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
