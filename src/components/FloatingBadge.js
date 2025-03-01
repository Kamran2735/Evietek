"use client";

import { useEffect, useState } from "react";

export default function FloatingBadge({ position, icon }) {
  const [isVisible, setIsVisible] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  // Restored Floating Animation
  const floatAnimation = position === "left" ? "animate-float-left" : "animate-float-right";

  const positionClasses = position === "left"
    ? "absolute left-[5%] top-[20%] md:left-[12%] md:top-[28%]"
    : "absolute right-[5%] top-[45%] md:right-[8%] md:top-[45%]";

  return (
    <div
      id={icon}
      className={`${positionClasses} transition-all duration-700 ${floatAnimation} ${
        isVisible ? "opacity-100" : "opacity-0 translate-y-10"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`relative transform transition-all duration-300 ${isHovered ? 'scale-110 animate-buzz' : ''}`}>
        {/* The badge image */}
        <img
          src={icon}
          alt={position === "left" ? "Design" : "Development"}
          width={position === "right" ? 220 : 190}
          height={position === "right" ? 110 : 90}
          className="object-contain"
        />

        {/* Improved Shadow Effect for better alignment */}
        <div 
          className={`absolute inset-0 opacity-40 blur-xl -z-10 bg-purple-700 rounded-full transition-transform duration-300 ${
            isHovered ? 'scale-125 translate-x-2 translate-y-2' : 'scale-100'
          }`}
        ></div>
      </div>
    </div>
  );
}
