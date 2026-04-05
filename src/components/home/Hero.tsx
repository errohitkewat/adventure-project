"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.2,
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
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const fadeIn = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      <motion.div
        initial={{ scale: 1.12 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <Image
          src="/images/heroimage.jpg"
          alt="heroimage"
          fill
          priority
          className="object-cover"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute inset-0 bg-linear-to-b from-black/80 via-black/40 to-black/90"
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="absolute inset-0 flex flex-col justify-center px-6 pt-50 text-white sm:px-10 sm:pt-24 md:px-16 md:pt-28 lg:px-24"
      >
        <motion.h1
          variants={fadeUp}
          className="text-3xl font-medium tracking-wide sm:text-4xl md:text-5xl lg:text-6xl"
        >
          Welcome
        </motion.h1>

        <motion.h1
          variants={fadeUp}
          className="mt-1 flex flex-wrap items-end gap-2 text-5xl font-bold leading-none sm:gap-3 sm:text-6xl md:text-7xl lg:text-9xl"
        >
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.7, ease: "easeOut" }}
            className="h-full pt-3 text-2xl font-medium text-amber-500 sm:text-3xl md:text-4xl lg:text-5xl"
          >
            to
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.8, ease: "easeOut" }}
          >
            Manali
          </motion.span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mt-4 max-w-xs text-sm leading-6 tracking-wide sm:max-w-md sm:text-base sm:leading-7 md:max-w-xl md:text-lg lg:text-xl"
        >
          Feel the thrill. Live the adventure. Explore the best experiences in
          Manali.
        </motion.p>

        <motion.div
          variants={fadeIn}
          className="mt-8 flex flex-col gap-4 sm:flex-row sm:gap-5"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2 }}
            className="rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-black shadow-lg transition hover:bg-amber-600 sm:px-8 sm:text-base"
          >
            Book Your Ride
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2 }}
            className="rounded-full border border-white px-6 py-3 text-sm font-semibold transition hover:bg-white hover:text-black sm:px-8 sm:text-base"
          >
            Discover More
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
