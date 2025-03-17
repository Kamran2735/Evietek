"use client";

import React from 'react';
import AboutBanner from './AboutBanner';
import { motion } from 'framer-motion';
import Link from 'next/link';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const buttonVariants = {
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.2
    }
  }
};

// Service Feature Item Component
const ServiceFeatureItem = ({ icon, text, index }) => {
  return (
    <motion.div 
      className="flex items-center gap-3 mb-4"
      variants={itemVariants}
      custom={index}
    >
      <div className="text-blue-500">
        {icon}
      </div>
      <span className="text-gray-700">{text}</span>
    </motion.div>
  );
};

// Right Section Content Component
const AboutPageContent = () => {
  return (
    <motion.div 
      className="w-full px-4 md:px-0 md:pr-[50px]"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Header with logo and ABOUT US text */}
      <motion.div 
        className="flex items-center gap-2 mb-4"
        variants={itemVariants}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-indigo-600">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
        <span className="text-sm font-medium tracking-wider text-[#51328F]">ABOUT US</span>
      </motion.div>
      
      {/* Main heading with gradient text */}
      <motion.h1 
        className="text-3xl md:text-4xl font-bold text-[#030438] mb-2"
        variants={itemVariants}
      >
        Your Trusted Partner In  
        <span className="block">
          <span className="text-indigo-500"> Innovative </span>
          <span className="text-blue-400">Digital </span>
          <span className="text-cyan-400">Solutions </span>
        </span>
      </motion.h1>
      
      {/* Subheading text */}
      <motion.p 
        className="text-gray-600 mb-8 text-sm md:text-base"
        variants={itemVariants}
      >
        Evietek's innovative digital solutions guarantee long-term success, boost brand awareness, and increase involvement. 
      </motion.p>
      
      <motion.div variants={itemVariants}>
        <AboutBanner 
          imageUrl="/About_us/4.jpg"
          heading="24/7 Support"
          content="Real-time assistance for all your digital transformation needs, including branding strategies, content creation and web development."
          startColor='#8750F7'
          endColor='#D376FF'
        />
      </motion.div>
      
      {/* Service features */}
      <motion.div 
        className="flex flex-col md:flex-row gap-8 mt-8"
        variants={itemVariants}
      >
        <div className="md:w-1/2">
          <ServiceFeatureItem 
            icon={
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#51328F" strokeWidth="2" className="w-5 h-5 md:w-6 md:h-6">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 6v6l4 2"></path>
              </svg>
            }
            text="Smart Solutions for Digital Success"
            index={0}
          />
          <ServiceFeatureItem 
            icon={
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#51328F" strokeWidth="2" className="w-5 h-5 md:w-6 md:h-6">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
            }
            text="Strategic Content That Drives Impact"
            index={1}
          />
          <ServiceFeatureItem 
            icon={
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#51328F" strokeWidth="2" className="w-5 h-5 md:w-6 md:h-6">
                <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
                <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                <line x1="6" y1="1" x2="6" y2="4"></line>
                <line x1="10" y1="1" x2="10" y2="4"></line>
                <line x1="14" y1="1" x2="14" y2="4"></line>
              </svg>
            }
            text="Visual Creativity That Speaks Volumes"
            index={2}
          />
        </div>
        
        <motion.div 
          className="md:w-1/2"
          variants={itemVariants}
        >
          <div className="flex items-center gap-2 mb-4">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#51328F" strokeWidth="2" className="w-5 h-5 md:w-6 md:h-6 text-blue-500">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            <span className="text-base md:text-lg font-bold text-[#51328F]">+1 (647) 804 5528</span>
          </div>
          
          <Link href="/book-a-meeting">
            <motion.button 
              className="inline-flex items-center bg-gradient-to-b from-[#5A50FF] to-[#D376FF] text-white py-2 md:py-3 px-4 md:px-6 rounded-full text-sm md:text-base"
              variants={buttonVariants}
              whileHover="hover"
            >
              Book A Meeting
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="White" strokeWidth="2" className="w-3 h-3 md:w-4 md:h-4 ml-2">
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default AboutPageContent;