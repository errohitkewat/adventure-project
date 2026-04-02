const BookingSection = () => {
  return (
    <section className="relative bg-[#101915] text-white py-24 px-6 md:px-16 lg:px-24 overflow-hidden">
      <div className="absolute left-0 bottom-0 w-80 h-80 bg-green-500/10 blur-3xl rounded-full" />
      <div className="absolute right-0 top-0 w-80 h-80 bg-amber-500/10 blur-3xl rounded-full" />

      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-amber-500 uppercase tracking-[0.3em] text-sm font-semibold mb-4">
            Booking
          </p>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Book Your Adventure Experience
          </h2>
          <p className="text-gray-300 text-lg leading-8 mb-6">
            Planning a trip to Manali? Reserve your adventure activity and make
            your journey more exciting with thrilling outdoor experiences and
            scenic mountain moments.
          </p>
          <p className="text-gray-400 leading-7">
            Suitable for friends, couples, and families looking for fun,
            adventure, and memorable travel experiences in Manali.
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-4xl p-8">
          <h3 className="text-2xl font-semibold mb-6">Quick Booking Enquiry</h3>

          <form className="space-y-5">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 outline-none placeholder:text-gray-400"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 outline-none placeholder:text-gray-400"
            />
            <select className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 outline-none text-gray-300">
              <option>Choose Activity</option>
              <option>River Rafting</option>
              <option>Paragliding</option>
              <option>Bungee Jumping</option>
              <option>Other Adventure</option>
            </select>
            <input
              type="text"
              placeholder="Travel Date"
              className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 outline-none placeholder:text-gray-400"
            />
            <textarea
              rows={5}
              placeholder="Message"
              className="w-full bg-white/10 border resize-none border-white/10 rounded-xl px-4 py-3 outline-none placeholder:text-gray-400"
            />
            <button
              type="submit"
              className="w-full bg-amber-500 hover:bg-amber-600 text-black font-semibold py-3 rounded-full transition duration-300"
            >
              Send Booking Request
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
