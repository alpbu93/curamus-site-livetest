import Image from 'next/image'
import Layout from '@/components/Layout'

const strengths = [
  {
    title: 'Breites Leistungsspektrum',
    description:
      'Von Reinigung über Sicherheit bis Technik – wir decken die wichtigsten Bereiche des Facility Managements ab.',
    image: '/images/references/references-strength-spectrum.png',
    imageAlt: 'Symbolgrafik mit vernetzten Facility Services',
  },
  {
    title: 'Flexibel & kundennah',
    description:
      'Wir reagieren schnell auf individuelle Anforderungen und stehen persönlich als Ansprechpartner zur Verfügung.',
    image: '/images/references/references-strength-spectrum.png',
    imageAlt: 'Symbolgrafik für flexible Service-Verknüpfungen',
  },
  {
    title: 'Langfristige Partnerschaften',
    description:
      'Wir setzen auf nachhaltige Zusammenarbeit und zuverlässige Ergebnisse, auf die sich unsere Kunden verlassen.',
    image: '/images/references/references-strength-spectrum.png',
    imageAlt: 'Symbolgrafik für partnerschaftliche Zusammenarbeit',
  },
]

const competencies = [
  {
    title: 'Gewerbeimmobilien',
    description:
      'Büros, Verwaltungen und Produktionsstandorte profitieren von strukturierten Abläufen und klaren Qualitätsstandards.',
    image: '/images/references/references-office-berlin.png',
    imageAlt: 'Modernes Büroareal an der Spree in Berlin',
  },
  {
    title: 'Wohn- und Privatobjekte',
    description:
      'Wir betreuen Wohnanlagen und private Liegenschaften mit viel Fingerspitzengefühl und regionaler Nähe.',
    image: '/images/references/references-residential-courtyard.png',
    imageAlt: 'Grüner Innenhof eines Berliner Wohnquartiers',
  },
  {
    title: 'Schnelle Einsatzbereitschaft',
    description:
      'Dank unserer Präsenz in Berlin & Brandenburg sind wir rasch vor Ort und koordinieren Teams effizient.',
    image: '/images/references/references-logistics-hub.png',
    imageAlt: 'Logistikdrehscheibe mit Lieferfahrzeugen in Berlin',
  },
]

const projects = [
  {
    title: 'Bürokomplex an der Spree',
    description:
      'Glas- und Fassadenpflege sowie technische Anlagenbetreuung für einen modernen Bürostandort in Berlin.',
    image: '/images/references/reference-office-spree.png',
    imageAlt: 'Riverside Bürogebäude mit Glasfassade an der Spree',
  },
  {
    title: 'Wohnquartier Neukölln',
    description:
      'Hausmeisterservice, Treppenhausreinigung und Ansprechpartner für Mieterinnen und Mieter in einem Wohnblock.',
    image: '/images/references/reference-residential-neukoelln.png',
    imageAlt: 'Wohnstraße in Berlin-Neukölln mit sanierten Fassaden',
  },
  {
    title: 'Parkhaus am Ku’damm',
    description:
      'Sicherheitskonzept, Reinigung und Winterdienst für ein mehrstöckiges innerstädtisches Parkhaus.',
    image: '/images/references/reference-parking-kudamm.png',
    imageAlt: 'Mehrstöckiges Parkhaus am Kurfürstendamm bei Abenddämmerung',
  },
  {
    title: 'Campus Innenhof Friedrichstraße',
    description:
      'Ganzjährige Pflege der Grünflächen sowie Entsorgungslösungen für Büro- und Forschungsflächen.',
    image: '/images/references/reference-campus-friedrichstrasse.png',
    imageAlt: 'Grün gestalteter Innenhof nahe der Friedrichstraße',
  },
  {
    title: 'City Logistik Alexanderplatz',
    description:
      'Entsorgungsmanagement und Koordination externer Gewerke in einem dicht bebauten Innenstadtbereich.',
    image: '/images/references/reference-logistics-alex.png',
    imageAlt: 'Innerstädtisches Logistikareal mit Blick auf den Fernsehturm',
  },
]

export default function ReferenzenPage() {
  return (
    <Layout
      title="Referenzen | Curamus"
      description="Kundenreferenzen und Kompetenzen von Curamus Facility Services in Berlin und Brandenburg."
      keywords={[
        'Facility Management Referenzen',
        'Curamus Erfahrungen',
        'Kunden Facility Services Berlin',
        'Gebäudemanagement Brandenburg',
      ]}
    >
      <div className="space-y-16">
        <header className="space-y-4 text-center sm:text-left">
          <p className="text-sm uppercase tracking-[0.3em] text-primary-700">Referenzen</p>
          <h1 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
            Stärken & Kompetenzen
          </h1>
          <p className="text-base text-slate-600">
            Unsere Kunden vertrauen uns, weil wir ein breites Leistungsspektrum bieten und flexibel
            auf individuelle Anforderungen reagieren. Ob Gewerbe- oder Privatimmobilien – wir sind
            schnell vor Ort und setzen auf langfristige Partnerschaften.
          </p>
        </header>

        <section className="grid gap-6 md:grid-cols-3">
          {strengths.map((item) => (
            <article
              key={item.title}
              className="rounded-3xl border border-primary-100 bg-white p-6 shadow-sm"
            >
              <div className="mb-4 flex items-center justify-center">
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  width={80}
                  height={80}
                  className="h-16 w-16 object-contain"
                />
              </div>
              <h2 className="text-lg font-semibold text-slate-900">{item.title}</h2>
              <p className="mt-3 text-sm text-slate-600">{item.description}</p>
            </article>
          ))}
        </section>

        <section className="space-y-8">
          <h2 className="text-2xl font-semibold text-slate-900">Kompetenzfelder</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {competencies.map((item) => (
              <article
                key={item.title}
                className="rounded-3xl border border-primary-100 bg-white p-6 shadow-sm"
              >
                <div className="relative mb-4 aspect-[4/3] overflow-hidden rounded-2xl bg-primary-50/40">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 320px, (min-width: 768px) 45vw, 90vw"
                  />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-3 text-sm text-slate-600">{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-8">
          <h2 className="text-2xl font-semibold text-slate-900">Ausgewählte Objekte</h2>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="flex flex-col overflow-hidden rounded-3xl border border-primary-100 bg-white shadow-sm"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-primary-50/40">
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1280px) 360px, (min-width: 768px) 45vw, 90vw"
                  />
                </div>
                <div className="space-y-3 p-6">
                  <h3 className="text-lg font-semibold text-slate-900">{project.title}</h3>
                  <p className="text-sm text-slate-600">{project.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  )
}
