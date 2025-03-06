"use client";
import Banner from "./WorkProcessBanner";
import Heading from "./WorkProcessHeading";
import WorkProcessCard from "./WorkProcessCard";

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
       {/* Work Process Cards */}
       <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-12 relative">
       <WorkProcessCard 
  icon="/Work_Process/1.svg"
  title="Brief/Short Details"
  description="Come to us with a project brief or short project details that you have currently to give us an idea of your project or product."
  tilt={-2.52} // Precise rotation
/>
<WorkProcessCard 
  icon="/Work_Process/2.svg"
  title="Questions"
  description="After having the details from you, we’ll ask questions related to your project to understand the project length and scope."
  highlight
  tilt={2.69} // Precise rotation
/>
<WorkProcessCard 
  icon="/Work_Process/3.svg"
  title="Providing Quote"
  description="We will be providing you a quote for the project after having the answers from you."
  tilt={1.24} // Precise rotation
/>
<WorkProcessCard 
  icon="/Work_Process/4.svg"
  title="Get Started"
  description="If the quote works for both of us, we can have a short meeting or we can directly jump into the process of getting started."
  tilt={-0.48} // Precise rotation
/>


        
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
        <button className="bg-[#5B42F3] px-6 py-3 rounded-lg text-white font-semibold">
          📅 Book a Meeting
        </button>
        <button className="bg-[#8D4BF7] px-6 py-3 rounded-lg text-white font-semibold">
          📞 +1 (647) 804 5528
        </button>
      </div>


      </section>
      </>
    );
}