import Image from 'next/image'
import Link from 'next/link'
import Layout from '@/components/Layout'

const categories = [
  {
    title: 'Gebäudereinigung',
    description:
      'Saubere Räume schaffen ein positives Umfeld. Wir übernehmen Unterhaltsreinigung, Glas- und Fassadenpflege sowie Spezialreinigungen – professionell und termingerecht.',
    image: '/images/services/service-gebaeude-clean.png',
    imageAlt: 'Glasfassade wird mit Wasserführung gereinigt',
  },
  {
    title: 'Hausmeisterdienste',
    description:
      'Unsere Hausmeister sorgen dafür, dass Ihre Immobilie funktioniert. Von kleinen Reparaturen bis zur Koordination externer Handwerker kümmern wir uns zuverlässig um alle Belange.',
    image: '/images/services/service-hausmeister-tools.png',
    imageAlt: 'Hausmeister schiebt Servicewagen durch ein Treppenhaus',
  },
  {
    title: 'Technisches Gebäudemanagement',
    description:
      'Wir überwachen und warten Heizungs-, Klima- und Elektroanlagen. Mit präventiver Wartung vermeiden wir Ausfälle und sichern die langfristige Funktionstüchtigkeit Ihrer Technik.',
    image: '/images/services/service-technik-control.png',
    imageAlt: 'Techniker prüft Messwerte an einer Gebäudeleittechnik',
  },
  {
    title: 'Sicherheitsdienste',
    description:
      'Sicherheit ist Vertrauen. Unsere Mitarbeiter übernehmen Objektschutz, Zugangskontrollen und Schließdienste – diskret und zuverlässig.',
    image: '/images/services/service-security-lobby.png',
    imageAlt: 'Sicherheitskraft überwacht Lobby-Monitore',
  },
  {
    title: 'Grünanlagenpflege & Winterdienst',
    description:
      'Wir sorgen im Sommer für gepflegte Außenflächen und übernehmen im Winter Schneeräumung sowie Streudienste für sichere Wege.',
    image: '/images/services/service-outdoor-care.png',
    imageAlt: 'Gartenpflegeteam trimmt Sträucher vor einem Bürogebäude',
  },
  {
    title: 'Entsorgungsmanagement',
    description:
      'Wir entwickeln effiziente Konzepte für Abfallentsorgung und Recycling, tragen zur Nachhaltigkeit bei und erfüllen rechtliche Vorgaben.',
    image: '/images/services/service-recycling-station.png',
    imageAlt: 'Mitarbeiterin scannt Wertstoffbehälter in Recyclingstation',
  },
]

export default function DienstleistungenPage() {
  return (
    <Layout
      title="Dienstleistungen | CURAMUS"
      description="Facility-Services von CURAMUS: Reinigung, Technik, Sicherheit, Grünpflege und nachhaltige Entsorgung."
      keywords={[
        'Dienstleistungen Facility Management',
        'Gebäudereinigung Berlin',
        'Hausmeisterservice Brandenburg',
        'Technisches Gebäudemanagement',
        'Sicherheitsdienste Facility',
      ]}
    >
      <div className="space-y-16">
        <header className="space-y-4 text-center sm:text-left">
          <p className="text-sm uppercase tracking-[0.3em] text-primary-700">Leistungsportfolio</p>
          <h1 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
            Dienstleistungen im Überblick
          </h1>
          <p className="text-base text-slate-600">
            Wir bieten ein breites Spektrum an Gebäudeservices – flexibel kombinierbar und
            abgestimmt auf Ihre Anforderungen in Berlin und Brandenburg.
          </p>
        </header>

        <section className="grid gap-8 md:grid-cols-2">
          {categories.map((category) => (
            <article
              key={category.title}
              className="rounded-3xl border border-primary-100 bg-white p-8 shadow-sm"
            >
              <div className="relative mb-5 aspect-[4/3] overflow-hidden rounded-2xl bg-primary-50/40">
                <Image
                  src={category.image}
                  alt={category.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 320px, (min-width: 768px) 45vw, 90vw"
                />
              </div>
              <h2 className="text-xl font-semibold text-slate-900">{category.title}</h2>
              <p className="mt-3 text-sm text-slate-600">{category.description}</p>
            </article>
          ))}
        </section>

        <section className="rounded-3xl bg-primary-900 px-8 py-12 text-white lg:px-12">
          <div className="space-y-6 text-center">
            <h2 className="text-2xl font-semibold">Ihr Projekt, unser Team</h2>
            <p className="text-primary-100">
              Ob Neuaufstellung oder Optimierung bestehender Strukturen – wir analysieren Ihre
              Anforderungen, definieren klare KPIs und begleiten die Umsetzung.
            </p>
            <p className="text-sm text-primary-200">
              Sprechen Sie mit uns über einen individuellen Serviceplan für Ihre Gebäude.
            </p>
            <div className="flex justify-center">
              <Link
                href="/kontakt"
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-medium text-primary-800 shadow transition hover:bg-primary-100"
              >
                Jetzt Projekt anfragen
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}
