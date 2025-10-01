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
      <article className="space-y-10 text-sm text-slate-600">
        <header className="space-y-4 text-center sm:text-left">
          <p className="text-sm uppercase tracking-[0.3em] text-primary-700">Rechtliches</p>
          <h1 className="text-3xl font-semibold text-slate-900 sm:text-4xl">Datenschutzerklärung</h1>
          <p className="text-slate-500">Stand: 27. September 2025</p>
        </header>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-slate-900">1. Verantwortliche Stelle</h2>
          <address className="not-italic space-y-1">
            <p>CURAMUS Facility Services GmbH</p>
            <p>Saalower Straße 6a</p>
            <p>15806 Zossen</p>
            <p>Geschäftsführer: Marco Suckel</p>
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
            <p>
              Datenschutz:{' '}
              <a className="text-primary-700 hover:underline" href="mailto:info@curamus-facility.de">
                info@curamus-facility.de
              </a>
            </p>
            <p>Registergericht: Amtsgericht Potsdam – HRB 40967 P</p>
          </address>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-slate-900">2. Datenschutzbeauftragter</h2>
          <p>
            Da unser Unternehmen weniger als 20 Personen beschäftigt und keine besonderen Kategorien
            personenbezogener Daten verarbeitet, ist die Bestellung eines Datenschutzbeauftragten nach
            § 38 BDSG nicht erforderlich. Bei datenschutzrechtlichen Fragen wenden Sie sich bitte über
            die oben genannten Kontaktwege direkt an uns.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-slate-900">3. Grundsätzliches zur Datenverarbeitung</h2>
          <div className="space-y-3">
            <h3 className="text-base font-semibold text-slate-900">3.1 Umfang der Verarbeitung personenbezogener Daten</h3>
            <p>
              Wir erheben und verwenden personenbezogene Daten unserer Nutzer grundsätzlich nur, soweit
              dies zur Bereitstellung einer funktionsfähigen Website sowie unserer Inhalte und Leistungen
              erforderlich ist. Die Erhebung und Verwendung personenbezogener Daten erfolgt regelmäßig
              nur nach Einwilligung der betroffenen Person. Eine Ausnahme gilt in solchen Fällen, in denen
              eine vorherige Einholung einer Einwilligung aus tatsächlichen Gründen nicht möglich ist und
              die Verarbeitung durch gesetzliche Vorschriften gestattet ist.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-base font-semibold text-slate-900">3.2 Rechtsgrundlagen</h3>
            <p>
              Soweit wir für Verarbeitungsvorgänge personenbezogener Daten eine Einwilligung einholen,
              dient Art. 6 Abs. 1 lit. a DSGVO als Rechtsgrundlage. Erfolgt die Verarbeitung zur Erfüllung
              eines Vertrags oder zur Durchführung vorvertraglicher Maßnahmen, stützt sie sich auf Art. 6
              Abs. 1 lit. b DSGVO. Unterliegen wir einer rechtlichen Verpflichtung, ist Art. 6 Abs. 1 lit. c
              DSGVO maßgeblich. In Fällen, in denen die Verarbeitung zur Wahrung eines berechtigten
              Interesses erforderlich ist, erfolgt sie auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
            </p>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-slate-900">4. Website-Besuch und Server-Logfiles</h2>
          <div className="space-y-3">
            <h3 className="text-base font-semibold text-slate-900">4.1 Beschreibung und Umfang der Datenverarbeitung</h3>
            <p>
              Bei jedem Aufruf unserer Website erfasst unser System automatisiert Daten und Informationen
              vom Computersystem des aufrufenden Rechners. Folgende Daten können dabei vorübergehend
              verarbeitet werden:
            </p>
            <ul className="list-disc space-y-1 pl-5">
              <li>Informationen über den Browsertyp und die verwendete Version</li>
              <li>Das Betriebssystem des Nutzers</li>
              <li>Den Internet-Service-Provider des Nutzers</li>
              <li>Die IP-Adresse des Nutzers</li>
              <li>Datum und Uhrzeit des Zugriffs</li>
              <li>Websites, von denen das System des Nutzers auf unsere Internetseite gelangt</li>
              <li>Websites, die vom System des Nutzers über unsere Website aufgerufen werden</li>
            </ul>
            <p>
              Die Daten werden ebenfalls in Server-Logfiles gespeichert. Eine Zusammenführung mit anderen
              personenbezogenen Daten findet nicht statt.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-base font-semibold text-slate-900">4.2 Rechtsgrundlage</h3>
            <p>
              Rechtsgrundlage für die vorübergehende Speicherung der Daten und der Logfiles ist Art. 6 Abs.
              1 lit. f DSGVO. Das berechtigte Interesse liegt in der technisch fehlerfreien Darstellung und
              dem Schutz unserer Systeme.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-base font-semibold text-slate-900">4.3 Zweck der Datenverarbeitung</h3>
            <p>
              Die vorübergehende Speicherung der IP-Adresse ist notwendig, um eine Auslieferung der Website
              zu ermöglichen. Die Logfiles dienen darüber hinaus der Funktionsfähigkeit der Website, der
              Optimierung unseres Angebots sowie der Sicherstellung der Sicherheit unserer
              informationstechnischen Systeme.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-base font-semibold text-slate-900">4.4 Speicherdauer</h3>
            <p>
              Die Daten werden gelöscht, sobald sie für die Erreichung des Zweckes ihrer Erhebung nicht mehr
              erforderlich sind. Im Falle der Erfassung zur Bereitstellung der Website ist dies der Fall,
              wenn die jeweilige Sitzung beendet ist. Server-Logfiles werden spätestens nach sieben Tagen
              gelöscht.
            </p>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-slate-900">5. Kontaktformular und E-Mail-Kontakt</h2>
          <div className="space-y-3">
            <h3 className="text-base font-semibold text-slate-900">5.1 Beschreibung und Umfang der Datenverarbeitung</h3>
            <p>
              Auf unserer Website ist ein Kontaktformular vorhanden, das für die elektronische
              Kontaktaufnahme genutzt werden kann. Nimmt eine Person diese Möglichkeit wahr, so werden die
              in der Eingabemaske eingegeben Daten an uns übermittelt:
            </p>
            <ul className="list-disc space-y-1 pl-5">
              <li>Name</li>
              <li>E-Mail-Adresse</li>
              <li>Nachricht/Anfrage</li>
            </ul>
            <p>
              Im Zeitpunkt der Absendung werden systembedingt technische Metadaten (z.&nbsp;B. IP-Adresse,
              Datum und Uhrzeit) protokolliert. Alternativ ist eine Kontaktaufnahme über die bereitgestellte
              E-Mail-Adresse möglich; in diesem Fall werden die mit der E-Mail übermittelten Daten
              verarbeitet.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-base font-semibold text-slate-900">5.2 Rechtsgrundlagen</h3>
            <p>
              Rechtsgrundlage für die Verarbeitung der per Formular eingegebenen Daten ist Art. 6 Abs. 1
              lit. a DSGVO (Einwilligung). Erfolgt die Kontaktaufnahme zur Anbahnung oder Durchführung eines
              Vertrages, ist ergänzend Art. 6 Abs. 1 lit. b DSGVO maßgeblich. Eingehende E-Mails verarbeiten
              wir auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Beantwortung).
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-base font-semibold text-slate-900">5.3 Zweck der Datenverarbeitung</h3>
            <p>
              Die Verarbeitung der personenbezogenen Daten aus der Eingabemaske dient ausschließlich der
              Bearbeitung der Anfrage. Im Falle einer Kontaktaufnahme per E-Mail liegt hierin auch das
              erforderliche berechtigte Interesse.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-base font-semibold text-slate-900">5.4 Speicherdauer</h3>
            <p>
              Die Daten werden gelöscht, sobald sie für die Erreichung des Zweckes ihrer Erhebung nicht mehr
              erforderlich sind. Für Kontaktanfragen ist dies der Fall, wenn die jeweilige Konversation mit
              der betroffenen Person beendet ist. Gesetzliche Aufbewahrungsfristen bleiben unberührt.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-base font-semibold text-slate-900">5.5 Widerspruchs- und Beseitigungsmöglichkeit</h3>
            <p>
              Betroffene Personen können ihre Einwilligung jederzeit widerrufen oder der Verarbeitung
              widersprechen. In diesem Fall kann die Korrespondenz nicht fortgeführt werden. Alle im Zuge der
              Kontaktaufnahme gespeicherten personenbezogenen Daten werden gelöscht, sofern keine
              Aufbewahrungspflichten entgegenstehen.
            </p>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-slate-900">6. OpenStreetMap</h2>
          <div className="space-y-3">
            <h3 className="text-base font-semibold text-slate-900">6.1 Beschreibung und Umfang der Datenverarbeitung</h3>
            <p>
              Auf unserer Website verwenden wir OpenStreetMap, einen Dienst der OpenStreetMap Foundation,
              St John&rsquo;s Innovation Centre, Cowley Road, Cambridge, CB4 0WS, Vereinigtes Königreich, zur
              Darstellung einer interaktiven Karte. Beim Laden der Karte werden Daten wie Ihre IP-Adresse,
              Browserinformationen, aufgerufene Kartenausschnitte sowie Datum und Uhrzeit des Zugriffs an
              OpenStreetMap übertragen.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-base font-semibold text-slate-900">6.2 Rechtsgrundlage</h3>
            <p>
              Die Nutzung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse
              besteht in einer benutzerfreundlichen Darstellung unseres Standorts und Einsatzgebietes.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-base font-semibold text-slate-900">6.3 Datenübertragung in Drittländer</h3>
            <p>
              Die OpenStreetMap Foundation hat ihren Sitz im Vereinigten Königreich. Für das Vereinigte
              Königreich besteht ein Angemessenheitsbeschluss der Europäischen Kommission, sodass ein
              angemessenes Datenschutzniveau gewährleistet ist.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-base font-semibold text-slate-900">6.4 Widerspruchsmöglichkeit</h3>
            <p>
              Sie können die Datenübertragung verhindern, indem Sie die Kartenansicht nicht laden oder
              JavaScript in Ihrem Browser deaktivieren. In diesem Fall können die Funktionen der Website
              eingeschränkt sein.
            </p>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-slate-900">7. Theme-Einstellungen (localStorage)</h2>
          <p>
            Unsere Website speichert Ihre Auswahl des Website-Themes (modern oder klassisch) lokal in Ihrem
            Browser unter dem Schlüssel <code>curamus-theme</code>. Diese Informationen werden nicht an unsere
            Server übertragen. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO; das berechtigte Interesse liegt
            in einer benutzerfreundlichen Darstellung. Sie können die Speicherung jederzeit über die
            Browsereinstellungen löschen.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-slate-900">8. Telefonischer Kontakt</h2>
          <p>
            Bei telefonischer Kontaktaufnahme verarbeiten wir die übermittelten Daten (z.&nbsp;B. Name,
            Telefonnummer, Gesprächsinhalte) zur Bearbeitung Ihres Anliegens. Eine Aufzeichnung von
            Telefongesprächen erfolgt nicht. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO; sofern die Anfrage
            auf einen Vertragsabschluss gerichtet ist, Art. 6 Abs. 1 lit. b DSGVO. Die Daten werden gelöscht,
            sobald sie für die Bearbeitung nicht mehr erforderlich sind, längstens jedoch drei Jahre nach
            Abschluss der Geschäftsbeziehung.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-slate-900">9. Rechte der betroffenen Person</h2>
          <div className="space-y-3">
            <h3 className="text-base font-semibold text-slate-900">9.1 Auskunftsrecht</h3>
            <p>
              Sie haben das Recht, von uns eine Bestätigung darüber zu verlangen, ob Sie betreffende
              personenbezogene Daten verarbeitet werden. Liegt eine solche Verarbeitung vor, haben Sie ein
              Recht auf Auskunft über diese Daten sowie auf die in Art. 15 DSGVO aufgeführten Informationen.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-base font-semibold text-slate-900">9.2 Recht auf Berichtigung</h3>
            <p>
              Sie können unverzüglich die Berichtigung Sie betreffender unrichtiger personenbezogener Daten
              verlangen. Unter Berücksichtigung der Zwecke der Verarbeitung haben Sie das Recht auf
              Vervollständigung unvollständiger Daten.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-base font-semibold text-slate-900">9.3 Recht auf Löschung</h3>
            <p>
              Sie haben das Recht, von uns die sofortige Löschung personenbezogener Daten zu verlangen, sofern
              einer der in Art. 17 DSGVO genannten Gründe vorliegt und keine gesetzlichen Pflichten entgegenstehen.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-base font-semibold text-slate-900">9.4 Recht auf Einschränkung der Verarbeitung</h3>
            <p>
              Unter den Voraussetzungen des Art. 18 DSGVO können Sie die Einschränkung der Verarbeitung Ihrer
              personenbezogenen Daten verlangen.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-base font-semibold text-slate-900">9.5 Recht auf Datenübertragbarkeit</h3>
            <p>
              Sie haben das Recht, die Sie betreffenden personenbezogenen Daten in einem strukturierten,
              gängigen und maschinenlesbaren Format zu erhalten und diese Daten einem anderen Verantwortlichen
              zu übermitteln, sofern die Voraussetzungen des Art. 20 DSGVO vorliegen.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-base font-semibold text-slate-900">9.6 Widerspruchsrecht</h3>
            <p>
              Sie können aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit gegen die
              Verarbeitung Sie betreffender personenbezogener Daten, die aufgrund von Art. 6 Abs. 1 lit. e oder f
              DSGVO erfolgt, Widerspruch einlegen. Wir verarbeiten die Daten dann nicht mehr, es sei denn, wir
              können zwingende schutzwürdige Gründe nachweisen.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-base font-semibold text-slate-900">9.7 Recht auf Widerruf von Einwilligungen</h3>
            <p>
              Sie haben das Recht, eine erteilte Einwilligung jederzeit mit Wirkung für die Zukunft zu
              widerrufen, ohne dass die Rechtmäßigkeit der bis zum Widerruf erfolgten Verarbeitung berührt wird.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-base font-semibold text-slate-900">
              9.8 Automatisierte Entscheidungen im Einzelfall einschließlich Profiling
            </h3>
            <p>
              Sie haben das Recht, nicht einer ausschließlich auf einer automatisierten Verarbeitung beruhenden
              Entscheidung unterworfen zu werden, die Ihnen gegenüber rechtliche Wirkung entfaltet oder Sie
              erheblich beeinträchtigt. Eine automatisierte Entscheidungsfindung findet bei uns nicht statt.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-base font-semibold text-slate-900">9.9 Recht auf Beschwerde bei einer Aufsichtsbehörde</h3>
            <p>
              Ihnen steht das Recht zu, sich bei einer Aufsichtsbehörde zu beschweren, insbesondere in dem
              Mitgliedstaat Ihres Aufenthaltsorts, Ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes,
              wenn Sie der Ansicht sind, dass die Verarbeitung der personenbezogenen Daten gegen die DSGVO
              verstößt.
            </p>
            <p>
              Zuständige Aufsichtsbehörde für unser Unternehmen ist: Die Landesbeauftragte für den Datenschutz
              und für das Recht auf Akteneinsicht Brandenburg, Stahnsdorfer Damm 77, 14532 Kleinmachnow, Telefon
              033203 356-0, E-Mail: poststelle@lda.brandenburg.de,
              <a
                className="text-primary-700 hover:underline"
                href="https://www.lda.brandenburg.de"
                target="_blank"
                rel="noreferrer"
              >
                https://www.lda.brandenburg.de
              </a>
              . Die Aufsichtsbehörde informiert den Beschwerdeführer über den Stand und die Ergebnisse der
              Beschwerde einschließlich der Möglichkeit gerichtlicher Rechtsbehelfe nach Art. 78 DSGVO.
            </p>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-slate-900">10. Technische und organisatorische Maßnahmen</h2>
          <p>
            Wir treffen geeignete technische und organisatorische Maßnahmen, um ein dem Risiko angemessenes
            Schutzniveau nach Art. 32 DSGVO zu gewährleisten. Dazu gehören Maßnahmen zur Sicherung der
            Vertraulichkeit, Integrität und Verfügbarkeit von Daten, Verfahren zur Wahrnehmung von
            Betroffenenrechten sowie regelmäßige Überprüfung unserer Sicherheitsprozesse.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-slate-900">11. Änderungen der Datenschutzerklärung</h2>
          <p>
            Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen
            rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen abzubilden. Für Ihren
            erneuten Besuch gilt dann die jeweils aktuelle Fassung.
          </p>
        </section>
      </article>
    </Layout>
  )
}
