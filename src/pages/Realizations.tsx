import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import windowsImg from "@/assets/product-windows.jpg";
import doorsImg from "@/assets/product-doors.jpg";
import garageImg from "@/assets/product-garage.jpg";
import blindsImg from "@/assets/product-blinds.jpg";
import rollersImg from "@/assets/product-rollers.jpg";
import heroImg from "@/assets/hero-main.jpg";

const categories = ["Wszystkie", "Okna", "Drzwi", "Bramy", "Żaluzje", "Rolety"];

const realizations = [
  { id: 1, title: "Dom jednorodzinny, ul. Lipowa", location: "Białystok", category: "Okna", image: windowsImg, year: "2024" },
  { id: 2, title: "Rezydencja z drzwiami aluminiowymi", location: "Wasilków", category: "Drzwi", image: doorsImg, year: "2024" },
  { id: 3, title: "Garaż dwustanowiskowy", location: "Supraśl", category: "Bramy", image: garageImg, year: "2023" },
  { id: 4, title: "Biurowiec - żaluzje fasadowe", location: "Białystok Centrum", category: "Żaluzje", image: blindsImg, year: "2023" },
  { id: 5, title: "Dom pasywny - okna trzyszybowe", location: "Supraśl", category: "Okna", image: heroImg, year: "2024" },
  { id: 6, title: "Willa z roletami zewnętrznymi", location: "Choroszcz", category: "Rolety", image: rollersImg, year: "2023" },
  { id: 7, title: "Kompleksowa wymiana stolarki", location: "Białystok", category: "Okna", image: windowsImg, year: "2024" },
  { id: 8, title: "Drzwi wejściowe RC3", location: "Łapy", category: "Drzwi", image: doorsImg, year: "2024" },
  { id: 9, title: "Brama segmentowa z automatyką", location: "Turośń Kościelna", category: "Bramy", image: garageImg, year: "2023" },
];

export default function Realizations() {
  const [activeCategory, setActiveCategory] = useState("Wszystkie");

  const filtered = activeCategory === "Wszystkie" 
    ? realizations 
    : realizations.filter(r => r.category === activeCategory);

  return (
    <Layout>
      <section className="py-24 bg-background-section">
        <div className="container">
          <div className="max-w-2xl mb-12">
            <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">Portfolio</p>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-graphite mb-4">
              Nasze realizacje
            </h1>
            <p className="text-graphite-muted text-lg">
              Setki zrealizowanych projektów w Białymstoku i okolicach. 
              Zobacz, jak zmieniamy domy naszych klientów.
            </p>
          </div>

          {/* Filter */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-background text-graphite-muted hover:bg-accent hover:text-accent-foreground border border-border'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((item) => (
              <div key={item.id} className="group relative aspect-[4/3] rounded-xl overflow-hidden shadow-card bg-card">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-graphite/80 via-graphite/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="text-xs font-medium text-progress-blue-light uppercase tracking-wider">
                    {item.category} • {item.year}
                  </span>
                  <h3 className="font-heading font-semibold text-background mt-1">{item.title}</h3>
                  <p className="text-background/70 text-sm">{item.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
