"use client";

import React from "react";
import Image from "next/image";

const Feature = ({
  heading,
  description,
  features,
  bottomImage,
  bottomDescription,
  additionalFeatures
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0">
                  <Image
                    src={feature.iconSrc}
                    alt={feature.title}
                    width={48}
                    height={48}
                    className="text-blue-500"
                  />
                </div>
                <h3 className="text-xl font-bold text-[#030438]">
                  {feature.title}
                </h3>
              </div>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Bottom Content */}
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          {/* Image */}
          <div className="ml-30">
            <Image
              src={bottomImage.src}
              alt={bottomImage.alt}
              width={bottomImage.width || 400}
              height={bottomImage.height || 300}
              className="rounded-2xl shadow-md"
            />
          </div>
          
          {/* Text Content */}
          <div className="lg:w-1/2">
            <p className="text-gray-600 mb-6">
              {bottomDescription}
            </p>
            
            {/* Additional Features List */}
            <div className="space-y-4">
              {additionalFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="text-blue-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M12 16l4-4-4-4"></path>
                      <path d="M8 12h8"></path>
                    </svg>
                  </div>
                  <p className="text-gray-700 font-medium">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;