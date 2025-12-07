"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PricingCard from "@/components/PricingCard";
import { motion } from "framer-motion";

export default function TarifsPage() {
  return (
    <div className="bg-slate-950 min-h-screen text-gray-100">
      <Navbar />

      <section className="py-28 px-4 text-center">

        {/* TITRE animé */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-bold mb-12 tracking-tight"
        >
          Nos offres
        </motion.h1>

        {/* CONTAINER animé avec stagger */}
        <motion.div
          className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {/* PricingCard wrapper — permet l'animation individuelle */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <PricingCard
              duration="1 mois"
              price="6,99 €"
              href="STRIPE_LINK_1MOIS"
              message="Parfait pour découvrir le service."
            />
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <PricingCard
              duration="3 mois"
              price="14,99 €"
              href="STRIPE_LINK_3MOIS"
              promo="-29% d’économie"
              message="Un trimestre d’assistance premium à prix réduit."
            />
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <PricingCard
              duration="6 mois"
              price="24,99 €"
              href="STRIPE_LINK_6MOIS"
              promo="-40% d’économie"
              message="Pensé pour profiter sereinement toute la saison."
            />
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <PricingCard
              duration="12 mois"
              price="39,99 €"
              href="STRIPE_LINK_12MOIS"
              promo="-52% d’économie"
              message="La solution la plus rentable pour l’année."
              highlight={true}
            />
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
