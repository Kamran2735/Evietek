"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function JoinUSSection() {
  return (
    <section className="relative bg-[#030438] text-white flex flex-col items-center justify-between text-center px-6 md:px-12 md:py-10 overflow-hidden">
      {/* Background Grid SVG - Covers Full Width */}
      <div className="absolute inset-0 w-full h-full">
        <svg className="absolute inset-0 w-full h-full opacity-50 pointer-events-none brightness-110 mix-blend-screen" xmlns="http://www.w3.org/2000/svg">
          <image href="/bg.svg" width="100%" height="100%" preserveAspectRatio="none" />
        </svg>
      </div>

      {/* Layered Background: Blue Bottom, Purple Center, Blue Edges */}
      <div className="absolute inset-0 w-full h-full bg-[radial-gradient(circle, rgba(120,70,190,0.8) 25%, rgba(3,4,56,0.9) 70%, rgba(3,4,56,1) 100%)] pointer-events-none"></div>

      {/* Wider Purple Glow on X-Axis */}
      <div className="absolute inset-0 flex items-center justify-center -translate-y-12">
        <div className="w-[90vw] h-[50vw] max-w-[1200px] max-h-[600px] bg-[#7A3DD7] opacity-35 rounded-full blur-[120px]"></div>
      </div>

      {/* Main Content Container */}
      <div className="flex flex-col items-center justify-center w-full py-16">
        {/* Main Heading */}
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-[70px] leading-[97%] font-bricolageGrotesque font-bold text-white text-center">
            Be a Part of Our <br />
            Creative & Digital <br />
            Evolution
          </h1>

          {/* Paragraph Text */}
          <p className="text-white text-[20px] font-gilroyRegular font-normal leading-[151%] text-center mt-6 max-w-3xl">
            At Evietek, we’re more than just a digital marketing agency – we’re innovators in graphic design, 
            web development, and marketing strategy. Whether you’re a creative designer, a web development expert, 
            or a digital marketing specialist, we offer an exciting environment to grow and make an impact. 
            Ready to join a team that’s shaping the future of digital experiences?
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-16">
        <Link href="/contact" className="hidden md:block">
          <button className="flex items-center gap-2 bg-gradient-to-b from-[#5A50FF] to-[#D376FF] hover:opacity-90 text-white px-6 py-3 rounded-2xl font-semibold text-sm lg:text-base xl:text-lg shadow-lg transition-all transform hover:scale-105">
            <Image src="/phone.svg" alt="Phone" width={20} height={20} />
            Book a Meeting
          </button>
        </Link>
        <button className="flex items-center gap-2 bg-[#ffff] hover:opacity-90 text-[#030438] px-6 py-3 rounded-2xl font-semibold text-sm lg:text-base xl:text-lg shadow-lg transition-all transform hover:scale-105">
        <Image src="/phone2.svg" alt="Phone" width={20} height={20} />+1 (647) 804 5528
          </button>
        </div>
      </div>
          {/* Decorative Icons */}
          <div className="absolute bottom-40 right-60 w-12 h-12 sm:w-16 sm:h-16 lg:w-15 lg:h-15">
            <Image src="/Join_Us/Star2.svg" alt="Star" width={80} height={80} />
          </div>
    
          <div className="absolute top-25 left-15 w-12 h-12 sm:w-16 sm:h-16 lg:w-15 lg:h-15">
            <Image src="/Join_Us/Star.svg" alt="Star" width={60} height={60} />
          </div>
            
            {/* Images */}
          <div className="absolute top-70 left-20 w-12 h-12 sm:w-16 sm:h-16 lg:w-70 lg:h-70">
            <Image src="/Join_Us/1.svg" alt="Model-Z" width={250} height={250} />
          </div>
    
          <div className="absolute top-0 left-40 w-12 h-12 sm:w-16 sm:h-16 lg:w-70 lg:h-70">
            <Image src="/Join_Us/2.svg" alt="Magnet" width={250} height={250} />
          </div>

         <div className="absolute bottom-[-150] right-0 w-12 h-12 sm:w-16 sm:h-16 lg:w-70 lg:h-70">
            <Image src="/Join_Us/3.svg" alt="Icon" width={250} height={250} />
          </div>
    
          <div className="absolute top-0 right-0 w-12 h-12 sm:w-16 sm:h-16 lg:w-70 lg:h-70">
            <Image src="/Join_Us/4.svg" alt="Magnet" width={250} height={250} />
          </div>

          <div className="absolute top-70 right-0 w-12 h-12 sm:w-16 sm:h-16 lg:w-70 lg:h-70">
            <Image src="/Join_Us/5.svg" alt="Icon" width={250} height={250} />
          </div>
    
          <div className="absolute bottom-[-150] left-40 w-12 h-12 sm:w-16 sm:h-16 lg:w-70 lg:h-70">
            <Image src="/Join_Us/6.svg" alt="Magnet" width={250} height={250} />
          </div>
          


    </section>
  );
}
