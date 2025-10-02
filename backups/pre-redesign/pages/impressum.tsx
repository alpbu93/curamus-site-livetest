import Layout from '@/components/Layout'

export default function ImpressumPage() {
  return (
    <Layout
      title="Impressum | CURAMUS"
      description="Impressum der CURAMUS facility services GmbH."
      keywords={[
        'Impressum CURAMUS',
        'CURAMUS facility services GmbH',
        'Rechtliche Angaben Facility Management',
      ]}
    >
      <article className="space-y-8 text-sm text-slate-600">
        <header className="space-y-4 text-center sm:text-left">
          <p className="text-sm uppercase tracking-[0.3em] text-primary-700">Rechtliches</p>
          <h1 className="text-3xl font-semibold text-slate-900 sm:text-4xl">Impressum</h1>
        </header>

        <section className="space-y-2">
          <h2 className="text-lg font-semibold text-slate-900">Angaben gemäß § 5 TMG</h2>
          <p>CURAMUS facility services GmbH</p>
          <p>Beispielstraße 12</p>
          <p>10115 Berlin</p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-semibold text-slate-900">Vertreten durch</h2>
          <p>Max Mustermann</p>
          <p>Lea Beispiel</p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-semibold text-slate-900">Kontakt</h2>
          <p>Telefon: +49 (0)30 123 456 789</p>
          <p>E-Mail: info@curamus-facility.de</p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-semibold text-slate-900">Registereintrag</h2>
          <p>Eintragung im Handelsregister.</p>
          <p>Registergericht: Amtsgericht Berlin Charlottenburg</p>
          <p>Registernummer: HRB 123456 B</p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-semibold text-slate-900">Umsatzsteuer-ID</h2>
          <p>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz: DE123456789</p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-semibold text-slate-900">Haftungshinweis</h2>
          <p>
            Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte
            externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber
            verantwortlich.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-semibold text-slate-900">Online-Streitbeilegung</h2>
          <p>
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
            https://ec.europa.eu/consumers/odr/. Unsere E-Mail-Adresse finden Sie oben im Impressum.
          </p>
        </section>
      </article>
    </Layout>
  )
}
