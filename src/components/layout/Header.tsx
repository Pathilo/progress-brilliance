import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-progress.png";

const offerSubpages = [
  { name: "Okna", href: "/oferta/okna" },
  { name: "Drzwi", href: "/oferta/drzwi" },
  { name: "Bramy garażowe", href: "/oferta/bramy" },
  { name: "Fasady", href: "/oferta/fasady" },
  { name: "Przesłony okienne", href: "/oferta/przeslony" },
];

const investmentsSubpages = [
  { name: "Inwestycje budowlane", href: "/inwestycje" },
  { name: "Ślusarka aluminiowa", href: "/inwestycje/slusarka-aluminiowa" },
  { name: "Wyroby przeciwpożarowe", href: "/inwestycje/przeciwpozarowe" },
];

const navigation = [
  { name: "O nas", href: "/o-nas" },
  { name: "Montaż", href: "/montaz" },
  { name: "Realizacje", href: "/realizacje" },
  { name: "Kontakt", href: "/kontakt" },
  { name: "Do pobrania", href: "/do-pobrania" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [offerDropdownOpen, setOfferDropdownOpen] = useState(false);
  const [investmentsDropdownOpen, setInvestmentsDropdownOpen] = useState(false);
  const location = useLocation();

  const isActive = (href: string) => location.pathname === href;
  const isOfferActive = location.pathname.startsWith("/oferta");
  const isInvestmentsActive = location.pathname.startsWith("/inwestycje");

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="container flex items-center justify-between h-20">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <img src={logo} alt="Progress Stolarka Budowlana" className="h-10 md:h-12 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {/* O nas */}
          <Link
            to="/o-nas"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              isActive("/o-nas") ? 'text-primary' : 'text-graphite'
            }`}
          >
            O nas
          </Link>

          {/* Offer Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setOfferDropdownOpen(true)}
            onMouseLeave={() => setOfferDropdownOpen(false)}
          >
            <button 
              className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary ${isOfferActive ? 'text-primary' : 'text-graphite'}`}
            >
              Oferta
              <ChevronDown className={`h-4 w-4 transition-transform ${offerDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {offerDropdownOpen && (
              <div className="absolute top-full left-0 pt-2">
                <div className="bg-background rounded-lg shadow-elevated border border-border py-2 min-w-[200px]">
                  {offerSubpages.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`block px-4 py-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground ${
                        isActive(item.href) ? 'text-primary bg-accent' : 'text-graphite'
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Montaż */}
          <Link
            to="/montaz"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              isActive("/montaz") ? 'text-primary' : 'text-graphite'
            }`}
          >
            Montaż
          </Link>

          {/* Realizacje */}
          <Link
            to="/realizacje"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              isActive("/realizacje") ? 'text-primary' : 'text-graphite'
            }`}
          >
            Realizacje
          </Link>

          {/* Investments Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setInvestmentsDropdownOpen(true)}
            onMouseLeave={() => setInvestmentsDropdownOpen(false)}
          >
            <button 
              className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary ${isInvestmentsActive ? 'text-primary' : 'text-graphite'}`}
            >
              Inwestycje
              <ChevronDown className={`h-4 w-4 transition-transform ${investmentsDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {investmentsDropdownOpen && (
              <div className="absolute top-full left-0 pt-2">
                <div className="bg-background rounded-lg shadow-elevated border border-border py-2 min-w-[220px]">
                  {investmentsSubpages.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`block px-4 py-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground ${
                        isActive(item.href) ? 'text-primary bg-accent' : 'text-graphite'
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Kontakt */}
          <Link
            to="/kontakt"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              isActive("/kontakt") ? 'text-primary' : 'text-graphite'
            }`}
          >
            Kontakt
          </Link>

          {/* Do pobrania */}
          <Link
            to="/do-pobrania"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              isActive("/do-pobrania") ? 'text-primary' : 'text-graphite'
            }`}
          >
            Do pobrania
          </Link>
        </div>

        {/* Right side - Phone + CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a 
            href="tel:+48123456789" 
            className="flex items-center gap-2 text-sm font-medium text-graphite hover:text-primary transition-colors"
          >
            <Phone className="h-4 w-4" />
            <span>+48 123 456 789</span>
          </a>
          <Button variant="cta" asChild>
            <Link to="/kontakt">Bezpłatna wycena</Link>
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="lg:hidden p-2 text-graphite"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-background border-b border-border">
          <div className="container py-4 space-y-4">
            <Link
              to="/o-nas"
              className="block py-2 text-sm font-medium text-graphite hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              O nas
            </Link>
            
            <div className="space-y-2">
              <p className="text-xs font-semibold text-graphite-muted uppercase tracking-wider">Oferta</p>
              {offerSubpages.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block py-2 text-sm text-graphite hover:text-primary pl-3"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            
            <Link
              to="/montaz"
              className="block py-2 text-sm font-medium text-graphite hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Montaż
            </Link>
            
            <Link
              to="/realizacje"
              className="block py-2 text-sm font-medium text-graphite hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Realizacje
            </Link>
            
            <div className="space-y-2">
              <p className="text-xs font-semibold text-graphite-muted uppercase tracking-wider">Inwestycje</p>
              {investmentsSubpages.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block py-2 text-sm text-graphite hover:text-primary pl-3"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            
            <Link
              to="/kontakt"
              className="block py-2 text-sm font-medium text-graphite hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Kontakt
            </Link>
            
            <Link
              to="/do-pobrania"
              className="block py-2 text-sm font-medium text-graphite hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Do pobrania
            </Link>
            
            <div className="section-divider" />
            <div className="flex flex-col gap-3 pt-2">
              <a 
                href="tel:+48123456789" 
                className="flex items-center gap-2 text-sm font-medium text-graphite"
              >
                <Phone className="h-4 w-4" />
                <span>+48 123 456 789</span>
              </a>
              <Button variant="cta" className="w-full" asChild>
                <Link to="/kontakt" onClick={() => setMobileMenuOpen(false)}>
                  Bezpłatna wycena
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
