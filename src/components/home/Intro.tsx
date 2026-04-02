import Image from "next/image";


const AboutSection = () => {
  return (
    <section className="relative w-full bg-[#0b1a13] text-white py-24 px-6 md:px-16 lg:px-24 overflow-hidden">
      <div className="absolute top-0 left-0 w-72 h-72 bg-amber-500/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-green-500/10 blur-3xl rounded-full" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        <div>
          <p className="text-amber-500 uppercase tracking-[0.3em] text-sm font-semibold mb-4">
            About Us
          </p>

          <h2 className="text-4xl md:text-6xl font-bold leading-tight tracking-wide mb-6">
            Your Adventure Starts In Manali
          </h2>

          <p className="text-gray-300 text-base md:text-lg leading-8 max-w-2xl mb-8">
            We help travelers experience the thrill of Manali through exciting
            outdoor activities like river rafting, paragliding,
            and more. Our goal is to make your trip more adventurous, more
            memorable, and easy to book.
          </p>

          <p className="text-gray-400 text-sm md:text-base leading-7 mb-10 max-w-2xl">
            Whether you are visiting with friends, family, or your partner, we
            bring you some of the most exciting adventure experiences in and
            around Manali. From fast river currents to breathtaking mountain
            views, every activity is designed to give you the perfect mix of
            thrill, fun, and natural beauty.
          </p>

          
        </div>

        <div className="relative w-full h-140  rounded-[30px] overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.45)]">
          <Image
            src="/images/about.jpg"
            alt="Manali adventure"
            fill
            className="object-cover"
          />

          <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />

          <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-5">
            <p className="text-amber-400 text-sm uppercase tracking-[0.25em] mb-2">
              Book Your Experience
            </p>
            <h3 className="text-2xl font-bold mb-2">
              Thrill, Nature And Memories
            </h3>
            <p className="text-sm text-gray-200 leading-6">
              Discover exciting adventure activities in Manali and turn your
              trip into an experience full of energy, scenic beauty, and
              unforgettable moments.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
