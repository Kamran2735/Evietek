'use client';

import React from 'react';

const CaseStudyCard = ({
  tag,
  tagColor = 'bg-green-100 text-green-800',
  heading,
  headingColor = 'text-gray-800',
  content,
  contentColor = 'text-gray-600',
  bgColor = 'bg-white',
  image,
  imagePosition = 'right',
  buttonText = 'READ MORE',
  buttonColor = 'text-green-600',
  buttonLink,
}) => {
  return (
    <div className="relative w-full max-w-7xl mx-auto my-8">
      <div className={`flex flex-col ${imagePosition === 'left' ? 'md:flex-row-reverse' : 'md:flex-row'} items-center justify-center overflow-hidden`}>
        {/* Content section */}
        <div className={`${bgColor} p-4 md:p-6 z-10 md:w-1/2 rounded-lg shadow-md`}>
          {/* Tag */}
          <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 ${tagColor}`}>
            {tag.toUpperCase()}
          </div>
          
          {/* Heading */}
          <h2 className={`text-2xl md:text-3xl font-bold mb-4 ${headingColor}`}>
            {heading}
          </h2>
          
          {/* Content */}
          <p className={`mb-6 ${contentColor}`}>
            {content}
          </p>
          
          {/* Button */}
          <a 
            href={buttonLink} 
            className={`flex items-center font-semibold ${buttonColor} hover:underline transition-all cursor-pointer`}
          >
            {buttonText}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
        
        {/* Image section */}
        <div className={`md:w-1/2 h-64 md:h-96 ${imagePosition === 'left' ? 'md:-mr-12' : 'md:-ml-12'} relative`}>
          <img 
            src={image} 
            alt={heading} 
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default CaseStudyCard;