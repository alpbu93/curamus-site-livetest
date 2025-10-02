import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Layout from '@/components/Layout'
import { BRAND_FULL, BRAND_SHORT } from '@/lib/brand'

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
    title: 'Sicherheitsdienste in Kooperation',
    description:
      'Sicherheit ist Vertrauen. Gemeinsam mit qualifizierten Partnern organisieren wir Objektschutz, Zugangskontrollen und Schließdienste – diskret und zuverlässig.',
    image: '/images/services/service-security-lobby.png',
    imageAlt: 'Sicherheitskraft eines Partnerunternehmens überwacht Lobby-Monitore',
  },
  {
    title: 'Grünanlagenpflege',
    description:
      'Pflege von Grünflächen, Beeten und Außenanlagen – vom Rasenschnitt über Strauchpflege bis zur Bewässerungskoordination.',
    image: '/images/services/service-gruenpflege.png',
    imageAlt: 'Gärtnerteam pflegt eine Grünanlage vor einem modernen Bürogebäude',
  },
  {
    title: 'Winterdienst',
    description:
      'Räum- und Streudienste für Wege, Zufahrten und Parkflächen – inklusive Bereitschaftsdienst und Dokumentation gesetzlicher Vorgaben.',
    image: '/images/services/service-outdoor-care.png',
    imageAlt: 'Serviceteam räumt leichten Schnee auf einem Unternehmensgelände',
  },
  {
    title: 'Entsorgungsmanagement',
    description:
      'Wir entwickeln effiziente Konzepte für Abfallentsorgung und Recycling, tragen zur Nachhaltigkeit bei und erfüllen rechtliche Vorgaben.',
    image: '/images/services/service-recycling-station.png',
    imageAlt: 'Mitarbeiterin scannt Wertstoffbehälter in Recyclingstation',
  },
]

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
}

export default function DienstleistungenPage() {
  return (
    <Layout
      title={`Dienstleistungen | ${BRAND_SHORT}`}
      description={`Facility-Services von ${BRAND_FULL}: Reinigung, Technik, Sicherheitsleistungen in Kooperation, Grünanlagenpflege, Winterdienst und nachhaltige Entsorgung.`}
      keywords={[
        'Dienstleistungen Facility Management',
        'Gebäudereinigung Berlin',
        'Hausmeisterservice Brandenburg',
        'Technisches Gebäudemanagement',
        'Sicherheitsdienste in Kooperation',
        'Grünanlagenpflege',
        'Winterdienst',
      ]}
    >
      <div className="space-y-20">
        <motion.header
          className="space-y-4 text-center sm:text-left"
          initial="hidden"
          animate="visible"
          variants={reveal}
        >
          <p className="text-sm uppercase tracking-[0.3em] text-primary-700">Leistungsportfolio</p>
          <h1 className="text-3xl font-semibold text-ink sm:text-4xl">
            Dienstleistungen im Überblick
          </h1>
          <p className="text-base text-ink-muted">
            Wir kombinieren Reinigung, Technik, Sicherheit und Außenpflege zu modularen Paketen, die
            exakt auf Ihre Standorte abgestimmt sind.
          </p>
        </motion.header>

        <motion.section
          className="mx-auto flex w-full max-w-[1180px] flex-wrap items-stretch justify-center gap-8 md:gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.14, delayChildren: 0.1 },
            },
          }}
        >
          {categories.map((category) => (
            <motion.article
              key={category.title}
              variants={reveal}
              className="group flex w-full flex-col overflow-hidden rounded-3xl border border-white/20 bg-surface-elevated/85 p-8 shadow-soft transition hover:-translate-y-1 hover:shadow-glow md:flex-[1_1_360px] md:max-w-[360px]"
            >
              <div className="relative mb-5 aspect-[4/3] overflow-hidden rounded-2xl bg-primary-50/30">
                <Image
                  src={category.image}
                  alt={category.imageAlt}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                  sizes="(min-width: 1024px) 320px, (min-width: 768px) 45vw, 90vw"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary-600/15 via-transparent to-transparent" aria-hidden="true" />
              </div>
              <div className="flex flex-1 flex-col">
                <h2 className="text-xl font-semibold text-ink">{category.title}</h2>
                <p className="mt-3 text-sm text-ink-muted">{category.description}</p>
                <Link
                  href="/kontakt"
                  className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-medium text-primary-700 opacity-0 transition group-hover:opacity-100"
                >
                  Beratungsgespräch vereinbaren <span aria-hidden="true">→</span>
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.section>

        <motion.section
          className="relative overflow-hidden rounded-3xl border border-white/20 bg-gradient-to-br from-primary-700 to-primary-500 px-8 py-12 text-white shadow-glow lg:px-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55 }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.2),transparent_55%)]" aria-hidden="true" />
          <div className="relative space-y-6 text-center">
            <h2 className="text-2xl font-semibold lg:text-3xl">Ihr Projekt, unser Team</h2>
            <p className="text-white/80">
              Ob Neuaufstellung oder Optimierung bestehender Strukturen – wir analysieren Ihre
              Anforderungen, definieren klare KPIs und begleiten die Umsetzung.
            </p>
            <p className="text-sm text-white/60">
              Sprechen Sie mit uns über einen individuellen Serviceplan für Ihre Gebäude.
            </p>
            <div className="flex justify-center">
              <Link
                href="/kontakt"
                className="inline-flex items-center gap-2 rounded-full bg-white/90 px-6 py-3 text-sm font-medium text-primary-700 shadow-soft transition hover:bg-white"
              >
                Jetzt Projekt anfragen
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </motion.section>
      </div>
    </Layout>
  )
}
