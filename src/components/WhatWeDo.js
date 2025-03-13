"use client";

import React from 'react';
import Image from 'next/image';
import WhatWeDoContent from './WhatWeDoContent';

const WhatWeDo = () => {
  return (
    <section className="bg-[#F2F2F5] py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-0">
          
          {/* Left Side - Image Section */}
          <div className="relative w-full lg:w-[50%] flex justify-center">
            
            {/* Image Container with Gradient Shadow */}
            <div className="relative w-[55%]">

              {/* Gradient Block Behind Image */}
              <div className="absolute -top-4 -left-4 w-full h-full bg-gradient-to-b from-[#5A50FF] to-[#D376FF] rounded-[30px] z-0"></div>

              {/* Main Image */}
              <figure className="relative block rounded-[30px] overflow-hidden shadow-lg z-10">
                <Image
                  src="/About_Us/w1.jpg"
                  alt="Cybersecurity Expert"
                  width={550}
                  height={450}
                  className="w-full h-auto object-cover rounded-[30px]"
                />
              </figure>
            </div>

            {/* Experience Badge */}
            <div className="absolute top-[120px] right-[110px] h-[130px] w-[130px] bg-gradient-to-b from-purple-500 to-blue-500 text-white text-center p-[15px] rounded-full shadow-md flex flex-col items-center justify-center z-20">
              <h2 className="text-[30px] font-bold mb-1">25+</h2>
              <p className="text-xs uppercase leading-[1.2em]">Years Of Experience</p>
            </div>

            {/* Small Overlapping Image */}
            <div className="absolute right-[120px] bottom-[-40px] max-w-[200px] z-10 shadow-lg rounded-xl overflow-hidden">
              <figure className="block rounded-[20px]">
                <Image
                  src="/About_Us/w2.jpg"
                  alt="Cybersecurity Team"
                  width={200}
                  height={150}
                  className="w-full object-cover aspect-[1/0.68] rounded-[20px]"
                />
              </figure>
            </div>

          </div>

          {/* Right Side - Content */}
          <div className="w-full lg:w-[50%]">
            <WhatWeDoContent />
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;