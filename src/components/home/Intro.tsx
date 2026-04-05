"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const fadeLeft = {
  hidden: {
    opacity: 0,
    x: -60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.9,
      ease: "easeOut",
    },
  },
};

const fadeRight = {
  hidden: {
    opacity: 0,
    x: 60,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.9,
      ease: "easeOut",
    },
  },
};

const AboutSection = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#0b1a13] px-6 py-24 text-white md:px-16 lg:px-24">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="absolute top-0 left-0 h-72 w-72 rounded-full bg-amber-500/10 blur-3xl"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
        className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-green-500/10 blur-3xl"
      />

      <div className="relative z-10 grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.p
            variants={fadeUp}
            className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-amber-500"
          >
            About Us
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="mb-6 text-4xl font-bold leading-tight tracking-wide md:text-6xl"
          >
            Your Adventure Starts In Manali
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mb-8 max-w-2xl text-base leading-8 text-gray-300 md:text-lg"
          >
            We help travelers experience the thrill of Manali through exciting
            outdoor activities like river rafting, paragliding, and more. Our
            goal is to make your trip more adventurous, more memorable, and easy
            to book.
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="mb-10 max-w-2xl text-sm leading-7 text-gray-400 md:text-base"
          >
            Whether you are visiting with friends, family, or your partner, we
            bring you some of the most exciting adventure experiences in and
            around Manali. From fast river currents to breathtaking mountain
            views, every activity is designed to give you the perfect mix of
            thrill, fun, and natural beauty.
          </motion.p>
        </motion.div>

        <motion.div
          variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          whileHover={{ y: -6 }}
          transition={{ duration: 0.4 }}
          className="relative h-140 w-full overflow-hidden rounded-[30px] shadow-[0_20px_80px_rgba(0,0,0,0.45)]"
        >
          <motion.div
            initial={{ scale: 1.12 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="absolute inset-0"
          >
            <Image
              src="/images/about.jpg"
              alt="Manali adventure"
              fill
              className="object-cover"
            />
          </motion.div>

          <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            viewport={{ once: true }}
            className="absolute right-6 bottom-6 left-6 rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-md"
          >
            <p className="mb-2 text-sm uppercase tracking-[0.25em] text-amber-400">
              Book Your Experience
            </p>
            <h3 className="mb-2 text-2xl font-bold">
              Thrill, Nature And Memories
            </h3>
            <p className="text-sm leading-6 text-gray-200">
              Discover exciting adventure activities in Manali and turn your
              trip into an experience full of energy, scenic beauty, and
              unforgettable moments.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
