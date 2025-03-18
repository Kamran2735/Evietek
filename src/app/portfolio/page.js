"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Breadcrumb from '@/components/BreadCrumb';

// Sample project data
const projects = [
  {
    id: 1,
    title: "Zonaris",
    category: "web",
    description: "A full-stack e-commerce solution with real-time inventory management",
    image: "/portfolio/ecommerce.png",
    color: "#FF6B6B",
    skills: ["React", "Node.js", "MongoDB"],
    link: "#"
  },
  {
    id: 2,
    title: "Mobile App Design",
    category: "design",
    description: "UI/UX design for a fitness tracking mobile application",
    image: "/portfolio/fitness.png",
    color: "#4ECDC4",
    skills: ["Figma", "UI/UX", "Prototyping"],
    link: "#"
  },
  {
    id: 3,
    title: "Brand Identity",
    category: "design",
    description: "Complete brand identity design for a tech startup",
    image: "/portfolio/brand.png",
    color: "#A78BFA",
    skills: ["Logo Design", "Branding", "Typography"],
    link: "#"
  },
];

const categories = ["all", "web", "design", "marketing"];

const PortfolioPage = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [hoveredProject, setHoveredProject] = useState(null);

  const filteredProjects = projects.filter(project => 
    activeCategory === "all" ? true : project.category === activeCategory
  );

  return (
    <main className="bg-[#F2F2F5]">

      <Breadcrumb 
      title="Portfolio" 
      backgroundImage="/Portfolio_Main/bg.webp" 
    />


      {/* Hero Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-bold text-[#030438] mb-4"
          >
            Our Portfolio
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Explore our collection of successful projects and creative solutions
          </motion.p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map(category => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full cursor-pointer transition-colors duration-200 ${
                  activeCategory === category
                    ? "bg-[#030438] text-white"
                    : "bg-white text-[#030438] hover:bg-[#030438]/10"
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </motion.button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <AnimatePresence mode="wait">
              {filteredProjects.map(project => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  onHoverStart={() => setHoveredProject(project.id)}
                  onHoverEnd={() => setHoveredProject(null)}
                  whileHover={{ scale: 1.02 }}
                  className="bg-[#030438] text-white rounded-2xl p-6 shadow-lg"
                >
                  <div className="relative h-48 sm:h-56 mb-4 rounded-xl overflow-hidden group">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {hoveredProject === project.id && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="absolute inset-0 bg-black/50 flex items-center justify-center"
                      >
                        <motion.a
                          href={project.link}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="px-6 py-2 bg-white text-[#030438] rounded-full font-medium"
                        >
                          View Project
                        </motion.a>
                      </motion.div>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-200 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.skills.map(skill => (
                      <span
                        key={skill}
                        className="px-3 py-1 rounded-full text-sm bg-white/10 text-white"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PortfolioPage; 