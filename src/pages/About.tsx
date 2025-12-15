import { Layout } from "@/components/layout/Layout";
import { CTASection } from "@/components/sections/CTASection";
import { Award, Users, MapPin, Wrench } from "lucide-react";
import installationImg from "@/assets/installation-team.jpg";

const stats = [
  { icon: Award, value: "15+", label: "Lat doświadczenia" },
  { icon: Users, value: "500+", label: "Zadowolonych klientów" },
  { icon: MapPin, value: "50 km", label: "Promień działania" },
  { icon: Wrench, value: "1000+", label: "Realizacji" },
];

const values = [
  {
    title: "Lokalność",
    description: "Działamy w Białymstoku i okolicach. Znamy region, znamy ludzi, jesteśmy blisko.",
  },
  {
    title: "Jakość",
    description: "Współpracujemy tylko ze sprawdzonymi producentami. Nie sprzedajemy tandety.",
  },
  {
    title: "Terminowość",
    description: "Dotrzymujemy ustalonych terminów. Szanujemy Twój czas i plany.",
  },
  {
    title: "Uczciwość",
    description: "Przejrzyste warunki, jasne ceny, bez ukrytych kosztów.",
  },
];

export default function About() {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 bg-background-section">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">O firmie</p>
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-graphite mb-6">
                Progress Stolarka Budowlana
              </h1>
              <p className="text-graphite-muted text-lg mb-6">
                Od ponad 15 lat dostarczamy i montujemy stolarkę budowlaną najwyższej jakości 
                dla mieszkańców Białegostoku i okolic.
              </p>
              <p className="text-graphite-muted text-lg">
                Zaczęliśmy jako mała firma rodzinna, dziś zatrudniamy kilkunastoosobowy zespół 
                fachowców. Ale jedno się nie zmieniło – indywidualne podejście do każdego klienta.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-primary/10 rounded-lg" />
              <img src={installationImg} alt="Zespół Progress" className="rounded-xl shadow-elevated relative" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-graphite">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <stat.icon className="h-8 w-8 text-primary mx-auto mb-4" />
                <p className="text-4xl font-heading font-bold text-background mb-1">{stat.value}</p>
                <p className="text-background/70 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-background">
        <div className="container">
          <h2 className="text-3xl font-heading font-bold text-graphite mb-12 text-center">
            Nasze wartości
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <h3 className="font-heading font-bold text-xl text-graphite mb-3">{value.title}</h3>
                <p className="text-graphite-muted">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="py-20 bg-background-section">
        <div className="container max-w-3xl">
          <h2 className="text-3xl font-heading font-bold text-graphite mb-8 text-center">
            Jak pracujemy?
          </h2>
          <div className="prose prose-lg text-graphite-muted mx-auto">
            <p>
              Każdy projekt zaczynamy od rozmowy. Chcemy zrozumieć Twoje potrzeby, budżet 
              i oczekiwania. Dopiero potem proponujemy konkretne rozwiązania.
            </p>
            <p>
              Nie naciskamy na najdroższe opcje. Doradzamy uczciwie – czasem tańsze rozwiązanie 
              jest wystarczające, a czasem warto dopłacić za lepszą jakość.
            </p>
            <p>
              Po ustaleniu szczegółów przygotowujemy ofertę z konkretną ceną i terminem realizacji. 
              Bez niespodzianek, bez ukrytych kosztów.
            </p>
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
}
