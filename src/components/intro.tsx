import React from "react";
import { Meteors } from "@/components/ui/meteors";

export function Intro() {
  return (
    <div className=" mt-0 max-w-max">
      <div className=" w-full relative">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
        <div className="relative shadow-xl bg-gray-900 border border-gray-800 py-6 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
          <h1 className="font-bold text-xl text-white mb-4 relative z-50">
            Bonwayinkosi Mdluli is a UX Architect
          </h1>
          <Meteors number={20} />
        </div>
      </div>
    </div>
  );
}
