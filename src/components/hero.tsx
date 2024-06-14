import React from "react";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import Image from "next/image";
import { Intro } from "./intro";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";

export function Hero() {
  const words = [
    {
      text: "Bonwayinkosi",
      className: "text-red-500 dark:text-red-400",
    },
    {
      text: "Mdluli",
      className: "text-red-300 dark:text-red-200",
    },
    {
      text: "builds",
      className: "text-red-100 dark:text-green-300",
    },
    {
      text: "with",
      className: "text-red-100 dark:text-green-100",
    },
    {
      text: "React Native",
      className: "text-blue-100 dark:text-blue-200",
    },
    {
      text: "& Nextjs.",
      className: "text-blue-400 dark:text-blue-500",
    },
  ];

  const svgContent = '/spin.svg';
  const heroImage = '/logs.png';

  return (
    <BackgroundGradientAnimation className="my-0 py-0 flex items-center justify-center h-screen">
      <div className="relative z-10 flex flex-col items-center space-y-8">
        <div className=" sm:mt-4 text-3xl">
          <TypewriterEffectSmooth words={words} />
        </div>
        <div className="">
          <Intro />
        </div>
        <div className="relative w-full max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl p-4">
          <Image
            src={heroImage}
            alt="Hero image"
            layout="responsive"
            width={600}
            height={800}
            objectFit="contain"
            className="object-center rounded-lg"
          />
        </div>
      </div>
      <div className=" ro">
      <Image src={svgContent} alt="hero" layout="fill" objectFit="cover" className="absolute inset-0" />
      </div>
    </BackgroundGradientAnimation>
  );
}
