import React from "react";
import Image from "next/image";
import Link from "next/link";
const Sponsors = () => {
  return (
    <div>
      <h1 className="select-none text-center text-3xl md:text-4xl font-semibold pb-20">
        Sponsors
      </h1>
      <div className="overflow-hidden gap-20 grid lg:grid-cols-3 md:grid-cols-2 flex-col pb-40">
        <div>
          <h1 className="select-none text-center text-xl md:text-2xl font-semibold">
            Title Sponsor
          </h1>
          <div className="flex flex-col justify-center items-center h-full max-w-7xl p-5">
            <Image
              priority
              src="/niveus_logo_white.png"
              alt="logo"
              className="w-40 h-7 mx-auto"
              width={500}
              height={500}
            />
            <p className="text-center text-primary text-sm tracking-wide pt-4">
              Niveus Solutions Pvt. Ltd.
            </p>
          </div>
        </div>
        <div>
          <h1 className="select-none text-center text-xl md:text-2xl font-semibold">
            Associate Sponsor
          </h1>
          <div className="flex flex-col justify-center items-center h-full max-w-7xl p-5">
            <Image
              priority
              src="/sponsors/unicourt.png"
              className="w-40 h-20 mx-auto"
              alt="logo"
              width={500}
              height={500}
            />
            <p className="text-center text-primary text-sm tracking-wide pt-4">
              UniCourt Inc.
            </p>
          </div>
        </div>
        <div>
          <h1 className="select-none text-center text-xl md:text-2xl font-semibold">
            Industry Partner
          </h1>
          <div className="flex flex-col justify-center items-center h-full max-w-7xl p-5">
            <Image
              priority
              src="/sponsors/pacewisdom.png"
              className="w-60 h-14 mx-auto"
              alt="logo"
              width={500}
              height={500}
            />
            <p className="text-center text-primary text-sm tracking-wide pt-4">
              Pace Wisdom Solutions
            </p>
          </div>
        </div>
        <div>
          <h1 className="select-none text-center text-xl md:text-2xl font-semibold">
            Fitness Partner
          </h1>
          <div className="flex flex-col justify-center items-center h-full max-w-7xl p-5">
            <Image
              priority
              src="/zeus_logo.png"
              className="w-32 h-32 mx-auto"
              alt="logo"
              width={500}
              height={500}
            />
            <p className="text-center text-primary text-sm tracking-wide pt-4">
              Zeus Fitness Club
            </p>
          </div>
        </div>
        <div>
          <h1 className="select-none text-center text-xl md:text-2xl font-semibold">
            Community Partner
          </h1>
          <div className="flex flex-col justify-center items-center h-full max-w-7xl p-5">
            <Image
              priority
              src="/sponsors/ieee-mss.png"
              className="w-60 h-14 mx-auto"
              alt="logo"
              width={500}
              height={500}
            />
            <p className="text-center text-primary text-sm tracking-wide pt-4">
              IEEE Mangalore Subsection
            </p>
          </div>
        </div>
        <div>
          <h1 className="select-none text-center text-xl md:text-2xl font-semibold">
            Clothing Partner
          </h1>
          <div className="flex flex-col justify-center items-center h-full max-w-7xl p-5">
            <Image
              priority
              src="/sponsors/genzo.png"
              className="w-28 h-28 mx-auto"
              alt="logo"
              width={500}
              height={500}
            />
            <p className="text-center text-primary text-sm tracking-wide pt-4">
              Genzo Clothing
            </p>
          </div>
        </div>
        <div>
          <h1 className="select-none text-center text-xl md:text-2xl font-semibold">
            Venue Partner
          </h1>
          <div className="flex flex-col justify-center items-center h-full max-w-7xl p-5">
            <Image
              priority
              src="/sahyadri_logo.png"
              className="w-32 h-28 mx-auto"
              alt="logo"
              width={500}
              height={500}
            />
            <p className="text-center text-primary text-sm tracking-wide pt-4">
              Sahyadri College of Engineering & Management
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
