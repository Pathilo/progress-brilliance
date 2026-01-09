import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Building2, Factory, Shield, CheckCircle, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/sections/CTASection";
import installationImg from "@/assets/installation-team.jpg";

const investmentTypes = [
  {
    icon: Building2,
    title: "Inwestycje budowlane",
    description: "Realizujemy kompleksowe projekty dla deweloperów, firm i inwestorów indywidualnych. Nie tylko domy jednorodzinne - obsługujemy również biurowce, hotele, obiekty handlowe i przemysłowe.",
    features: [
      "Budynki wielorodzinne i apartamentowce",
      "Obiekty biurowe i komercyjne",
      "Hotele i obiekty turystyczne",
      "Hale przemysłowe i magazynowe",
    ],
    href: "/inwestycje",
  },
  {
    icon: Factory,
    title: "Ślusarka aluminiowa",
    description: "Jesteśmy producentem ślusarki aluminiowej. Produkujemy okna, drzwi, fasady i konstrukcje specjalne z aluminium najwyższej jakości.",
    features: [
      "Własna linia produkcyjna",
      "Profile aluminiowe renomowanych marek",
      "Indywidualne projekty na zamówienie",
      "Certyfikaty jakości i bezpieczeństwa",
    ],
    href: "/inwestycje/slusarka-aluminiowa",
  },
  {
    icon: Shield,
    title: "Wyroby przeciwpożarowe",
    description: "Specjalizujemy się w produkcji i montażu wyrobów przeciwpożarowych. Drzwi, okna i przegrody o wymaganej klasie odporności ogniowej.",
    features: [
      "Drzwi przeciwpożarowe EI30, EI60, EI90",
      "Okna i przeszklenia ognioodporne",
      "Przegrody i ściany działowe",
      "Atesty i certyfikaty ITB",
    ],
    href: "/inwestycje/przeciwpozarowe",
  },
];

export default function Investments() {
  return (
    <Layout>
      <section className="relative py-24 bg-graphite overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={installationImg} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="container relative">
          <p className="text-progress-blue-light font-semibold text-sm uppercase tracking-wider mb-3">Inwestycje</p>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-background mb-6">
            Kompleksowa obsługa inwestycji
          </h1>
          <p className="text-xl text-background/80 max-w-2xl mb-8">
            Nie ograniczamy się do domów jednorodzinnych. Realizujemy projekty 
            dla deweloperów i przemysłu. Jesteśmy producentem ślusarki aluminiowej 
            oraz wyrobów przeciwpożarowych.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button variant="hero" size="lg" asChild>
              <Link to="/kontakt">Zapytaj o współpracę</Link>
            </Button>
            <Button variant="hero-outline" size="lg" asChild>
              <a href="tel:+48123456789"><Phone className="h-5 w-5 mr-2" />Zadzwoń</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Typy inwestycji */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-graphite mb-4">
              Nasze specjalizacje
            </h2>
            <p className="text-xl text-graphite-light max-w-2xl mx-auto">
              Wieloletnie doświadczenie w realizacji różnorodnych projektów budowlanych
            </p>
          </div>
          
          <div className="space-y-12">
            {investmentTypes.map((type, index) => (
              <div 
                key={type.title} 
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                      <type.icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="text-2xl font-heading font-bold text-graphite">{type.title}</h3>
                  </div>
                  <p className="text-graphite-light text-lg mb-6">{type.description}</p>
                  <ul className="space-y-3 mb-8">
                    {type.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-graphite-light">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" asChild>
                    <Link to={type.href}>
                      Dowiedz się więcej
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Link>
                  </Button>
                </div>
                <div className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="absolute -top-4 -right-4 w-full h-full border-2 border-primary/20 rounded-xl" />
                  <div className="bg-surface rounded-xl shadow-elevated p-8 relative">
                    <type.icon className="h-24 w-24 text-primary/20 mx-auto" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dlaczego my */}
      <section className="py-20 bg-surface">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-heading font-bold text-graphite mb-6">
              Dlaczego warto współpracować z Progress?
            </h2>
            <p className="text-graphite-light text-lg mb-8">
              Łączymy doświadczenie wykonawcze z własnymi możliwościami produkcyjnymi. 
              Dzięki temu oferujemy kompleksową obsługę inwestycji - od projektu, 
              przez produkcję, po montaż i serwis.
            </p>
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="bg-background rounded-xl p-6 shadow-card">
                <div className="text-4xl font-heading font-bold text-primary mb-2">15+</div>
                <p className="text-graphite-muted">lat doświadczenia</p>
              </div>
              <div className="bg-background rounded-xl p-6 shadow-card">
                <div className="text-4xl font-heading font-bold text-primary mb-2">500+</div>
                <p className="text-graphite-muted">zrealizowanych inwestycji</p>
              </div>
              <div className="bg-background rounded-xl p-6 shadow-card">
                <div className="text-4xl font-heading font-bold text-primary mb-2">100%</div>
                <p className="text-graphite-muted">własna produkcja</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
}
