"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto"; // Prevent scrolling when menu is open
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 px-4 py-3 transition-all duration-500 flex justify-between items-center ${
        isScrolled ? "bg-[#030438]/90 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto max-w-7xl flex justify-between items-center w-full">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image src="/logo.png" alt="EvieTek Logo" width={120} height={40} />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-2 lg:space-x-4 xl:space-x-6 text-white text-sm lg:text-base xl:text-lg font-medium tracking-wide">
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

        {/* CTA Button (Visible on all screen sizes) */}
        <Link href="#book-meeting" className="hidden md:block">
          <button className="flex items-center gap-1.5 bg-gradient-to-b from-[#9F67FF] to-[#F271C4] hover:opacity-90 text-white px-2 py-1.5 rounded-2xl font-semibold text-sm lg:text-base xl:text-lg shadow-lg transition-all transform hover:scale-105">
            <Image src="/phone.svg" alt="Phone" width={15} height={15} />
            Book a Meeting
          </button>
        </Link>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="md:hidden text-white text-2xl z-50">
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed top-0 left-0 w-full h-full bg-[#030438]/90 backdrop-blur-md flex flex-col items-center justify-center space-y-6 text-white text-lg font-medium tracking-wide z-40">
          <Link href="#about" className="hover:text-gray-300 transition" onClick={toggleMenu}>
            About us
          </Link>
          <Link href="#how-we-work" className="hover:text-gray-300 transition" onClick={toggleMenu}>
            How We Work
          </Link>
          <Link href="#portfolio" className="hover:text-gray-300 transition" onClick={toggleMenu}>
            Portfolio
          </Link>
          <Link href="#services" className="hover:text-gray-300 transition" onClick={toggleMenu}>
            Services
          </Link>

          {/* CTA Button Inside Mobile Menu */}
          <Link href="#book-meeting" onClick={toggleMenu}>
            <button className="flex items-center gap-2 bg-gradient-to-b from-[#9F67FF] to-[#F271C4] hover:opacity-90 text-white px-4 py-2 rounded-2xl font-semibold text-base shadow-lg transition-all transform hover:scale-105">
              <Image src="/phone.svg" alt="Phone" width={16} height={16} />
              Book a Meeting
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
}
