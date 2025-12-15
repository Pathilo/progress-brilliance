import { Layout } from "@/components/layout/Layout";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { CTASection } from "@/components/sections/CTASection";
import { CheckCircle, Award, Clock, ShieldCheck } from "lucide-react";
import installationImg from "@/assets/installation-team.jpg";

const standards = [
  "Montaż zgodny z normą PN-B-10085",
  "Izolacja cieplna węzła okiennego",
  "Uszczelnienie taśmami paroprzepuszczalnymi",
  "Regulacja okuć po montażu",
  "Instruktaż użytkowania",
  "Protokół odbioru prac",
];

const guarantees = [
  { icon: Award, title: "Gwarancja na montaż", value: "3 lata" },
  { icon: ShieldCheck, title: "Gwarancja producenta", value: "do 10 lat" },
  { icon: Clock, title: "Czas reakcji serwisu", value: "48h" },
];

export default function Installation() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-24 bg-graphite overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={installationImg} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="container relative">
          <p className="text-progress-blue-light font-semibold text-sm uppercase tracking-wider mb-3">Usługi</p>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-background mb-6">
            Profesjonalny montaż
          </h1>
          <p className="text-xl text-background/80 max-w-2xl">
            Najlepsze produkty wymagają najlepszego montażu. 
            Doświadczona ekipa, najwyższe standardy, pełna gwarancja.
          </p>
        </div>
      </section>

      {/* Why installation matters */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-heading font-bold text-graphite mb-6">
                Dlaczego montaż ma znaczenie?
              </h2>
              <p className="text-graphite-muted text-lg mb-6">
                Nawet najlepsze okno czy drzwi nie spełni swojej funkcji bez prawidłowego montażu. 
                Nieprawidłowa instalacja to problemy z izolacją, przecieki, mostki termiczne 
                i utrata gwarancji producenta.
              </p>
              <p className="text-graphite-muted text-lg">
                Nasza ekipa posiada certyfikaty producentów i wieloletnie doświadczenie. 
                Każdy montaż kończymy protokołem odbioru i instruktażem dla klienta.
              </p>
            </div>
            <div className="relative">
              <img src={installationImg} alt="Ekipa montażowa" className="rounded-xl shadow-elevated" />
            </div>
          </div>
        </div>
      </section>

      <ProcessSection />

      {/* Standards */}
      <section className="py-20 bg-background-section">
        <div className="container">
          <h2 className="text-3xl font-heading font-bold text-graphite mb-12 text-center">
            Standardy montażu
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {standards.map((standard) => (
              <div key={standard} className="flex items-center gap-3 bg-background rounded-lg p-4 shadow-card border border-border">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                <span className="text-graphite-light">{standard}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantees */}
      <section className="py-20 bg-background">
        <div className="container">
          <h2 className="text-3xl font-heading font-bold text-graphite mb-12 text-center">
            Gwarancja i serwis
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {guarantees.map((item) => (
              <div key={item.title} className="text-center">
                <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-8 w-8 text-primary" />
                </div>
                <p className="text-3xl font-heading font-bold text-primary mb-2">{item.value}</p>
                <p className="text-graphite-muted">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
}
