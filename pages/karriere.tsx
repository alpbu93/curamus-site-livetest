import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Layout from '@/components/Layout'

const benefits = [
  {
    title: 'Verlässliche Teams',
    description:
      'Wir arbeiten in eingespielten Crews mit klaren Zuständigkeiten und verbindlicher Einsatzplanung.',
  },
  {
    title: 'Klare Rahmenbedingungen',
    description:
      'Strukturierte Einsatzplanung, transparente Abstimmung und ein respektvolles Miteinander bilden den Rahmen für den Alltag im Team.',
  },
  {
    title: 'Gezieltes Onboarding',
    description:
      'Praxisnahe Einarbeitung, gemeinsame Objektbegehungen und kurze Wissensimpulse sorgen dafür, dass neue Aufgaben sicher sitzen.',
  },
]

const focusAreas = [
  {
    title: 'Gebäudereinigung',
    description: 'Unterhalts-, Glas- und Sonderreinigung für Büro- und Industrieflächen im Großraum Berlin/Brandenburg.',
  },
  {
    title: 'Technisches Gebäudemanagement',
    description: 'Facility-Teams mit technischem Schwerpunkt betreuen Gebäudeleittechnik, HVAC und Kleinreparaturen.',
  },
  {
    title: 'Sicherheitsdienste in Kooperation',
    description: 'Gemeinsam mit Partnern sichern wir Standorte – von Empfangs- bis Kontrolldiensten.',
  },
  {
    title: 'Grünanlagenpflege & Winterdienst',
    description: 'Saisonale Pflege von Außenanlagen sowie Einsatzteams für Winterdienste und Bereitschaften.',
  },
]

const applicationSteps = [
  {
    step: '1',
    title: 'Kurzvorstellung senden',
    description: 'Schicken Sie uns Ihre Eckdaten, gewünschte Rolle und Einsatzgebiete an kontakt@curamus-facility.de.',
  },
  {
    step: '2',
    title: 'Telefonisches Kennenlernen',
    description: 'Wir melden uns innerhalb von zwei Werktagen und klären offene Fragen im Gespräch.',
  },
  {
    step: '3',
    title: 'Vor-Ort-Termin',
    description: 'Je nach Rolle besichtigen wir gemeinsame Objekte oder lernen Ihr zukünftiges Team kennen.',
  },
  {
    step: '4',
    title: 'Start vereinbaren',
    description: 'Sie erhalten ein transparentes Angebot inkl. Vertragsunterlagen und Onboarding-Plan.',
  },
]

export default function KarrierePage() {
  return (
    <Layout
      title="Karriere | Curamus"
      description="Karriere bei Curamus Facility Services: Jobs in Reinigung, Technik, Sicherheit und Winterdienst."
      keywords={[
        'Karriere Facility Management',
        'Jobs Gebäudereinigung Berlin',
        'Facility Services Stellenangebote',
        'Curamus Jobs',
      ]}
    >
      <div className="space-y-20">
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center"
        >
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.3em] text-primary-700">Karriere</p>
            <h1 className="text-3xl font-semibold text-ink sm:text-4xl lg:text-5xl">
              Deine nächste Aufgabe im Facility Management
            </h1>
            <p className="text-base text-ink-muted">
              Curamus wächst – und sucht Menschen, die Verantwortung übernehmen wollen. Ob Reinigung,
              Technik oder koordinierende Rollen: Wir schaffen verlässliche Schichten, faire Bedingungen
              und echte Entwicklungsmöglichkeiten.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="mailto:kontakt@curamus-facility.de"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-primary-600 to-primary-400 px-6 py-3 text-sm font-medium text-white shadow-soft transition hover:shadow-glow"
              >
                Initiativ bewerben
              </Link>
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center rounded-full border border-primary-200/70 px-6 py-3 text-sm font-medium text-primary-700 transition hover:bg-primary-50"
              >
                Kontakt aufnehmen
              </Link>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-3xl border border-white/20 bg-surface-elevated/85 shadow-soft">
            <div className="relative aspect-[4/3]">
              <Image
                src="/images/hero-team-berlin.png"
                alt="Curamus Team vor einem Objekt in Berlin"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 420px, 90vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary-600/25 via-transparent to-ink/20" aria-hidden="true" />
            </div>
          </div>
        </motion.section>

        <motion.section
          className="space-y-8"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.45 }}
        >
          <div className="space-y-3 text-center sm:text-left">
            <h2 className="text-2xl font-semibold text-ink sm:text-3xl">Was wir bieten</h2>
            <p className="text-sm text-ink-muted">
              Transparente Abläufe, strukturierte Einarbeitung und Wertschätzung für gutes Teamwork – das
              bildet die Grundlage unserer Zusammenarbeit.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {benefits.map((benefit) => (
              <article
                key={benefit.title}
                className="space-y-3 rounded-3xl border border-white/20 bg-surface-elevated/85 p-6 shadow-soft"
              >
                <h3 className="text-lg font-semibold text-ink">{benefit.title}</h3>
                <p className="text-sm text-ink-muted">{benefit.description}</p>
              </article>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="space-y-8 rounded-3xl border border-primary-100 bg-primary-50/50 px-6 py-10 lg:px-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.45 }}
        >
          <div className="space-y-3 text-center sm:text-left">
            <h2 className="text-2xl font-semibold text-ink sm:text-3xl">Unsere Einsatzbereiche</h2>
            <p className="text-sm text-ink-muted">
              Wir betreuen Immobilien in Berlin und Brandenburg. Je nach Qualifikation finden wir den
              passenden Einsatz – von Büro-Campus bis Logistikstandort.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {focusAreas.map((area) => (
              <article key={area.title} className="space-y-3 rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="text-base font-semibold text-ink">{area.title}</h3>
                <p className="text-sm text-ink-muted">{area.description}</p>
              </article>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="space-y-8"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.45 }}
        >
          <div className="space-y-3 text-center sm:text-left">
            <h2 className="text-2xl font-semibold text-ink sm:text-3xl">Bewerbungsprozess</h2>
            <p className="text-sm text-ink-muted">
              Kurze Wege und klare Kommunikation helfen, dass beide Seiten schnell wissen, wie es weitergeht.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-4">
            {applicationSteps.map((item) => (
              <article
                key={item.title}
                className="space-y-3 rounded-3xl border border-white/20 bg-surface-elevated/85 p-6 text-center shadow-soft"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary-600 text-sm font-semibold text-white">
                  {item.step}
                </div>
                <h3 className="text-base font-semibold text-ink">{item.title}</h3>
                <p className="text-sm text-ink-muted">{item.description}</p>
              </article>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="rounded-3xl bg-primary-900 px-6 py-10 text-white shadow-soft lg:px-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.45 }}
        >
          <div className="space-y-4 text-center">
            <h2 className="text-2xl font-semibold lg:text-3xl">Initiativ bewerben oder Fragen stellen?</h2>
            <p className="text-sm text-white/80">
              Schreiben Sie uns an{' '}
              <a className="underline decoration-white/40 hover:text-white" href="mailto:kontakt@curamus-facility.de">
                kontakt@curamus-facility.de
              </a>{' '}
              oder rufen Sie uns unter{' '}
              <a className="underline decoration-white/40 hover:text-white" href="tel:+4933772040071">
                +49 (0)3377 2040071
              </a>{' '}an. Wir melden uns innerhalb von zwei Werktagen.
            </p>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="mailto:kontakt@curamus-facility.de"
                className="inline-flex items-center justify-center rounded-full bg-white/90 px-6 py-3 text-sm font-medium text-primary-700 shadow-soft transition hover:bg-white"
              >
                E-Mail verfassen
              </Link>
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center rounded-full border border-white/40 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
              >
                Kontaktformular nutzen
              </Link>
            </div>
          </div>
        </motion.section>
      </div>
    </Layout>
  )
}
