import React from 'react';
import Image from 'next/image';

const ImageGridWithRotatingSvg = () => {
  return (
    <div className="relative flex flex-col md:flex-row items-center justify-center max-w-6xl mx-auto p-4 gap-4">
      {/* Left image */}
      <div className="relative w-full md:w-1/3 h-90 overflow-hidden rounded-lg">
        <Image
          src="/About_Us/1.jpg"
          alt="Person working at night in office"
          fill
          className="object-cover"
        />
      </div>
      
      {/* Center rotating SVG */}
      <div className="absolute z-10 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="w-30 h-30 md:w-50 md:h-50 rounded-full flex items-center justify-center animate-spin-slow">
          <Image 
            src="/About_Us/circle.svg"
            alt="Cybersecurity badge" 
            width={150}
            height={150}
            className="w-full h-full"
          />
        </div>
      </div>
      
      {/* Right column with two stacked images */}
      <div className="w-full md:w-1/3 flex flex-col gap-4">
        <div className="relative w-full h-54 overflow-hidden rounded-lg">
          <Image
            src="/About_Us/2.jpg"
            alt="Woman working on computer"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative w-full h-60 overflow-hidden rounded-lg">
          <Image
            src="/About_Us/3.jpg"
            alt="Security interface on laptop"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

// Add this to your tailwind.config.js
// module.exports = {
//   theme: {
//     extend: {
//       animation: {
//         'spin-slow': 'spin 15s linear infinite',
//       }
//     }
//   }
// }

export default ImageGridWithRotatingSvg;