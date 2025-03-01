"use client";

import Image from "next/image";

export default function AboutHeading() {
  return (
    <div className="relative flex items-center">
      {/* About SVG */}
      <div className="relative z-10 -mt-8 -mr-3">
        <Image src="/About/About.svg" alt="About" width={140} height={70} />
      </div>

      {/* Us SVG (Overlapping "About") */}
      <div className="relative -ml-2 -mt-2">
        <Image src="/About/Us.svg" alt="Us" width={80} height={40} />
      </div>
    </div>
  );
}
