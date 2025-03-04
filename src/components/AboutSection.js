"use client";

import AboutHeading from "./AboutHeading";
import AboutContent from "./AboutContent";
import AboutGrid from "./AboutGrid";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutSection() {
  // Left Decorative Animation
  const decorationVariants = {
    initial: { opacity: 0, x: -100 },
    animate: {
      opacity: 0.7,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  // Divider Animation (Appearing from Top)
  const decorationVariants2 = {
    initial: { opacity: 0, y: -100 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section className="relative bg-[#F9F9F9] text-[#333] py-20 lg:py-5 px-6 md:px-12 lg:px-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
        {/* Left Content */}
        <div className="md:w-1/2">
          <AboutHeading />
          <AboutContent />
        </div>

        {/* Right Grid */}
        <div className="md:w-1/2">
          <AboutGrid />
        </div>
      </div>

      {/* Decorative Sticker (Left Corner) */}
      <motion.div
        className="absolute bottom-10 left-0 z-0"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
        variants={decorationVariants}
      >
        <Image 
          src="/About/Sticker3.svg" 
          alt="Abstract Sticker" 
          width={150} 
          height={150} 
          className="opacity-100"
        />
      </motion.div>

      
              {/* Divider (Centered Below Everything) */}
              <motion.div
        className="relative inset-x-0 bottom-[-10px] z-[10] flex justify-center"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
        variants={decorationVariants2}
      >
        <Image 
          src="/About/divider.svg" 
          alt="Divider" 
          width={1200}  // Adjusted width for better centering
          height={400} 
          className="opacity-100"
        />
      </motion.div>

    </section>
  );
}
