"use client";

import PayPalButton from "./PayPalButton";

export default function PricingCard({
  duration,
  price,
  href,
  promo,
  message,
  highlight,
}: {
  duration: string;
  price: string;
  href: string;
  promo?: string;
  message?: string;
  highlight?: boolean;
}) {
  const numericPrice = price.replace(",", ".").replace("€", "").trim();

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

      {/* Duration */}
      <h3 className="text-xl font-semibold text-gray-100 mb-2 tracking-tight">
        {duration}
      </h3>

      {/* Price */}
      <p className="text-3xl font-bold text-white mb-1">{price}</p>

      {/* Message */}
      {message && (
        <p className="text-gray-400 text-sm mb-6 leading-tight max-w-[200px]">
          {message}
        </p>
      )}

      {/* Zone claire pour les boutons PayPal */}
      <div className="w-full bg-gray-100 rounded-xl p-4 shadow-inner border border-gray-300">
        <PayPalButton amount={numericPrice} description={`Abonnement ${duration}`} />
      </div>

      {/* Lien Stripe (désactivé) */}
      <a
        href={href}
        className="mt-4 text-xs text-gray-500 hover:text-gray-300 transition"
      >
        (Stripe – désactivé)
      </a>
    </div>
  );
}
