"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const galleryImages = [
  "/images/galleryImage1.jpg",
  "/images/galleryImage2.jpg",
  "/images/galleryImage3.jpg",
  "/images/galleryImage4.jpg",
  "/images/galleryImage5.jpg",
  "/images/galleryImage6.jpg",
];

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
    <section className="relative overflow-hidden bg-[#0b1a13] px-6 py-24 text-white md:px-16 lg:px-24">
      <div className="absolute left-0 top-10 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-amber-500/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-amber-500">
            Gallery
          </p>

          <h2 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
            Glimpses Of Adventure In Manali
          </h2>

          <p className="text-lg leading-8 text-gray-300">
            Explore the energy, mountain beauty, exciting moments, and travel
            memories that make every adventure experience unforgettable.
          </p>
        </div>

        <div className="rounded-[32px] border border-white/10 bg-white/5 p-4 backdrop-blur-md md:p-6">
          <div className="relative mb-6 overflow-hidden rounded-[28px]">
            <div className="relative h-[280px] w-full sm:h-[380px] md:h-[500px] lg:h-[620px]">
              <Image
                src={galleryImages[activeIndex]}
                alt={`gallery-main-${activeIndex + 1}`}
                fill
                className="object-cover"
                priority
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />

              <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/40 text-white backdrop-blur-md transition hover:bg-black/60"
              >
                <ChevronLeft size={22} />
              </button>

              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/40 text-white backdrop-blur-md transition hover:bg-black/60"
              >
                <ChevronRight size={22} />
              </button>

              <div className="absolute bottom-5 left-5 rounded-full border border-white/10 bg-black/35 px-4 py-2 text-sm text-gray-200 backdrop-blur-md">
                {activeIndex + 1} / {galleryImages.length}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {galleryImages.map((img, index) => (
              <button
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
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
