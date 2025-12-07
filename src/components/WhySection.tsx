import Reveal from "./Reveal";

export default function WhySection() {
  const items = [
    {
      title: "Confort immédiat",
      desc: "Installation et configuration prises en charge de A à Z."
    },
    {
      title: "Fiabilité totale",
      desc: "Une expérience stable pensée pour éviter les interruptions."
    },
    {
      title: "Assistance prioritaire",
      desc: "Support rapide avant et pendant les matchs importants."
    },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {items.map((item, i) => (
        <Reveal key={i}>
          <div
            className="
              p-8 rounded-2xl bg-gradient-to-b from-slate-800/50 to-slate-900/30
              border border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.25)]
              hover:shadow-[0_8px_32px_rgba(0,0,0,0.35)]
              hover:scale-[1.02] transition-all
            "
          >
            <h3 className="text-xl font-semibold text-gray-100 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-400">{item.desc}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
