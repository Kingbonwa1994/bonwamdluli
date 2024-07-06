import React from "react";
import { Meteors } from "@/components/ui/meteors";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import { FlipWordsDemo } from "./FlipWordsDemo";

export function Intro() {
    
  return (
    <div className="z-20 sm:justify-center"> 
        <FlipWordsDemo />
        <Meteors number={90} />
    </div>
  );
}
