import { CheckCircle, Award, Clock, Users, ShieldCheck, Wrench } from "lucide-react";
import installationImg from "@/assets/installation-team.jpg";

const benefits = [
  {
    icon: Award,
    title: "15 lat doświadczenia",
    description: "Setki zrealizowanych projektów w Białymstoku i okolicach.",
  },
  {
    icon: ShieldCheck,
    title: "Gwarancja jakości",
    description: "Produkty od sprawdzonych producentów z wieloletnią gwarancją.",
  },
  {
    icon: Clock,
    title: "Terminowość",
    description: "Dotrzymujemy ustalonych terminów realizacji.",
  },
  {
    icon: Wrench,
    title: "Fachowy montaż",
    description: "Doświadczona ekipa z odpowiednimi uprawnieniami.",
  },
  {
    icon: Users,
    title: "Indywidualne podejście",
    description: "Doradzamy i dobieramy rozwiązania do potrzeb klienta.",
  },
  {
    icon: CheckCircle,
    title: "Kompleksowa obsługa",
    description: "Od pomiaru przez dostawę po montaż i serwis.",
  },
];

export function WhyUsSection() {
  return (
    <section className="py-24 bg-background-section relative overflow-hidden">
      {/* Subtle pattern */}
      <div className="absolute inset-0 pattern-dots opacity-50" />
      
      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <div>
            <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">Dlaczego Progress?</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-graphite mb-6">
              Zaufanie budowane przez lata
            </h2>
            <p className="text-graphite-muted text-lg mb-10 max-w-lg">
              Działamy lokalnie, znamy specyfikę regionu i potrzeby naszych klientów. 
              Każda realizacja to dla nas sprawa honoru.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent flex items-center justify-center">
                    <benefit.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-graphite mb-1">{benefit.title}</h3>
                    <p className="text-graphite-muted text-sm">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Image with frame */}
          <div className="relative">
            {/* Offset decorative element */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 rounded-lg" />
            <div className="absolute -bottom-6 -right-6 w-48 h-48 border-2 border-primary/20 rounded-lg" />
            
            {/* Main image */}
            <div className="relative rounded-xl overflow-hidden shadow-elevated">
              <img 
                src={installationImg} 
                alt="Ekipa montażowa Progress"
                className="w-full h-auto"
              />
            </div>

            {/* Stats overlay */}
            <div className="absolute -bottom-8 -left-8 bg-background rounded-xl shadow-elevated p-6 border border-border">
              <div className="flex items-center gap-6">
                <div className="text-center">
                  <p className="text-3xl font-heading font-bold text-primary">500+</p>
                  <p className="text-xs text-graphite-muted">Realizacji</p>
                </div>
                <div className="w-px h-12 bg-border" />
                <div className="text-center">
                  <p className="text-3xl font-heading font-bold text-primary">15</p>
                  <p className="text-xs text-graphite-muted">Lat na rynku</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
