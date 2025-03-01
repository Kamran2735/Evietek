"use client";

import Image from "next/image";

export default function ScrollIndicator() {
  return (
    <div className="text-center flex flex-col items-center cursor-pointer">
      <p className="text-white/80 text-sm mb-2">Scroll down</p>
      <div className="w-8 h-8 animate-bounce flex items-center justify-center">
        <Image 
          src="/svgs/arrow-down.svg" // Replace with your actual SVG path
          alt="Scroll Down"
          width={20}
          height={20}
          className="object-contain"
        />
      </div>
    </div>
  );
}
