import React from "react";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import Image from "next/image";
import { Intro } from "./intro";

export function Hero() {

  const heroImage = '/logs.png';

  return (
    <BackgroundGradientAnimation className="my-0 py-0 flex flex-1 items-center justify-center h-screen">
      <div className="relative z-10 flex flex-1 flex-col items-center space-y-8">
               
        <div className="sm:mt-14 sm:mb-0" style={{height:'fit-content'}}>
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
