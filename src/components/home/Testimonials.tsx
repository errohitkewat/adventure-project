const testimonials = [
  {
    name: "Aarav Sharma",
    text: "The rafting experience was amazing. Everything felt exciting, smooth, and memorable from start to finish.",
  },
  {
    name: "Neha Verma",
    text: "We booked our adventure during our Manali trip and it became the best part of our vacation.",
  },
  {
    name: "Ritika & Friends",
    text: "Beautiful mountain views, thrilling activities, and a really fun experience overall. Highly recommended.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="bg-[#0b1a13] text-white py-24 px-6 md:px-16 lg:px-24">
      <div className="text-center max-w-3xl mx-auto mb-14">
        <p className="text-amber-500 uppercase tracking-[0.3em] text-sm font-semibold mb-4">
          Testimonials
        </p>
        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          What Travelers Say
        </h2>
        <p className="text-gray-300 text-lg leading-8">
          Real adventure memories from people who explored the thrill and beauty
          of Manali.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="bg-white/5 border border-white/10 rounded-[28px] p-7 backdrop-blur-md"
          >
            <div className="text-amber-500 text-4xl mb-4">“</div>
            <p className="text-gray-300 leading-8 mb-6">{item.text}</p>
            <h3 className="text-xl font-semibold">{item.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
