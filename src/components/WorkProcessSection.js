"use client";
import Banner from "./WorkProcessBanner";
import Heading from "./WorkProcessHeading";
import WorkProcessCard from "./WorkProcessCard";
import Link from "next/link";
import Image from "next/image";

export default function WorkProcessSection() {
  return (
    <>
      <section className="relative bg-[#030438] text-[#ffff] py-4 md:py-8 lg:pt-15 px-0 md:px-0 lg:px-0 pb-0">
        <Banner />
      </section>
      <section className="relative bg-[#030438] text-[#ffff] py-4 md:py-8 lg:pt-10 px-4 md:px-8 lg:px-12 pb-0">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center">
          <Heading />
          <h2 className="text-[50px] leading-[107%] font-bricolage font-bold text-[#F6F5FF] mt-1 md:mt-1">
            How We Can <br />
            Work Together
          </h2>
        </div>
        
        {/* Work Process Cards - Adjusted with staggered layout */}
        <div className="flex flex-col md:flex-row items-center justify-center md:gap-4 lg:gap-6 mt-16 relative">
          {/* First card - Up position */}
          <div className="md:transform md:-translate-y-8">
            <WorkProcessCard
              icon="/Work_Process/1.svg"
              number="1"
              title="Brief/Short Details"
              description="Come to us with a project brief or short project details that you have currently to give us an idea of your project or product."
              rotation={2.52}
            />
          </div>
          
          {/* Second card - Down position */}
          <div className="md:transform md:translate-y-8">
            <WorkProcessCard
              icon="/Work_Process/2.svg"
              number="2"
              title="Questions"
              description="After having the details from you, we'll ask questions related to your project to understand the project length and scope."
              highlight={true}
              rotation={-2.69}
            />
          </div>
          
          {/* Third card - Up position */}
          <div className="md:transform md:-translate-y-8">
            <WorkProcessCard
              icon="/Work_Process/3.svg"
              number="3"
              title="Providing Quote"
              description="We will be providing you a quote for the project after having the answers from you and estimating the resources needed for your porject."
              rotation={-1.24}
            />
          </div>
          
          {/* Fourth card - Down position */}
          <div className="md:transform md:translate-y-8">
            <WorkProcessCard
              icon="/Work_Process/4.svg"
              number="4"
              title="Get Started"
              description="If the quote works for both of us, we can have a short meeting or we can directly jump into the process of getting started."
              rotation={-0.48}
            />
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-16">
        <Link href="/contact" className="hidden md:block">
          <button className="flex items-center gap-1.5 bg-gradient-to-b from-[#5A50FF] to-[#D376FF] hover:opacity-90 text-white px-4 py-2 rounded-2xl font-semibold text-sm lg:text-base xl:text-lg shadow-lg transition-all transform hover:scale-105">
            <Image src="/phone.svg" alt="Phone" width={15} height={15} />
            Book a Meeting
          </button>
        </Link>
        <button className="flex items-center gap-1.5 bg-[#3E2472] hover:opacity-90 text-white px-4 py-2 rounded-2xl font-semibold text-sm lg:text-base xl:text-lg shadow-lg transition-all transform hover:scale-105">
        <Image src="/phone.svg" alt="Phone" width={15} height={15} />+1 (647) 804 5528
          </button>
        </div>

              <div className="absolute top-40 left-0 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20">
                <Image src="/Work_Process/Laptop.svg" alt="Laptop" width={80} height={80} />
              </div>

              <div className="absolute bottom-0 right-0 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20">
                <Image src="/Work_Process/Star.svg" alt="Laptop" width={80} height={80} />
              </div>

      </section>
    </>
  );
}