import { useState } from "react";
import { CheckCircle, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const benefits = [
  "Bezpłatny pomiar i wycena",
  "Doradztwo w wyborze produktów",
  "Szybki termin realizacji",
  "Profesjonalny montaż z gwarancją",
  "Konkurencyjne ceny",
  "Obsługa posprzedażowa",
];

const interests = [
  { value: "okna", label: "Okna" },
  { value: "drzwi", label: "Drzwi zewnętrzne" },
  { value: "bramy", label: "Bramy garażowe" },
  { value: "zaluzje", label: "Żaluzje fasadowe" },
  { value: "rolety", label: "Rolety i osłony" },
  { value: "montaz", label: "Tylko montaż" },
  { value: "inne", label: "Inne" },
];

export function CTASection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Dziękujemy za wiadomość!",
      description: "Odezwiemy się do Ciebie w ciągu 24 godzin.",
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section className="py-24 bg-background-section">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Form */}
          <div className="bg-background rounded-2xl p-8 md:p-10 shadow-elevated border border-border">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-graphite mb-2">
              Bezpłatna wycena
            </h2>
            <p className="text-graphite-muted mb-8">
              Zostaw dane – oddzwonimy w ciągu 24 godzin.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-graphite mb-2">
                    Imię i nazwisko
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Jan Kowalski"
                    required
                    className="bg-background"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-graphite mb-2">
                    Telefon
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+48 123 456 789"
                    required
                    className="bg-background"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="interest" className="block text-sm font-medium text-graphite mb-2">
                  Interesuje mnie
                </label>
                <Select name="interest" required>
                  <SelectTrigger className="bg-background">
                    <SelectValue placeholder="Wybierz kategorię" />
                  </SelectTrigger>
                  <SelectContent>
                    {interests.map((interest) => (
                      <SelectItem key={interest.value} value={interest.value}>
                        {interest.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-graphite mb-2">
                  Wiadomość (opcjonalnie)
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Opisz krótko swoje potrzeby..."
                  rows={4}
                  className="bg-background resize-none"
                />
              </div>

              <Button type="submit" variant="cta" size="lg" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  "Wysyłanie..."
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Wyślij zapytanie
                  </>
                )}
              </Button>

              <p className="text-xs text-graphite-muted text-center">
                Wysyłając formularz, akceptujesz naszą{" "}
                <a href="/polityka-prywatnosci" className="text-primary hover:underline">
                  politykę prywatności
                </a>
                .
              </p>
            </form>
          </div>

          {/* Benefits */}
          <div className="lg:pt-10">
            <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">
              Dlaczego warto?
            </p>
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-graphite mb-8">
              Skorzystaj z bezpłatnej konsultacji
            </h3>

            <ul className="space-y-4 mb-10">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                  <span className="text-graphite-light">{benefit}</span>
                </li>
              ))}
            </ul>

            {/* Alternative CTA */}
            <div className="bg-background rounded-xl p-6 border border-border">
              <p className="text-graphite-muted text-sm mb-4">
                Wolisz porozmawiać? Zadzwoń do nas:
              </p>
              <a 
                href="tel:+48123456789" 
                className="flex items-center gap-3 text-xl font-heading font-bold text-graphite hover:text-primary transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                  <Phone className="h-5 w-5 text-primary-foreground" />
                </div>
                +48 123 456 789
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
