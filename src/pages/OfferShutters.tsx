import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { CheckCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/sections/CTASection";
import blindsImg from "@/assets/product-blinds.jpg";
import rollersImg from "@/assets/product-rollers.jpg";

const shutterTypes = [
  {
    title: "Żaluzje fasadowe",
    description: "Aluminiowe żaluzje zewnętrzne z regulacją kąta lameli. Idealne do kontroli światła i temperatury.",
    features: ["Regulacja kąta lameli", "Sterowanie elektryczne", "Ochrona przed słońcem"],
    image: blindsImg,
  },
  {
    title: "Rolety zewnętrzne",
    description: "Rolety nadstawne i podtynkowe zapewniające izolację termiczną, akustyczną oraz ochronę antywłamaniową.",
    features: ["Izolacja termiczna", "Ochrona antywłamaniowa", "Automatyka pogodowa"],
    image: rollersImg,
  },
];

const benefits = [
  "Żaluzje fasadowe aluminiowe",
  "Rolety zewnętrzne nadstawne i podtynkowe",
  "Sterowanie ręczne, elektryczne i solarne",
  "Integracja z automatyką domową",
  "Ochrona przed słońcem i ciepłem",
  "Izolacja termiczna i akustyczna",
  "Moskitiery i akcesoria",
];

export default function OfferShutters() {
  return (
    <Layout>
      <section className="relative py-24 bg-graphite overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={blindsImg} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="container relative">
          <p className="text-progress-blue-light font-semibold text-sm uppercase tracking-wider mb-3">Oferta</p>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-background mb-6">
            Przesłony okienne
          </h1>
          <p className="text-xl text-background/80 max-w-2xl mb-8">
            Żaluzje fasadowe i rolety zewnętrzne. Kompleksowe rozwiązania do kontroli 
            światła, temperatury i prywatności w Twoim domu.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button variant="hero" size="lg" asChild>
              <Link to="/kontakt">Bezpłatna wycena</Link>
            </Button>
            <Button variant="hero-outline" size="lg" asChild>
              <a href="tel:+48123456789"><Phone className="h-5 w-5 mr-2" />Zadzwoń</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Typy przesłon */}
      <section className="py-20 bg-background">
        <div className="container">
          <h2 className="text-3xl font-heading font-bold text-graphite mb-12 text-center">
            Rodzaje przesłon okiennych
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {shutterTypes.map((type) => (
              <div key={type.title} className="bg-surface rounded-2xl overflow-hidden shadow-card">
                <img src={type.image} alt={type.title} className="w-full h-56 object-cover" />
                <div className="p-8">
                  <h3 className="text-2xl font-heading font-bold text-graphite mb-3">{type.title}</h3>
                  <p className="text-graphite-light mb-6">{type.description}</p>
                  <ul className="space-y-2">
                    {type.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-graphite-light">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wszystkie zalety */}
      <section className="py-20 bg-surface">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-heading font-bold text-graphite mb-8">
                Dlaczego warto wybrać nasze przesłony?
              </h2>
              <ul className="space-y-4">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                    <span className="text-graphite-light text-lg">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="absolute -top-4 -right-4 w-full h-full border-2 border-primary/20 rounded-xl" />
              <img src={rollersImg} alt="Przesłony okienne" className="rounded-xl shadow-elevated relative" />
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
}
