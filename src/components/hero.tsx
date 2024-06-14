import React from "react";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import Image from "next/image";
import { Intro } from "./intro";

export function Hero() {
 
  const svgContent = '/spin.svg';
  const heroImage = '/logs.png';
  return (
    <BackgroundGradientAnimation className="my-0 py-0 flex items-center justify-center h-screen">
       <div className="relative z-10">
        <Intro />
       <Image
        src={heroImage}
        alt="Hero image"
        width={300}
        height={300}
        objectFit="fit"
        className="object-center" // Center the image
      />
      </div>
      <Image src={svgContent} alt="hero" layout="fill" objectFit="cover" />
    </BackgroundGradientAnimation>
  );
}
