"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutGrid() {
  // More dynamic animation variants
  const imageVariants = {
    initial: (index) => ({
      opacity: 0,
      scale: 0.8,
      rotateY: 90, // Start with a 90-degree rotation
      rotateX: index % 2 === 0 ? 10 : -5,
    }),
    animate: (index) => ({
      opacity: 1,
      scale: 1,
      rotateX: (index === 0 || index === 1) ? 10 : -5,
      rotateY: (index === 0 || index === 2) ? 25 : -25,
      transition: { 
        duration: 0.8, 
        ease: "easeInOut",
        delay: index * 0.2 // Staggered animation
      }
    }),
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
      transition: { 
        duration: 0.3 
      }
    }
  };

  // Sticker animation with more dynamic movement
  const stickerVariants = {
    initial: {
      opacity: 0,
      scale: 0.3,
      rotate: -90
    },
    animate: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10
      }
    },
    hover: {
      scale: 1.1,
      rotate: [0, 15, -15, 0],
      transition: {
        duration: 0.4
      }
    }
  };

  return (
    <div className="relative w-full max-w-5xl mx-0 my-16">
      {/* Top Row */}
      <div className="flex justify-center gap-2">
        {[
          { src: "/About/AboutImg1.png", alt: "Growth Chart", bgColor: "#B8E0F7" },
          { src: "/About/AboutImg2.png", alt: "Person in Yellow", bgColor: "#C5E8F9" }
        ].map((img, index) => (
          <motion.div 
            key={img.src}
            className="relative"
            style={{ perspective: "1000px" }}
            initial="initial"
            whileInView="animate"
            whileHover="hover"
            viewport={{ once: true, amount: 0.2 }}
            custom={index}
          >
            <motion.div
              className="relative h-54 w-75 rounded-3xl overflow-hidden shadow-lg"
              style={{
                backgroundColor: img.bgColor,
                transformOrigin: index % 2 === 0 ? "bottom right" : "bottom left",
                borderRadius: "40px",
              }}
              variants={imageVariants}
              custom={index}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
              />
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Bottom Row */}
      <div className="flex justify-center gap-2 mt-3">
        {[
          { src: "/About/AboutImg3.png", alt: "Person Working", bgColor: "#B8E0F7" },
          { src: "/About/AboutImg4.png", alt: "People with Laptop", bgColor: "#FFC107" }
        ].map((img, index) => (
          <motion.div 
            key={img.src}
            className="relative"
            style={{ perspective: "1000px" }}
            initial="initial"
            whileInView="animate"
            whileHover="hover"
            viewport={{ once: true, amount: 0.2 }}
            custom={index + 2}
          >
            <motion.div
              className="relative h-54 w-75 rounded-3xl overflow-hidden shadow-lg"
              style={{
                backgroundColor: img.bgColor,
                transformOrigin: index % 2 === 0 ? "top right" : "top left",
                borderRadius: "40px",
              }}
              variants={imageVariants}
              custom={index + 2}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
              />
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Animated Stickers */}
      <motion.div
        className="absolute z-10"
        style={{ top: "33%", left: "40%", transform: "translate(-50%, -50%)" }}
        initial="initial"
        whileInView="animate"
        whileHover="hover"
        viewport={{ once: true, amount: 0.2 }}
        variants={stickerVariants}
      >
        <Image src="/About/Sticker1.svg" alt="Hand Gesture" width={130} height={130} />
      </motion.div>

      <motion.div 
        className="absolute z-10 bottom-[-90px] left-[-70px]"
        initial="initial"
        whileInView="animate"
        whileHover="hover"
        viewport={{ once: true, amount: 0.2 }}
        variants={stickerVariants}
      >
        <Image src="/About/Sticker2.svg" alt="Star Decoration" width={200} height={200} />
      </motion.div>
    </div>
  );
}