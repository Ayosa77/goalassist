import Link from "next/link";

export default function PricingCard({
  duration,
  price,
  href,
  promo,
  message,
  highlight = false,
  tag,
}: {
  duration: string;
  price: string;
  href: string;
  promo?: string;
  message?: string;
  highlight?: boolean;
  tag?: string; // Badge "Populaire", "Best Deal", etc.
}) {
  return (
    <div
      className={`
        p-6 rounded-2xl text-gray-100 bg-slate-900 border flex flex-col transform transition-all
        hover:scale-[1.03] hover:shadow-xl hover:shadow-emerald-500/10
        ${
          highlight
            ? "border-emerald-500 shadow-emerald-500/20 shadow-2xl scale-[1.03]"
            : "border-slate-800"
        }
      `}
    >
      {/* TAG PREMIUM (Populaire, Best Deal...) */}
      {tag && (
        <span className="mb-3 inline-block bg-sky-500 text-white font-semibold rounded-full px-3 py-1 text-sm shadow">
          {tag}
        </span>
      )}

      {/* SECTION CONTENU équilibrée */}
      <div className="flex-1 flex flex-col items-center min-h-[190px]">
        <h3 className="text-xl font-semibold mb-2">{duration}</h3>

        {promo && (
          <span className="bg-emerald-500 text-white font-semibold rounded-full px-3 py-1 text-sm inline-block mb-3">
            {promo}
          </span>
        )}

        <p className="text-4xl font-bold text-emerald-500 mb-2">{price}</p>

        {message && (
          <p className="text-gray-300 text-sm text-center max-w-[200px]">{message}</p>
        )}
      </div>

      {/* BUTTON */}
      <Link
        href={href}
        className="mt-6 block bg-emerald-500 hover:bg-emerald-600 text-black font-semibold py-3 rounded-xl transition shadow-lg"
      >
        Acheter
      </Link>
    </div>
  );
}
