"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutHeading() {
  return (
    <div className="relative flex items-center">
      {/* About SVG - Sliding from Left */}
      <motion.div 
        className="relative z-10 -mt-8 -mr-3"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.5 }} // Ensures animation starts when 30% visible
        transition={{ 
          duration: 0.7, 
          ease: "easeOut" 
        }}
      >
        <Image src="/About/About.svg" alt="About" width={140} height={70} />
      </motion.div>

      {/* Us SVG - Sliding from Right */}
      <motion.div 
        className="relative -ml-2 -mt-2"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ 
          duration: 0.7, 
          ease: "easeOut",
          delay: 0.2 // Slight delay to create a sequential effect
        }}
      >
        <Image src="/About/Us.svg" alt="Us" width={80} height={40} />
      </motion.div>
    </div>
  );
}
