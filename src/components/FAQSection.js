"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import FAQItem from "./FAQItem";

const faqs = [
  {
    question: "What services does Evietek provide?",
    answer:
      "Evietek offers comprehensive digital solutions, including digital marketing, website design, content creation, branding, graphic design, and social media management.",
  },
  {
    question: "How can Evietek help to grow my business?",
    answer:
      "We create customized strategies to enhance your digital presence, engage your target audience, and drive measurable results for long-term growth.",
  },
  {
    question: "Why should I choose Evietek over other agencies?",
    answer:
      "Evietek stands out with a client-focused approach, innovative solutions, and a commitment to delivering exceptional value and results.",
  },
  {
    question: "How long does it take to see results?",
    answer:
      "Timelines vary by project, but most clients see noticeable improvements within weeks, with significant growth achieved in a few months.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0); // Only one item open at a time

  return (
    <section className="py-16 px-8 md:px-24 bg-white text-black">
      <div className="container mx-auto px-24 flex flex-col md:flex-row items-center gap-2">
        
        {/* Left Side (Image & Text) */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 flex flex-col"
        >
          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-sm uppercase tracking-widest text-blue-500 font-medium mb-2"
          >
            FAQ
          </motion.p>

          {/* Heading with Different Font Colors */}
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="text-4xl font-bold leading-tight bg-gradient-to-br from-[#4D9FFF] to-[#8750F7] bg-clip-text text-transparent"
          >
            Evietek FAQs:  
            <br />
            <span className="text-[#030438]">
              Everything You Need to Know About Digital Innovation
            </span>
          </motion.h2>

          {/* Image with Overlay Effect */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
            className="mt-6 relative group overflow-hidden rounded-lg"
          >
            <Image
              src="/FAQ/faq-image.jpg"
              alt="Cybersecurity FAQ"
              width={550}
              height={400}
              className="rounded-lg"
            />

            {/* White Overlay Effect */}
            <div className="absolute inset-0 bg-white opacity-0 scale-0 transition-all duration-700 
                            group-hover:opacity-30 group-hover:scale-[2] rotate-45">
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side (FAQ List) */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 space-y-4"
        >
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              {...faq}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
