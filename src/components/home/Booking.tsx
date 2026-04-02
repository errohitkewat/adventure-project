import BookingForm from "./BookingForm";

const BookingSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#101915] px-6 py-24 text-white md:px-16 lg:px-24">
      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-amber-500/10 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-green-500/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-amber-500">
            Booking
          </p>

          <h2 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
            Reserve Your Next Adventure In Manali
          </h2>

          <p className="mx-auto mb-5 max-w-3xl text-lg leading-8 text-gray-300">
            Choose your activity, add premium options like photo, video, and
            GoPro recording, and send your booking enquiry in just a few steps.
          </p>

          <p className="mx-auto max-w-2xl leading-7 text-gray-400">
            Perfect for solo travelers, couples, families, and groups who want a
            smooth booking experience with clear details and custom add-ons.
          </p>
        </div>

        <div className="rounded-[32px] border border-white/10 bg-white/5 p-4 backdrop-blur-md md:p-6">
          <BookingForm />
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
