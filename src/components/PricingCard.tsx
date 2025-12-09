"use client";

import PayPalButton from "./PayPalButton";

export default function PricingCard({
  duration,
  price = "0",   // ← valeur par défaut pour éviter undefined
  href,
  promo,
  message,
  highlight,
}: {
  duration: string;
  price?: string;     // ← maintenant optionnel
  href?: string;
  promo?: string;
  message?: string;
  highlight?: boolean;
}) {
  // Protection maximale : jamais undefined
  const numericPrice =
    price?.replace(",", ".")?.replace("€", "")?.trim() || "0";

  return (
    <div
      className={`
        relative p-6 rounded-2xl shadow-xl bg-slate-900 border border-white/10
        flex flex-col items-center text-center transition-all duration-300
        hover:scale-[1.03] hover:shadow-emerald-500/10
        ${highlight ? "border-emerald-500 shadow-emerald-500/20" : ""}
      `}
    >
      {/* Badge promo */}
      {promo && (
        <div className="absolute -top-3 px-3 py-1 rounded-full bg-emerald-500 text-black text-sm font-semibold shadow-lg">
          {promo}
        </div>
      )}

      {/* Durée */}
      <h3 className="text-xl font-semibold text-gray-100 mb-2 tracking-tight">
        {duration}
      </h3>

      {/* Prix affiché */}
      <p className="text-3xl font-bold text-white mb-1">{price}</p>

      {/* Message */}
      {message && (
        <p className="text-gray-400 text-sm mb-6 leading-tight max-w-[200px]">
          {message}
        </p>
      )}

      {/* Bloc clair pour PayPal */}
      <div className="w-full bg-gray-100 rounded-xl p-4 shadow-inner border border-gray-300">
        <PayPalButton amount={numericPrice} description={`Abonnement ${duration}`} />
      </div>

      {/* Ancien lien Stripe (optionnel) */}
      {href && (
        <a
          href={href}
          className="mt-4 text-xs text-gray-500 hover:text-gray-300 transition"
        >
          (Stripe – désactivé)
        </a>
      )}
    </div>
  );
}
