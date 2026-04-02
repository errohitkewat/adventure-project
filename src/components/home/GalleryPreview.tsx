import Image from "next/image";

const galleryImages = [
  "/images/galleryImage1.jpg",
  "/images/galleryImage2.jpg",
  "/images/galleryImage3.jpg",
  "/images/galleryImage4.jpg",
];

const GallerySection = () => {
  return (
    <section className="bg-[#0b1a13] text-white py-24 px-6 md:px-16 lg:px-24">
      <div className="text-center max-w-3xl mx-auto mb-14">
        <p className="text-amber-500 uppercase tracking-[0.3em] text-sm font-semibold mb-4">
          Gallery
        </p>
        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          Glimpses Of Adventure In Manali
        </h2>
        <p className="text-gray-300 text-lg leading-8">
          A small preview of the thrill, mountain beauty, river energy, and
          unforgettable moments that make every trip special.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {galleryImages.map((img, index) => (
          <div
            key={index}
            className="relative h-80 rounded-[28px] overflow-hidden group"
          >
            <Image
              src={img}
              alt={`gallery-image-${index + 1}`}
              fill
              className="object-cover group-hover:scale-110 transition duration-500"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default GallerySection;
