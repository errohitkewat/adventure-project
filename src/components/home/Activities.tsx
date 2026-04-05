"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  Waves,
  Wind,
  X,
  MapPin,
  Clock3,
  Users,
  IndianRupee,
  Camera,
  Video,
  CheckCircle2,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type PackageOption = {
  label: string;
  price: string;
  note?: string;
};

type Addon = {
  title: string;
  price: string;
  icon: React.ElementType;
};

type Activity = {
  id: number;
  icon: React.ElementType;
  title: string;
  image: string;
  shortDesc: string;
  fullDesc: string;
  location: string;
  duration: string;
  suitableFor: string;
  packages: PackageOption[];
  addons?: Addon[];
  includes: string[];
};

const activities: Activity[] = [
  {
    id: 1,
    icon: Waves,
    title: "River Rafting",
    image: "/images/rafting.jpg",
    shortDesc:
      "Enjoy thrilling river rafting in Manali with safe guidance and exciting water adventure.",
    fullDesc:
      "River rafting in Manali is one of the most popular adventure experiences for tourists. It is perfect for friends, couples, and groups who want excitement with scenic mountain surroundings. This package can be shown as a quick booking card with clear price options and extra media add-ons.",
    location: "Beas River, Manali",
    duration: "20 to 40 mins",
    suitableFor: "Friends, couples, families, groups",
    packages: [
      { label: "Per Person", price: "₹500" },
      { label: "Couple", price: "₹900" },
      { label: "Group (4-5 People)", price: "₹2,000" },
    ],
    addons: [
      { title: "Photo Shoot", price: "₹300", icon: Camera },
      { title: "Video Recording", price: "₹500", icon: Video },
    ],
    includes: [
      "Safety jacket and helmet",
      "Professional river guide",
      "Short safety briefing",
      "Adventure support team",
    ],
  },
  {
    id: 2,
    icon: Wind,
    title: "Paragliding",
    image: "/images/paragliding.jpg",
    shortDesc:
      "Fly above the valley and enjoy premium paragliding packages with optional media coverage.",
    fullDesc:
      "Paragliding is one of the most demanded activities in Manali because it offers both thrill and beautiful views. In this booking section, you can show normal ride pricing along with photo, video, and GoPro recording options, which makes the booking experience feel more premium and closer to a real package section.",
    location: "Solang Valley / Nearby Flying Point",
    duration: "5 to 15 mins",
    suitableFor: "Solo travelers, couples, thrill lovers",
    packages: [
      { label: "Per Person", price: "₹1,500" },
      { label: "Couple", price: "₹2,800" },
      { label: "Group (4-5 People)", price: "₹6,800" },
    ],
    addons: [
      { title: "Photo Shoot", price: "₹400", icon: Camera },
      { title: "Video Recording", price: "₹700", icon: Video },
      { title: "GoPro Video", price: "₹1,000", icon: Video },
    ],
    includes: [
      "Experienced pilot",
      "Safety gear",
      "Flight briefing",
      "Scenic valley aerial view",
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

const ActivitiesSection = () => {
  const [selectedActivity, setSelectedActivity] = useState<Activity | null>(
    null,
  );

  useEffect(() => {
    if (selectedActivity) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedActivity]);

  return (
    <>
      <section className="relative overflow-hidden bg-[#0f1b16] px-6 py-24 text-white md:px-16 lg:px-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="absolute right-10 top-10 h-72 w-72 rounded-full bg-amber-500/10 blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          viewport={{ once: true }}
          className="absolute bottom-10 left-10 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl"
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true, amount: 0.2 }}
          className="relative z-10 mx-auto mb-16 max-w-4xl text-center"
        >
          <motion.p
            variants={fadeUp}
            className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-amber-500"
          >
            Booking Section
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="mb-6 text-4xl font-bold leading-tight md:text-6xl"
          >
            Book Your Adventure In Manali
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mx-auto max-w-3xl text-lg leading-8 text-gray-300"
          >
            Choose your activity, check per person, couple, or group pricing,
            and add premium options like photo shoot, video recording, and GoPro
            coverage for paragliding.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true, amount: 0.15 }}
          className="relative z-10 grid grid-cols-1 gap-7 md:grid-cols-2"
        >
          {activities.map((activity) => {
            const Icon = activity.icon;
            const startingPrice = activity.packages[0]?.price;

            return (
              <motion.button
                variants={fadeUp}
                whileHover={{ y: -10 }}
                whileTap={{ scale: 0.99 }}
                key={activity.id}
                onClick={() => setSelectedActivity(activity)}
                className="group overflow-hidden rounded-[30px] border border-white/10 bg-white/5 text-left backdrop-blur-md transition duration-300 hover:border-amber-500/40 hover:shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
              >
                <div className="relative h-64 w-full overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={activity.image}
                      alt={activity.title}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </motion.div>

                  <div className="absolute inset-0 bg-gradient-to-t from-[#09110d] via-[#09110d]/35 to-transparent" />

                  <motion.div
                    initial={{ opacity: 0, y: -14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45 }}
                    viewport={{ once: true }}
                    className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-amber-500 px-4 py-2 text-xs font-bold text-black shadow-lg"
                  >
                    <IndianRupee size={14} />
                    Starting {startingPrice}
                  </motion.div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.45, delay: 0.1 }}
                      viewport={{ once: true }}
                      className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-black/35 backdrop-blur-md"
                    >
                      <Icon className="text-amber-500" size={24} />
                    </motion.div>

                    <h3 className="mb-2 text-2xl font-bold text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)]">
                      {activity.title}
                    </h3>

                    <p className="text-sm leading-6 text-gray-200">
                      {activity.shortDesc}
                    </p>
                  </div>
                </div>

                <div className="p-5">
                  <div className="mb-5 space-y-2">
                    <div className="flex items-center justify-between text-sm text-gray-300">
                      <span>Per Person</span>
                      <span className="font-semibold text-white">
                        {activity.packages[0]?.price}
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-sm text-gray-300">
                      <span>Couple</span>
                      <span className="font-semibold text-white">
                        {activity.packages[1]?.price}
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-sm text-gray-300">
                      <span>Group</span>
                      <span className="font-semibold text-white">
                        {activity.packages[2]?.price}
                      </span>
                    </div>
                  </div>

                  <motion.div
                    whileHover={{ x: 3 }}
                    className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 transition group-hover:border-amber-500/30"
                  >
                    <span className="text-sm font-semibold text-amber-400">
                      View Full Details
                    </span>
                    <ArrowUpRight
                      size={18}
                      className="text-white transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </motion.div>
                </div>
              </motion.button>
            );
          })}
        </motion.div>
      </section>

      <AnimatePresence>
        {selectedActivity && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 py-6 backdrop-blur-md"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 20 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="relative max-h-[92vh] w-full max-w-6xl overflow-y-auto hide-scrollbar rounded-[34px] border border-white/10 bg-[#101915] shadow-[0_20px_80px_rgba(0,0,0,0.55)]"
            >
              <motion.button
                whileHover={{ scale: 1.06, rotate: 90 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedActivity(null)}
                className="absolute right-5 top-5 z-30 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/50 text-white backdrop-blur-md transition hover:bg-black/70"
              >
                <X size={20} />
              </motion.button>

              <div className="relative h-[320px] w-full md:h-[400px]">
                <motion.div
                  initial={{ scale: 1.08 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="absolute inset-0"
                >
                  <Image
                    src={selectedActivity.image}
                    alt={selectedActivity.title}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </motion.div>

                <div className="absolute inset-0 bg-gradient-to-t from-[#101915] via-[#101915]/70 to-black/20" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-transparent to-transparent" />

                <div className="absolute left-4 right-4 top-4 flex items-start justify-between md:left-8 md:right-24">
                  <motion.div
                    initial={{ opacity: 0, y: -12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.4 }}
                    className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-amber-300 backdrop-blur-md"
                  >
                    <Sparkles size={14} />
                    Adventure Booking
                  </motion.div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8">
                  <motion.div
                    initial={{ opacity: 0, y: 26 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15, duration: 0.45 }}
                    className="max-w-3xl rounded-[28px] border border-white/10 bg-black/35 p-6 backdrop-blur-xl md:p-8"
                  >
                    <div className="mb-4 flex items-center gap-4">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.85 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.35 }}
                        className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-amber-500/15"
                      >
                        <selectedActivity.icon
                          className="text-amber-400"
                          size={26}
                        />
                      </motion.div>

                      <div>
                        <p className="mb-1 text-xs font-semibold uppercase tracking-[0.25em] text-amber-300">
                          Premium Activity
                        </p>
                        <h3 className="text-3xl font-bold leading-tight text-white md:text-5xl">
                          {selectedActivity.title}
                        </h3>
                      </div>
                    </div>

                    <p className="max-w-2xl text-sm leading-7 text-gray-200 md:text-base">
                      {selectedActivity.fullDesc}
                    </p>
                  </motion.div>
                </div>
              </div>

              <div className="p-6 md:p-10">
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={containerVariants}
                  className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-3"
                >
                  <motion.div
                    variants={fadeUp}
                    whileHover={{ y: -4 }}
                    className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-md transition hover:border-amber-500/30"
                  >
                    <div className="mb-2 flex items-center gap-2 text-amber-400">
                      <MapPin size={18} />
                      <span className="font-semibold">Location</span>
                    </div>
                    <p className="text-gray-300">{selectedActivity.location}</p>
                  </motion.div>

                  <motion.div
                    variants={fadeUp}
                    whileHover={{ y: -4 }}
                    className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-md transition hover:border-amber-500/30"
                  >
                    <div className="mb-2 flex items-center gap-2 text-amber-400">
                      <Clock3 size={18} />
                      <span className="font-semibold">Duration</span>
                    </div>
                    <p className="text-gray-300">{selectedActivity.duration}</p>
                  </motion.div>

                  <motion.div
                    variants={fadeUp}
                    whileHover={{ y: -4 }}
                    className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-md transition hover:border-amber-500/30"
                  >
                    <div className="mb-2 flex items-center gap-2 text-amber-400">
                      <Users size={18} />
                      <span className="font-semibold">Suitable For</span>
                    </div>
                    <p className="text-gray-300">
                      {selectedActivity.suitableFor}
                    </p>
                  </motion.div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15, duration: 0.45 }}
                  className="mb-10"
                >
                  <h4 className="mb-5 text-2xl font-bold text-white md:text-3xl">
                    Package Pricing
                  </h4>

                  <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                    {selectedActivity.packages.map((pkg, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.08 * index, duration: 0.4 }}
                        whileHover={{ y: -5 }}
                        className={`rounded-[28px] border p-6 transition ${
                          index === 0
                            ? "border-amber-500/40 bg-gradient-to-b from-amber-500/15 to-amber-500/5"
                            : "border-white/10 bg-white/5"
                        }`}
                      >
                        <p className="mb-2 text-sm uppercase tracking-[0.2em] text-amber-400">
                          {pkg.label}
                        </p>
                        <h5 className="mb-2 text-3xl font-bold text-white">
                          {pkg.price}
                        </h5>
                        {pkg.note && (
                          <p className="text-sm text-gray-400">{pkg.note}</p>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {selectedActivity.addons &&
                  selectedActivity.addons.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: 24 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.22, duration: 0.45 }}
                      className="mb-10"
                    >
                      <h4 className="mb-5 text-2xl font-bold text-white md:text-3xl">
                        Photo & Video Add-ons
                      </h4>

                      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                        {selectedActivity.addons.map((addon, index) => {
                          const AddonIcon = addon.icon;

                          return (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, y: 22 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{
                                delay: 0.08 * index,
                                duration: 0.4,
                              }}
                              whileHover={{ y: -5 }}
                              className="rounded-[28px] border border-white/10 bg-white/5 p-5 transition hover:border-amber-500/30"
                            >
                              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500/15">
                                <AddonIcon
                                  className="text-amber-400"
                                  size={22}
                                />
                              </div>

                              <h5 className="mb-2 text-xl font-semibold text-white">
                                {addon.title}
                              </h5>

                              <p className="text-lg font-medium text-gray-300">
                                {addon.price}
                              </p>
                            </motion.div>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}

                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.45 }}
                  className="mb-10"
                >
                  <h4 className="mb-5 text-2xl font-bold text-white md:text-3xl">
                    What’s Included
                  </h4>

                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    {selectedActivity.includes.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -16 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.06 * index, duration: 0.35 }}
                        whileHover={{ x: 4 }}
                        className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-amber-500/25"
                      >
                        <CheckCircle2
                          className="mt-0.5 shrink-0 text-amber-400"
                          size={18}
                        />
                        <p className="text-gray-300">{item}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.38, duration: 0.45 }}
                  className="rounded-[30px] border border-amber-500/20 bg-gradient-to-r from-amber-500/12 via-amber-500/5 to-transparent p-6 md:p-8"
                >
                  <h4 className="mb-3 text-2xl font-bold text-white md:text-3xl">
                    Ready To Book This Activity?
                  </h4>

                  <p className="mb-6 max-w-2xl leading-7 text-gray-300">
                    Check the package that fits you best and confirm your
                    booking directly on WhatsApp for quick support and fast
                    response.
                  </p>

                  <div className="flex flex-col gap-4 sm:flex-row">
                    <motion.a
                      whileHover={{ scale: 1.03, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      href={`https://wa.me/919999999999?text=Hi,%20I%20want%20to%20book%20${encodeURIComponent(
                        selectedActivity.title,
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-2xl bg-amber-500 px-6 py-3 text-center font-semibold text-black transition hover:bg-amber-400"
                    >
                      Book on WhatsApp
                    </motion.a>

                    <motion.button
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setSelectedActivity(null)}
                      className="rounded-2xl border border-white/10 bg-white/5 px-6 py-3 font-medium text-white transition hover:bg-white/10"
                    >
                      Close Details
                    </motion.button>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ActivitiesSection;
