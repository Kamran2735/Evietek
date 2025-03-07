"use client";

import Image from "next/image";

export default function ServiceCard({ background, title, description, icon, decoration }) {
  return (
    <div 
      className="relative flex flex-col items-center text-center bg-white rounded-3xl shadow-lg p-6 md:p-8 py-8 md:py-10 lg:py-12 transition-all hover:shadow-xl hover:-translate-y-2 h-[420px] md:h-[460px] lg:h-[500px] max-w-[300px] md:max-w-[340px] lg:max-w-[360px] justify-between"
      style={{ background }}
    >
      {/* Decorative Background SVG - Positioned Correctly */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <Image 
          src={decoration} 
          alt="Card Decoration" 
          layout="fill" 
          objectFit="cover"
          className="opacity-100"
        />
      </div>

      {/* Card Title - Bricolage Grotesque - Smaller on Mobile */}
      <h3 className="mt-4 text-[30px] sm:text-[36px] leading-[103%] font-semibold text-[#3E2472] text-center font-bricolage">
        {title}
      </h3>

      {/* Card Description - Gilroy-Medium */}
      <p className="mt-2 text-[18px] leading-[138%] font-normal text-[#41335E] max-w-[280px] md:max-w-[300px] lg:max-w-[320px] font-gilroy">
        {description}
      </p>

      {/* Card Icon - Larger Size */}
      <div className="relative w-[150px] h-[140px] md:w-[180px] md:h-[170px] lg:w-[240px] lg:h-[220px] mt-6">
        <Image src={icon} alt={title} width={240} height={220} />
      </div>
    </div>
  );
}