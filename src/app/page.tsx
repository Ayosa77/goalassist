import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import WhySection from "@/components/WhySection";
import HowItWorks from "@/components/HowItWorks";
import BenefitsSection from "@/components/BenefitsSection";
import FAQSection from "@/components/FAQSection";

export default function HomePage() {
  return (
    <div className="noise-bg bg-slate-950">
      <Navbar />
      <Hero />

      {/* SECTION 1 – Pourquoi choisir */}
      <section className="py-16 md:py-28 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-8 md:mb-12 tracking-tight">
            Pourquoi choisir GoalAssist ?
          </h2>
          <WhySection />
        </div>
      </section>

      {/* SECTION 2 – Comment ça marche */}
      <section className="py-16 md:py-28 px-4 bg-slate-900">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-8 md:mb-12 tracking-tight">
            Comment ça marche ?
          </h2>
          <HowItWorks />
        </div>
      </section>

      {/* SECTION 3 – Bénéfices */}
      <section className="py-16 md:py-28 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-8 md:mb-12 tracking-tight">
            Les bénéfices
          </h2>
          <BenefitsSection />
        </div>
      </section>

      {/* SECTION 4 – FAQ */}
      <section className="py-16 md:py-28 px-4 bg-slate-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-8 md:mb-12 tracking-tight">
            Questions fréquentes
          </h2>
          <FAQSection />
        </div>
      </section>

      <Footer />
    </div>
  );
}
