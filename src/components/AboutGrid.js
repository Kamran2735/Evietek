"use client";

import Image from "next/image";

export default function AboutGrid() {
  return (
    <div className="relative w-full max-w-5xl mx-auto my-16 perspective">
      {/* Top Row */}
      <div className="flex justify-center gap-6">
        {/* Top Left - Tilts backward */}
        <div className="relative h-64 w-80 rounded-3xl overflow-hidden transform rotate-x-[5deg] rotate-y-[-5deg] shadow-lg" 
          style={{
            backgroundColor: "#B8E0F7",
            transformOrigin: "bottom right",
            perspective: "1000px",
            borderRadius: "40px"
          }}>
          <Image
            src="/About/AboutImg1.png"
            alt="Growth Chart"
            fill
            className="object-cover"
          />
        </div>

        {/* Top Right - Tilts backward */}
        <div className="relative h-64 w-80 rounded-3xl overflow-hidden transform rotate-x-[5deg] rotate-y-[5deg] shadow-lg" 
          style={{
            backgroundColor: "#C5E8F9",
            transformOrigin: "bottom left",
            perspective: "1000px",
            borderRadius: "40px"
          }}>
          <Image
            src="/About/AboutImg2.png"
            alt="Person in Yellow"
            fill
            className="object-cover"
          />
        </div>
      </div>
      
      {/* Bottom Row */}
      <div className="flex justify-center gap-6 mt-6">
        {/* Bottom Left - Tilts forward */}
        <div className="relative h-64 w-80 rounded-3xl overflow-hidden transform rotate-x-[-5deg] rotate-y-[-5deg] shadow-lg" 
          style={{
            backgroundColor: "#B8E0F7",
            transformOrigin: "top right",
            perspective: "1000px",
            borderRadius: "40px"
          }}>
          <Image
            src="/About/AboutImg3.png"
            alt="Person Working"
            fill
            className="object-cover"
          />
        </div>

        {/* Bottom Right - Tilts forward */}
        <div className="relative h-64 w-80 rounded-3xl overflow-hidden transform rotate-x-[-5deg] rotate-y-[5deg] shadow-lg" 
          style={{
            backgroundColor: "#FFC107",
            transformOrigin: "top left",
            perspective: "1000px",
            borderRadius: "40px"
          }}>
          <Image
            src="/About/AboutImg4.png"
            alt="People with Laptop"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Stickers */}
      <div className="absolute z-10" style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
        <Image
          src="/About/Sticker1.svg"
          alt="Hand Gesture"
          width={70}
          height={70}
        />
      </div>

      <div className="absolute z-10 bottom-[-20px] left-0">
        <Image
          src="/About/Sticker2.svg"
          alt="Star Decoration"
          width={90}
          height={90}
        />
      </div>
    </div>
  );
}
