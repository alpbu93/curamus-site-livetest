import Layout from '@/components/Layout'

export default function DatenschutzPage() {
  return (
    <Layout
      title="Datenschutz | Curamus"
      description="Datenschutzhinweise der Curamus Facility Services GmbH gemäß DSGVO."
      keywords={[
        'Datenschutz Curamus',
        'DSGVO Facility Management',
        'Datenschutzhinweise Berlin',
      ]}
    >
      <article className="space-y-8 text-sm text-slate-600">
        <header className="space-y-4 text-center sm:text-left">
          <p className="text-sm uppercase tracking-[0.3em] text-primary-700">Rechtliches</p>
          <h1 className="text-3xl font-semibold text-slate-900 sm:text-4xl">Datenschutz</h1>
        </header>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-slate-900">1. Verantwortliche Stelle</h2>
          <p>Curamus Facility Services GmbH</p>
          <p>Beispielstraße 12, 10115 Berlin</p>
          <p>E-Mail: datenschutz@curamus-facility.de</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-slate-900">
            2. Erhebung und Speicherung personenbezogener Daten
          </h2>
          <p>
            Wir verarbeiten personenbezogene Daten, die Sie uns über das Kontaktformular,
            telefonisch oder per E-Mail zukommen lassen. Hierzu gehören Name, Kontaktdaten,
            Unternehmenszugehörigkeit sowie Inhalte Ihrer Nachricht.
          </p>
          <p>
            Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO zur Bearbeitung
            Ihrer Anfrage und Vorbereitung eines Vertragsverhältnisses.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-slate-900">3. Weitergabe von Daten</h2>
          <p>
            Eine Weitergabe an Dritte erfolgt nur, sofern dies zur Vertragsabwicklung erforderlich
            ist oder eine gesetzliche Verpflichtung besteht.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-slate-900">4. Speicherdauer</h2>
          <p>
            Personenbezogene Daten, die Sie uns senden, speichern wir bis zur vollständigen
            Bearbeitung Ihrer Anfrage sowie darüber hinaus entsprechend gesetzlicher
            Aufbewahrungsfristen.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-slate-900">5. Ihre Rechte</h2>
          <p>
            Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der
            Verarbeitung, Datenübertragbarkeit sowie Widerspruch. Zudem besteht ein Beschwerderecht
            bei der zuständigen Aufsichtsbehörde.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-slate-900">6. Kontaktformular</h2>
          <p>
            Über unser Kontaktformular erhobene Daten werden verschlüsselt übertragen und nur für
            den Zweck der Kontaktaufnahme gespeichert. Die Daten werden nach Abschluss der Anfrage
            gelöscht, sofern keine gesetzlichen Aufbewahrungspflichten bestehen.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-slate-900">7. Änderungen</h2>
          <p>
            Wir behalten uns vor, diese Datenschutzhinweise anzupassen, um sie an geänderte
            Rechtslagen oder bei Änderungen des Dienstes anzupassen.
          </p>
        </section>
      </article>
    </Layout>
  )
}
