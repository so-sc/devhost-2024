import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Binary,
  BookCheckIcon,
  Bug,
  Computer,
  CookingPot,
  GitCompareArrows,
  Laptop2,
  Leaf,
  PartyPopper,
  ScrollIcon,
  Soup,
  Sparkle,
  Sparkles,
  Users,
} from "lucide-react";

const scheduleData = [
  {
    day: "14th June",
    events: [
      {
        icon: <Leaf />,
        title: "Inauguration",
        time: "9:00 am - 10:30 am",
        description: "",
      },
      {
        icon: <GitCompareArrows />,
        title: "Technical Talk - Chief Guest",
        time: "10:45 am - 12:30 pm",
        description: "",
      },
      {
        icon: <CookingPot />,
        title: "Lunch Break",
        time: "12:30 pm - 02:00 pm",
        description: "",
      },
      {
        icon: <Users />,
        title: "Panel Discussion",
        time: "02:00 pm - 04:30 pm",
        description:
          "Founders and CEO's of Mangalore, in collaboration with TiE Mangalore.",
      },
    ],
  },
  {
    day: "15th June",
    events: [
      {
        icon: <Sparkles />,
        title: "Informal inaugural of Hackathon",
        time: "9:00 am",
        description: "",
      },
      {
        icon: <Bug />,
        title: "Hackathon Begins",
        time: "10:00 am",
        description: "30 Teams to be participating offline in the Venue.",
      },
      {
        icon: <ScrollIcon />,
        title: "Abstract Submission",
        time: "12:30 pm - 02:00 pm",
        description:
          "Teams will be asked to submit their respective abstracts.",
      },
      {
        icon: <BookCheckIcon />,
        title: "1st Round Evaluation",
        time: "Evening",
        description: "Judges will evaluate your progress.",
      },
    ],
  },
  {
    day: "16th June",
    events: [
      {
        icon: <Binary />,
        title: "Hackathon Ends",
        time: "10:00 am",
        description: "Final evaluation and presentation round begins.",
      },
      {
        icon: <Laptop2 />,
        title: "Presentation Ends",
        time: "12:00 pm",
        description: "",
      },
      {
        icon: <Soup />,
        title: "Lunch Break",
        time: "12:00 pm - 01:00 pm",
        description: "Enjoy your meal while judges finalize the winners.",
      },
      {
        icon: <PartyPopper />,
        title: "Valefictory Function",
        time: "01:00 pm - 02:00 pm",
        description: "Prize Distribution.",
      },
    ],
  },
];

const Schedule = () => {
  return (
    <div className="overflow-hidden py-20">
      <h1 className="select-none text-center text-4xl md:text-5xl font-semibold md:pb-10 pb-5">
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
                      <h3 className="flex items-center mb-2 text-xl font-semibold">
                        {event.title}
                      </h3>
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
