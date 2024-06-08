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
        title: "Learn from My Mistakes: CEO Lessons Learned",
        time: "10:00 am - 11:00 am",
        description: "Ground Floor Seminar Hall",
        speaker: "Suyog Shetty (Growth of Niveus)",
      },
      {
        icon: <LaptopIcon />,
        title:
          "The Multiverse of OS: A Deep Dive into Dual Boot, VMs, and Containers",
        time: "11:15 am - 12:15 pm",
        description: "Ground Floor Seminar Hall",
        speaker: "Nibraz Rehman",
      },
      {
        icon: <Users />,
        title: "Open Networking",
        time: "12:15 pm - 12:45 pm",
        description: "Open Area Lounge",
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
        title: "Level Up Your Web3 Game using Smart Contracts",
        time: "01:45 pm - 04:00 pm",
        description: "Skill Lab - 2",
        speaker: "Subodh (Ethreal)",
      },

      {
        icon: <Users />,
        title: "Open Networking",
        time: "04:00 pm - 05:00 pm",
        description: "Open Area Lounge",
        speaker: "Discuss and Interact with the speakers and guests",
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
      },
      {
        icon: <Binary />,
        title: "Unlock Your Earning Potential: From Engineering to Corporate",
        time: "10:30 am - 11:15 am",
        description: "Ground Floor Seminar Hall",
        speaker: "Nikhil Raj",
      },
      {
        icon: <BrainCircuit />,
        title:
          "From Coastal Town to IT Hub: The Rise of Mangalore's IT Industry",
        time: "11:30 am - 12:00 am",
        description: "",
        speaker: "Shashir Shetty (Mod), Shihab Kalander, John Fernandes",
      },
      // {
      //   icon: <Binary />,
      //   title: "Technical Talk",
      //   time: "11:15 am - 12:00 pm",
      //   description: "",
      //   speaker: "To be revealed soon",
      // },
      {
        icon: <Users />,
        title: "Open Networking",
        time: "12:15 pm - 12:45 pm",
        description: "Open Area Lounge",
        speaker: "Discuss and Interact with the speakers and guests",
      },
      {
        icon: <Soup />,
        title: "Lunch Break",
        time: "12:45 pm - 01:45 pm",
        description: "",
        speaker: "",
      },
      {
        icon: <Brain />,
        title:
          "Cracking the MAANG Code: What It Takes to Get Hired in Top IT Companies",
        time: "01:45 pm - 02:15 pm",
        description: "Ground Floor Seminar Hall",
        speaker: "Nikhil Raj (mod), Prasanna, Balakrishnan (Remotely)",
      },
      {
        icon: <Workflow />,
        title: "10X Your API Productivity: Mastering APIs using Postman",
        time: "02:30 pm - 04:30 pm",
        description: "Skill Lab 1",
        speaker: "Mohit Tahiliani",
      },
      {
        icon: <Laptop2 />,
        title: "GEN AI for Dummies: A Beginner's Guide to LLMS",
        time: "02:30 pm - 04:30 pm",
        description: "Skill Lab 2",
        speaker: "Akshay Kumar U",
      },
      {
        icon: <Users />,
        title: "Open Networking",
        time: "04:30 pm - 05:00 pm",
        description: "Open Area Lounge",
        speaker: "Discuss and Interact with the speakers and guests",
      },
      {
        icon: <SendToBack />,
        title: "Hackathon Registration / Onboarding",
        time: "05:00 pm - 05:30 pm",
        description: "20 Teams to be participating offline in the Venue.",
        speaker: "Ground Floor Seminar Hall",
      },
      {
        icon: <Bug />,
        title: "Hackathon Kick-off",
        time: "06:00 pm",
        description: "",
        speaker: "",
      },
      {
        icon: <Utensils />,
        title: "Dinner Window (by us)",
        time: "07:30 pm - 09:30 pm",
        description: "",
        speaker: "",
      },
      {
        icon: <Users />,
        title: "First round judging (3 +2) minutes",
        time: "09:00 pm - 11:00 pm",
        description: "On their respective places",
        speaker: "",
      },
    ],
  },
  {
    day: "16th June",
    events: [
      {
        icon: <Sandwich />,
        title: "Midnight Snacks (by us)",
        time: "12:00 am - 04:00 am",
        description: "",
        speaker: "",
      },
      {
        icon: <BrainCircuit />,
        title: "Mentoring",
        time: "12:00 am - 04:00 am",
        description: "On their respective places",
        speaker: "Jaison Dias, Amrit Shenava",
      },
      {
        icon: <Cookie />,
        title: "Breakfast Window (not by us)",
        time: "08:00 am - 10:00 am",
        description: "",
        speaker: "",
      },
      {
        icon: <Users />,
        title: "Second round judging (7 +3) minutes",
        time: "08:00 am - 12:00 pm",
        description: "On their respective places",
        speaker: "",
      },
      {
        icon: <Code2 />,
        title: "Declaration of Top 8 Teams",
        time: "12:00 pm",
        description: "",
        speaker: "",
      },
      {
        icon: <FerrisWheel />,
        title: "Quizzes and Fun activities (not selected teams)",
        time: "12:00 pm - 02:00 pm",
        description: "",
        speaker: "Open Area Lounge",
      },
      {
        icon: <Soup />,
        title: "Lunch Window (not by us)",
        time: "12:00 pm - 03:00 pm",
        description: "",
        speaker: "",
      },
      {
        icon: <Code2 />,
        title: "Hackathon Ends + Presentation",
        time: "02:00 pm - 04:00 pm",
        description: "Ground Floor Seminar Hall",
      },
      {
        icon: <Laptop2 />,
        title: "Keynote by Judges",
        time: "04:00 pm - 04:30 pm",
        description: "Ground Floor Seminar Hall",
        speaker: "",
      },
      {
        icon: <PartyPopper />,
        title: "Valedictory and Prize Distribution",
        time: "04:30 pm - 05:00 pm",
        description: "",
        speaker: "May the prize be with you!",
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
                      <h3 className="flex items-center md:text-xl text-lg tracking-wider font-semibold">
                        {event.title}
                      </h3>
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
