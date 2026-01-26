import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Anna Kowalska",
    location: "Białystok",
    rating: 5,
    text: "Profesjonalna obsługa od początku do końca. Okna zamontowane terminowo, ekipa zostawiła po sobie porządek. Polecam!",
    project: "Okna PVC, dom jednorodzinny",
  },
  {
    id: 2,
    name: "Marek Nowak",
    location: "Wasilków",
    rating: 5,
    text: "Już drugi raz korzystam z usług Progress. Tym razem brama garażowa – montaż w jeden dzień, wszystko działa bez zarzutu.",
    project: "Brama segmentowa z automatyką",
  },
  {
    id: 3,
    name: "Katarzyna Wiśniewska",
    location: "Supraśl",
    rating: 5,
    text: "Fachowe doradztwo przy wyborze drzwi zewnętrznych. Pan z pomiarów cierpliwie odpowiadał na wszystkie pytania. Efekt końcowy rewelacyjny.",
    project: "Drzwi aluminiowe",
  },
];

export function TestimonialsSection() {
  const averageRating = testimonials.reduce((acc, t) => acc + t.rating, 0) / testimonials.length;

  return (
    <section className="py-24 bg-graphite relative overflow-hidden">
      {/* Subtle accent line at top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
      
      <div className="container relative">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">Opinie klientów</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-background mb-4">
            Co mówią o nas klienci
          </h2>
          <div className="flex items-center justify-center gap-2 mt-6">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-primary text-primary" />
              ))}
            </div>
            <span className="font-heading font-bold text-background">{averageRating.toFixed(1)}</span>
            <span className="text-background/60">/ 5.0</span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-graphite-light/20 backdrop-blur-sm rounded-xl p-8 border border-background/10 relative hover:border-primary/30 transition-colors"
            >
              {/* Quote icon */}
              <Quote className="absolute top-6 right-6 h-8 w-8 text-primary/20" />
              
              {/* Rating */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Text */}
              <p className="text-background/80 leading-relaxed mb-6">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="border-t border-background/10 pt-4">
                <p className="font-heading font-semibold text-background">{testimonial.name}</p>
                <p className="text-sm text-background/60">{testimonial.location}</p>
                <p className="text-xs text-primary mt-1">{testimonial.project}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Subtle accent line at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
    </section>
  );
}
