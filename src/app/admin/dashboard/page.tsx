import Link from "next/link";

export default function AdminDashboardPage() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      <Link
        href="/admin/bookings"
        className="rounded-3xl border border-white/10 bg-white/5 p-6 hover:border-amber-500"
      >
        <h2 className="text-xl font-bold">Manage Bookings</h2>
        <p className="mt-2 text-sm text-gray-300">
          View and update booking status
        </p>
      </Link>

      <Link
        href="/admin/reviews"
        className="rounded-3xl border border-white/10 bg-white/5 p-6 hover:border-amber-500"
      >
        <h2 className="text-xl font-bold">Manage Reviews</h2>
        <p className="mt-2 text-sm text-gray-300">
          Approve or delete customer reviews
        </p>
      </Link>

      <Link
        href="/admin/gallery"
        className="rounded-3xl border border-white/10 bg-white/5 p-6 hover:border-amber-500"
      >
        <h2 className="text-xl font-bold">Manage Gallery</h2>
        <p className="mt-2 text-sm text-gray-300">
          Add gallery image URLs and captions
        </p>
      </Link>
    </div>
  );
}
