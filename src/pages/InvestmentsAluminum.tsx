import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { CheckCircle, Phone, Factory, Cog, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/sections/CTASection";
import windowsImg from "@/assets/product-windows.jpg";

const products = [
  "Okna aluminiowe ciepłe i zimne",
  "Drzwi aluminiowe wejściowe i wewnętrzne",
  "Fasady słupowo-ryglowe",
  "Fasady strukturalne i półstrukturalne",
  "Ogrody zimowe i zadaszenia",
  "Konstrukcje specjalne na zamówienie",
];

const advantages = [
  {
    icon: Factory,
    title: "Własna produkcja",
    description: "Posiadamy nowoczesną linię produkcyjną wyposażoną w maszyny CNC najnowszej generacji.",
  },
  {
    icon: Cog,
    title: "Renomowane profile",
    description: "Pracujemy na profilach Aluprof, Yawal, Reynaers i innych wiodących producentów.",
  },
  {
    icon: Award,
    title: "Certyfikaty jakości",
    description: "Nasze wyroby posiadają wszystkie wymagane certyfikaty i atesty.",
  },
];

export default function InvestmentsAluminum() {
  return (
    <Layout>
      <section className="relative py-24 bg-graphite overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={windowsImg} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="container relative">
          <p className="text-progress-blue-light font-semibold text-sm uppercase tracking-wider mb-3">Inwestycje</p>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-background mb-6">
            Producent ślusarki aluminiowej
          </h1>
          <p className="text-xl text-background/80 max-w-2xl mb-8">
            Jesteśmy producentem ślusarki aluminiowej z wieloletnim doświadczeniem. 
            Wytwarzamy okna, drzwi, fasady i konstrukcje specjalne z aluminium.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button variant="hero" size="lg" asChild>
              <Link to="/kontakt">Zapytaj o produkcję</Link>
            </Button>
            <Button variant="hero-outline" size="lg" asChild>
              <a href="tel:+48123456789"><Phone className="h-5 w-5 mr-2" />Zadzwoń</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Produkty */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-heading font-bold text-graphite mb-8">
                Nasze produkty aluminiowe
              </h2>
              <ul className="space-y-4">
                {products.map((product) => (
                  <li key={product} className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                    <span className="text-graphite-light text-lg">{product}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="absolute -top-4 -right-4 w-full h-full border-2 border-primary/20 rounded-xl" />
              <img src={windowsImg} alt="Ślusarka aluminiowa" className="rounded-xl shadow-elevated relative" />
            </div>
          </div>
        </div>
      </section>

      {/* Zalety */}
      <section className="py-20 bg-surface">
        <div className="container">
          <h2 className="text-3xl font-heading font-bold text-graphite mb-12 text-center">
            Dlaczego nasza produkcja?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {advantages.map((adv) => (
              <div key={adv.title} className="bg-background rounded-xl p-8 shadow-card">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <adv.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-bold text-graphite mb-3">{adv.title}</h3>
                <p className="text-graphite-light">{adv.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
}
