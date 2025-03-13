"use client";

import React from 'react';
import Image from 'next/image';

const OurBenefits = () => {
  return (
    <section className="bg-white">
      <div className="flex flex-col lg:flex-row items-center w-full">
        
        {/* IMAGE SECTION - Left Side */}
        <div className="relative w-full lg:w-1/2">
          <div className="relative w-full">
            {/* Main Image */}
            <Image
              src="/About_Us/b1.jpg"
              alt="Cybersecurity team working"
              width={700}
              height={600}
              className="w-full h-[620px] object-cover rounded-r-lg"
            />

            {/* Floating Custom Circular Image (Rotating) */}
            <div className="absolute top-10 -right-16 w-32 h-32 animate-spin-slow">
              <Image
                src="/About_Us/circle.svg"
                alt="Custom Circular Image"
                width={100}
                height={100}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Floating Image Box */}
            <div className="absolute bottom-6 -right-16 w-64 h-64 rounded-2xl overflow-hidden border-8 border-white shadow-lg">
              <Image
                src="/About_Us/b2.jpg"
                alt="Cybersecurity experts"
                width={300}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* CONTENT SECTION - Right Side */}
        <div className="w-full lg:w-1/2 py-8 px-6 lg:px-16">
          <div className="max-w-2xl mx-auto">
            {/* Section Label */}
            <div className="flex items-center gap-2 mb-4">
              <div className="text-indigo-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <p className="text-indigo-600 font-medium tracking-wide uppercase">OUR BENEFITS</p>
            </div>

            {/* Main Heading */}
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Reliable solutions for<br />
              cybersecurity excellence
            </h2>

            {/* Description */}
            <p className="text-gray-600 mb-8">
              Our comprehensive cybersecurity solutions provide robust protection, minimizing 
              risks and giving you peace of mind knowing your data and systems are secure.
            </p>

            {/* Feature Cards */}
            <div className="flex flex-wrap gap-4 mb-8">
              {/* Card 1 */}
              <div className="flex items-center gap-4 bg-gray-50 rounded-full px-4 py-3 w-full sm:w-auto">
                <div className="bg-gradient-to-b from-[#D376FF] to-[#5A50FF] rounded-full p-2">
                  <Image 
                    src="/About_Us/6.svg"
                    alt="Proactive Threat Protection"
                    width={24}
                    height={24}
                  />
                </div>
                <div>
                  <h3 className="font-bold text-[#030438]">Proactive Threat Protection</h3>
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
                  <h3 className="font-bold text-[#030438]">24/7 Monitoring And Help</h3>
                </div>
              </div>
            </div>

            {/* Additional Features */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="text-indigo-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <p className="text-gray-700">Enhanced Business Continuity</p>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="text-indigo-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <p className="text-gray-700">Scalable Solutions</p>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="text-indigo-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <p className="text-gray-700">Peace of Mind</p>
              </div>
            </div>

            {/* CTA Button */}
            <button className="bg-gradient-to-b from-[#5A50FF] to-[#D376FF] text-white font-medium py-3 px-6 rounded-full flex items-center gap-2">
              Get Started
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 16l4-4-4-4"></path>
                <path d="M8 12h8"></path>
              </svg>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default OurBenefits;
