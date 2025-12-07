"use client";

import { useState } from "react";
import Link from "next/link";

export default function Hero() {
  const [active, setActive] = useState(false);

  const handleMouseMove = (e: any) => {
    const rect = e.currentTarget.getBoundingClientRect();
    document.documentElement.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
    document.documentElement.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
  };

  return (
    <section
      className={`relative hero-spotlight ${active ? "active" : ""}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      <div className="aurora"></div>

      <div className="bg-slate-950/80 backdrop-blur-sm text-gray-100 py-40 px-4 text-center relative z-10">
        <div className="animate-[fadeIn_1.2s_ease-out]">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight leading-tight animate-[slideUp_1.2s_ease-out]">
            Le foot sans interruptions.
            <br />
            <span className="text-emerald-500">Une expérience premium.</span>
          </h1>

          <p className="text-gray-300 max-w-2xl mx-auto mb-10 text-lg">
            On installe. On optimise. On assiste.
            <br />
            Vous profitez du match, rien d’autre.
          </p>

          <Link
            href="/tarifs"
            className="inline-block bg-emerald-500 hover:bg-emerald-600 text-black font-semibold py-4 px-12 rounded-xl shadow-xl transition transform hover:scale-105"
          >
            Découvrir les offres
          </Link>

          <div className="mt-10 text-gray-400 text-sm opacity-80">
            Pensé pour ceux qui veulent juste profiter du match.
          </div>
        </div>
      </div>
    </section>
  );
}
