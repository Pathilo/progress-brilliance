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
import OfferBlinds from "./pages/OfferBlinds";
import OfferRollers from "./pages/OfferRollers";
import Realizations from "./pages/Realizations";
import Installation from "./pages/Installation";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";

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
            <Route path="/oferta/zaluzje" element={<OfferBlinds />} />
            <Route path="/oferta/rolety" element={<OfferRollers />} />
            <Route path="/realizacje" element={<Realizations />} />
            <Route path="/montaz" element={<Installation />} />
            <Route path="/o-nas" element={<About />} />
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
