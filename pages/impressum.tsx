import Layout from '@/components/Layout'

export default function ImpressumPage() {
  return (
    <Layout
      title="Impressum | Curamus"
      description="Impressum der Curamus Facility Services GmbH."
      keywords={[
        'Impressum Curamus',
        'Curamus Facility Services GmbH',
        'Rechtliche Angaben Facility Management',
      ]}
    >
      <article className="space-y-10 text-sm text-slate-600">
        <header className="space-y-4 text-center sm:text-left">
          <p className="text-sm uppercase tracking-[0.3em] text-primary-700">Rechtliches</p>
          <h1 className="text-3xl font-semibold text-slate-900 sm:text-4xl">Impressum</h1>
          <p className="text-slate-500">Stand: 27. September 2025</p>
        </header>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-slate-900">CURAMUS Facility Services GmbH</h2>
          <p>Angaben gemäß § 5 DDG (ehemals TMG)</p>
        </section>

        <section className="space-y-2">
          <h3 className="text-base font-semibold text-slate-900">Geschäftsanschrift</h3>
          <address className="not-italic">
            <p>CURAMUS Facility Services GmbH</p>
            <p>Saalower Straße 6a</p>
            <p>15806 Zossen</p>
          </address>
        </section>

        <section className="space-y-2">
          <h3 className="text-base font-semibold text-slate-900">Vertreten durch</h3>
          <p>Marco Suckel (Geschäftsführer), einzelvertretungsberechtigt</p>
        </section>

        <section className="space-y-2">
          <h3 className="text-base font-semibold text-slate-900">Kontakt</h3>
          <p>
            Telefon:{' '}
            <a className="text-primary-700 hover:underline" href="tel:+4933772040071">
              +49 (0)3377 2040071
            </a>
          </p>
          <p>
            E-Mail:{' '}
            <a className="text-primary-700 hover:underline" href="mailto:info@curamus-facility.de">
              info@curamus-facility.de
            </a>
          </p>
        </section>

        <section className="space-y-2">
          <h3 className="text-base font-semibold text-slate-900">Registereintrag</h3>
          <p>Eintragung im Handelsregister</p>
          <p>Registergericht: Amtsgericht Potsdam</p>
          <p>Registernummer: HRB 40967 P</p>
        </section>

        <section className="space-y-2">
          <h3 className="text-base font-semibold text-slate-900">Umsatzsteuer-ID</h3>
          <p>
            Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:{' '}
            <span className="italic">
              Wird nach Beantragung beim Bundeszentralamt für Steuern ergänzt.
            </span>
          </p>
        </section>

        <section className="space-y-2">
          <h3 className="text-base font-semibold text-slate-900">Berufsrechtliche Regelungen</h3>
          <p>
            Als Facility-Service-Dienstleister unterliegt das Unternehmen den allgemeinen
            gewerberechtlichen Bestimmungen der Bundesrepublik Deutschland.
          </p>
        </section>

        <section className="space-y-3">
          <h3 className="text-base font-semibold text-slate-900">Haftung für Inhalte</h3>
          <p>
            Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen Seiten
            nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir als
            Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
            Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
            Tätigkeit hinweisen.
          </p>
          <p>
            Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den
            allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch
            erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei
            Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend
            entfernen.
          </p>
        </section>

        <section className="space-y-3">
          <h3 className="text-base font-semibold text-slate-900">Haftung für Links</h3>
          <p>
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen
            Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
            Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der
            Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf
            mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der
            Verlinkung nicht erkennbar.
          </p>
          <p>
            Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete
            Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen
            werden wir derartige Links umgehend entfernen.
          </p>
        </section>

        <section className="space-y-3">
          <h3 className="text-base font-semibold text-slate-900">Urheberrecht</h3>
          <p>
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen
            dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
            Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung
            des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den
            privaten, nicht kommerziellen Gebrauch gestattet.
          </p>
          <p>
            Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die
            Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche
            gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden,
            bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden
            wir derartige Inhalte umgehend entfernen.
          </p>
        </section>

        <section className="space-y-3">
          <h3 className="text-base font-semibold text-slate-900">Hinweis zur Streitbeilegung</h3>
          <p>Wir sind nicht verpflichtet und nicht bereit, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
          <p>
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
            <a
              className="text-primary-700 hover:underline"
              href="https://ec.europa.eu/consumers/odr/"
              target="_blank"
              rel="noreferrer"
            >
              https://ec.europa.eu/consumers/odr/
            </a>
            . Unsere E-Mail-Adresse finden Sie oben im Impressum.
          </p>
        </section>
      </article>
    </Layout>
  )
}
