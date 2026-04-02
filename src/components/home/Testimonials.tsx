"use client";

import Image from "next/image";
import { BadgeCheck, Star, X, MessageSquarePlus } from "lucide-react";
import { useState } from "react";

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setResponseMessage("");

    try {
      // If you already have backend, use your API here
      // Example:
      // const res = await fetch("/api/reviews", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(form),
      // });

      // const data = await res.json();
      // if (!res.ok) {
      //   setResponseMessage(data.message || "Review submission failed");
      //   setLoading(false);
      //   return;
      // }

      await new Promise((resolve) => setTimeout(resolve, 1000));

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
        <div className="absolute left-0 top-10 h-72 w-72 rounded-full bg-amber-500/10 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-amber-500">
              Testimonials
            </p>

            <h2 className="mb-6 text-4xl font-bold md:text-6xl">
              What Travelers Say
            </h2>

            <p className="text-lg leading-8 text-gray-300">
              Real reviews from people who experienced the thrill and beauty of
              Manali adventures.
            </p>

            <div className="mt-8 flex justify-center">
              <button
                onClick={() => setIsPopupOpen(true)}
                className="inline-flex items-center gap-3 rounded-full border border-amber-500/30 bg-amber-500 px-6 py-3 font-semibold text-black transition hover:scale-[1.02] hover:bg-amber-400"
              >
                <MessageSquarePlus size={18} />
                Write a Review
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {testimonials.map((item, index) => (
              <div
                key={index}
                className={`group rounded-[30px] border p-6 backdrop-blur-md transition duration-300 hover:-translate-y-2 ${
                  item.featured
                    ? "border-amber-500/30 bg-gradient-to-b from-amber-500/10 to-white/5 lg:col-span-2"
                    : "border-white/10 bg-white/5 hover:border-amber-500/20"
                }`}
              >
                <div className="mb-5 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={50}
                      height={50}
                      className="rounded-full object-cover border border-white/10"
                      priority={index < 2} // only first images priority
                    />

                    <div>
                      <h3 className="flex items-center gap-2 text-lg font-semibold">
                        {item.name}
                        <BadgeCheck size={16} className="text-amber-400" />
                      </h3>
                      <p className="text-sm text-gray-400">{item.role}</p>
                      <p className="text-xs text-gray-500">
                        {item.location} • {item.date}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-1 text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} size={16} className="fill-amber-400" />
                    ))}
                  </div>
                </div>

                <div className="mb-4 text-5xl text-amber-500/60">“</div>

                <p
                  className={`leading-8 text-gray-300 ${
                    item.featured ? "max-w-2xl text-lg" : "text-base"
                  }`}
                >
                  {item.text}
                </p>

                <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
                  <span className="text-sm text-gray-400">Verified Review</span>

                  <span className="rounded-full bg-amber-500/10 px-3 py-1 text-xs text-amber-400">
                    ⭐ 5.0 Rating
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {isPopupOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 py-4 backdrop-blur-md">
          <div className="relative w-full max-w-2xl max-h-[97vh] overflow-y-auto hide-scrollbar rounded-[32px] border border-white/10 bg-[#101915] shadow-[0_20px_80px_rgba(0,0,0,0.55)]">
            <button
              type="button"
              onClick={closePopup}
              className="absolute right-5 top-5 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/40 text-white transition hover:bg-black/60"
            >
              <X size={20} />
            </button>

            <div className="relative overflow-hidden rounded-t-[32px] border-b border-white/10 bg-gradient-to-br from-amber-500/10 via-transparent to-emerald-500/10 p-6 md:p-8">
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
            </div>

            <form onSubmit={handleSubmit} className="space-y-5 p-6 md:p-8">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-300">
                    Your Name
                  </label>
                  <input
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
                  <input
                    type="text"
                    name="role"
                    value={form.role}
                    onChange={handleChange}
                    placeholder="Solo Traveler / Couple Trip"
                    className="w-full rounded-2xl border border-white/10 bg-transparent px-4 py-3 text-white outline-none placeholder:text-gray-500 focus:border-amber-500/40"
                  />
                </div>
              </div>

              <div>
                <label className="mb-3 block text-sm font-medium text-gray-300">
                  Your Rating
                </label>

                <div className="flex items-center gap-2">
                  {[1, 2, 3, 4, 5].map((star) => {
                    const active = (hoveredStar ?? form.rating) >= star;

                    return (
                      <button
                        key={star}
                        type="button"
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
                      </button>
                    );
                  })}

                  <span className="ml-3 text-sm text-gray-400">
                    {form.rating}.0 Rating
                  </span>
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-300">
                  Your Review
                </label>
                <textarea
                  name="review"
                  value={form.review}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Write about your ride experience..."
                  className="w-full resize-none rounded-2xl border border-white/10 bg-transparent px-4 py-4 text-white outline-none placeholder:text-gray-500 focus:border-amber-500/40"
                />
              </div>

              <div className="rounded-[24px] border border-amber-500/20 bg-gradient-to-r from-amber-500/10 to-transparent p-4">
                <p className="text-sm leading-7 text-gray-300">
                  Your review may be shown on the website after approval to help
                  future travelers feel more confident about booking.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm text-gray-400">
                  Share a genuine review for a more trustworthy experience.
                </p>

                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={closePopup}
                    className="rounded-full border border-white/10 bg-white/5 px-6 py-3 font-medium text-white transition hover:bg-white/10"
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    disabled={loading}
                    className="rounded-full bg-amber-500 px-6 py-3 font-semibold text-black transition hover:bg-amber-400 disabled:opacity-60"
                  >
                    {loading ? "Submitting..." : "Submit Review"}
                  </button>
                </div>
              </div>

              {responseMessage ? (
                <p className="text-sm text-gray-300">{responseMessage}</p>
              ) : null}
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default TestimonialsSection;
