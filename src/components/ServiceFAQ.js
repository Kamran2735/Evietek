"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import FAQItem from "./FAQItem";

const ServiceFAQ = ({ faqs, className = "w-full md:w-1/2" }) => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className={`${className} space-y-4`}
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
  );
};

export default ServiceFAQ; 