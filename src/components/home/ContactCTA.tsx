import { Phone, MapPin, Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="relative bg-[#101915] text-white py-24 px-6 md:px-16 lg:px-24 overflow-hidden">
      <div className="absolute top-0 left-0 w-72 h-72 bg-amber-500/10 blur-3xl rounded-full" />

      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div>
          <p className="text-amber-500 uppercase tracking-[0.3em] text-sm font-semibold mb-4">
            Contact Us
          </p>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Let’s Plan Your Manali Adventure
          </h2>
          <p className="text-gray-300 text-lg leading-8 mb-8">
            Contact us for bookings, activity details, travel questions, and
            adventure planning for your Manali trip.
          </p>

          <div className="space-y-5">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
                <Phone className="text-amber-500" size={22} />
              </div>
              <div>
                <p className="text-sm text-gray-400">Phone</p>
                <p className="font-medium">+91 XXXXX XXXXX</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
                <Mail className="text-amber-500" size={22} />
              </div>
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <p className="font-medium">yourmail@example.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
                <MapPin className="text-amber-500" size={22} />
              </div>
              <div>
                <p className="text-sm text-gray-400">Location</p>
                <p className="font-medium">Manali, Himachal Pradesh</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-[30px] backdrop-blur-md p-8">
          <h3 className="text-2xl font-semibold mb-6">Send A Message</h3>

          <form className="space-y-5">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 outline-none placeholder:text-gray-400"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 outline-none placeholder:text-gray-400"
            />
            <textarea
              rows={5}
              placeholder="Your Message"
              className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 outline-none placeholder:text-gray-400"
            />
            <button
              type="submit"
              className="bg-amber-500 hover:bg-amber-600 text-black font-semibold py-3 px-8 rounded-full transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
