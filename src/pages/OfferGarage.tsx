import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { CheckCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/sections/CTASection";
import garageImg from "@/assets/product-garage.jpg";

const benefits = [
  "Bramy segmentowe i rozwierne",
  "Automatyka Hörmann, Came, Nice",
  "Izolacja termiczna paneli",
  "Kolory dopasowane do elewacji",
  "Opcje przeszklone",
  "Pilot i sterowanie smartfonem",
  "Serwis i konserwacja",
];

export default function OfferGarage() {
  return (
    <Layout>
      <section className="relative py-24 bg-graphite overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={garageImg} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="container relative">
          <p className="text-progress-blue-light font-semibold text-sm uppercase tracking-wider mb-3">Oferta</p>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-background mb-6">
            Bramy garażowe
          </h1>
          <p className="text-xl text-background/80 max-w-2xl mb-8">
            Segmentowe, rozwierne, z automatyką. Dopasowane do każdego garażu 
            i budżetu. Bezpłatna wycena.
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

      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="absolute -bottom-4 -left-4 w-full h-full border-2 border-primary/20 rounded-xl" />
              <img src={garageImg} alt="Bramy garażowe" className="rounded-xl shadow-elevated relative" />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-heading font-bold text-graphite mb-8">
                Cechy naszych bram
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
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
}
