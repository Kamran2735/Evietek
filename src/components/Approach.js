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
        Strengthening Innovation, <span className="text-[#CB73FE]">Your Digital Success </span>
        </h2>

        {/* Main Content - Flex Layout */}
        <div className="mt-12 -ml-100 flex flex-col md:flex-row items-center relative">
          
          {/* Left Side - Feature Cards (Slight Overlap) */}
          <div className="flex flex-col gap-4 w-full md:w-[60%] relative z-10 text-left left-45"> {/* Added text-left */}
            <KeyPointCard
              icon="/About_Us/1.svg"
              title="Our Mission"
              description="To empower businesses with innovative digital strategies, driving growth, visibility and meaningful connections in the digital world."
            />
            <KeyPointCard
              icon="/About_Us/2.svg"
              title="Our Vision"
              description="To lead the digital transformation landscape with creativity and strategy, enabling brands to thrive in a competitive market."
            />
            <KeyPointCard
              icon="/About_Us/3.svg"
              title="Our Value"
              description="Innovating digital excellence, fostering trust through transparency and collaborating with clients to achieve shared success and growth."
            />
          </div>

          {/* Right Side - Image (Relative so Cards Can Overlap) */}
          <div className="w-full md:w-[48%] left-175 absolute">
            <img 
              src="/About_Us/5.png"
              alt="Expert Web Developer"
              className="rounded-3xl shadow-lg w-[95%] md:w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;
