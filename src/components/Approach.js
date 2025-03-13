import React from "react";
import KeyPointCard from "./KeyPointCard";

const Approach = () => {
  return (
    <section className="bg-[#030438] py-16 px-6 pb-26 relative">
      <div className="container mx-auto flex flex-col items-center text-left relative"> {/* Changed text-center to text-left */}
        
        {/* Tagline Above Heading */}
        <p className="text-[#65E5F2] uppercase tracking-wide font-semibold mb-2">
          Our Approach
        </p>

        {/* Section Title */}
        <h2 className="text-3xl font-bold text-[white-900] pb-8">
          Strengthening security, <span className="text-[#CB73FE]">your future</span>
        </h2>

        {/* Main Content - Flex Layout */}
        <div className="mt-12 -ml-100 flex flex-col md:flex-row items-center relative">
          
          {/* Left Side - Feature Cards (Slight Overlap) */}
          <div className="flex flex-col gap-4 w-full md:w-[75%] relative z-10 text-left"> {/* Added text-left */}
            <KeyPointCard
              icon="/About_Us/1.svg"
              title="Our Mission"
              description="To empower businesses with robust cybersecurity solutions, ensuring data integrity, privacy & resilience."
            />
            <KeyPointCard
              icon="/About_Us/2.svg"
              title="Our Vision"
              description="To empower businesses with robust cybersecurity solutions, ensuring data integrity, privacy & resilience."
            />
            <KeyPointCard
              icon="/About_Us/3.svg"
              title="Our Value"
              description="To empower businesses with robust cybersecurity solutions, ensuring data integrity, privacy & resilience."
            />
          </div>

          {/* Right Side - Image (Relative so Cards Can Overlap) */}
          <div className="w-full md:w-[70%] left-130 absolute">
            <img 
              src="/About_Us/Approch.jpg"
              alt="Cybersecurity Expert"
              className="rounded-3xl shadow-lg w-[95%] md:w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;
