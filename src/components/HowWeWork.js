"use client";

import React from 'react';
import Image from 'next/image';

const HowItWork = () => {
  return (
    <section className="py-16 bg-[#030438]">
      <div className="container mx-auto px-24">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          
          {/* Left Content */}
          <div className="w-full lg:w-1/2 pl-16">
            {/* Section Label */}
            <div className="flex items-center gap-2 mb-4">
              <div className="text-indigo-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#65E5F2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
              <p className="text-[#65E5F2] font-medium tracking-wide uppercase">HOW IT WORK</p>
            </div>
            
            {/* Main Heading */}
            <h2 className="text-4xl font-bold mb-10 text-white-900">
            Streamlined Process,<br />
            <span className="text-[#CB73FE]">Crafting</span>  <span className="text-indigo-400">Digital</span> <span className="text-blue-400">Transformation </span><span className="text-cyan-400"> Excellence.</span>
            </h2>
            
            {/* Process Steps */}
            <div className="relative ">
              {/* Vertical Line */}
              <div className="absolute left-[30px] top-[60px] w-0.5 h-[240px] border-l-4 border-dotted border-[#CB73FE]"></div>

              
              {/* Step 1 */}
              <div className="flex mb-10 relative">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-15 h-15 bg-gradient-to-b from-[#5A50FF] to-[#D376FF] rounded-full text-white font-bold text-xl">
                    01
                  </div>
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-bold mb-2 text-[#CB73FE]">Assessment & Strategy</h3>
                  <p className="text-white-600">
                  We begin by understanding your business goals and identifying growth opportunities through in-depth analysis and strategic planning. 
                  </p>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="flex mb-10 relative">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-15 h-15 bg-gradient-to-b from-[#5A50FF] to-[#D376FF] rounded-full text-white font-bold text-xl">
                    02
                  </div>
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-bold mb-2 text-[#CB73FE]">Implementation</h3>
                  <p className="text-white-600">
                  Our expert team executes innovative digital solutions, leveraging technology to enhance visibility and drive results.
                  </p>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="flex relative">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-15 h-15 bg-gradient-to-b from-[#5A50FF] to-[#D376FF] rounded-full text-white font-bold text-xl">
                    03
                  </div>
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-bold mb-2 text-[#CB73FE]">Ongoing Support & Optimization</h3>
                  <p className="text-white-600">
                  We continuously monitor performance, provide maintenance, and refine strategies to ensure sustained success. 
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Images */}
          <div className="w-full lg:w-1/3   relative">
            {/* Main Background Image */}
            <div className="relative rounded-2xl left-40 overflow-hidden ">
              <Image
                src="/About_Us/h1.webp"
                alt="Security team working"
                width={200}
                height={300}
                className="w-full object-cover h-[500px]"
              />
            </div>
            
            {/* Floating Phone Frame */}
            <div className="absolute left-16 top-1/2 -translate-y-1/2 w-64 bg-[#030438] p-2 rounded-3xl shadow-xl">
              <div className="rounded-2xl overflow-hidden">
                <Image
                  src="/About_Us/h2.jpg"
                  alt="Security expert"
                  width={300}
                  height={100}
                  className="w-full object-cover h-60"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWork;