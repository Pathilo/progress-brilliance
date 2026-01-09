import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { CheckCircle, Phone, Shield, Clock, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/sections/CTASection";
import doorsImg from "@/assets/product-doors.jpg";

const products = [
  "Drzwi przeciwpożarowe EI30",
  "Drzwi przeciwpożarowe EI60",
  "Drzwi przeciwpożarowe EI90",
  "Okna i przeszklenia ognioodporne",
  "Przegrody i ściany działowe",
  "Klapy dymowe i oddymiające",
];

const classes = [
  {
    name: "EI30",
    time: "30 minut",
    description: "Podstawowa klasa odporności ogniowej dla pomieszczeń mieszkalnych i biurowych.",
  },
  {
    name: "EI60",
    time: "60 minut",
    description: "Standardowa klasa dla większości obiektów użyteczności publicznej.",
  },
  {
    name: "EI90",
    time: "90 minut",
    description: "Wysoka klasa wymagana w obiektach wysokiego ryzyka i przemysłowych.",
  },
];

export default function InvestmentsFiresafe() {
  return (
    <Layout>
      <section className="relative py-24 bg-graphite overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={doorsImg} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="container relative">
          <p className="text-progress-blue-light font-semibold text-sm uppercase tracking-wider mb-3">Inwestycje</p>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-background mb-6">
            Wyroby przeciwpożarowe
          </h1>
          <p className="text-xl text-background/80 max-w-2xl mb-8">
            Produkujemy i montujemy drzwi, okna oraz przegrody przeciwpożarowe. 
            Wszystkie wyroby posiadają wymagane atesty ITB i certyfikaty.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button variant="hero" size="lg" asChild>
              <Link to="/kontakt">Zapytaj o ofertę</Link>
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
            <div className="order-2 lg:order-1 relative">
              <div className="absolute -bottom-4 -left-4 w-full h-full border-2 border-primary/20 rounded-xl" />
              <img src={doorsImg} alt="Wyroby przeciwpożarowe" className="rounded-xl shadow-elevated relative" />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-heading font-bold text-graphite mb-8">
                Nasza oferta przeciwpożarowa
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
          </div>
        </div>
      </section>

      {/* Klasy odporności */}
      <section className="py-20 bg-surface">
        <div className="container">
          <h2 className="text-3xl font-heading font-bold text-graphite mb-4 text-center">
            Klasy odporności ogniowej
          </h2>
          <p className="text-graphite-light text-center mb-12 max-w-2xl mx-auto">
            Oferujemy wyroby w różnych klasach odporności ogniowej, dostosowanych do wymagań projektu
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {classes.map((cls) => (
              <div key={cls.name} className="bg-background rounded-xl p-8 shadow-card text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-3xl font-heading font-bold text-graphite mb-2">{cls.name}</h3>
                <div className="flex items-center justify-center gap-2 text-primary mb-4">
                  <Clock className="h-5 w-5" />
                  <span className="font-semibold">{cls.time}</span>
                </div>
                <p className="text-graphite-light">{cls.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certyfikaty */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <Award className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-heading font-bold text-graphite mb-4">
              Certyfikaty i atesty
            </h2>
            <p className="text-graphite-light text-lg mb-8">
              Wszystkie nasze wyroby przeciwpożarowe posiadają wymagane prawem certyfikaty i atesty. 
              Współpracujemy z Instytutem Techniki Budowlanej (ITB) oraz akredytowanymi laboratoriami 
              badawczymi. Zapewniamy pełną dokumentację dla każdego projektu.
            </p>
            <Button variant="cta" asChild>
              <Link to="/do-pobrania">Pobierz certyfikaty</Link>
            </Button>
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
}
