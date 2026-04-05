"use client";

import { Phone, MapPin, Mail } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const ContactSection = () => {
  return (
    <section className="relative bg-[#101915] text-white py-24 px-6 md:px-16 lg:px-24 overflow-hidden">
      {/* Background animation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="absolute top-0 left-0 w-72 h-72 bg-amber-500/10 blur-3xl rounded-full"
      />

      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* LEFT SIDE */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.p
            variants={fadeUp}
            className="text-amber-500 uppercase tracking-[0.3em] text-sm font-semibold mb-4"
          >
            Contact Us
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Let’s Plan Your Manali Adventure
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-gray-300 text-lg leading-8 mb-8"
          >
            Contact us for bookings, activity details, travel questions, and
            adventure planning for your Manali trip.
          </motion.p>

          <div className="space-y-5">
            {[Phone, Mail, MapPin].map((Icon, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ x: 5 }}
                className="flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
                  <Icon className="text-amber-500" size={22} />
                </div>

                <div>
                  <p className="text-sm text-gray-400">
                    {i === 0 ? "Phone" : i === 1 ? "Email" : "Location"}
                  </p>
                  <p className="font-medium">
                    {i === 0
                      ? "+91 XXXXX XXXXX"
                      : i === 1
                        ? "yourmail@example.com"
                        : "Manali, Himachal Pradesh"}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT SIDE FORM */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          whileHover={{ y: -4 }}
          className="bg-white/5 border border-white/10 rounded-[30px] backdrop-blur-md p-8"
        >
          <motion.h3
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-2xl font-semibold mb-6"
          >
            Send A Message
          </motion.h3>

          <form className="space-y-5">
            <motion.input
              whileFocus={{ scale: 1.01 }}
              type="text"
              placeholder="Your Name"
              className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 outline-none placeholder:text-gray-400"
            />

            <motion.input
              whileFocus={{ scale: 1.01 }}
              type="email"
              placeholder="Your Email"
              className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 outline-none placeholder:text-gray-400"
            />

            <motion.textarea
              whileFocus={{ scale: 1.01 }}
              rows={5}
              placeholder="Your Message"
              className="w-full bg-white/10 border resize-none border-white/10 rounded-xl px-4 py-3 outline-none placeholder:text-gray-400"
            />

            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="bg-amber-500 hover:bg-amber-600 text-black font-semibold py-3 px-8 rounded-full transition duration-300"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
