"use client";

import React from 'react';
import Image from 'next/image';
import Link from "next/link";
import { motion } from "framer-motion";

const OurBenefits = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.2,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: 0.3,
        ease: "easeOut"
      }
    }
  };

  const circleVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: 0.4,
        ease: "easeOut"
      }
    }
  };

  const floatingImageVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.5,
        ease: "easeOut"
      }
    }
  };

  const featureCardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.6 + (index * 0.1),
        ease: "easeOut"
      }
    })
  };

  const featureItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (index) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: 0.8 + (index * 0.1),
        ease: "easeOut"
      }
    })
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 1,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.section 
      className="bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="flex flex-col lg:flex-row items-center w-full">
        
        {/* IMAGE SECTION - Left Side */}
        <motion.div 
          className="relative w-full lg:w-1/2"
          variants={containerVariants}
        >
          <div className="relative w-full">
            {/* Main Image */}
            <motion.div
              variants={imageVariants}
              className="relative w-full"
            >
              <Image
                src="/About_Us/b1.jpg"
                alt="Cybersecurity team working"
                width={700}
                height={600}
                className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[620px] object-cover rounded-r-lg"
              />
            </motion.div>

            {/* Floating Custom Circular Image (Rotating) */}
            <Link href="/book-a-meeting">
              <motion.div 
                className="absolute top-4 md:top-0 sm:top-6 lg:top-10 right-0 md:right-145 lg:-right-25 w-32 sm:w-40 md:w-50 h-32 sm:h-40 md:h-50 animate-spin-slow cursor-pointer group"
                variants={circleVariants}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="relative w-full h-full">
                  <Image
                    src="/About_Us/circle.svg"
                    alt="Custom Circular Image"
                    width={150}
                    height={150}
                    className="w-full h-full object-contain transition-transform duration-300 group-hover:rotate-180"
                  />
                  <div className="absolute inset-0 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            </Link>

            {/* Floating Image Box */}
            <motion.div 
              className="absolute bottom-2  md:bottom-4 lg:bottom-8 right-2 md:right-4 lg:-right-16 w-36 sm:w-48 md:w-64 h-36 sm:h-48 md:h-64 rounded-2xl overflow-hidden border-4 sm:border-8 border-white shadow-lg"
              variants={floatingImageVariants}
            >
              <Image
                src="/About_Us/b2.jpg"
                alt="Cybersecurity experts"
                width={300}
                height={300}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* CONTENT SECTION - Right Side */}
        <motion.div 
          className="w-full lg:w-1/2 py-6 sm:py-8 px-4 sm:px-6 lg:px-16"
          variants={containerVariants}
        >
          <div className="max-w-2xl mx-auto">
            {/* Section Label */}
            <motion.div 
              className="flex items-center gap-2 mb-3 sm:mb-4"
              variants={titleVariants}
            >
              <div className="text-indigo-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <p className="text-indigo-600 font-medium tracking-wide uppercase text-xs sm:text-sm md:text-base">OUR BENEFITS</p>
            </motion.div>

            {/* Main Heading */}
            <motion.h2 
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4"
              variants={titleVariants}
            >
              Reliable Solutions For<br />
              Your Business Growth
            </motion.h2>

            {/* Description */}
            <motion.p 
              className="text-gray-600 mb-6 sm:mb-8 text-sm md:text-base"
              variants={titleVariants}
            >
              Our innovative digital solutions enhance your brand's visibility, drive growth, and foster deeper connections. With our expertise, we help you stay ahead in the ever-evolving digital landscape. 
            </motion.p>

            {/* Feature Cards */}
            <div className="flex flex-wrap gap-3 sm:gap-4 mb-6 sm:mb-8">
              {/* Card 1 */}
              <motion.div 
                className="flex items-center gap-3 sm:gap-4 bg-[#030438] text-white rounded-full px-3 sm:px-4 py-2 sm:py-3 w-full sm:w-auto"
                variants={featureCardVariants}
                custom={0}
              >
                <div className="bg-gradient-to-b from-[#D376FF] to-[#5A50FF] rounded-full p-1.5 sm:p-2">
                  <Image 
                    src="/About_Us/6.svg"
                    alt="Proactive Threat Protection"
                    width={20}
                    height={20}
                    className="w-4 h-4 sm:w-6 sm:h-6"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-white-900 text-xs sm:text-sm md:text-base">Tailored Growth Strategies</h3>
                </div>
              </motion.div>

              {/* Card 2 */}
              <motion.div 
                className="flex items-center gap-3 sm:gap-4 bg-[#030438] text-white rounded-full px-3 sm:px-4 py-2 sm:py-3 w-full sm:w-auto"
                variants={featureCardVariants}
                custom={1}
              >
                <div className="bg-gradient-to-b from-[#D376FF] to-[#5A50FF] rounded-full p-1.5 sm:p-2">
                  <Image 
                    src="/About_Us/7.svg"
                    alt="24/7 Monitoring And Help"
                    width={20}
                    height={20}
                    className="w-4 h-4 sm:w-6 sm:h-6"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-white-900 text-xs sm:text-sm md:text-base">24/7 Monitoring & Support</h3>
                </div>
              </motion.div>
            </div>

            {/* Additional Features */}
            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              <motion.div 
                className="flex items-center gap-2 sm:gap-3"
                variants={featureItemVariants}
                custom={0}
              >
                <div className="text-indigo-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <p className="text-gray-700 text-xs sm:text-sm md:text-base">Enhanced Business Continuity</p>
              </motion.div>
              
              <motion.div 
                className="flex items-center gap-2 sm:gap-3"
                variants={featureItemVariants}
                custom={1}
              >
                <div className="text-indigo-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <p className="text-gray-700 text-xs sm:text-sm md:text-base">Scalable and Flexible Solutions</p>
              </motion.div>
              
              <motion.div 
                className="flex items-center gap-2 sm:gap-3"
                variants={featureItemVariants}
                custom={2}
              >
                <div className="text-indigo-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <p className="text-gray-700 text-xs sm:text-sm md:text-base">Unmatched Customer Experience</p>
              </motion.div>
            </div>

            {/* CTA Button */}
            <Link href="/book-a-meeting" className="hidden md:block">
              <motion.button 
                className="bg-gradient-to-b from-[#5A50FF] to-[#D376FF] text-white font-medium py-3 px-6 rounded-full flex items-center gap-2 hover:opacity-90 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                variants={buttonVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 16l4-4-4-4"></path>
                  <path d="M8 12h8"></path>
                </svg>
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default OurBenefits;
