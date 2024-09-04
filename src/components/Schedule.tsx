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
        icon: <Leaf />,
        title: "Inaugration",
        time: "10:45 am - 11:15 am",
        description: "",
        speaker: "",
        type: "",
      },
      {
        icon: <Monitor />,
        title: "CSS Action",
        time: "11:30 pm - 1:30 pm",
        description: "TBA",
        speaker: "Put your web design chops to the test!",
        type: "Competition",
      },
      {
        icon: <MicVocal />,
        title: "Talk 1",
        time: "11:30 am - 12:45 am",
        description: "TBA",
        speaker: "Speaker",
        type: "Talk",
      },
      {
        icon: <MicVocal />,
        title: "Talk 2",
        time: "12:45 am - 01:30 pm",
        description: "TBA",
        speaker: "Speaker",
        type: "Talk",
      },

      {
        icon: <CookingPot />,
        title: "Lunch Break",
        time: "1:30 pm - 02:15 pm",
        description: "",
        speaker: "",
        type: "",
      },

      {
        icon: <Gamepad2 />,
        title: "Valorant",
        time: "02:15 pm - 04:30 pm",
        description: "TBA",
        speaker: "Become the ultimate agent in our Valorant competition!",
        type: "Competition",
      },
      {
        icon: <Wrench />,
        title: "Workshop 1",
        time: "02:15 pm - 04:30 pm",
        description: "TBA",
        speaker: "Speaker",
        type: "Workshop",
      },
    ],
  },
  {
    day: "8th November",
    events: [
      {
        icon: <SquareCode />,
        title: "Competitive programming",
        time: "08:45 am - 9:45 am",
        description: "",
        speaker: "Competitive Programming Battle: Unleash Your Coding Prowess",
        type: "Competition",
      },
      {
        icon: <MicVocal />,
        title: "Talk 1",
        time: "9:45 am - 10:30 am",
        description: "TBA",
        speaker: "Speaker",
        type: "Talk",
      },
      {
        icon: <BrainCircuit />,
        title: "Tech Pitch",
        time: "10:30 am - 1:30 pm",
        description: "TBA",
        speaker: "Spark Innovation and Inspire Change!",
        type: "Competition",
      },
      {
        icon: <Goal />,
        title: "Capture the Flag",
        time: "10:30 am - 12:00 pm",
        description: "TBA",
        speaker: "Are you ready for a mind-bending challenge?",
        type: "Competition",
      },
      {
        icon: <CodeIcon />,
        title: "Blind Coding",
        time: "12:00 pm - 01:30 pm",
        description: "TBA",
        speaker: "Are you a coding mastermind?",
        type: "Competition",
      },
      {
        icon: <Soup />,
        title: "Lunch Break",
        time: "12:45 pm - 01:45 pm",
        description: "TBA",
        speaker: "",
        type: "",
      },
      {
        icon: <Users />,
        title: "Workshop 2",
        time: "02:00 pm - 04:00 pm",
        description: "TBA",
        speaker: "",
        type: "Workshop",
      },
      // {
      //   icon: <SendToBack />,
      //   title: "Hackathon Registration / Onboarding",
      //   time: "03:45 pm - 04:00 pm",
      //   description: "20 Teams to be participating offline in the Venue.",
      //   speaker: "TBA",
      //   type: "",
      // },
      {
        icon: <Bug />,
        title: "Hackathon Kick-off",
        time: "04:00 pm",
        description: "",
        speaker: "",
        type: "",
      },
    ],
  },
  {
    day: "9th November",
    events: [
      {
        icon: <BrainCircuit />,
        title: "Judging Round Starts",
        time: "09:30 am",
        description: "On their respective places",
        speaker: "",
        type: "",
      },
      {
        icon: <Laptop2 />,
        title: "Final Presentation",
        time: "02:00 pm",
        description: "TBA",
        speaker: "",
        type: "",
      },
      {
        icon: <PartyPopper />,
        title: "Valedictory and Prize Distribution",
        time: "04:00 pm",
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
                        {event.speaker}
                      </div>
                      {/* <time className="block mb-2 font-normal leading-none text-white/60">
                        {event.time}
                      </time> */}
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
