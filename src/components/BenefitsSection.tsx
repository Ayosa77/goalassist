import Reveal from "./Reveal";

export default function BenefitsSection() {
  const benefits = [
    "Une expérience stable et sans stress",
    "Qualité optimisée et réglages professionnels",
    "Assistance réactive quand vous en avez besoin",
    "Zéro perte de temps, zéro complications",
  ];

  return (
    <div className="space-y-4">
      {benefits.map((b, i) => (
        <Reveal key={i}>
          <div
            className="
              p-4 rounded-xl bg-slate-900/40
              border border-white/10 
              hover:border-emerald-400/30
              transition-all
            "
          >
            <p className="text-gray-300 text-lg">• {b}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
