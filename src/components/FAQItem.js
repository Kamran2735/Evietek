"use client";

import { motion } from "framer-motion";

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div
      className={`rounded-xl overflow-hidden transition-all duration-500 cursor-pointer 
                  ${isOpen ? "bg-gradient-to-br from-[#4D9FFF] to-[#8750F7] text-white" : "bg-white text-black shadow-md"}`}
      onClick={onClick}
    >
      {/* Question (Clickable Header) */}
      <div className="w-full flex justify-between items-center p-5 px-12 text-lg font-semibold focus:outline-none relative">
        {question}

        {/* Simple Arrow Icons (Color Changes When Open) */}
        <motion.span
          initial={{ rotate: 0, color: "#4A5568" }} // Default color
          animate={{ rotate: isOpen ? 180 : 0, color: isOpen ? "#FFFFFF" : "#4A5568" }} // White when open
          transition={{ duration: 0.3 }}
          className="text-lg"
        >
          ▾
        </motion.span>
      </div>

      {/* Separator Line (Visible When Open) */}
      {isOpen && <div className="h-[1px] bg-white opacity-50 mx-8 mb-4"></div>}

      {/* Answer (Expands/Collapses) */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="px-12 pb-4"
      >
        <p className="text-base">{answer}</p>
      </motion.div>
    </div>
  );
};

export default FAQItem;
