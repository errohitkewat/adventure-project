"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Footer = () => {
  return (
    <footer className="bg-[#0b1a13] text-white px-6 md:px-16 lg:px-24 pt-20 pb-10 border-t border-white/10">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-14"
      >
        {/* Left - Brand */}
        <motion.div variants={fadeUp}>
          <h2 className="text-2xl font-bold mb-4 tracking-wide">
            Manali Adventure
          </h2>
          <p className="text-gray-400 leading-7 text-sm max-w-sm">
            Explore the thrill of river rafting, paragliding, and mountain
            adventures in Manali. Create unforgettable memories with every trip.
          </p>
        </motion.div>

        {/* Center - Links */}
        <motion.div variants={fadeUp} className="lg:pl-30">
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3 text-gray-400 text-sm">
            {["Home", "About", "Activities", "Gallery", "Contact"].map(
              (item, i) => (
                <motion.li
                  key={i}
                  whileHover={{ x: 5 }}
                  className="hover:text-amber-500 cursor-pointer transition"
                >
                  {item}
                </motion.li>
              ),
            )}
          </ul>
        </motion.div>

        {/* Right - Contact */}
        <motion.div variants={fadeUp}>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>

          <div className="space-y-4 text-gray-400 text-sm">
            <motion.div
              whileHover={{ x: 5 }}
              className="flex items-center gap-3"
            >
              <Phone size={18} className="text-amber-500" />
              <span>+91 XXXXX XXXXX</span>
            </motion.div>

            <motion.div
              whileHover={{ x: 5 }}
              className="flex items-center gap-3"
            >
              <MapPin size={18} className="text-amber-500" />
              <span>Manali, Himachal Pradesh</span>
            </motion.div>

            <motion.div
              whileHover={{ x: 5 }}
              className="flex items-center gap-3"
            >
              <Mail size={18} className="text-amber-500" />
              <span>@journey_of_suraj</span>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4"
      >
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Manali Adventure. All rights reserved.
        </p>

        <div className="flex gap-6 text-sm text-gray-400">
          <motion.span
            whileHover={{ y: -2 }}
            className="hover:text-amber-500 cursor-pointer transition"
          >
            Privacy Policy
          </motion.span>

          <motion.span
            whileHover={{ y: -2 }}
            className="hover:text-amber-500 cursor-pointer transition"
          >
            Terms & Conditions
          </motion.span>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
