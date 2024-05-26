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
  Leaf,
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
        speaker: "Suyog Shetty",
      },
      {
        icon: <CookingPot />,
        title: "Lunch Break",
        time: "01:00 pm - 01:45 pm",
        description: "",
        speaker: "",
      },
      {
        icon: <Blocks />,
        title: "Web 3 Master Class",
        time: "02:00 pm - 04:15 pm",
        description: "",
        speaker: "Subodh (Ethreal)",
      },
      {
        icon: <Users />,
        title: "Open Networking",
        time: "04:15 pm - 05:00 pm",
        description: "",
        speaker: "",
      },
    ],
  },
  {
    day: "15th June",
    events: [
      {
        icon: <BrainCircuit />,
        title: "Panel Discussion (Placement Ops)",
        time: "10:45 am - 12:30 pm",
        description: "",
        speaker: "Shashir Shetty, Nikhil, Mohit Tahillani",
      },
      {
        icon: <Soup />,
        title: "Lunch Break",
        time: "12:30 pm - 01:30 pm",
        description: "",
        speaker: "",
      },
      {
        icon: <Workflow />,
        title: "Technical Talk",
        time: "01:45 pm - 02:30 pm",
        description: "",
        speaker: "Swasthik Shetty (Google)",
      },
      {
        icon: <Brain />,
        title: "Panel Discussion (MAANG)",
        time: "02:45 pm - 04:15 pm",
        description: "",
        speaker: "Prasanna",
      },
      {
        icon: <Users />,
        title: "Open Networking",
        time: "04:15 pm - 05:00 pm",
        description: "",
        speaker: "",
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
        speaker: "Sujith Kumar & Krishna Prasad Rao",
      },
      {
        icon: <PartyPopper />,
        title: "Participant Feedback",
        time: "04:45 pm - 05:00 pm",
        description: "",
        speaker: "",
      },
    ],
  },
];

const Schedule = () => {
  return (
    <div className="overflow-hidden py-20">
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
