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
    <section className="py-24 bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">Opinie klientów</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-graphite mb-4">
            Co mówią o nas klienci
          </h2>
          <div className="flex items-center justify-center gap-2 mt-6">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-primary text-primary" />
              ))}
            </div>
            <span className="font-heading font-bold text-graphite">{averageRating.toFixed(1)}</span>
            <span className="text-graphite-muted">/ 5.0</span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-card rounded-xl p-8 shadow-card border border-border relative"
            >
              {/* Quote icon */}
              <Quote className="absolute top-6 right-6 h-8 w-8 text-primary/10" />
              
              {/* Rating */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Text */}
              <p className="text-graphite-light leading-relaxed mb-6">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="border-t border-border pt-4">
                <p className="font-heading font-semibold text-graphite">{testimonial.name}</p>
                <p className="text-sm text-graphite-muted">{testimonial.location}</p>
                <p className="text-xs text-primary mt-1">{testimonial.project}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
