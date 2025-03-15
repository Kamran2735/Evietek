"use client";

import React from 'react';
import Image from "next/image";

// Service Feature Item Component
const ServiceFeatureItem = ({ icon, text }) => {
  return (
    <div className="flex items-center gap-3 mb-2">
      <div className="w-6 h-6 text-blue-500">
        {icon}
      </div>
      <span className="text-gray-700">{text}</span>
    </div>
  );
};

// Right Section Content Component
const Work = () => {
  return (
    <div className="w-full pl-10">
      {/* Header with "WHAT WE DO" */}
      <div className="flex items-center gap-2 mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-indigo-600">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
        <span className="text-sm font-medium tracking-wider text-indigo-600 uppercase">WHAT WE DO</span>
      </div>
      
      {/* Main Heading */}
      <h1 className="text-4xl font-bold text-gray-900 leading-snug mb-4">
        Empowering Innovation, <br />
        <span className="text-indigo-600"> Elevating </span> 
        <span className="text-blue-500"> Digital</span>
        <span className="text-cyan-500"> Presence</span>
      </h1>
      
      {/* Subheading */}
      <p className="text-gray-600 mb-6 text-lg">
      We offer cutting-edge digital solutions to boost your brand’s visibility, drive growth, and foster meaningful connections. 
      </p>
     
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
        />
        <ServiceFeatureItem 
          icon={
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6 text-blue-600">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </svg>
          }
          text="Advanced Web and App Development Solutions"
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
          text="Data-Driven Marketing and Analytics "
        />
      </div>

                  {/* Feature Cards */}
                  <div className="flex flex-wrap gap-4 mb-8">
              {/* Card 1 */}
              <div className="flex items-center gap-4 bg-gray-50 rounded-full px-0  py-4 w-full sm:w-auto">
                <div className="bg-gradient-to-b from-[#D376FF] to-[#5A50FF] rounded-full p-2">
                  <Image 
                    src="/About_Us/6.svg"
                    alt="Proactive Threat Protection"
                    width={24}
                    height={24}
                  />
                </div>
                <div>
                  <h3 className="font-bold text-[#030438]">Innovative Solutions</h3>
                </div>
              </div>

              {/* Card 2 */}
              <div className="flex items-center gap-4 bg-gray-50 rounded-full px-4 py-3 w-full sm:w-auto">
                <div className="bg-gradient-to-b from-[#D376FF] to-[#5A50FF] rounded-full p-2">
                  <Image 
                    src="/About_Us/7.svg"
                    alt="24/7 Monitoring And Help"
                    width={24}
                    height={24}
                  />
                </div>
                <div>
                  <h3 className="font-bold text-[#030438]">Seamless User Experience</h3>
                </div>
              </div>
            </div>


    </div>
  );
};

export default Work;
