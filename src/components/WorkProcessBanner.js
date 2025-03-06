"use client";

import { motion } from "framer-motion";

export default function WorkProcessBanner() {
  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-r from-[#8D4BF7] to-[#C98CF8] transform -rotate-2">
      <motion.div
        className="flex gap-x-10 whitespace-nowrap py-2 text-white font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl"
        initial={{ x: "0%" }}
        animate={{ x: "-50%" }}
        transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
      >
        {/* Duplicated list to ensure infinite scrolling */}
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex gap-x-10">
            <span>UX/UI Design</span>
            <span>-</span>
            <span>Web Development</span>
            <span>-</span>
            <span>Landing Page Design</span>
            <span>-</span>
            <span>Graphic Design</span>
            <span>-</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
