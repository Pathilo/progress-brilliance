import { Layout } from "@/components/layout/Layout";
import { CTASection } from "@/components/sections/CTASection";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Adres",
    lines: ["ul. Przykładowa 123", "15-001 Białystok"],
  },
  {
    icon: Phone,
    title: "Telefon",
    lines: ["+48 123 456 789"],
    href: "tel:+48123456789",
  },
  {
    icon: Mail,
    title: "E-mail",
    lines: ["biuro@progress-okna.pl"],
    href: "mailto:biuro@progress-okna.pl",
  },
  {
    icon: Clock,
    title: "Godziny otwarcia",
    lines: ["Pon - Pt: 8:00 - 17:00", "Sob: 9:00 - 13:00"],
  },
];

export default function Contact() {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 bg-background-section">
        <div className="container">
          <div className="max-w-2xl">
            <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">Kontakt</p>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-graphite mb-6">
              Skontaktuj się z nami
            </h1>
            <p className="text-graphite-muted text-lg">
              Masz pytania? Potrzebujesz wyceny? Jesteśmy do Twojej dyspozycji. 
              Zadzwoń, napisz lub odwiedź naszą siedzibę.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info + Map */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact cards */}
            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((item) => (
                <div key={item.title} className="bg-background-section rounded-xl p-6 border border-border">
                  <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-4">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-graphite mb-2">{item.title}</h3>
                  {item.href ? (
                    <a href={item.href} className="text-graphite-muted hover:text-primary transition-colors">
                      {item.lines.join(", ")}
                    </a>
                  ) : (
                    item.lines.map((line) => (
                      <p key={line} className="text-graphite-muted">{line}</p>
                    ))
                  )}
                </div>
              ))}
            </div>

            {/* Map */}
            <div className="bg-muted rounded-xl overflow-hidden h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d77241.72366896393!2d22.986438!3d53.1324886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ffc4e0b12f3d1%3A0xb62fb9f8a5c6e4a!2sBia%C5%82ystok!5e0!3m2!1spl!2spl!4v1702000000000!5m2!1spl!2spl"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa - Progress Stolarka Budowlana"
              />
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
}
