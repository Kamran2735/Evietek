"use client";

import Image from "next/image";

export default function DecorativeElements() {
  return (
    <>
      {/* Left Spark (Blue, Rotates & Glows) */}
      <div 
        className="absolute left-[3%] bottom-[30%] sm:left-[5%] sm:bottom-[25%] md:left-[20%] md:bottom-[40%] animate-rotate-glow"
        // Adjust these values to change the position of the left star
        // left-[3%] bottom-[30%] sm:left-[5%] sm:bottom-[25%] md:left-[20%] md:bottom-[40%]
      >
        <Image src="/svgs/Star2.svg" alt="Decorative Left" width={50} height={50} />
      </div>

      {/* Right Star (Yellow, Spins Slowly) */}
      <div className="absolute right-[5%] top-[20%] sm:right-[8%] sm:top-[18%] md:right-[20%] md:top-[25%] animate-spin-slow">
        <Image src="/svgs/Star1.svg" alt="Decorative Right" width={50} height={50} />
      </div>
    </>
  );
}