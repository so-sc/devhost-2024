import React from "react";

export default function AboutDevhost() {
  interface DevhostData {
    title: string;
    caption: string;
    about: string;
    logoSrc: string;
  }

  const devhostData: DevhostData = {
      title: "About Devhost",
      caption: "Where Curiosity Meets Expertise",
      about: "Devhost, the flagship event is a remarkable tech convergence by Sahyadri Open Source Community (SOSC) , is set to be an exhilarating experience with an exciting mix of technical and non-technical events. It seeks to equip participants with knowledge and skills, while encouraging curiosity and fostering innovation. With a variety of tech and non-tech battles and events featuring dev talks and workshops led by industry experts, it creates opportunities for both personal development and self-exploration. Join the 22 hour live hack event to bring your ideas to fruition, with challenges designed for every level of experience.",
      logoSrc: "temp.jpg",
    };
  return (
    <div className="flex justify-center pb-10 items-center w-full">
      <div className="max-w-6xl mb-20 w-full md:ml-20 event_card md:mt-10 border-white/10 border rounded-xl pt-10 pb-10">
        <h1 className="select-none text-center text-3xl md:text-4xl font-semibold md:pb-0 pb-0">
            {devhostData.title}
        </h1>
        <div className="grid md:grid-cols-1">
        <div className="md:relative flex flex-col">
          <div className="md:ml-20 event_card md:mt-10 border-none rounded-xl">
            <div className="ml-5 md:mt-5 md:ml-[6.5rem] my-5 md:mr-5 mr-5">
              <h1 className="leading-6 mb-1 pt-2 font-semibold text-base text-primary tracking-wider">
                {devhostData.caption}
              </h1>
              <p className="text-lg tracking-wider py-2 ">
              {devhostData.about}
              </p>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
