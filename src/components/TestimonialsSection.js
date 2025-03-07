"use client";

import Image from "next/image";

export default function TestimonialsSection() {
  return (
    <section className="relative bg-[#F9F9F9] text-[#333] py-3 md:py-8 lg:pt-8 px-4 md:px-8 lg:px-12 pb-0">
      {/* Section Heading */}
      <div className="flex flex-col items-center text-center">
        <Image 
          src="/Testimonials/Testimonials.svg"
          alt="Testimonials"
          width={140}
          height={50}
          className="w-[110px] h-[55px] sm:w-[130px] sm:h-[65px] md:w-[150px] md:h-[75px] lg:w-[170px] lg:h-[85px]"
        />
        
        {/* Heading */}
        <h2 className="text-[50px] leading-[107%] font-bricolage font-bold text-[#341E61] mt-1 md:mt-1">
          What Are Customers <br className="hidden md:block" /> Saying About Us?
        </h2>
      </div>    

      {/* Placeholder for Testimonials */}
      <div className="flex flex-col items-center justify-center w-full max-w-4xl mx-auto mt-10 p-8 bg-white shadow-lg rounded-lg min-h-[250px]">
        <p className="text-gray-400 text-center">
          {/* Placeholder text */}
          Customer reviews will appear here...
        </p>
      </div>

      {/* Decorative Icons */}
      <div className="absolute top-20 right-60 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20">
        <Image src="/Testimonials/Icon.svg" alt="Icon" width={80} height={80} />
      </div>

      <div className="absolute top-25 left-40 w-12 h-12 sm:w-16 sm:h-16 lg:w-40 lg:h-40">
        <Image src="/Testimonials/Magnet.svg" alt="Magnet" width={160} height={160} />
      </div>
    </section>
  );
}
