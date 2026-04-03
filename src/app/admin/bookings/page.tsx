"use client";

import { useEffect, useState } from "react";

type Booking = {
  id: string;
  customerName: string;
  phone: string;
  email?: string;
  activityName: string;
  travelDate: string;
  persons: number;
  packageLabel: string;
  grandTotal: number;
  status: string;
};

export default function AdminBookingsPage() {
  const [bookings, setBookings] = useState<Booking[]>([]);

  const fetchBookings = async () => {
    const res = await fetch("/api/bookings");
    const data = await res.json();
    setBookings(data.bookings || []);
  };

  const updateStatus = async (id: string, status: string) => {
    await fetch(`/api/bookings/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    });

    fetchBookings();
  };

  useEffect(() => {
    const loadBookings = async () => {
      const res = await fetch("/api/bookings");
      const data = await res.json();
      setBookings(data.bookings || []);
    };

    loadBookings();
  }, []);

  return (
    <div>
      <h1 className="mb-6 text-3xl font-bold">Bookings</h1>

      <div className="grid gap-4">
        {bookings.map((booking) => (
          <div
            key={booking.id}
            className="rounded-3xl border border-white/10 bg-white/5 p-5"
          >
            <h2 className="text-xl font-semibold">{booking.customerName}</h2>
            <p className="mt-2 text-sm text-gray-300">
              {booking.activityName} | {booking.packageLabel} | ₹
              {booking.grandTotal}
            </p>
            <p className="text-sm text-gray-300">
              Phone: {booking.phone} | Persons: {booking.persons}
            </p>
            <p className="text-sm text-gray-300">
              Travel Date: {booking.travelDate}
            </p>
            <p className="mt-2 text-sm">
              Status: <span className="font-semibold">{booking.status}</span>
            </p>

            <div className="mt-4 flex flex-wrap gap-3">
              <button
                onClick={() => updateStatus(booking.id, "pending")}
                className="rounded-full border border-white/10 px-4 py-2 text-sm"
              >
                Pending
              </button>
              <button
                onClick={() => updateStatus(booking.id, "confirmed")}
                className="rounded-full bg-amber-500 px-4 py-2 text-sm text-black"
              >
                Confirm
              </button>
              <button
                onClick={() => updateStatus(booking.id, "completed")}
                className="rounded-full border border-green-500 px-4 py-2 text-sm text-green-300"
              >
                Complete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
