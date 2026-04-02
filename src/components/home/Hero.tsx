import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full">
      <Image
        src="/images/heroimage.jpg"
        alt="heroimage"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-black/80 via-black/40 to-black/90" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-10 md:px-16 lg:px-24 pt-50 sm:pt-24 md:pt-28 text-white">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-wide">
          Welcome
        </h1>

        <h1 className="mt-1 flex flex-wrap items-end gap-2 sm:gap-3 text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-bold leading-none">
          <span className="text-amber-500 h-full pt-3 font-medium text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            to
          </span>
          <span>Manali</span>
        </h1>

        <p className="mt-4 max-w-xs sm:max-w-md md:max-w-xl text-sm sm:text-base md:text-lg lg:text-xl tracking-wide leading-6 sm:leading-7">
          Comfortable camping tours for couples and families with kids of any
          age.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:gap-5">
          <button className="bg-amber-500 text-black hover:bg-amber-600 transition px-6 sm:px-8 py-3 rounded-full font-semibold shadow-lg text-sm sm:text-base">
            Book Your Ride
          </button>

          <button className="border border-white hover:bg-white hover:text-black transition px-6 sm:px-8 py-3 rounded-full font-semibold text-sm sm:text-base">
            Discover More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
