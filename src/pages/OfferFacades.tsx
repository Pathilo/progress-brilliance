import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { CheckCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/sections/CTASection";
import windowsImg from "@/assets/product-windows.jpg";

const benefits = [
  "Fasady aluminiowe słupowo-ryglowe",
  "Fasady strukturalne i półstrukturalne",
  "Ściany kurtynowe szklane",
  "Wysokie parametry izolacji termicznej",
  "Odporność na obciążenia wiatrowe",
  "Możliwość integracji z wentylacją",
  "Rozwiązania dla obiektów komercyjnych i biurowych",
];

export default function OfferFacades() {
  return (
    <Layout>
      <section className="relative py-24 bg-graphite overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={windowsImg} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="container relative">
          <p className="text-progress-blue-light font-semibold text-sm uppercase tracking-wider mb-3">Oferta</p>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-background mb-6">
            Fasady aluminiowe
          </h1>
          <p className="text-xl text-background/80 max-w-2xl mb-8">
            Nowoczesne rozwiązania fasadowe dla budynków komercyjnych i mieszkalnych. 
            Projektujemy i montujemy ściany osłonowe najwyższej jakości.
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
            <div>
              <h2 className="text-3xl font-heading font-bold text-graphite mb-8">
                Nasze rozwiązania fasadowe
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
              <img src={windowsImg} alt="Fasady aluminiowe" className="rounded-xl shadow-elevated relative" />
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
}
