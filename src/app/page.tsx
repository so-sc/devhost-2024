import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center min-h-[100dvh] px-10">
      <div>
        <Image
          src="/bg.svg"
          className="absolute top-0 left-0 w-full -z-10"
          alt="logo"
          width={500}
          height={500}
        />
      </div>
      <div className="flex flex-col pb-6 justify-center items-center">
        <div className="flex gap-5 justify-center items-center">
          <Image
            src="/sosc_logo.svg"
            className="w-28 h-fit"
            alt="logo"
            width={500}
            height={500}
          />
          <Image
            src="/niveus_logo_white.png"
            alt="logo"
            className="w-32 h-fit"
            width={500}
            height={500}
          />
        </div>
        <p className="pt-1 tracking-wide">Presents</p>
      </div>
      <div className="flex w-fit flex-col">
        <Image
          src="/logo.svg"
          alt="logo"
          className="w-80"
          width={500}
          height={500}
        />
        <p className="text-sm pt-3 tracking-wide text-primary">
          An initiative towards the silicon beach.
        </p>
      </div>
      <div className="flex flex-col pt-10 justify-center items-center">
        {/* <Button>Register Now</Button> */}
        <p className="text-xl">Coming Soon</p>
      </div>
    </div>
  );
}
