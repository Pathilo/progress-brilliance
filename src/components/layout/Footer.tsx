import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin } from "lucide-react";
import logo from "@/assets/logo-progress.png";

const offerLinks = [
  { name: "Okna", href: "/oferta/okna" },
  { name: "Drzwi zewnętrzne", href: "/oferta/drzwi" },
  { name: "Bramy garażowe", href: "/oferta/bramy" },
  { name: "Żaluzje fasadowe", href: "/oferta/zaluzje" },
  { name: "Rolety i osłony", href: "/oferta/rolety" },
];

const companyLinks = [
  { name: "O nas", href: "/o-nas" },
  { name: "Realizacje", href: "/realizacje" },
  { name: "Montaż", href: "/montaz" },
  { name: "Kontakt", href: "/kontakt" },
  { name: "Polityka prywatności", href: "/polityka-prywatnosci" },
];

export function Footer() {
  return (
    <footer className="bg-graphite text-background">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Info */}
          <div className="space-y-6">
            <img src={logo} alt="Progress Stolarka Budowlana" className="h-10 w-auto brightness-0 invert" />
            <p className="text-background/70 text-sm leading-relaxed">
              Kompleksowa obsługa w zakresie stolarki budowlanej. Doradztwo, pomiar, dostawa i profesjonalny montaż.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-background/60 hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-background/60 hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-background/60 hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Offer */}
          <div>
            <h3 className="font-heading font-bold text-background mb-6">Oferta</h3>
            <ul className="space-y-3">
              {offerLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-background/70 hover:text-primary text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-heading font-bold text-background mb-6">Firma</h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-background/70 hover:text-primary text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-bold text-background mb-6">Kontakt</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-background/70 text-sm">
                  ul. Przykładowa 123<br />
                  15-001 Białystok
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <a href="tel:+48123456789" className="text-background/70 hover:text-primary text-sm transition-colors">
                  +48 123 456 789
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <a href="mailto:biuro@progress-okna.pl" className="text-background/70 hover:text-primary text-sm transition-colors">
                  biuro@progress-okna.pl
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-background/70 text-sm">
                  Pon - Pt: 8:00 - 17:00<br />
                  Sob: 9:00 - 13:00
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Bottom bar */}
      <div className="border-t border-background/10">
        <div className="container py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/50 text-sm">
            © {new Date().getFullYear()} Progress Stolarka Budowlana. Wszelkie prawa zastrzeżone.
          </p>
          <p className="text-background/50 text-sm">
            NIP: 123-456-78-90 | REGON: 123456789
          </p>
        </div>
      </div>
    </footer>
  );
}
