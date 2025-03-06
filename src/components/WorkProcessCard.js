"use client";

import Image from "next/image";

export default function WorkProcessCard({ icon, title, description, highlight, tilt = 0 }) {
  return (
    <div 
      className={`relative bg-white text-[#030438] shadow-lg rounded-[22px] p-6 w-[250px] sm:w-[270px] md:w-[300px] lg:w-[320px] h-[280px] 
                  ${highlight ? "bg-[#5B42F3] text-white" : "bg-white"}`}
      style={{ transform: `rotate(${tilt}deg)` }} // Apply rotation from the tilt prop
    >
      {/* Icon */}
      <div className="absolute -top-6 left-4">
        <Image src={icon} alt={title} width={50} height={50} />
      </div>

      {/* Content */}
      <h3 className="text-lg font-bold mt-6">{title}</h3>
      <p className="text-sm mt-2 opacity-80">{description}</p>
    </div>
  );
}
