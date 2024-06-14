import React from "react";
import { Meteors } from "@/components/ui/meteors";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";

export function Intro() {
    const words = [
        {
          text: "Bonwayinkosi",
          className: "text-red-500 dark:text-red-500",
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
          className: "text-blue-100 dark:text-blue-100",
        },
        {
          text: "& Nextjs.",
          className: "text-blue-400 dark:text-blue-500",
        },
      ];
  return (
    <>
        <TypewriterEffectSmooth words={words} />
        <Meteors number={20} />
    </>
  );
}
