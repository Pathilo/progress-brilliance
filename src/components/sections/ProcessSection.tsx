import { Ruler, FileText, Truck, Wrench } from "lucide-react";

const steps = [
  {
    icon: Ruler,
    number: "1",
    title: "Pomiar",
    description: "Dokładny pomiar oraz wycena pozwoli przybliżyć całkowity koszt realizacji. Bezpłatnie u Ciebie na miejscu.",
  },
  {
    icon: FileText,
    number: "2",
    title: "Umowa",
    description: "Oferujemy produkty najwyższej jakości czołowych producentów w branży. Przejrzyste warunki współpracy.",
  },
  {
    icon: Truck,
    number: "3",
    title: "Transport",
    description: "Do każdego zakupu oferujemy transport w cenie – prosto na miejsce budowy w umówionym terminie.",
  },
  {
    icon: Wrench,
    number: "4",
    title: "Montaż",
    description: "Dzięki współpracy z najlepszymi wykonawcami w regionie świadczymy także usługi montażowe z gwarancją.",
  },
];

export function ProcessSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">Jak działamy</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-graphite mb-4">
            Nasz kompletny proces
          </h2>
          <p className="text-graphite-muted text-lg">
            Od pierwszego kontaktu do gotowej realizacji – prowadzimy Cię przez każdy etap.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={step.title}
              className="relative bg-card rounded-2xl p-8 shadow-card hover:shadow-lg transition-shadow border border-border"
            >
              {/* Step number */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">{step.number}</span>
              </div>
              
              {/* Icon */}
              <div className="w-16 h-16 rounded-xl bg-accent flex items-center justify-center mb-6">
                <step.icon className="h-8 w-8 text-primary" />
              </div>

              {/* Content */}
              <h3 className="font-heading font-bold text-xl text-graphite mb-3">{step.title}</h3>
              <p className="text-graphite-muted text-sm leading-relaxed">{step.description}</p>

              {/* Connector line (except last) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 border-t-2 border-dashed border-border" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
