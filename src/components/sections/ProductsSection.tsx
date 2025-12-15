import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import windowsImg from "@/assets/product-windows.jpg";
import doorsImg from "@/assets/product-doors.jpg";
import garageImg from "@/assets/product-garage.jpg";
import blindsImg from "@/assets/product-blinds.jpg";
import rollersImg from "@/assets/product-rollers.jpg";
import installationImg from "@/assets/installation-team.jpg";

const products = [
  {
    title: "Okna",
    description: "PVC, aluminium, drewno. Energooszczędne rozwiązania dla Twojego domu.",
    image: windowsImg,
    href: "/oferta/okna",
    size: "large",
  },
  {
    title: "Drzwi zewnętrzne",
    description: "Bezpieczeństwo i estetyka. Drzwi aluminiowe i stalowe.",
    image: doorsImg,
    href: "/oferta/drzwi",
    size: "medium",
  },
  {
    title: "Bramy garażowe",
    description: "Segmentowe, rozwierne, z automatyką. Dopasowane do każdego garażu.",
    image: garageImg,
    href: "/oferta/bramy",
    size: "medium",
  },
  {
    title: "Żaluzje fasadowe",
    description: "Kontrola światła i temperatura. Nowoczesna ochrona przed słońcem.",
    image: blindsImg,
    href: "/oferta/zaluzje",
    size: "small",
  },
  {
    title: "Rolety i osłony",
    description: "Zewnętrzne i wewnętrzne. Prywatność i izolacja termiczna.",
    image: rollersImg,
    href: "/oferta/rolety",
    size: "small",
  },
  {
    title: "Montaż",
    description: "Profesjonalna ekipa. Terminowość i najwyższe standardy wykonania.",
    image: installationImg,
    href: "/montaz",
    size: "small",
  },
];

export function ProductsSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">Nasza oferta</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-graphite mb-4">
            Kompleksowe rozwiązania dla Twojego domu
          </h2>
          <p className="text-graphite-muted text-lg">
            Od projektu po montaż – wszystko w jednym miejscu. Sprawdź, co możemy dla Ciebie zrobić.
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <Link
              key={product.title}
              to={product.href}
              className={`group relative overflow-hidden rounded-xl bg-card shadow-card card-hover ${
                index === 0 ? 'md:col-span-2 lg:col-span-2 lg:row-span-2' : ''
              }`}
            >
              <div className={`relative ${index === 0 ? 'aspect-[16/10]' : 'aspect-[4/3]'}`}>
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-graphite/80 via-graphite/20 to-transparent" />
                
                {/* Content overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className={`font-heading font-bold text-background mb-2 ${index === 0 ? 'text-2xl md:text-3xl' : 'text-xl'}`}>
                    {product.title}
                  </h3>
                  <p className={`text-background/80 mb-4 ${index === 0 ? 'text-base max-w-md' : 'text-sm'}`}>
                    {product.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-progress-blue-light font-medium text-sm group-hover:gap-3 transition-all">
                    Zobacz więcej <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
