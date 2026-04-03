"use client";

import { useState } from "react";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram, FiYoutube, FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-3 left-1/2 -translate-x-1/2 z-50 w-full px-4 sm:px-6 md:px-10 lg:px-24">
      <nav className="mx-auto max-w-7xl rounded-[30px] backdrop-blur-md bg-white/5 border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.4)] px-4 sm:px-6 md:px-8 py-3">
        <div className="flex items-center justify-between text-white">
          {/* Logo */}
          <div className="flex items-center gap-2 min-w-0">
            <span className="text-lg sm:text-xl font-bold tracking-wider whitespace-nowrap">
              MANALI<span className="text-amber-500">.</span>
            </span>
            <span className="hidden sm:block text-xs sm:text-sm text-gray-300 whitespace-nowrap">
              Adventure
            </span>
          </div>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium">
            <Link href="#about" className="hover:text-amber-400 transition">
              About
            </Link>
            <Link
              href="#activities"
              className="hover:text-amber-400 transition"
            >
              Adventures
            </Link>
            <Link href="#gallery" className="hover:text-amber-400 transition">
              Gallery
            </Link>
            <Link
              href="#testimonials"
              className="hover:text-amber-400 transition"
            >
              Testimonials
            </Link>
            <Link href="#contact" className="hover:text-amber-400 transition">
              Contact
            </Link>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
            {/* Desktop Social Icons */}
            <div className="hidden xl:flex items-center gap-3">
              <div className="w-8 h-8 flex items-center justify-center rounded-full border border-white/20 hover:border-amber-500 hover:text-amber-400 transition cursor-pointer">
                <FaFacebookF size={13} />
              </div>
              <div className="w-8 h-8 flex items-center justify-center rounded-full border border-white/20 hover:border-amber-500 hover:text-amber-400 transition cursor-pointer">
                <FiInstagram size={15} />
              </div>
              <div className="w-8 h-8 flex items-center justify-center rounded-full border border-white/20 hover:border-amber-500 hover:text-amber-400 transition cursor-pointer">
                <FiYoutube size={15} />
              </div>
            </div>

            {/* CTA */}
            <button className="hidden sm:block bg-amber-500 hover:bg-amber-600 text-black px-4 md:px-5 py-2 rounded-full text-sm font-semibold transition">
              Book Now
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full border border-white/20 hover:border-amber-500 hover:text-amber-400 transition"
            >
              {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile / Tablet Menu */}
        {isOpen && (
          <div className="lg:hidden mt-4 border-t border-white/10 pt-4 text-white">
            <div className="flex flex-col gap-4 text-sm font-medium">
              <Link
                href="#about"
                className="hover:text-amber-400 transition"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href="#activities"
                className="hover:text-amber-400 transition"
                onClick={() => setIsOpen(false)}
              >
                Adventures
              </Link>
              <Link
                href="#gallery"
                className="hover:text-amber-400 transition"
                onClick={() => setIsOpen(false)}
              >
                Gallery
              </Link>
              <Link
                href="#testimonials"
                className="hover:text-amber-400 transition"
                onClick={() => setIsOpen(false)}
              >
                Testimonials
              </Link>
              <Link
                href="#contact"
                className="hover:text-amber-400 transition"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </div>

            <div className="flex items-center gap-3 mt-5">
              <div className="w-8 h-8 flex items-center justify-center rounded-full border border-white/20 hover:border-amber-500 hover:text-amber-400 transition cursor-pointer">
                <FaFacebookF size={13} />
              </div>
              <div className="w-8 h-8 flex items-center justify-center rounded-full border border-white/20 hover:border-amber-500 hover:text-amber-400 transition cursor-pointer">
                <FiInstagram size={15} />
              </div>
              <div className="w-8 h-8 flex items-center justify-center rounded-full border border-white/20 hover:border-amber-500 hover:text-amber-400 transition cursor-pointer">
                <FiYoutube size={15} />
              </div>
            </div>

            <button className="sm:hidden mt-5 w-full bg-amber-500 hover:bg-amber-600 text-black px-4 py-2.5 rounded-full text-sm font-semibold transition">
              Book Now
            </button>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
