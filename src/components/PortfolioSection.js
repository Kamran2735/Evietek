"use client";

import { useRef, useEffect } from "react";
import Carousel from "./Carousel"; // Carousel component
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image from "next/image";

export default function PortfolioSection() {
  const carouselRef = useRef(null);

  // Function to trigger next slide
  const nextSlide = () => {
    if (carouselRef.current) {
      carouselRef.current.next();
    }
  };

  // Function to trigger previous slide
  const prevSlide = () => {
    if (carouselRef.current) {
      carouselRef.current.prev();
    }
  };

  return (
    <section className="relative bg-[#F9F9F9] text-[#3E2472] py-6 md:py-12 lg:pt-0 px-2 sm:px-4 md:px-8 lg:px-12 pb-15 md:pb-20 lg:pb-30 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-40 right-20 md:top-20 md:right-50 lg:top-20 lg:right-100 w-20 h-20 sm:w-30 sm:h-30 lg:w-40 lg:h-40">
        <Image src="/Portfolio/eye.svg" alt="Eye" width={200} height={200} />
      </div>
      <div className="absolute bottom-40 left-0 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20">
        <Image src="/Portfolio/basketball.svg" alt="Basketball" width={80} height={80} />
      </div>
      <div className="absolute inset-x-0 bottom-12 md:bottom-15 lg:bottom-0 flex justify-end">
        <Image 
          src="/Portfolio/Abstract.svg" 
          alt="Abstract" 
          width={160} 
          height={160} 
          className="w-24 h-24 sm:w-30 sm:h-30 lg:w-40 lg:h-40 translate-y-1/2 lg:translate-y-0"
        />
      </div>

      {/* Centered Container for Text and Arrows */}
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Heading and Navigation Buttons */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full mb-8">
          {/* Left side: Section Heading */}
          <div className="flex flex-col items-start text-left">
            <Image 
              src="/Portfolio/Portfolio.svg"
              alt="Portfolio"
              width={140}
              height={50}
              className="w-[110px] h-[55px] sm:w-[130px] sm:h-[65px] md:w-[150px] md:h-[75px] lg:w-[170px] lg:h-[85px]"
            />
            <h2 className="mt-2 md:mt-3 text-3xl md:text-5xl font-bricolage font-bold leading-tight">
              We Are Mostly <br className="hidden md:block" /> Dribbling Around
            </h2>
          </div>

          {/* Right side: Navigation Buttons */}
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <button 
              onClick={prevSlide} 
              className="bg-[#E0D7FF] p-3 rounded-lg shadow-md hover:bg-[#CBB5FF] transition duration-300 flex items-center justify-center"
              aria-label="Previous slide"
              type="button"
            >
              <FaChevronLeft className="text-[#6A43D8] text-2xl" />
            </button>
            <button 
              onClick={nextSlide} 
              className="bg-[#6A43D8] p-3 rounded-lg shadow-md hover:bg-[#5C33D8] transition duration-300 flex items-center justify-center"
              aria-label="Next slide"
              type="button"
            >
              <FaChevronRight className="text-white text-2xl" />
            </button>
          </div>
        </div>
      </div>

      {/* Carousel Component */}
      <div className="mt-8 ml-0 md:mt-12 md:ml-0 lg:ml-20">
        <Carousel ref={carouselRef} />
      </div>
    </section>
  );
}
