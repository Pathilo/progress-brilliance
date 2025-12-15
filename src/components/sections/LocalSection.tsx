import { MapPin, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const serviceAreas = [
  "Białystok", "Wasilków", "Supraśl", "Zabłudów", "Łapy", 
  "Turośń Kościelna", "Juchnowiec", "Choroszcz", "Dobrzyniewo",
];

export function LocalSection() {
  return (
    <section className="py-24 bg-background-section relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 transform origin-top-right" />
      
      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">
              Lokalna firma, lokalni klienci
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-graphite mb-6">
              Białystok i okolice
            </h2>
            <p className="text-graphite-muted text-lg mb-8 max-w-lg">
              Działamy na terenie Białegostoku i w promieniu 50 km. Znamy lokalny rynek, 
              współpracujemy ze sprawdzonymi ekipami montażowymi. Szybki kontakt, szybka realizacja.
            </p>

            {/* Service areas */}
            <div className="mb-8">
              <p className="font-heading font-semibold text-graphite mb-4">Obsługiwane miejscowości:</p>
              <div className="flex flex-wrap gap-2">
                {serviceAreas.map((area) => (
                  <span 
                    key={area}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-background rounded-full text-sm text-graphite-light border border-border"
                  >
                    <MapPin className="h-3 w-3 text-primary" />
                    {area}
                  </span>
                ))}
              </div>
            </div>

            <Button variant="cta" size="lg" asChild>
              <Link to="/kontakt">
                <MapPin className="mr-2 h-4 w-4" />
                Zamów pomiar w Twojej okolicy
              </Link>
            </Button>
          </div>

          {/* Map placeholder */}
          <div className="relative">
            <div className="bg-background rounded-xl shadow-elevated overflow-hidden border border-border">
              <div className="aspect-square bg-muted flex items-center justify-center">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d77241.72366896393!2d22.986438!3d53.1324886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ffc4e0b12f3d1%3A0xb62fb9f8a5c6e4a!2sBia%C5%82ystok!5e0!3m2!1spl!2spl!4v1702000000000!5m2!1spl!2spl"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '400px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mapa - Białystok i okolice"
                />
              </div>
            </div>
            
            {/* Badge */}
            <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground rounded-xl p-6 shadow-lg">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-8 w-8" />
                <div>
                  <p className="font-heading font-bold text-lg">50 km</p>
                  <p className="text-sm opacity-90">Promień działania</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
