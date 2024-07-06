import React from "react";
import { FlipWords } from "@/components/ui/flip-words";
import { BiLogoWhatsapp } from 'react-icons/bi'


export function FlipWordsDemo() {
  const words = ["Typed_React", "Typed_Nextjs", "React_Native"];

  return (
    <div className="flex justify-center items-center px-4">
      <div className="text-4xl mx-auto sm:my-0 font-normal text-neutral-900 dark:text-neutral-400">
        Get 
        <FlipWords words={words} /> <br />
        in weeks <BiLogoWhatsapp className="inline" />
      </div>
    </div>
  );
}
