import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
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
    title: 'Sicherheitsdienste in Kooperation',
    description:
      'Gemeinsam mit spezialisierten Partnern organisieren wir Objektschutz, Zugangskontrollen und Schließdienste – diskret, zuverlässig und auf Ihren Standort abgestimmt.',
    image: '/images/services/service-security-lobby.png',
    imageAlt: 'Sicherheitsmitarbeiter eines Partnerunternehmens überwacht Monitore in einer Bürolobby',
  },
  {
    title: 'Grünanlagenpflege',
    description:
      'Regelmäßige Pflege von Grünflächen, Sträuchern und Außenbereichen inklusive saisonaler Bepflanzung und Bewässerung.',
    image: '/images/services/service-gruenpflege.png',
    imageAlt: 'Gärtnerteam pflegt Grünanlagen vor einem Unternehmensstandort',
  },
  {
    title: 'Winterdienst',
    description:
      'Räumen, Streuen und Kontrollfahrten für sichere Wege, Zufahrten und Parkflächen während der kalten Jahreszeit.',
    image: '/images/services/service-outdoor-care.png',
    imageAlt: 'Serviceteam räumt leichten Schnee auf einem Unternehmensgelände',
  },
  {
    title: 'Entsorgungsmanagement',
    description:
      'Effiziente Konzepte für Abfallentsorgung und Recycling – nachhaltig und rechtskonform umgesetzt.',
    image: '/images/services/service-recycling-station.png',
    imageAlt: 'Mitarbeiterin scannt Behälter in einer sortierten Recyclingstation',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.15 * i, duration: 0.55 },
  }),
}

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
      <div className="space-y-24">
        <section className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <motion.div
            className="space-y-6 text-center lg:text-left"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={0}
          >
            <div className="flex justify-center lg:justify-start">
              <Image
                src="/images/curamus-logo.png"
                alt="Curamus Facility Services Logo"
                width={480}
                height={320}
                priority
                className="h-auto w-52 max-w-[320px] drop-shadow-2xl sm:w-64 lg:w-72"
              />
            </div>
            <span className="inline-flex items-center gap-2 rounded-full bg-primary-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-primary-700">
              Zuverlässig · Modern · Regional
            </span>
            <motion.h1
              className="text-4xl font-semibold text-ink sm:text-5xl lg:text-6xl"
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={0.7}
            >
              Facility Management, das zu Ihrem Alltag passt
            </motion.h1>
            <motion.p
              className="text-lg text-ink-muted"
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={1.2}
            >
              Curamus verbindet moderne Prozesse mit lokaler Nähe. Wir betreuen Ihre Immobilien so,
              dass Sie Freiräume gewinnen – für Kundentermine, Teams oder neue Projekte.
            </motion.p>
            <motion.div
              className="flex flex-col gap-3 sm:flex-row sm:justify-start"
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={1.8}
            >
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-primary-600 to-primary-400 px-7 py-3 text-sm font-medium text-white shadow-soft transition hover:shadow-glow"
              >
                Kontakt aufnehmen
              </Link>
              <Link
                href="/dienstleistungen"
                className="inline-flex items-center justify-center rounded-full border border-primary-200/70 px-7 py-3 text-sm font-medium text-primary-700 transition hover:bg-primary-50"
              >
                Leistungen entdecken
              </Link>
            </motion.div>
          </motion.div>
          <motion.div
            className="space-y-6"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={1.4}
          >
            <div className="relative overflow-hidden rounded-3xl border border-white/20 bg-surface-elevated/70 shadow-soft">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/hero-team-berlin.png"
                  alt="Curamus Team steht vor einem modernen Bürogebäude in Berlin"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 420px, 90vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary-600/20 via-transparent to-ink/10" aria-hidden="true" />
              </div>
              <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/40 bg-white/80 p-4 text-sm text-ink-muted backdrop-blur">
                <div className="flex items-center gap-3">
                  <Image
                    src="/images/logo-mark.png"
                    alt="Curamus Signet"
                    width={48}
                    height={48}
                    className="h-10 w-10"
                    priority
                  />
                  <p className="font-medium text-ink">Vor Ort einsatzbereit: Service-Teams für Berlin & Brandenburg</p>
                </div>
              </div>
            </div>
            <div className="rounded-3xl border border-white/30 bg-surface-elevated/90 p-8 shadow-soft">
              <h2 className="text-xl font-semibold text-ink">Ihr Vorteil mit Curamus</h2>
              <p className="mt-4 text-sm text-ink-muted">
                Schnelle Reaktion, transparente Kommunikation, nachhaltiges Gebäudemanagement. Wir
                denken Liegenschaften ganzheitlich und bleiben Ihr persönlicher Ansprechpartner.
              </p>
              <Link
                href="/kontakt"
                className="mt-5 inline-flex items-center gap-2 rounded-full border border-primary-200/70 px-5 py-2 text-sm font-medium text-primary-700 transition hover:bg-primary-50"
              >
                Beratung anfragen
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </motion.div>
        </section>

        <section className="space-y-8">
          <motion.div
            className="text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeUp}
            custom={0}
          >
            <p className="text-sm uppercase tracking-[0.3em] text-primary-700">
              Leistungsportfolio
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-ink sm:text-4xl">
              Alles rund um Ihre Immobilie
            </h2>
            <p className="mt-3 text-base text-ink-muted">
              Von der Reinigung über Sicherheit bis zur technischen Betreuung – wir gestalten ein
              Servicepaket, das Ihr Tagesgeschäft entlastet.
            </p>
          </motion.div>
          <motion.div
            className="mx-auto flex w-full max-w-[1180px] flex-wrap items-stretch justify-center gap-6 md:gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.12, delayChildren: 0.1 },
              },
            }}
          >
            {services.map((service, index) => (
              <motion.article
                key={service.title}
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
                }}
                className="group relative flex w-full flex-col overflow-hidden rounded-3xl border border-white/20 bg-surface-elevated/80 p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-glow md:flex-[1_1_320px] md:max-w-[360px]"
              >
                <div className="relative mb-4 aspect-[4/3] overflow-hidden rounded-2xl bg-primary-50/40">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                    sizes="(min-width: 1024px) 320px, (min-width: 768px) 45vw, 90vw"
                    priority={service.title === 'Gebäudereinigung'}
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary-600/10 via-transparent to-transparent" aria-hidden="true" />
                </div>
                <div className="flex flex-1 flex-col">
                  <h3 className="text-lg font-semibold text-ink">{service.title}</h3>
                  <p className="mt-3 text-sm text-ink-muted">{service.description}</p>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </section>

        <motion.section
          className="relative overflow-hidden rounded-3xl border border-white/20 bg-gradient-to-br from-primary-600 to-primary-400 px-8 py-12 text-white shadow-glow lg:px-12"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.2),transparent_55%)]" aria-hidden="true" />
          <div className="relative flex flex-col items-start gap-6 text-left lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl space-y-3">
              <p className="text-sm uppercase tracking-[0.3em] text-white/70">Projekt starten</p>
              <h2 className="text-2xl font-semibold text-white lg:text-3xl">
                Lassen Sie uns über Ihren Gebäudeservice sprechen
              </h2>
              <p className="text-sm text-white/80">
                Wir erstellen ein Angebot, das zu Ihren Objekten passt – ob Reinigung, Technik oder
                kompletter Facility-Service. Ein Anruf oder eine Nachricht genügt.
              </p>
            </div>
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center rounded-full bg-white/90 px-7 py-3 text-sm font-medium text-primary-700 shadow-soft transition hover:bg-white"
            >
              Kontakt aufnehmen
            </Link>
          </div>
        </motion.section>

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
