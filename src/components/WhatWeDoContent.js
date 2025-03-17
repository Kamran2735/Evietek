"use client";

import React from 'react';
import Image from "next/image";
import { motion } from "framer-motion";

// Service Feature Item Component
const ServiceFeatureItem = ({ icon, text, index }) => {
  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div 
      className="flex items-center gap-3 mb-2"
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="w-6 h-6 text-blue-500">
        {icon}
      </div>
      <span className="text-gray-700 text-sm md:text-base">{text}</span>
    </motion.div>
  );
};

// Feature Card Component
const FeatureCard = ({ icon, title, index }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    backgroundColor: "#030438",
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div 
      className="flex items-center gap-4 bg-[#030438] rounded-full px-4 py-3 w-full sm:w-auto"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="bg-gradient-to-b from-[#D376FF] to-[#5A50FF] rounded-full p-2">
        <Image 
          src={icon}
          alt={title}
          width={24}
          height={24}
        />
      </div>
      <div>
        <h3 className="font-bold text-white text-sm md:text-base">{title}</h3>
      </div>
    </motion.div>
  );
};

// Right Section Content Component
const Work = () => {
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

  return (
    <motion.div 
      className="w-full pl-4 md:pl-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      {/* Header with "WHAT WE DO" */}
      <motion.div 
        className="flex items-center gap-2 mb-4 pt-8 md:pt-0"
        variants={titleVariants}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-indigo-600">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
        <span className="text-sm font-medium tracking-wider text-indigo-600 uppercase">WHAT WE DO</span>
      </motion.div>
      
      {/* Main Heading */}
      <motion.h1 
        className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug mb-4"
        variants={titleVariants}
      >
        Empowering Innovation, <br />
        <span className="text-indigo-600"> Elevating </span> 
        <span className="text-blue-500"> Digital</span>
        <span className="text-cyan-500"> Presence</span>
      </motion.h1>
      
      {/* Subheading */}
      <motion.p 
        className="text-gray-600 mb-6 text-base md:text-lg"
        variants={titleVariants}
      >
        We offer cutting-edge digital solutions to boost your brand's visibility, drive growth, and foster meaningful connections. 
      </motion.p>
     
      {/* Service Features List */}
      <div className="space-y-3">
        <ServiceFeatureItem 
          icon={
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6 text-blue-600">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M12 6v6l4 2"></path>
            </svg>
          }
          text="Strategic Digital Transformation and Brand Positioning"
          index={0}
        />
        <ServiceFeatureItem 
          icon={
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6 text-blue-600">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </svg>
          }
          text="Advanced Web and App Development Solutions"
          index={1}
        />
        <ServiceFeatureItem 
          icon={
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6 text-blue-600">
              <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
              <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
              <line x1="6" y1="1" x2="6" y2="4"></line>
              <line x1="10" y1="1" x2="10" y2="4"></line>
              <line x1="14" y1="1" x2="14" y2="4"></line>
            </svg>
          }
          text="Data-Driven Marketing and Analytics"
          index={2}
        />
      </div>

      {/* Feature Cards */}
      <div className="flex flex-wrap gap-4 mb-8">
        <FeatureCard 
          icon="/About_Us/6.svg"
          title="Innovative Solutions"
          index={0}
        />
        <FeatureCard 
          icon="/About_Us/7.svg"
          title="Seamless User Experience"
          index={1}
        />
      </div>
    </motion.div>
  );
};

export default Work;
