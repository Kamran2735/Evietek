import React from "react";
import Image from "next/image";
import Link from "next/link"; // Import Next.js Link

const projects = [
  { id: 4, src: "/Portfolio_2/Zonaris.svg", alt: "Zonaris", title: "Zonaris", link: "/projects/zonaris" },
  { id: 3, src: "/Portfolio_2/Medalyc.svg", alt: "Medalyc", title: "Medalyc", link: "/projects/medalyc" },
  { id: 2, src: "/Portfolio_2/AllInTicket.svg", alt: "All In Ticket", title: "All In Ticket", link: "/projects/all-in-ticket" },
  { id: 1, src: "/Portfolio_2/Trakpac.svg", alt: "Trackpac", title: "Trackpac", link: "/projects/trackpac" },
];

const PortfolioProjects = () => {
  return (
    <div className="relative flex flex-col items-center justify-center mt-10">
      <div className="relative w-[800px] h-[1000px] flex flex-col items-center">
        {projects.map((project, index) => (
          <Link key={project.id} href={project.link} className="absolute w-full transition-transform duration-300 ease-in-out hover:-translate-y-75 hover:z-10"
            style={{
              top: `${index * 140}px`, // Adjusted spacing to show more of each project
              zIndex: index, // Ensures correct stacking order
            }}>
              <Image
                src={project.src}
                alt={project.alt}
                width={1000} // Increased width
                height={400} // Increased height
                className="rounded-lg shadow-lg cursor-pointer"
              />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PortfolioProjects;
