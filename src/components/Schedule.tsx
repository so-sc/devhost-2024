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
  CookingPot,
  GitCompareArrows,
  Laptop2,
  LaptopIcon,
  Leaf,
  MicIcon,
  PartyPopper,
  ScrollIcon,
  SendToBack,
  Soup,
  Sparkle,
  Sparkles,
  Users,
  UsersRound,
  Workflow,
} from "lucide-react";
import { PersonIcon } from "@radix-ui/react-icons";

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
      },
      {
        icon: <GitCompareArrows />,
        title: "Technical Talk",
        time: "10:00 am - 10:45 am",
        description: "",
        speaker: "Niveus Solutions Pvt. Ltd.",
      },
      {
        icon: <LaptopIcon />,
        title: "Hands-on Workshop",
        time: "11:00 am - 12:15 pm",
        description: "",
        speaker: "To be revealed soon",
      },
      {
        icon: <Users />,
        title: "Open Networking",
        time: "12:15 pm - 12:45 pm",
        description: "",
        speaker: "Discuss and Interact with the speakers and guests",
      },
      {
        icon: <CookingPot />,
        title: "Lunch Break",
        time: "12:45 pm - 01:45 pm",
        description: "",
        speaker: "",
      },
      {
        icon: <Blocks />,
        title: "Technical Master Class - I",
        time: "01:45 pm - 04:00 pm",
        description: "",
        speaker: "To be revealed soon",
      },
      {
        icon: <Binary />,
        title: "Technical Master Class - II",
        time: "01:45 pm - 04:00 pm",
        description: "",
        speaker: "To be revealed soon",
      },
      {
        icon: <Users />,
        title: "Open Networking",
        time: "04:00 pm - 05:00 pm",
        description: "",
        speaker: "Discuss and Interact with the speakers and guests",
      },
    ],
  },
  {
    day: "15th June",
    events: [
      {
        icon: <MicIcon />,
        title: "Developer Talk",
        time: "09:30 am - 10:15 am",
        description: "",
        speaker: "To be revealed soon",
      },
      {
        icon: <BrainCircuit />,
        title: "Panel Discussion - InnoConnect Mangalore",
        time: "10:30 am - 11:00 am",
        description: "",
        speaker: "To be revealed soon",
      },
      {
        icon: <Binary />,
        title: "Technical Talk",
        time: "11:15 am - 12:00 pm",
        description: "",
        speaker: "To be revealed soon",
      },
      {
        icon: <Users />,
        title: "Open Networking",
        time: "12:15 pm - 12:45 pm",
        description: "",
        speaker: "Discuss and Interact with the speakers and guests",
      },
      {
        icon: <Soup />,
        title: "Lunch Break",
        time: "12:45 pm - 01:45 pm",
        description: "",
        speaker: "To be revealed soon",
      },
      {
        icon: <Brain />,
        title: "Panel Discussion - Placements opportunities in tech",
        time: "01:45 pm - 02:15 pm",
        description: "",
        speaker: "To be revealed soon",
      },
      {
        icon: <Workflow />,
        title: "Technical Talk",
        time: "01:45 pm - 02:30 pm",
        description: "",
        speaker: "To be revealed soon",
      },

      {
        icon: <Workflow />,
        title: "Technical Talk",
        time: "01:45 pm - 02:30 pm",
        description: "",
        speaker: "To be revealed soon",
      },
      {
        icon: <Brain />,
        title: "Panel Discussion (MAANG)",
        time: "02:45 pm - 04:15 pm",
        description: "",
        speaker: "To be revealed soon",
      },
      {
        icon: <Users />,
        title: "Open Networking",
        time: "04:15 pm - 05:00 pm",
        description: "",
        speaker: "To be revealed soon",
      },
      {
        icon: <SendToBack />,
        title: "Hackathon Registration / Onboarding",
        time: "05:00 pm - 05:30 pm",
        description: "30 Teams to be participating offline in the Venue.",
      },
      {
        icon: <Bug />,
        title: "Hackathon Begins",
        time: "06:00 pm",
        description: "30 Teams to be participating offline in the Venue.",
      },
      {
        icon: <ScrollIcon />,
        title: "Abstract Submission",
        time: "08:00 pm",
        description:
          "Teams will be asked to submit their respective abstracts.",
      },
    ],
  },
  {
    day: "16th June",
    events: [
      {
        icon: <Code2 />,
        title: "Hackathon Ends + Evaluation",
        time: "02:00 pm",
        description: "7+3 minutes presentation & QnA (Per team)",
      },
      {
        icon: <Laptop2 />,
        title: "Keynote by Judges",
        time: "04:30 pm - 04:45 pm",
        description: "",
        speaker: "To be revealed soon",
      },
      {
        icon: <PartyPopper />,
        title: "Participant Feedback",
        time: "04:45 pm - 05:00 pm",
        description: "",
        speaker: "To be revealed soon",
      },
    ],
  },
];

const Schedule = () => {
  return (
    <div className="overflow-hidden pt-20 pb-20">
      <h1 className="select-none text-center text-4xl md:text-5xl font-semibold md:pb-10 pb-6">
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
                      <h3 className="flex items-center text-xl font-semibold">
                        {event.title}
                      </h3>
                      <div className="mb-2 text-primary tracking-wide">
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
