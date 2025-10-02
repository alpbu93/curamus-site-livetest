import Image from 'next/image'
import { motion } from 'framer-motion'
import Layout from '@/components/Layout'
import { BRAND_FULL, BRAND_SHORT } from '@/lib/brand'

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

const fade = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
}

export default function ReferenzenPage() {
  return (
    <Layout
      title={`Referenzen | ${BRAND_FULL}`}
      description={`Kundenreferenzen und Kompetenzen von ${BRAND_FULL} in Berlin und Brandenburg.`}
      keywords={[
        'Facility Management Referenzen',
        `${BRAND_SHORT} Erfahrungen`,
        'Kunden Facility Services Berlin',
        'Gebäudemanagement Brandenburg',
      ]}
    >
      <div className="space-y-20">
        <motion.header
          className="space-y-4 text-center sm:text-left"
          initial="hidden"
          animate="visible"
          variants={fade}
        >
          <p className="text-sm uppercase tracking-[0.3em] text-primary-700">Referenzen</p>
          <h1 className="text-3xl font-semibold text-ink sm:text-4xl">
            Stärken & Kompetenzen
          </h1>
          <p className="text-base text-ink-muted">
            Unsere Kunden vertrauen uns, weil wir ein breites Leistungsspektrum bieten und flexibel
            auf individuelle Anforderungen reagieren. Ob Gewerbe- oder Privatimmobilien – wir sind
            schnell vor Ort und setzen auf langfristige Partnerschaften.
          </p>
        </motion.header>

        <motion.section
          className="mx-auto flex w-full max-w-[1180px] flex-wrap items-stretch justify-center gap-6 md:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.1, delayChildren: 0.1 },
            },
          }}
        >
          {strengths.map((item) => (
            <motion.article
              key={item.title}
              variants={fade}
              className="flex w-full flex-col rounded-3xl border border-white/20 bg-surface-elevated/85 p-6 shadow-soft md:flex-[1_1_320px] md:max-w-[360px]"
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
                <div className="flex flex-1 flex-col">
                  <h2 className="text-lg font-semibold text-ink">{item.title}</h2>
                  <p className="mt-3 text-sm text-ink-muted">{item.description}</p>
                </div>
              </motion.article>
            ))}
          </motion.section>

        <motion.section
          className="space-y-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.1, delayChildren: 0.1 },
            },
          }}
        >
          <motion.h2 className="text-2xl font-semibold text-ink" variants={fade}>
            Kompetenzfelder
          </motion.h2>
          <motion.div className="mx-auto flex w-full max-w-[1180px] flex-wrap items-stretch justify-center gap-6 md:gap-8">
            {competencies.map((item) => (
              <motion.article
                key={item.title}
                variants={fade}
                className="flex w-full flex-col rounded-3xl border border-white/20 bg-surface-elevated/85 p-6 shadow-soft md:flex-[1_1_320px] md:max-w-[360px]"
              >
                <div className="relative mb-4 aspect-[4/3] overflow-hidden rounded-2xl bg-primary-50/40">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 320px, (min-width: 768px) 45vw, 90vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary-600/15 via-transparent to-transparent" aria-hidden="true" />
                </div>
                <div className="flex flex-1 flex-col">
                  <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
                  <p className="mt-3 text-sm text-ink-muted">{item.description}</p>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </motion.section>

        <motion.section
          className="space-y-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.12, delayChildren: 0.1 },
            },
          }}
        >
          <motion.h2 className="text-2xl font-semibold text-ink" variants={fade}>
            Ausgewählte Objekte
          </motion.h2>
          <motion.div className="mx-auto flex w-full max-w-[1180px] flex-wrap items-stretch justify-center gap-6 md:gap-8">
            {projects.map((project) => (
              <motion.article
                key={project.title}
                variants={fade}
                className="flex w-full flex-col overflow-hidden rounded-3xl border border-white/20 bg-surface-elevated/85 shadow-soft md:flex-[1_1_360px] md:max-w-[360px]"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-primary-50/40">
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    className="object-cover transition duration-700 hover:scale-105"
                    sizes="(min-width: 1280px) 360px, (min-width: 768px) 45vw, 90vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/35 via-transparent to-transparent" aria-hidden="true" />
                </div>
                <div className="flex flex-1 flex-col space-y-3 p-6">
                  <h3 className="text-lg font-semibold text-ink">{project.title}</h3>
                  <p className="text-sm text-ink-muted">{project.description}</p>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </motion.section>
      </div>
    </Layout>
  )
}
