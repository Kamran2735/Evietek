"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const projects = [
  { id: 1, src: "/Portfolio_2/Trakpac.svg", alt: "Trackpac", title: "Trackpac", link: "/projects/trackpac" },
  { id: 2, src: "/Portfolio_2/AllInTicket.svg", alt: "All In Ticket", title: "All In Ticket", link: "/projects/all-in-ticket" },
  { id: 3, src: "/Portfolio_2/Medalyc.svg", alt: "Medalyc", title: "Medalyc", link: "/projects/medalyc" },
  { id: 4, src: "/Portfolio_2/Zonaris.svg", alt: "Zonaris", title: "Zonaris", link: "/projects/zonaris" },
];

const PortfolioProjects = () => {
  const [tappedId, setTappedId] = useState(null);
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);
  const [spacingValue, setSpacingValue] = useState(50);

  useEffect(() => {
    const updateValues = () => {
      const width = window.innerWidth;
      setIsMobileOrTablet(width < 1024);

      if (width < 640) setSpacingValue(65);
      else if (width < 768) setSpacingValue(80);
      else if (width < 1024) setSpacingValue(100);
      else if (width < 1280) setSpacingValue(120);
      else if (width < 1536) setSpacingValue(150);
      else setSpacingValue(160);
    };

    updateValues();
    window.addEventListener("resize", updateValues);
    return () => window.removeEventListener("resize", updateValues);
  }, []);

  const handleTap = (e, projectId, link) => {
    if (!isMobileOrTablet) return;
    if (tappedId === projectId) {
      window.location.href = link;
    } else {
      e.preventDefault();
      setTappedId(projectId);
    }
  };

  useEffect(() => {
    if (!isMobileOrTablet) return;
    const handleOutsideClick = (e) => {
      if (!e.target.closest(".portfolio-card")) {
        setTappedId(null);
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [isMobileOrTablet]);

  return (
    <div className="relative flex flex-col items-center justify-center mt-4 sm:mt-6 md:mt-8 lg:mt-10">
      <div className="relative w-full sm:w-[400px] md:w-[580px] lg:w-[700px] xl:w-[800px] 2xl:w-[900px] h-[460px] sm:h-[550px] md:h-[700px] lg:h-[850px] xl:h-[1000px] 2xl:h-[1100px] flex flex-col items-center">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="portfolio-card absolute w-full transition-transform duration-300 ease-in-out"
            style={{
              top: `${(projects.length - 1 - index) * spacingValue}px`, 
              zIndex: projects.length - index, 
            }}
            initial={{ opacity: 0, y: -200 }} // Start from above
            whileInView={{ opacity: 1, y: 0 }} // Animate when in viewport
            viewport={{ once: true, amount: 0.3 }} // Trigger only once per view
            transition={{
              duration: 0.8,
              ease: "easeOut",
              delay: (projects.length + index) * 0.3, // Staggered effect (furthest back drops first)
            }}
            onClick={(e) => handleTap(e, project.id, project.link)}
          >
            <Link href={project.link} className="w-full px-2 sm:px-0">
              <Image
                src={project.src}
                alt={project.alt}
                width={1000}
                height={400}
                className="rounded-lg shadow-lg cursor-pointer w-full max-h-[280px] sm:max-h-[230px] md:max-h-[400px] lg:max-h-[500px] xl:max-h-none 2xl:max-h-none"
                priority
              />
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioProjects;
