"use client";

import { Bricolage_Grotesque } from "next/font/google";
import Image from "next/image";

// Import Bricolage Grotesque font
const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  weight: ["300", "400", "500", "700"],
});

export default function AboutContent() {
  return (
    <div className="max-w-2xl">
      {/* Heading with Bricolage Grotesque and Updated Color */}
      <h2 className={`text-4xl md:text-5xl font-bold leading-tight ${bricolage.variable} text-[#341E61]`}>
        Helping Brands Grow Better Since 2016
      </h2>

      {/* Body text with Gilroy-Medium and Updated Color */}
      <p className="mt-4 text-lg leading-relaxed font-gilroy-medium text-[#341E61]">
        At Evietek, we specialize in crafting innovative digital solutions that drive growth, 
        enhance visibility, and build lasting connections for brands worldwide.
      </p>

      {/* CTA Button with Updated Background Color */}
      <button className="mt-6 flex items-center gap-2 bg-[#341E61] hover:bg-[#412876] text-white px-6 py-3 rounded-xl font-semibold text-lg shadow-lg transition-all">
        <Image src="/phone.svg" alt="Phone" width={20} height={20} />
        Book a Meeting
      </button>
    </div>
  );
}
