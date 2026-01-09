import { Layout } from "@/components/layout/Layout";
import { FileText, Download, Book, FileImage } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/sections/CTASection";

const downloadCategories = [
  {
    title: "Katalogi produktów",
    icon: Book,
    files: [
      { name: "Katalog okien PVC i aluminium 2024", size: "12.5 MB", type: "PDF" },
      { name: "Katalog drzwi zewnętrznych", size: "8.2 MB", type: "PDF" },
      { name: "Katalog bram garażowych", size: "6.8 MB", type: "PDF" },
      { name: "Katalog fasad aluminiowych", size: "9.1 MB", type: "PDF" },
      { name: "Katalog przesłon okiennych", size: "5.4 MB", type: "PDF" },
    ],
  },
  {
    title: "Karty techniczne",
    icon: FileText,
    files: [
      { name: "Parametry termiczne profili okiennych", size: "2.1 MB", type: "PDF" },
      { name: "Specyfikacja bram garażowych", size: "1.8 MB", type: "PDF" },
      { name: "Dane techniczne drzwi przeciwpożarowych", size: "3.2 MB", type: "PDF" },
      { name: "Właściwości fasad strukturalnych", size: "2.6 MB", type: "PDF" },
    ],
  },
  {
    title: "Certyfikaty i atesty",
    icon: FileImage,
    files: [
      { name: "Certyfikat ISO 9001", size: "0.8 MB", type: "PDF" },
      { name: "Atest higieniczny PZH", size: "0.5 MB", type: "PDF" },
      { name: "Certyfikat CE dla stolarki", size: "1.2 MB", type: "PDF" },
      { name: "Atest ITB wyrobów przeciwpożarowych", size: "1.5 MB", type: "PDF" },
    ],
  },
];

export default function Downloads() {
  return (
    <Layout>
      <section className="py-24 bg-graphite">
        <div className="container">
          <p className="text-progress-blue-light font-semibold text-sm uppercase tracking-wider mb-3">Materiały</p>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-background mb-6">
            Do pobrania
          </h1>
          <p className="text-xl text-background/80 max-w-2xl">
            Pobierz katalogi produktów, karty techniczne oraz certyfikaty. 
            Wszystkie materiały dostępne w formacie PDF.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container">
          <div className="space-y-16">
            {downloadCategories.map((category) => (
              <div key={category.title}>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <category.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-heading font-bold text-graphite">{category.title}</h2>
                </div>
                
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {category.files.map((file) => (
                    <div 
                      key={file.name} 
                      className="bg-surface rounded-xl p-6 border border-border hover:border-primary/30 hover:shadow-card transition-all group"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <FileText className="h-8 w-8 text-primary/60 mb-3" />
                          <h3 className="font-medium text-graphite mb-2 group-hover:text-primary transition-colors">
                            {file.name}
                          </h3>
                          <p className="text-sm text-graphite-muted">
                            {file.type} • {file.size}
                          </p>
                        </div>
                      </div>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="w-full mt-4"
                        onClick={() => alert('Funkcja pobierania zostanie dodana po przesłaniu plików.')}
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Pobierz
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info */}
      <section className="py-16 bg-surface">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-heading font-bold text-graphite mb-4">
              Potrzebujesz innych materiałów?
            </h2>
            <p className="text-graphite-light mb-6">
              Jeśli szukasz dokumentacji technicznej dla konkretnego produktu lub projektu, 
              skontaktuj się z nami. Przygotujemy niezbędne materiały.
            </p>
            <Button variant="cta" asChild>
              <a href="/kontakt">Skontaktuj się</a>
            </Button>
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
}
