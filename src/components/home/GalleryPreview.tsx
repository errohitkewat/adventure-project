"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence, easeOut } from "framer-motion";

const galleryImages = [
  "/images/galleryImage1.jpg",
  "/images/galleryImage2.jpg",
  "/images/galleryImage3.jpg",
  "/images/galleryImage4.jpg",
  "/images/galleryImage5.jpg",
  "/images/galleryImage6.jpg",
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: easeOut,
    },
  },
};

const GallerySection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1,
    );
  };

  const handleNext = () => {
    setActiveIndex((prev) =>
      prev === galleryImages.length - 1 ? 0 : prev + 1,
    );
  };

  return (
    <section
      id="gallery"
      className="relative overflow-hidden bg-[#0b1a13] px-6 py-24 text-white md:px-16 lg:px-24"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.75 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="absolute left-0 top-10 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.75 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.15 }}
        viewport={{ once: true }}
        className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-amber-500/10 blur-3xl"
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <motion.p
            variants={fadeUp}
            className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-amber-500"
          >
            Gallery
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="mb-6 text-4xl font-bold leading-tight md:text-6xl"
          >
            Glimpses Of Adventure In Manali
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-lg leading-8 text-gray-300"
          >
            Explore the energy, mountain beauty, exciting moments, and travel
            memories that make every adventure experience unforgettable.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 45, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.15 }}
          className="rounded-[32px] border border-white/10 bg-white/5 p-4 backdrop-blur-md md:p-6"
        >
          <div className="relative mb-6 overflow-hidden rounded-[28px]">
            <div className="relative h-[280px] w-full sm:h-[380px] md:h-[500px] lg:h-[620px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={galleryImages[activeIndex]}
                  initial={{ opacity: 0, scale: 1.06 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.03 }}
                  transition={{ duration: 0.55, ease: "easeOut" }}
                  className="absolute inset-0"
                >
                  <Image
                    src={galleryImages[activeIndex]}
                    alt={`gallery-main-${activeIndex + 1}`}
                    fill
                    className="object-cover"
                    priority
                  />
                </motion.div>
              </AnimatePresence>

              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />

              <motion.button
                whileHover={{ scale: 1.08, x: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={handlePrev}
                className="absolute left-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/40 text-white backdrop-blur-md transition hover:bg-black/60"
              >
                <ChevronLeft size={22} />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.08, x: 2 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleNext}
                className="absolute right-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/40 text-white backdrop-blur-md transition hover:bg-black/60"
              >
                <ChevronRight size={22} />
              </motion.button>

              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute bottom-5 left-5 rounded-full border border-white/10 bg-black/35 px-4 py-2 text-sm text-gray-200 backdrop-blur-md"
              >
                {activeIndex + 1} / {galleryImages.length}
              </motion.div>
            </div>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true, amount: 0.15 }}
            className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6"
          >
            {galleryImages.map((img, index) => (
              <motion.button
                variants={fadeUp}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.98 }}
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`group relative overflow-hidden rounded-[22px] border transition ${
                  activeIndex === index
                    ? "border-amber-500 shadow-[0_0_0_1px_rgba(245,158,11,0.3)]"
                    : "border-white/10 hover:border-white/20"
                }`}
              >
                <div className="relative h-28 w-full sm:h-32 lg:h-36">
                  <Image
                    src={img}
                    alt={`gallery-thumb-${index + 1}`}
                    fill
                    className={`object-cover transition duration-500 ${
                      activeIndex === index
                        ? "scale-105"
                        : "opacity-70 group-hover:scale-105 group-hover:opacity-100"
                    }`}
                  />

                  <div
                    className={`absolute inset-0 transition ${
                      activeIndex === index
                        ? "bg-black/10"
                        : "bg-black/40 group-hover:bg-black/20"
                    }`}
                  />
                </div>
              </motion.button>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default GallerySection;
