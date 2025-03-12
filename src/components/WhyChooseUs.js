"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import KeyPointCard from "./KeyPointCard";
import StatsSection from "./StatsSection";

const keyPoints = [
  {
    icon: "/Why_Choose_Us/icon-why-choose-1.svg",
    title: "Expertise & Innovation",
    description: "A team of experienced digital specialists delivering cutting-edge solutions tailored for success.",
  },
  {
    icon: "/Why_Choose_Us/icon-why-choose-2.svg",
    title: "Strategic & Proactive Approach",
    description: "We anticipate challenges and implement forward-thinking solutions to keep your brand ahead of the curve.",
  },
  {
    icon: "/Why_Choose_Us/icon-why-choose-3.svg",
    title: "Customized Digital Strategies",
    description: "Personalized solutions designed to enhance visibility, drive engagement, and foster long-term growth.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-8 px-24 bg-[#0B0F2F] text-white">
      <div className="container mx-auto px-6">
        {/* Flex Container for Image and Text */}
        <div className="flex flex-col md:flex-row items-center gap-4">
          
          {/* Left Side - Image with Slide-in Effect */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 flex justify-center relative group"
          >
            <div className="relative overflow-hidden rounded-lg">
              <Image
                src="/Why_Choose_Us/why-choose-image.jpg"
                alt="Why Choose Us"
                width={450}
                height={350}
                className="rounded-lg"
              />
              {/* White Overlay Effect */}
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-30 transform scale-0 
                              transition-all duration-700 origin-center rotate-45 group-hover:scale-[2]">
              </div>
            </div>
          </motion.div>

          {/* Right Side - Text + Cards */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-full md:w-1/2"
          >
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="text-sm uppercase tracking-widest text-[#CB73FE] mb-2"
            >
              Why Choose Us
            </motion.p>
            
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              className="text-3xl font-bold mb-2 leading-snug"
            >
              Innovative solutions for <br /> digital excellence.
            </motion.h2>

            {/* Key Points - Slide in from Right */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              {keyPoints.map((point, index) => (
                <KeyPointCard key={index} {...point} />
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Section - Slide in from Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mt-0 pt-0"
        >
          <StatsSection />
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
