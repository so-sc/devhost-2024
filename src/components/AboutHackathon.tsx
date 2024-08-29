import React from "react";

export default function AboutHackathon() {
  interface HackathonData {
    title: string;
    about: string;
    logoSrc: string;
  }

  const hackathonData: HackathonData = {
      title: "About Hackathon",
      about: "Participants form teams to tackle company-funded problem statements. The event includes an introduction, a 22-hour live hack, and a three-phase evaluation: Design, Progress, and Presentation. Judges evaluate teams on approach, ideas, user experience, soft skills, cost, and complexity. The final presentation is offline. Teams can be of any branch. Prizes will be awarded to the top-performing teams. Eligibility is open to all students. Mentors will be available to provide guidance and support throughout the hackathon.",
      logoSrc: "temp.jpg",
    };
  return (
    <div className="flex justify-center pb-10 items-center w-full">
      <div className="max-w-6xl mb-20 w-full event_card md:mt-10 border-white/10 border rounded-xl pt-10 pb-10">
        <h1 className="select-none text-center text-3xl md:text-4xl font-semibold md:pb-0 pb-0">
            {hackathonData.title}
        </h1>
        <div className="grid md:grid-cols-1">
        <div className="md:relative flex flex-col">
          <div className="event_card md:mt-10 border-none rounded-xl">
            <div className="ml-5 md:mt-5 md:ml-[6.5rem] my-5 md:mr-[6.5rem] mr-5">
              <p className="text-lg tracking-wider py-2 ">
              {hackathonData.about}
              </p>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
