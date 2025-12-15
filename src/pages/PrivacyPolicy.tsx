import { Layout } from "@/components/layout/Layout";

export default function PrivacyPolicy() {
  return (
    <Layout>
      <section className="py-24 bg-background">
        <div className="container max-w-3xl">
          <h1 className="text-4xl font-heading font-bold text-graphite mb-8">
            Polityka prywatności
          </h1>
          
          <div className="prose prose-lg text-graphite-muted">
            <h2 className="text-2xl font-heading font-bold text-graphite mt-8 mb-4">
              1. Administrator danych
            </h2>
            <p>
              Administratorem Twoich danych osobowych jest Progress Stolarka Budowlana 
              z siedzibą w Białymstoku, ul. Przykładowa 123, 15-001 Białystok.
            </p>

            <h2 className="text-2xl font-heading font-bold text-graphite mt-8 mb-4">
              2. Cel przetwarzania danych
            </h2>
            <p>
              Twoje dane osobowe przetwarzamy w celu:
            </p>
            <ul>
              <li>Realizacji zamówień i umów</li>
              <li>Kontaktu w sprawach handlowych</li>
              <li>Przesyłania ofert i informacji marketingowych (za zgodą)</li>
              <li>Wystawiania faktur i dokumentów księgowych</li>
            </ul>

            <h2 className="text-2xl font-heading font-bold text-graphite mt-8 mb-4">
              3. Podstawa prawna
            </h2>
            <p>
              Przetwarzamy dane na podstawie:
            </p>
            <ul>
              <li>Zgody (art. 6 ust. 1 lit. a RODO)</li>
              <li>Wykonania umowy (art. 6 ust. 1 lit. b RODO)</li>
              <li>Prawnie uzasadnionego interesu (art. 6 ust. 1 lit. f RODO)</li>
            </ul>

            <h2 className="text-2xl font-heading font-bold text-graphite mt-8 mb-4">
              4. Twoje prawa
            </h2>
            <p>
              Masz prawo do:
            </p>
            <ul>
              <li>Dostępu do swoich danych</li>
              <li>Sprostowania danych</li>
              <li>Usunięcia danych</li>
              <li>Ograniczenia przetwarzania</li>
              <li>Przenoszenia danych</li>
              <li>Wniesienia sprzeciwu</li>
            </ul>

            <h2 className="text-2xl font-heading font-bold text-graphite mt-8 mb-4">
              5. Kontakt
            </h2>
            <p>
              W sprawach związanych z ochroną danych osobowych możesz skontaktować się 
              z nami mailowo: biuro@progress-okna.pl lub telefonicznie: +48 123 456 789.
            </p>

            <h2 className="text-2xl font-heading font-bold text-graphite mt-8 mb-4">
              6. Pliki cookies
            </h2>
            <p>
              Nasza strona wykorzystuje pliki cookies w celu prawidłowego działania serwisu 
              oraz analizy ruchu. Możesz zarządzać ustawieniami cookies w swojej przeglądarce.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
