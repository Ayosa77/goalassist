"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <div className="bg-slate-950 min-h-screen text-gray-100">
      <Navbar />

      <section className="py-20 px-4 text-center">

        {/* LOGO animé */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mx-auto mb-6"
        >
          <Image
            src="/icon.svg"
            alt="GoalAssist logo"
            width={80}
            height={80}
            className="mx-auto opacity-90"
          />
        </motion.div>

        {/* TITRE */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-4 tracking-tight"
        >
          Contact
        </motion.h1>

        {/* SOUS-TEXTE */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-gray-300 mb-8 max-w-md mx-auto"
        >
          Une question ? Une demande ? Nous vous répondons rapidement.
        </motion.p>

        {/* BADGE TEMPS DE REPONSE */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <span className="bg-emerald-500/20 text-emerald-400 px-4 py-2 rounded-full text-sm font-semibold">
            Temps de réponse moyen : 1h
          </span>
        </motion.div>

        {/* FORMULAIRE + REDIRECTION */}
        <motion.form
          onSubmit={async (e) => {
            e.preventDefault();

            const form = e.target as HTMLFormElement;
            const formData = new FormData(form);

            // Envoi vers Formspree
            await fetch("https://formspree.io/f/mwpgnpag", {
              method: "POST",
              body: formData,
              headers: { Accept: "application/json" },
            });

            // Redirection GRATUITE
            window.location.href = "/merci";
          }}
          className="max-w-xl mx-auto space-y-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <input
            type="email"
            name="email"
            required
            placeholder="Votre email"
            className="w-full p-4 rounded-xl bg-slate-900 border border-white/10 text-gray-100 
            focus:outline-none focus:border-emerald-500 transition"
          />

          <textarea
            name="message"
            required
            rows={5}
            placeholder="Votre message"
            className="w-full p-4 rounded-xl bg-slate-900 border border-white/10 text-gray-100
            focus:outline-none focus:border-emerald-500 transition"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-emerald-500 hover:bg-emerald-600 text-black font-semibold py-3 
            rounded-xl transition shadow-lg"
          >
            Envoyer
          </button>
        </motion.form>
      </section>

      <Footer />
    </div>
  );
}
