"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function WorkProcessCard({ number, icon, title, description, highlight, rotation }) {
  return (
    <motion.div
      className={`relative shadow-lg rounded-[22px] p-8 pt-14 w-[280px] sm:w-[300px] md:w-[330px] lg:w-[280px] transition-all duration-300`}
      initial={{ rotate: 0 }}
      animate={{ rotate: rotation }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      style={{
        height: "auto",
        backgroundColor: highlight ? "#5B42F3" : "#FFFFFF",
        color: highlight ? "#FFFFFF" : "#030438",
      }}
    >
      {/* Icon (Increased size and shifted towards right) */}
      <div className="absolute -top-8 left-6 w-20 h-20">
        <Image src={icon} alt={title} width={80} height={80} />
      </div>

      {/* Number + Heading (Inline) */}
      <div className="flex items-center space-x-2">
        {/* Number (Circular background, reversed for highlighted card) */}
        <div
          className={`w-10 h-10 flex items-center justify-center rounded-full text-[16px] font-bold
          ${highlight ? "bg-white text-[#3E2472]" : "bg-[#3E2472] text-white"}`}
        >
          {number}
        </div>

        {/* Title */}
        <h3 className="font-bricolage text-[24px] font-semibold leading-[103%]">
          {title}
        </h3>
      </div>

      {/* Description - Color fixed for highlighted card */}
      <p
        className={`text-[16px] font-gilroy leading-[138%] mt-2 ${
          highlight ? "text-white" : "text-[#41335E]"
        }`}
      >
        {description}
      </p>
    </motion.div>
  );
}
