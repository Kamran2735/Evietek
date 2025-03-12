"use client";

import React from 'react';
import ImageGridWithRotatingSvg from './ImageGridWithRotatingSvg';

const AboutUsSection = () => {
    return (
      <section className="bg-[#F2F2F5] py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left side - Image grid takes up half the width */}
            <div className="w-full lg:w-1/2">
              <ImageGridWithRotatingSvg />
            </div>
            
            {/* Right side - Your content goes here */}
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl font-bold mb-4">About Us</h2>
              <p className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p className="mb-4">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
                culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <button className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default AboutUsSection;