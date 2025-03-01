"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 px-8 py-4 transition-all duration-500 ${
        isScrolled
          ? "bg-[#030438]/90 backdrop-blur-md shadow-lg" // Apply background on scroll
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto max-w-7xl flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <Image src="/logo.png" alt="EvieTek Logo" width={140} height={50} />
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-12 text-white text-lg font-medium tracking-wide">
          <Link href="#about" className="hover:text-gray-300 transition">
            About us
          </Link>
          <Link href="#how-we-work" className="hover:text-gray-300 transition">
            How We Work
          </Link>
          <Link href="#portfolio" className="hover:text-gray-300 transition">
            Portfolio
          </Link>
          <Link href="#services" className="hover:text-gray-300 transition">
            Services
          </Link>
        </div>

        {/* CTA Button */}
        <Link href="#book-meeting">
          <button className="flex items-center gap-2 bg-gradient-to-b from-[#9F67FF] to-[#F271C4] hover:opacity-90 text-white px-7 py-3 rounded-2xl font-semibold text-lg shadow-lg transition-all transform hover:scale-105">
           <Image src="/phone.svg" alt="Phone" width={20} height={20} />
            Book a Meeting
          </button>
        </Link>
      </div>
    </nav>
  );
}
  