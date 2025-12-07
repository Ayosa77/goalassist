import Reveal from "./Reveal";

export default function FAQSection() {
  const faq = [
    {
      q: "Le paiement est-il sécurisé ?",
      a: "Oui, Stripe gère entièrement la transaction. Aucune donnée bancaire n’est stockée."
    },
    {
      q: "Que couvre l’assistance ?",
      a: "Assistance par mail + tutoriel complet pour démarrer facilement."
    },
    {
      q: "L’abonnement se renouvelle-t-il automatiquement ?",
      a: "Non. GoalAssist est un achat unique. Aucun renouvellement forcé."
    },
  ];

  return (
    <div className="space-y-8">
      {faq.map((f, i) => (
        <Reveal key={i}>
          <div className="p-6 bg-slate-900/40 rounded-xl border border-white/10">
            <h3 className="text-xl font-semibold text-emerald-400 mb-2">
              {f.q}
            </h3>
            <p className="text-gray-400">{f.a}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
