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
        Protecting, preventing, <br />
        <span className="text-indigo-600"> securing</span> 
        <span className="text-blue-500"> your</span>
        <span className="text-cyan-500"> future</span>
      </h1>
      
      {/* Subheading */}
      <p className="text-gray-600 mb-6 text-lg">
        We provide comprehensive cybersecurity services to safeguard your digital assets, prevent potential threats, and ensure a secure environment.
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
          text="Proactive Threat Detection and Incident Response"
        />
        <ServiceFeatureItem 
          icon={
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6 text-blue-600">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </svg>
          }
          text="Advanced Network Security and Intrusion Prevention"
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
          text="Data Encryption and Secure Information Management"
        />
      </div>

      <div className="flex flex-wrap gap-4 md:flex-nowrap pt-4">
  {/* Feature 1 */}
  <div className="flex items-center gap-1">
    <div className="w-12 h-12 flex items-center justify-center">
      <Image 
        src="/About_Us/5.svg" 
        alt="Network And Firewall Security"
        width={28}
        height={28}
      />
    </div>
    <span className="text-lg font-semibold text-gray-900">Network And Firewall Security</span>
  </div>

  {/* Feature 2 */}
  <div className="flex items-center gap-1">
    <div className="w-12 h-12 flex items-center justify-center">
      <Image 
        src="/About_Us/4.svg" 
        alt="Data Protection And Encryption"
        width={28}
        height={28}
      />
    </div>
    <span className="text-lg font-semibold text-gray-900">Data Protection And Encryption</span>
  </div>
</div>


    </div>
  );
};

export default Work;
