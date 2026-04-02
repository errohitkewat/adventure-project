import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0b1a13] text-white px-6 md:px-16 lg:px-24 pt-20 pb-10 border-t border-white/10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-14">
        {/* Left - Brand */}
        <div>
          <h2 className="text-2xl font-bold mb-4 tracking-wide">
            Manali Adventure
          </h2>
          <p className="text-gray-400 leading-7 text-sm max-w-sm">
            Explore the thrill of river rafting, paragliding, and mountain
            adventures in Manali. Create unforgettable memories with every trip.
          </p>
        </div>

        {/* Center - Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li className="hover:text-amber-500 cursor-pointer transition">
              Home
            </li>
            <li className="hover:text-amber-500 cursor-pointer transition">
              About
            </li>
            <li className="hover:text-amber-500 cursor-pointer transition">
              Activities
            </li>
            <li className="hover:text-amber-500 cursor-pointer transition">
              Gallery
            </li>
            <li className="hover:text-amber-500 cursor-pointer transition">
              Contact
            </li>
          </ul>
        </div>

        {/* Right - Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>

          <div className="space-y-4 text-gray-400 text-sm">
            <div className="flex items-center gap-3">
              <Phone size={18} className="text-amber-500" />
              <span>+91 XXXXX XXXXX</span>
            </div>

            <div className="flex items-center gap-3">
              <MapPin size={18} className="text-amber-500" />
              <span>Manali, Himachal Pradesh</span>
            </div>

            <div className="flex items-center gap-3">
              <Mail size={18} className="text-amber-500" />
              <span>@journey_of_suraj</span>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Manali Adventure. All rights reserved.
        </p>

        <div className="flex gap-6 text-sm text-gray-400">
          <span className="hover:text-amber-500 cursor-pointer transition">
            Privacy Policy
          </span>
          <span className="hover:text-amber-500 cursor-pointer transition">
            Terms & Conditions
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
