"use client";

import { motion } from "framer-motion";
import BookingForm from "./BookingForm";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const BookingSection = () => {
  return (
    <section
      id="booking"
      className="relative overflow-hidden bg-[#101915] px-6 py-24 text-white md:px-16 lg:px-24"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.75 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="absolute left-0 top-0 h-80 w-80 rounded-full bg-amber-500/10 blur-3xl"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.75 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
        className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-green-500/10 blur-3xl"
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto mb-16 max-w-4xl text-center"
        >
          <motion.p
            variants={fadeUp}
            className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-amber-500"
          >
            Booking
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="mb-6 text-4xl font-bold leading-tight md:text-6xl"
          >
            Reserve Your Next Adventure In Manali
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mx-auto mb-5 max-w-3xl text-lg leading-8 text-gray-300"
          >
            Choose your activity, add premium options like photo, video, and
            GoPro recording, and send your booking enquiry in just a few steps.
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="mx-auto max-w-2xl leading-7 text-gray-400"
          >
            Perfect for solo travelers, couples, families, and groups who want a
            smooth booking experience with clear details and custom add-ons.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.15 }}
          whileHover={{ y: -4 }}
          className="rounded-4xl border border-white/10 bg-white/5 p-4 backdrop-blur-md md:p-6"
        >
          <BookingForm />
        </motion.div>
      </div>
    </section>
  );
};

export default BookingSection;
