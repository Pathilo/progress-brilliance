import { Link } from "react-router-dom";
import { Phone, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-main.jpg";
import detailImage from "@/assets/detail-handle.jpg";

const trustItems = [
  "Bezpłatny pomiar i wycena",
  "Profesjonalny montaż",
  "Gwarancja do 10 lat",
];

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Nowoczesny dom z panoramicznymi oknami" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-graphite/90 via-graphite/70 to-graphite/40" />
      </div>

      {/* Content */}
      <div className="container relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-slide-up">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-background leading-tight text-balance">
                Okna, drzwi i bramy<br />
                <span className="text-progress-blue-light">z montażem</span>
              </h1>
              <p className="text-xl text-background/80 max-w-lg">
                Białystok i okolice. Kompleksowa obsługa: doradztwo, pomiar, dostawa i profesjonalny montaż stolarki budowlanej.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="xl" asChild>
                <Link to="/kontakt">Bezpłatna wycena</Link>
              </Button>
              <Button variant="hero-outline" size="xl" asChild>
                <a href="tel:+48123456789">
                  <Phone className="h-5 w-5" />
                  Zadzwoń
                </a>
              </Button>
            </div>

            {/* Trust Strip */}
            <div className="flex flex-wrap gap-6 pt-4">
              {trustItems.map((item) => (
                <div key={item} className="flex items-center gap-2 text-background/90">
                  <CheckCircle className="h-5 w-5 text-progress-blue-light" />
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Detail Image with Frame Effect */}
          <div className="hidden lg:block relative animate-slide-in-right" style={{ animationDelay: '0.2s' }}>
            <div className="relative ml-auto w-80">
              {/* Offset frame */}
              <div className="absolute -top-4 -right-4 w-full h-full border-2 border-progress-blue-light rounded-lg" />
              {/* Main image */}
              <div className="relative bg-background rounded-lg overflow-hidden shadow-elevated">
                <img 
                  src={detailImage} 
                  alt="Detal - klamka okienna" 
                  className="w-full h-auto"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-graphite/80 to-transparent p-6">
                  <p className="text-background text-sm font-medium">Najwyższa jakość wykończenia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle geometric pattern */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
