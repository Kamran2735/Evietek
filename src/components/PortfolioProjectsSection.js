"use client";

import Projects from "./PortfolioProjects";

import Image from "next/image";

export default function PortfolioProjectsSection() {
      return (
        <section className="relative bg-[#F9F9F9] text-[#333] py-3 md:py-8 lg:pt-8 px-4 md:px-8 lg:px-12 pb-0">
              {/* Section Heading */}
              <div className="flex flex-col items-center text-center">
              <Image 
                    src="/Portfolio_2/Portfolio.svg"
                    alt="Portfolio"
                    width={140}
                    height={50}
                    className="w-[110px] h-[55px] sm:w-[130px] sm:h-[65px] md:w-[150px] md:h-[75px] lg:w-[170px] lg:h-[85px]"
                />
                {/* "What We Do" Heading */}
                <h2 className="text-[50px] leading-[107%] font-bricolage font-bold text-[#341E61] mt-1 md:mt-1">
                  Our Recent Projects
                </h2>
              </div>
              <Projects />

                            <div className="absolute bottom-140 right-0 w-12 h-12 sm:w-16 sm:h-16 lg:w-35 lg:h-35">
                              <Image src="/Portfolio_2/Rocket.svg" alt="Rocket" width={150} height={150} />
                            </div>
              
                            <div className="absolute bottom-100 left-30 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20">
                              <Image src="/Portfolio_2/Star.svg" alt="Star" width={40} height={40} />
                            </div>

                            <div className="absolute top-100 left-0 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20">
                              <Image src="/Portfolio_2/Camera.svg" alt="Camera" width={160} height={160} />
                            </div>
              </section>


        );

}