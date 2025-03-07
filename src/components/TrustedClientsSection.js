"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const clients = [
  { id: 1, logo: "/clients/xp.svg", alt: "XP" },
  { id: 2, logo: "/clients/vital.svg", alt: "Vital" },
  { id: 3, logo: "/clients/resly.svg", alt: "Resly" },
  { id: 4, logo: "/clients/humaans.svg", alt: "Humaans" },
  { id: 5, logo: "/clients/visa.svg", alt: "Visa" },
  { id: 6, logo: "/clients/stitch.svg", alt: "Stitch" },
];

export default function TrustedClients() {
  return (
    <section className="bg-white py-12 overflow-hidden w-full">
      {/* Heading */}
      <h2 className="text-center text-2xl md:text-3xl font-bold text-[#341E61] mb-6">
        Trusted By Amazing Clients & Brands
      </h2>

      {/* Scrolling Carousel */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex w-max space-x-10" // Increased space between cards
          animate={{ x: ["0%", "-50%"] }} // Adjusted animation to prevent blank space
          transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
        >
          {/* Duplicate clients to create a seamless infinite loop */}
          {[...clients, ...clients].map((client, index) => (
            <div
              key={index}
              className="w-[250px] h-[250px] flex-shrink-0 bg-white border border-gray-300 rounded-lg shadow-md overflow-hidden flex items-center justify-center"
            >
              <Image
                src={client.logo}
                alt={client.alt}
                width={220} // Slightly larger images
                height={220}
                className="object-contain w-full h-full"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
