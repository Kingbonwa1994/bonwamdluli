import React from "react";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import Image from "next/image";
import { Intro } from "./intro";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import { FlipWordsDemo } from "./FlipWordsDemo";

export function Hero() {
  const words = [
    {
      text: "Bonwayinkosi",
      className: "text-red-500 dark:text-red-400",
    },
    {
      text: " ",
      className: "text-red-300 dark:text-red-200",
    },
    {
      text: " ",
      className: "text-red-100 dark:text-green-300",
    },
    {
      text: " ",
      className: "text-red-100 dark:text-green-100",
    },
    {
      text: " ",
      className: "text-blue-100 dark:text-blue-200",
    },
    {
      text: " ",
      className: "text-blue-400 dark:text-blue-500",
    },
  ];

  const heroImage = '/logs.png';

  return (
    <BackgroundGradientAnimation className="my-0 py-0 flex items-center justify-center h-screen">
      <div className="relative z-10 flex flex-col items-center space-y-8">
         {/* <FlipWordsDemo />         */}
        <div className="mt-0">
            <Intro />
        </div>
        <div className="">
          <Image
            src={heroImage}
            alt="Hero image"
            width={600}
            height={800}
            objectFit="contain"
            className="relative rounded-lg"
          />
        </div>
      </div> 
    </BackgroundGradientAnimation>
  );
}
