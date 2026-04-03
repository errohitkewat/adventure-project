"use client";

import { useEffect, useState } from "react";

type Review = {
  id: string;
  name: string;
  role: string;
  review: string;
  rating: number;
  approved: boolean;
};

export default function AdminReviewsPage() {
  const [reviews, setReviews] = useState<Review[]>([]);

  const fetchReviews = async () => {
    const res = await fetch("/api/reviews");
    const approvedData = await res.json();

    const allRes = await fetch("/api/admin/all-reviews");
    const allData = await allRes.json();

    setReviews(allData.reviews || approvedData.reviews || []);
  };

  const approveReview = async (id: string, approved: boolean) => {
    await fetch(`/api/reviews/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ approved }),
    });

    fetchReviews();
  };

  const deleteReview = async (id: string) => {
    await fetch(`/api/reviews/${id}`, {
      method: "DELETE",
    });

    fetchReviews();
  };

  useEffect(() => {
    (async () => {
      await fetchReviews();
    })();
  }, []);

  return (
    <div>
      <h1 className="mb-6 text-3xl font-bold">Reviews</h1>

      <div className="grid gap-4">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="rounded-3xl border border-white/10 bg-white/5 p-5"
          >
            <h2 className="text-xl font-semibold">{review.name}</h2>
            <p className="text-sm text-gray-300">{review.role}</p>
            <p className="mt-3 text-sm text-gray-200">{review.review}</p>
            <p className="mt-2 text-sm">Rating: {review.rating}/5</p>
            <p className="mt-2 text-sm">
              Approved: {review.approved ? "Yes" : "No"}
            </p>

            <div className="mt-4 flex gap-3">
              <button
                onClick={() => approveReview(review.id, true)}
                className="rounded-full bg-amber-500 px-4 py-2 text-sm text-black"
              >
                Approve
              </button>
              <button
                onClick={() => deleteReview(review.id)}
                className="rounded-full border border-red-500 px-4 py-2 text-sm text-red-300"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
