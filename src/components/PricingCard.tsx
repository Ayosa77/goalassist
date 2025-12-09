"use client";

import PayPalButton from "./PayPalButton";

export default function PricingCard({
  duration,
  price = "0",
  promo,
  message,
  highlight,
  productToken,
}: {
  duration: string;
  price?: string;
  promo?: string;
  message?: string;
  highlight?: boolean;
  productToken: string;
}) {
  return (
    <div
      className={`
        relative p-6 rounded-2xl shadow-xl bg-slate-900 border border-white/10
        flex flex-col items-center text-center transition-all duration-300
        hover:scale-[1.03] hover:shadow-emerald-500/10
        ${highlight ? "border-emerald-500 shadow-emerald-500/20" : ""}
      `}
    >
      {promo && (
        <div className="absolute -top-3 px-3 py-1 rounded-full bg-emerald-500 text-black text-sm font-semibold shadow-lg">
          {promo}
        </div>
      )}

      <h3 className="text-xl font-semibold text-gray-100 mb-2 tracking-tight">
        {duration}
      </h3>

      <p className="text-3xl font-bold text-white mb-1">{price}</p>

      {message && (
        <p className="text-gray-400 text-sm mb-6 leading-tight max-w-[200px]">
          {message}
        </p>
      )}

      {/* Zone claire qui abrite les boutons PayPal */}
      <div className="w-full bg-gray-100 rounded-xl p-4 shadow-inner border border-gray-300">
        <PayPalButton productToken={productToken} />
      </div>
    </div>
  );
}
