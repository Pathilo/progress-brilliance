import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import OfferWindows from "./pages/OfferWindows";
import OfferDoors from "./pages/OfferDoors";
import OfferGarage from "./pages/OfferGarage";
import OfferFacades from "./pages/OfferFacades";
import OfferShutters from "./pages/OfferShutters";
import Realizations from "./pages/Realizations";
import Installation from "./pages/Installation";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Investments from "./pages/Investments";
import InvestmentsAluminum from "./pages/InvestmentsAluminum";
import InvestmentsFiresafe from "./pages/InvestmentsFiresafe";
import Downloads from "./pages/Downloads";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    document.title = "Progress Brilliance";
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter basename={import.meta.env.BASE_URL}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/oferta/okna" element={<OfferWindows />} />
            <Route path="/oferta/drzwi" element={<OfferDoors />} />
            <Route path="/oferta/bramy" element={<OfferGarage />} />
            <Route path="/oferta/fasady" element={<OfferFacades />} />
            <Route path="/oferta/przeslony" element={<OfferShutters />} />
            <Route path="/realizacje" element={<Realizations />} />
            <Route path="/montaz" element={<Installation />} />
            <Route path="/o-nas" element={<About />} />
            <Route path="/kontakt" element={<Contact />} />
            <Route path="/polityka-prywatnosci" element={<PrivacyPolicy />} />
            <Route path="/inwestycje" element={<Investments />} />
            <Route path="/inwestycje/slusarka-aluminiowa" element={<InvestmentsAluminum />} />
            <Route path="/inwestycje/przeciwpozarowe" element={<InvestmentsFiresafe />} />
            <Route path="/do-pobrania" element={<Downloads />} />
            <Route path="/kontakt" element={<Contact />} />
            <Route path="/polityka-prywatnosci" element={<PrivacyPolicy />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
