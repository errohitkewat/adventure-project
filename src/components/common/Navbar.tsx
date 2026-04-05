"use client";

import { useState } from "react";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram, FiYoutube, FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Adventures", href: "#activities" },
  { label: "Gallery", href: "#gallery" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="fixed top-3 left-1/2 z-50 w-full -translate-x-1/2 px-4 sm:px-6 md:px-10 lg:px-24"
    >
      <motion.nav
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mx-auto max-w-7xl rounded-[30px] border border-white/10 bg-white/5 px-4 py-3 shadow-[0_10px_40px_rgba(0,0,0,0.4)] backdrop-blur-md sm:px-6 md:px-8"
      >
        <div className="flex items-center justify-between text-white">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex min-w-0 items-center gap-2"
          >
            <span className="whitespace-nowrap text-lg font-bold tracking-wider sm:text-xl">
              MANALI<span className="text-amber-500">.</span>
            </span>
            <span className="hidden whitespace-nowrap text-xs text-gray-300 sm:block sm:text-sm">
              Adventure
            </span>
          </motion.div>

          <div className="hidden items-center gap-6 text-sm font-medium lg:flex xl:gap-8">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 * index, duration: 0.4 }}
              >
                <Link
                  href={link.href}
                  className="relative transition hover:text-amber-400"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="flex items-center gap-2 sm:gap-3 md:gap-4"
          >
            <div className="hidden items-center gap-3 xl:flex">
              <motion.div
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-white/20 transition hover:border-amber-500 hover:text-amber-400"
              >
                <FaFacebookF size={13} />
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-white/20 transition hover:border-amber-500 hover:text-amber-400"
              >
                <FiInstagram size={15} />
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-white/20 transition hover:border-amber-500 hover:text-amber-400"
              >
                <FiYoutube size={15} />
              </motion.div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="hidden rounded-full bg-amber-500 px-4 py-2 text-sm font-semibold text-black transition hover:bg-amber-600 sm:block md:px-5"
            >
              Book Now
            </motion.button>

            <motion.button
              whileTap={{ scale: 0.92 }}
              onClick={() => setIsOpen(!isOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition hover:border-amber-500 hover:text-amber-400 lg:hidden"
            >
              {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
            </motion.button>
          </motion.div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -10 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -10 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="overflow-hidden lg:hidden"
            >
              <div className="mt-4 border-t border-white/10 pt-4 text-white">
                <div className="flex flex-col gap-4 text-sm font-medium">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      transition={{ delay: index * 0.06, duration: 0.25 }}
                    >
                      <Link
                        href={link.href}
                        className="transition hover:text-amber-400"
                        onClick={() => setIsOpen(false)}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ delay: 0.2, duration: 0.25 }}
                  className="mt-5 flex items-center gap-3"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-white/20 transition hover:border-amber-500 hover:text-amber-400"
                  >
                    <FaFacebookF size={13} />
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-white/20 transition hover:border-amber-500 hover:text-amber-400"
                  >
                    <FiInstagram size={15} />
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-white/20 transition hover:border-amber-500 hover:text-amber-400"
                  >
                    <FiYoutube size={15} />
                  </motion.div>
                </motion.div>

                <motion.button
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ delay: 0.25, duration: 0.25 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className="mt-5 w-full rounded-full bg-amber-500 px-4 py-2.5 text-sm font-semibold text-black transition hover:bg-amber-600 sm:hidden"
                >
                  Book Now
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </motion.div>
  );
};

export default Navbar;
