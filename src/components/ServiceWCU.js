"use client";

import React from "react";
import Image from "next/image";

const WhyChoose = ({ 
  heading,
  description,
  features,
  bottomDescription 
}) => {
  return (
    <section className="bg-[#F2F2F5] py-8">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Main Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-[#030438] mb-4">
          {heading}
        </h2>
        
        {/* Description */}
        <p className="text-gray-600 mb-12 max-w-3xl">
          {description}
        </p>
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-4 bg-[#030438] rounded-full px-6 py-4">
              <div className="bg-gradient-to-b from-[#D376FF] to-[#5A50FF] rounded-full p-2">
                <Image
                  src={feature.iconSrc}
                  alt={feature.title}
                  width={42}
                  height={42}
                  className="invert brightness-0 contrast-100"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#FEF4F1]">
                  {feature.title}
                </h3>
                {feature.description && (
                  <p className="text-white-600 mt-1">
                    {feature.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom Description */}
        <p className="text-gray-600 max-w-3xl">
          {bottomDescription}
        </p>
      </div>
    </section>
  );
};

export default WhyChoose;