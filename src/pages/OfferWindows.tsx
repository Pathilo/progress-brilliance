import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { CheckCircle, ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/sections/CTASection";
import windowsImg from "@/assets/product-windows.jpg";

const benefits = [
  "Energooszczędność klasy A+",
  "Szyby zespolone 2- i 3-komorowe",
  "Profil 5- i 7-komorowy",
  "Okucia antywłamaniowe RC2",
  "Bogata paleta kolorów i wykończeń",
  "Ciepła ramka dystansowa",
  "Gwarancja do 10 lat",
];

const forWhom = [
  {
    title: "Budujesz dom",
    description: "Energooszczędne okna dopasowane do projektu i wymagań cieplnych.",
  },
  {
    title: "Remontujesz mieszkanie",
    description: "Wymiana starych okien na nowoczesne – szybko i bez bałaganu.",
  },
  {
    title: "Inwestujesz w nieruchomości",
    description: "Okna o atrakcyjnym stosunku jakości do ceny, hurtowe rabaty.",
  },
];

const configurations = [
  { name: "Profile PVC", options: ["5-komorowy", "7-komorowy", "8-komorowy"] },
  { name: "Szklenie", options: ["Dwuszybowe", "Trzyszybowe", "Pakiet ciepły"] },
  { name: "Kolory", options: ["Biały", "Antracyt", "Złoty dąb", "Orzech", "Mahoń"] },
  { name: "Okucia", options: ["Standard", "RC1", "RC2"] },
];

const faqs = [
  {
    q: "Ile kosztuje wymiana okien?",
    a: "Koszt zależy od wielkości, typu profilu i szklenia. Bezpłatna wycena pozwoli dokładnie określić cenę.",
  },
  {
    q: "Jak długo trwa montaż?",
    a: "Standardowa wymiana okien w domu jednorodzinnym to 1-2 dni robocze.",
  },
  {
    q: "Czy usuwanie starych okien wchodzi w cenę?",
    a: "Tak, demontaż i utylizacja starych okien jest w cenie usługi montażowej.",
  },
  {
    q: "Jaki profil wybrać?",
    a: "Dla domów energooszczędnych polecamy minimum profil 7-komorowy z pakietem trzyszybowym.",
  },
  {
    q: "Czy udzielacie gwarancji?",
    a: "Tak, gwarancja producenta na profil wynosi do 10 lat, na szklenie 5 lat, na montaż 3 lata.",
  },
];

export default function OfferWindows() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-24 bg-graphite overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={windowsImg} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="container relative">
          <p className="text-progress-blue-light font-semibold text-sm uppercase tracking-wider mb-3">Oferta</p>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-background mb-6">
            Okna PVC, aluminium i drewno
          </h1>
          <p className="text-xl text-background/80 max-w-2xl mb-8">
            Energooszczędne okna najwyższej jakości od czołowych producentów. 
            Profesjonalne doradztwo, pomiar i montaż w Białymstoku i okolicach.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button variant="hero" size="lg" asChild>
              <Link to="/kontakt">Bezpłatna wycena</Link>
            </Button>
            <Button variant="hero-outline" size="lg" asChild>
              <a href="tel:+48123456789">
                <Phone className="h-5 w-5 mr-2" />
                Zadzwoń
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* For whom */}
      <section className="py-20 bg-background">
        <div className="container">
          <h2 className="text-3xl font-heading font-bold text-graphite mb-12">Dla kogo?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {forWhom.map((item) => (
              <div key={item.title} className="bg-background-section rounded-xl p-8 border border-border">
                <h3 className="font-heading font-bold text-xl text-graphite mb-3">{item.title}</h3>
                <p className="text-graphite-muted">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-background-section">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-heading font-bold text-graphite mb-8">
                Korzyści z naszych okien
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
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-primary/20 rounded-xl" />
              <img src={windowsImg} alt="Okna PVC" className="rounded-xl shadow-elevated relative" />
            </div>
          </div>
        </div>
      </section>

      {/* Configurations */}
      <section className="py-20 bg-background">
        <div className="container">
          <h2 className="text-3xl font-heading font-bold text-graphite mb-12">
            Opcje i konfiguracje
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {configurations.map((config) => (
              <div key={config.name} className="bg-card rounded-xl p-6 shadow-card border border-border">
                <h3 className="font-heading font-bold text-lg text-graphite mb-4">{config.name}</h3>
                <ul className="space-y-2">
                  {config.options.map((option) => (
                    <li key={option} className="flex items-center gap-2 text-graphite-muted">
                      <ArrowRight className="h-4 w-4 text-primary" />
                      {option}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-background-section">
        <div className="container max-w-3xl">
          <h2 className="text-3xl font-heading font-bold text-graphite mb-12 text-center">
            Najczęściej zadawane pytania
          </h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-background rounded-xl p-6 shadow-card border border-border">
                <h3 className="font-heading font-semibold text-graphite mb-2">{faq.q}</h3>
                <p className="text-graphite-muted">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
}
