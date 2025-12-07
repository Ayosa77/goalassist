import Reveal from "./Reveal";

export default function HowItWorks() {
  const steps = [
    { title: "1. Vous choisissez", desc: "1, 3, 6 ou 12 mois selon vos besoins." },
    { title: "2. Paiement sécurisé", desc: "Stripe garantit une transaction rapide et fiable." },
    { title: "3. On s’occupe du reste", desc: "Assistance, réglages, optimisation. Vous profitez." },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {steps.map((step, i) => (
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
              {step.title}
            </h3>
            <p className="text-gray-400">{step.desc}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
