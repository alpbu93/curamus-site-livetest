import Image from 'next/image'
import Link from 'next/link'
import Layout from '@/components/Layout'

export default function StandortPage() {
  return (
    <Layout
      title="Standort | CURAMUS"
      description="CURAMUS facility services – tätig in Berlin und Brandenburg. Lernen Sie unseren Standort kennen."
      keywords={[
        'Standort Berlin Brandenburg',
        'Facility Management Region',
        'CURAMUS Standort',
        'Facility Services Berlin',
      ]}
    >
      <div className="space-y-16">
        <header className="space-y-4 text-center sm:text-left">
          <p className="text-sm uppercase tracking-[0.3em] text-primary-700">Region</p>
          <h1 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
            Berlin & Brandenburg
          </h1>
          <p className="text-base text-slate-600">
            Wir betreuen Immobilienportfolios in der Hauptstadtregion. Kurze Wege und lokale Teams
            ermöglichen eine schnelle Reaktionszeit sowie ein tiefes Verständnis für regionale
            Anforderungen.
          </p>
        </header>

        <section className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div className="space-y-4 text-base text-slate-600">
            <p>
              Unsere Koordinationszentrale befindet sich in Berlin. Von hier steuern wir Einsätze in
              der gesamten Metropolregion. Für Objekte in Brandenburg verfügen wir über mobile Teams
              und Servicepartner, die eng mit uns zusammenarbeiten.
            </p>
            <p>
              Ein starkes Netzwerk aus Spezialdienstleistern stellt sicher, dass auch besondere
              Anforderungen – etwa in der Industrie oder Forschung – zuverlässig umgesetzt werden.
            </p>
            <div className="rounded-3xl border border-primary-100 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-slate-900">Kontaktaufnahme</h2>
              <p className="mt-3 text-sm text-slate-600">
                Vereinbaren Sie einen digitalen Termin mit unserem Team. Wir analysieren Ihren Bedarf
                und entwickeln ein regional passendes Servicekonzept.
              </p>
              <Link
                href="/kontakt"
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary-700 px-5 py-2 text-sm font-medium text-white shadow transition hover:bg-primary-800"
              >
                Jetzt Termin vereinbaren
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
          <div className="space-y-6">
            <div className="relative overflow-hidden rounded-3xl border border-primary-100 bg-white shadow-sm">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/location-berlin-skyline.png"
                  alt="Abendliche Skyline von Berlin mit Fernsehturm und Spree"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 520px, 100vw"
                />
              </div>
            </div>
            <div className="overflow-hidden rounded-3xl border border-primary-100 bg-white shadow-sm">
              <div className="aspect-[4/3]">
                <iframe
                  title="Einsatzgebiet Berlin und Brandenburg"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=12.3%2C51.8%2C14.8%2C53.4&layer=mapnik&marker=52.5200%2C13.4050"
                  className="h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  aria-label="Karte mit dem Einsatzgebiet der CURAMUS facility services"
                />
              </div>
              <div className="border-t border-primary-100 px-6 py-4 text-xs text-slate-500">
                <span className="block">Interaktive Karte: Berlin & Brandenburg auf OpenStreetMap.</span>
                <a
                  className="mt-2 inline-flex items-center gap-1 text-primary-700 underline decoration-2 decoration-primary-300 transition hover:text-primary-800"
                  href="https://www.openstreetmap.org/?mlat=52.5200&mlon=13.4050#map=8/52.5200/13.4050"
                  target="_blank"
                  rel="noreferrer"
                >
                  Größere Karte öffnen
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}
