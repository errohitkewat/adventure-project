"use client";

import Image from "next/image";
import { BadgeCheck, Star, X, MessageSquarePlus } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence, cubicBezier } from "framer-motion";

type ReviewFormState = {
  name: string;
  role: string;
  review: string;
  rating: number;
};

const testimonials = [
  {
    name: "Aarav Sharma",
    role: "Adventure Traveler",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
    location: "Delhi, India",
    date: "2 weeks ago",
    rating: 5,
    text: "Rafting experience honestly next level tha. Everything was smooth, safe and super exciting. Definitely one of the best parts of my Manali trip.",
    featured: true,
  },
  {
    name: "Neha Verma",
    role: "Couple Trip",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    location: "Noida, India",
    date: "1 month ago",
    rating: 5,
    text: "We booked paragliding and it was amazing. View bahut beautiful tha and team bhi very supportive thi. Highly recommended.",
    featured: false,
  },
  {
    name: "Ritika & Friends",
    role: "Group Travelers",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    location: "Indore, India",
    date: "3 weeks ago",
    rating: 5,
    text: "Group ke saath bungee jumping try kiya and it was insane. Full adventure vibes and everything was well managed.",
    featured: false,
  },
  {
    name: "Rohit Mehta",
    role: "Solo Traveler",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    location: "Mumbai, India",
    date: "10 days ago",
    rating: 5,
    text: "First time paragliding kiya and trust me it was unforgettable. Safety bhi proper thi and experience top class.",
    featured: false,
  },
  {
    name: "Priya & Aman",
    role: "Couple Trip",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    location: "Bhopal, India",
    date: "1 week ago",
    rating: 5,
    text: "Multiple activities book ki and everything was perfectly organized. Yeh experience humesha yaad rahega.",
    featured: false,
  },
];

const initialForm: ReviewFormState = {
  name: "",
  role: "",
  review: "",
  rating: 5,
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: cubicBezier(0.25, 0.46, 0.45, 0.94) },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const TestimonialsSection = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [form, setForm] = useState<ReviewFormState>(initialForm);
  const [hoveredStar, setHoveredStar] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setResponseMessage("");
    setForm(initialForm);
    setHoveredStar(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResponseMessage("");

    try {
      const res = await fetch("/api/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setResponseMessage(data.message || "Review submission failed");
        return;
      }

      setResponseMessage("Thank you! Your review has been submitted.");
      setForm(initialForm);
    } catch (error) {
      console.error(error);
      setResponseMessage("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="relative overflow-hidden bg-[#0b1a13] px-6 py-24 text-white md:px-16 lg:px-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="absolute left-0 top-10 h-72 w-72 rounded-full bg-amber-500/10 blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl"
        />

        <div className="relative z-10 mx-auto max-w-7xl">
          <motion.div
            className="mx-auto mb-16 max-w-3xl text-center"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.p
              variants={fadeUp}
              className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-amber-500"
            >
              Testimonials
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="mb-6 text-4xl font-bold md:text-6xl"
            >
              What Travelers Say
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-lg leading-8 text-gray-300"
            >
              Real reviews from people who experienced the thrill and beauty of
              Manali adventures.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8 flex justify-center">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setIsPopupOpen(true)}
                className="inline-flex items-center gap-3 rounded-full border border-amber-500/30 bg-amber-500 px-6 py-3 font-semibold text-black transition hover:scale-[1.02] hover:bg-amber-400"
              >
                <MessageSquarePlus size={18} />
                Write a Review
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 gap-6 lg:grid-cols-3"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {testimonials.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                whileHover={{ y: -8 }}
                className={`group rounded-[30px] border p-6 backdrop-blur-md transition duration-300 hover:-translate-y-2 ${
                  item.featured
                    ? "border-amber-500/30 bg-gradient-to-b from-amber-500/10 to-white/5 lg:col-span-2"
                    : "border-white/10 bg-white/5 hover:border-amber-500/20"
                }`}
              >
                <div className="mb-5 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={50}
                        height={50}
                        className="rounded-full object-cover border border-white/10"
                        priority={index < 2}
                      />
                    </motion.div>

                    <div>
                      <h3 className="flex items-center gap-2 text-lg font-semibold">
                        {item.name}
                        <motion.span
                          initial={{ scale: 0.8, opacity: 0 }}
                          whileInView={{ scale: 1, opacity: 1 }}
                          transition={{ delay: 0.2 }}
                          viewport={{ once: true }}
                        >
                          <BadgeCheck size={16} className="text-amber-400" />
                        </motion.span>
                      </h3>
                      <p className="text-sm text-gray-400">{item.role}</p>
                      <p className="text-xs text-gray-500">
                        {item.location} • {item.date}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-1 text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.05 }}
                        viewport={{ once: true }}
                      >
                        <Star size={16} className="fill-amber-400" />
                      </motion.div>
                    ))}
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  viewport={{ once: true }}
                  className="mb-4 text-5xl text-amber-500/60"
                >
                  “
                </motion.div>

                <p
                  className={`leading-8 text-gray-300 ${
                    item.featured ? "max-w-2xl text-lg" : "text-base"
                  }`}
                >
                  {item.text}
                </p>

                <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
                  <span className="text-sm text-gray-400">Verified Review</span>

                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    className="rounded-full bg-amber-500/10 px-3 py-1 text-xs text-amber-400"
                  >
                    ⭐ 5.0 Rating
                  </motion.span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {isPopupOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 py-4 backdrop-blur-md"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="relative w-full max-w-2xl max-h-[97vh] overflow-y-auto hide-scrollbar rounded-[32px] border border-white/10 bg-[#101915] shadow-[0_20px_80px_rgba(0,0,0,0.55)]"
            >
              <motion.button
                type="button"
                onClick={closePopup}
                whileHover={{ scale: 1.08, rotate: 90 }}
                whileTap={{ scale: 0.95 }}
                className="absolute right-5 top-5 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/40 text-white transition hover:bg-black/60"
              >
                <X size={20} />
              </motion.button>

              <motion.div
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05, duration: 0.4 }}
                className="relative overflow-hidden rounded-t-[32px] border-b border-white/10 bg-gradient-to-br from-amber-500/10 via-transparent to-emerald-500/10 p-6 md:p-8"
              >
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-amber-500">
                  Share Your Experience
                </p>
                <h3 className="mb-4 text-2xl font-bold text-white md:text-3xl">
                  Write A Review About Your Ride
                </h3>
                <p className="max-w-xl leading-7 text-gray-300">
                  Tell other travelers about your adventure experience. Your
                  review helps build trust and makes the website feel more real
                  and professional.
                </p>
              </motion.div>

              <motion.form
                onSubmit={handleSubmit}
                className="space-y-5 p-6 md:p-8"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
              >
                <motion.div
                  variants={fadeUp}
                  className="grid grid-cols-1 gap-4 md:grid-cols-2"
                >
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-300">
                      Your Name
                    </label>
                    <motion.input
                      whileFocus={{ scale: 1.01 }}
                      transition={{ duration: 0.2 }}
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      className="w-full rounded-2xl border border-white/10 bg-transparent px-4 py-3 text-white outline-none placeholder:text-gray-500 focus:border-amber-500/40"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-300">
                      Trip Type
                    </label>
                    <motion.input
                      whileFocus={{ scale: 1.01 }}
                      transition={{ duration: 0.2 }}
                      type="text"
                      name="role"
                      value={form.role}
                      onChange={handleChange}
                      placeholder="Solo Traveler / Couple Trip"
                      className="w-full rounded-2xl border border-white/10 bg-transparent px-4 py-3 text-white outline-none placeholder:text-gray-500 focus:border-amber-500/40"
                    />
                  </div>
                </motion.div>

                <motion.div variants={fadeUp}>
                  <label className="mb-3 block text-sm font-medium text-gray-300">
                    Your Rating
                  </label>

                  <div className="flex items-center gap-2">
                    {[1, 2, 3, 4, 5].map((star) => {
                      const active = (hoveredStar ?? form.rating) >= star;

                      return (
                        <motion.button
                          key={star}
                          type="button"
                          whileHover={{ scale: 1.15 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() =>
                            setForm((prev) => ({ ...prev, rating: star }))
                          }
                          onMouseEnter={() => setHoveredStar(star)}
                          onMouseLeave={() => setHoveredStar(null)}
                          className="transition hover:scale-110"
                        >
                          <Star
                            size={26}
                            className={
                              active
                                ? "fill-amber-400 text-amber-400"
                                : "text-gray-500"
                            }
                          />
                        </motion.button>
                      );
                    })}

                    <motion.span
                      key={form.rating}
                      initial={{ opacity: 0.6, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="ml-3 text-sm text-gray-400"
                    >
                      {form.rating}.0 Rating
                    </motion.span>
                  </div>
                </motion.div>

                <motion.div variants={fadeUp}>
                  <label className="mb-2 block text-sm font-medium text-gray-300">
                    Your Review
                  </label>
                  <motion.textarea
                    whileFocus={{ scale: 1.01 }}
                    transition={{ duration: 0.2 }}
                    name="review"
                    value={form.review}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Write about your ride experience..."
                    className="w-full resize-none rounded-2xl border border-white/10 bg-transparent px-4 py-4 text-white outline-none placeholder:text-gray-500 focus:border-amber-500/40"
                  />
                </motion.div>

                <motion.div
                  variants={fadeUp}
                  className="rounded-[24px] border border-amber-500/20 bg-gradient-to-r from-amber-500/10 to-transparent p-4"
                >
                  <p className="text-sm leading-7 text-gray-300">
                    Your review may be shown on the website after approval to
                    help future travelers feel more confident about booking.
                  </p>
                </motion.div>

                <motion.div
                  variants={fadeUp}
                  className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
                >
                  <p className="text-sm text-gray-400">
                    Share a genuine review for a more trustworthy experience.
                  </p>

                  <div className="flex gap-3">
                    <motion.button
                      type="button"
                      onClick={closePopup}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="rounded-full border border-white/10 bg-white/5 px-6 py-3 font-medium text-white transition hover:bg-white/10"
                    >
                      Cancel
                    </motion.button>

                    <motion.button
                      type="submit"
                      disabled={loading}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="rounded-full bg-amber-500 px-6 py-3 font-semibold text-black transition hover:bg-amber-400 disabled:opacity-60"
                    >
                      {loading ? "Submitting..." : "Submit Review"}
                    </motion.button>
                  </div>
                </motion.div>

                <AnimatePresence>
                  {responseMessage ? (
                    <motion.p
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      className="text-sm text-gray-300"
                    >
                      {responseMessage}
                    </motion.p>
                  ) : null}
                </AnimatePresence>
              </motion.form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default TestimonialsSection;
