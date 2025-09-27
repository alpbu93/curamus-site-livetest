import Image from 'next/image'
import Link from 'next/link'
import Layout from '@/components/Layout'

const services = [
  {
    title: 'Gebäudereinigung',
    description:
      'Regelmäßige Unterhaltsreinigung, Glas- und Fassadenpflege sowie Spezialreinigungen für ein gepflegtes Umfeld.',
    image: '/images/services/service-gebaeude-clean.png',
    imageAlt: 'Reinigungskraft poliert eine Glasfassade mit Teleskopstange',
  },
  {
    title: 'Hausmeisterdienste',
    description:
      'Kleinreparaturen, Haustechnik-Kontrollen und die Koordination externer Gewerke – alles aus einer Hand.',
    image: '/images/services/service-hausmeister-tools.png',
    imageAlt: 'Hausmeister schiebt einen Werkzeugwagen durch ein Treppenhaus',
  },
  {
    title: 'Technisches Gebäudemanagement',
    description:
      'Überwachung und Wartung von Heizungs-, Klima- und Elektroanlagen mit Fokus auf präventive Instandhaltung.',
    image: '/images/services/service-technik-control.png',
    imageAlt: 'Techniker prüft eine digitale Steuerung im Technikraum',
  },
  {
    title: 'Sicherheitsdienste',
    description:
      'Objektschutz, Zugangskontrollen und Schließdienste – diskret, zuverlässig und angepasst an Ihren Standort.',
    image: '/images/services/service-security-lobby.png',
    imageAlt: 'Sicherheitsmitarbeiter überwacht Monitore in einer Bürolobby',
  },
  {
    title: 'Grünanlagenpflege & Winterdienst',
    description:
      'Pflege von Außenflächen im Sommer sowie Schneeräumung und Streudienste während der kalten Monate.',
    image: '/images/services/service-outdoor-care.png',
    imageAlt: 'Team trimmt Sträucher und räumt leichte Schneereste vor einem Bürogebäude',
  },
  {
    title: 'Entsorgungsmanagement',
    description:
      'Effiziente Konzepte für Abfallentsorgung und Recycling – nachhaltig und rechtskonform umgesetzt.',
    image: '/images/services/service-recycling-station.png',
    imageAlt: 'Mitarbeiterin scannt Behälter in einer sortierten Recyclingstation',
  },
]

export default function HomePage() {
  return (
    <Layout
      title="Curamus Facility Management"
      description="Nachhaltige Facility-Services in Berlin & Brandenburg für Unternehmen, die Wert auf Qualität legen."
      keywords={[
        'Facility Management Berlin',
        'Facility Services Brandenburg',
        'Gebäudereinigung',
        'Hausmeisterservice',
        'Curamus Facility Services',
      ]}
    >
      <div className="space-y-20">
        <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-6 text-center lg:text-left">
            <p className="text-sm uppercase tracking-[0.3em] text-primary-700">
              Zuverlässig. Modern. Nah in Berlin & Brandenburg.
            </p>
            <h1 className="text-4xl font-semibold text-slate-900 sm:text-5xl">
              Professionelles Facility Management für Ihr Kerngeschäft
            </h1>
            <p className="text-lg text-slate-600">
              Willkommen bei der CURAMUS Facility Services GmbH – Ihrem Partner für
              Gebäudedienstleistungen. Wir kümmern uns zuverlässig um Reinigung, Instandhaltung und
              Sicherheit, damit Sie sich auf Ihr Business konzentrieren können.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-start">
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center rounded-full bg-primary-700 px-6 py-3 text-white shadow transition hover:bg-primary-800"
              >
                Kontakt aufnehmen
              </Link>
              <Link
                href="/dienstleistungen"
                className="inline-flex items-center justify-center rounded-full border border-primary-200 px-6 py-3 text-primary-700 transition hover:bg-primary-100"
              >
                Leistungen entdecken
              </Link>
            </div>
          </div>
          <div className="space-y-6">
            <div className="relative overflow-hidden rounded-3xl border border-primary-100/80 bg-slate-900/10 shadow-sm">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/hero-team-berlin.png"
                  alt="Curamus Team steht vor einem modernen Bürogebäude in Berlin"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 420px, 90vw"
                  priority
                />
              </div>
              <div className="absolute inset-x-4 bottom-4 rounded-2xl bg-white/85 p-4 text-sm text-slate-700 backdrop-blur">
                <div className="flex items-center gap-3">
                  <Image
                    src="/images/logo-mark.png"
                    alt="Curamus Signet"
                    width={48}
                    height={48}
                    className="h-10 w-10"
                    priority
                  />
                  <p className="font-medium">Nah am Kunden: unser Einsatzteam vor Ort</p>
                </div>
              </div>
            </div>
            <div className="rounded-3xl border border-primary-100 bg-white p-8 shadow-sm">
              <h2 className="text-xl font-semibold text-slate-900">Ihr Vorteil mit CURAMUS</h2>
              <p className="mt-4 text-sm text-slate-600">
                Wir verbinden regionale Nähe mit moderner Dienstleistung. Unser Team reagiert
                schnell, arbeitet transparent und denkt jedes Objekt nachhaltig. So bleibt Ihre
                Immobilie sicher, sauber und funktionsfähig.
              </p>
              <Link
                href="/kontakt"
                className="mt-5 inline-flex items-center gap-2 rounded-full border border-primary-200 px-5 py-2 text-sm font-medium text-primary-700 transition hover:bg-primary-50"
              >
                Beratung anfragen
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <div className="text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-primary-700">
              Leistungsportfolio
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-900">
              Alles rund um Ihre Immobilie
            </h2>
            <p className="mt-3 text-base text-slate-600">
              Von der Reinigung über Sicherheit bis zur technischen Betreuung – wir stellen Ihr
              individuelles Servicepaket zusammen.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="rounded-3xl border border-primary-100 bg-white p-6 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="relative mb-4 aspect-[4/3] overflow-hidden rounded-2xl bg-primary-50/40">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 320px, (min-width: 768px) 45vw, 90vw"
                    priority={service.title === 'Gebäudereinigung'}
                  />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">{service.title}</h3>
                <p className="mt-3 text-sm text-slate-600">{service.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-primary-100 bg-primary-50/60 px-8 py-10 shadow-sm lg:px-12">
          <div className="flex flex-col items-start justify-between gap-6 text-left lg:flex-row lg:items-center">
            <div className="max-w-2xl space-y-3">
              <p className="text-sm uppercase tracking-[0.3em] text-primary-700">Projekt starten</p>
              <h2 className="text-2xl font-semibold text-slate-900">
                Lassen Sie uns über Ihren Gebäudeservice sprechen
              </h2>
              <p className="text-sm text-slate-600">
                Wir erstellen ein Angebot, das zu Ihren Objekten passt – ob Reinigung, Technik oder
                kompletter Facility-Service. Ein Anruf oder eine Nachricht genügt.
              </p>
            </div>
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center rounded-full bg-primary-700 px-6 py-3 text-sm font-medium text-white shadow transition hover:bg-primary-800"
            >
              Kontakt aufnehmen
            </Link>
          </div>
        </section>

        <section className="rounded-3xl bg-primary-900 px-8 py-12 text-white lg:px-12">
          <div className="mx-auto max-w-3xl space-y-6 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-primary-200">Über uns</p>
            <h2 className="text-3xl font-semibold">
              Regional verwurzelt, zuverlässig an Ihrer Seite
            </h2>
            <p className="text-primary-100">
              Die CURAMUS Facility Services GmbH steht für Qualität, Transparenz und Kundennähe.
              Unser Team bringt Fachwissen und Engagement zusammen, damit Immobilien jeder Art
              gepflegt, sicher und nachhaltig betrieben werden.
            </p>
            <Link
              href="/ueber-uns"
              className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-white transition hover:bg-white/10"
            >
              Mehr über uns
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  )
}
