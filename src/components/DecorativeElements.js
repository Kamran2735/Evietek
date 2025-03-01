"use client";

import Image from "next/image";

export default function DecorativeElements() {
  return (
    <>
      {/* Left Spark (Blue, Rotates & Glows) */}
      <div className="absolute left-[8%] bottom-[15%] md:left-[20%] md:bottom-[40%] animate-rotate-glow">
        <Image src="/svgs/Star2.svg" alt="Decorative Left" width={50} height={50} />
      </div>

      {/* Right Star (Yellow, Spins Slowly) */}
      <div className="absolute right-[8%] top-[12%] md:right-[20%] md:top-[25%] animate-spin-slow">
        <Image src="/svgs/Star1.svg" alt="Decorative Right" width={50} height={50} />
      </div>
    </>
  );
}
