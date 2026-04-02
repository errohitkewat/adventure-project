import { Waves, Wind, Mountain, Snowflake } from "lucide-react";

const activities = [
  {
    icon: Waves,
    title: "River Rafting",
    desc: "Feel the thrill of fast-flowing river currents and enjoy one of the most exciting adventure experiences in Manali.",
  },
  {
    icon: Wind,
    title: "Paragliding",
    desc: "Soar above the valleys and take in breathtaking mountain views with an unforgettable flying experience.",
  },
  {
    icon: Mountain,
    title: "Bungee Jumping",
    desc: "Challenge yourself with a bold jump and add an extra level of excitement to your Manali trip.",
  },
  {
    icon: Snowflake,
    title: "More Adventures",
    desc: "From mountain activities to seasonal outdoor fun, enjoy memorable adventure moments with your group or family.",
  },
];

const ActivitiesSection = () => {
  return (
    <section className="relative bg-[#0f1b16] text-white py-24 px-6 md:px-16 lg:px-24 overflow-hidden">
      <div className="absolute top-10 right-10 w-72 h-72 bg-amber-500/10 blur-3xl rounded-full" />

      <div className="relative z-10 text-center max-w-3xl mx-auto mb-14">
        <p className="text-amber-500 uppercase tracking-[0.3em] text-sm font-semibold mb-4">
          Activities
        </p>
        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          Adventures You Can Experience In Manali
        </h2>
        <p className="text-gray-300 text-lg leading-8">
          Discover thrilling outdoor activities designed for travelers who want
          excitement, scenic beauty, and unforgettable memories in Manali.
        </p>
      </div>

      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {activities.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-md hover:border-amber-500/50 hover:-translate-y-1 transition duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-amber-500/15 flex items-center justify-center mb-5">
                <Icon className="text-amber-500" size={28} />
              </div>
              <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-400 leading-7 text-sm">{item.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ActivitiesSection;
