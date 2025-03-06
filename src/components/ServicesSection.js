"use client";

import Heading from "./ServiceHeading";
import ServiceCard from "./ServiceCard";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ServicesSection() {

    // Right Decorative Animation
  const decorationVariants = {
    initial: { opacity: 0, x: 100 },
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
    <section className="relative bg-[#F9F9F9] text-[#333] py-3 md:py-8 lg:pt-8 px-4 md:px-8 lg:px-12 pb-0">
      {/* Section Heading */}
      <div className="flex flex-col items-center text-center">
        <Heading />

        {/* "What We Do" Heading */}
        <h2 className="text-[50px] leading-[107%] font-bricolage font-bold text-[#341E61] mt-1 md:mt-1">
          What We Do
        </h2>
      </div>

      {/* Services Cards Section */}
      <div className="mt-10 flex flex-wrap justify-center gap-4 lg:gap-6">
        <ServiceCard 
          background="white"
          title="Website Design"
          description="Creating Multipage websites for different companies."
          icon="/Our_Services/Website_Logo.svg"
          decoration="/Our_Services/Decor_1.svg"
        />

        <ServiceCard 
          background="white"
          title="Branding Design"
          description="Helping our Clients to establish an amazing brand with irresistible and strong visual elements."
          icon="/Our_Services/Branding_Design_Logo.svg"
          decoration="/Our_Services/Decor_2.svg"
        />

        <ServiceCard 
          background="white"
          title="Marketing/Landing Page"
          description="Experts are available for creating fast and dope landing pages."
          icon="/Our_Services/Marketing_Logo.svg"
          decoration="/Our_Services/Decor_3.svg"
        />
      </div>
    {/* Decorative Sticker (Right Corner) */}
    <motion.div
        className="absolute top-10 right-1 z-0"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
        variants={decorationVariants}
      >
        <Image 
          src="/Our_Services/Abstract.svg" 
          alt="Abstract Sticker" 
          width={100} 
          height={100} 
          className="opacity-60 sm:w-[160px] sm:h-[160px] sm:opacity-70 md:w-[200px] md:h-[200px] md:opacity-70 lg:w-[200px] lg:h-[200px] lg:opacity-100"
        />
      </motion.div>

      {/* Divider (Centered Below Everything) */}
      <motion.div
        className="relative inset-x-0 mt-[5px] sm:mt-4 md:mt-[10px] lg:mt-[60px] z-[10] flex justify-center"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
        variants={decorationVariants2}
      >
        <Image 
          src="/divider.svg" 
          alt="Divider" 
          width={800} 
          height={30} 
          className="opacity-100 sm:w-[1000px] sm:h-[30px] md:w-[1200px] md:h-[30px]"
        />
      </motion.div>

    </section>
  );
}
