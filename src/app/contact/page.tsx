"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  async function handleSubmit(e: any) {
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);

    await fetch("https://formspree.io/f/mwpgnpag", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });

    setSent(true);
    form.reset();
  }

  return (
    <div className="bg-slate-950 min-h-screen text-gray-100">
      <Navbar />

      <section className="pt-32 pb-20 px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-6 tracking-tight"
        >
          Contact
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-gray-300 mb-12"
        >
          Une question ? Une demande ? Nous sommes là pour vous aider.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="max-w-xl mx-auto bg-slate-900/60 backdrop-blur p-8 rounded-2xl shadow-xl border border-white/10"
        >
          {sent ? (
            <p className="text-emerald-400 font-semibold text-lg">
              Message envoyé ✔ Nous vous répondrons rapidement.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 text-left">
              {/* EMAIL */}
              <div>
                <label className="block text-gray-200 text-sm mb-2">
                  Votre email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full p-4 rounded-xl bg-slate-800 border border-white/10 text-gray-100 focus:outline-none focus:border-emerald-500 transition"
                />
              </div>

              {/* MESSAGE */}
              <div>
                <label className="block text-gray-200 text-sm mb-2">
                  Votre message
                </label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  className="w-full p-4 rounded-xl bg-slate-800 border border-white/10 text-gray-100 focus:outline-none focus:border-emerald-500 transition"
                ></textarea>
              </div>

              {/* BOUTON */}
              <button
                type="submit"
                className="w-full bg-emerald-500 hover:bg-emerald-600 text-black font-semibold py-3 rounded-xl transition shadow-lg"
              >
                Envoyer
              </button>
            </form>
          )}
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
