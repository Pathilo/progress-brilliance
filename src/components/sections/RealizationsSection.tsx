import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import windowsImg from "@/assets/product-windows.jpg";
import doorsImg from "@/assets/product-doors.jpg";
import garageImg from "@/assets/product-garage.jpg";
import blindsImg from "@/assets/product-blinds.jpg";
import rollersImg from "@/assets/product-rollers.jpg";
import heroImg from "@/assets/hero-main.jpg";

const categories = ["Wszystkie", "Okna", "Drzwi", "Bramy", "Żaluzje"];

const realizations = [
  { id: 1, title: "Dom jednorodzinny, Białystok", category: "Okna", image: windowsImg },
  { id: 2, title: "Rezydencja, Wasilków", category: "Drzwi", image: doorsImg },
  { id: 3, title: "Garaż dwustanowiskowy", category: "Bramy", image: garageImg },
  { id: 4, title: "Biurowiec, centrum", category: "Żaluzje", image: blindsImg },
  { id: 5, title: "Dom pasywny, Supraśl", category: "Okna", image: heroImg },
  { id: 6, title: "Willa podmiejska", category: "Okna", image: rollersImg },
];

export function RealizationsSection() {
  const [activeCategory, setActiveCategory] = useState("Wszystkie");

  const filteredRealizations = activeCategory === "Wszystkie" 
    ? realizations 
    : realizations.filter(r => r.category === activeCategory);

  return (
    <section className="py-24 bg-background-section">
      <div className="container">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">Portfolio</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-graphite">
              Nasze realizacje
            </h2>
          </div>
          <Button variant="outline" asChild>
            <Link to="/realizacje">
              Zobacz wszystkie <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Category Filter */}
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
          {filteredRealizations.map((realization) => (
            <Link
              key={realization.id}
              to={`/realizacje/${realization.id}`}
              className="group relative aspect-[4/3] rounded-xl overflow-hidden shadow-card"
            >
              <img 
                src={realization.image} 
                alt={realization.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-graphite/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all">
                <span className="text-xs font-medium text-progress-blue-light uppercase tracking-wider">{realization.category}</span>
                <h3 className="font-heading font-semibold text-background mt-1">{realization.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
