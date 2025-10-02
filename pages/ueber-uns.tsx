import Image from 'next/image'
import { motion } from 'framer-motion'
import Layout from '@/components/Layout'
import { BRAND_FULL, BRAND_LEGAL, BRAND_SHORT } from '@/lib/brand'

const values = [
  {
    title: 'Regional verwurzelt',
    description:
      'Wir kennen die Besonderheiten der Hauptstadtregion genau und setzen auf kurze Wege sowie verlässliche Partner.',
  },
  {
    title: 'Qualität & Transparenz',
    description:
      'Unsere Dienstleistungen sind klar dokumentiert, nachvollziehbar und auf langfristige Zusammenarbeit ausgelegt.',
  },
  {
    title: 'Engagiertes Team',
    description:
      'Fachwissen trifft auf Einsatzbereitschaft. Wir kümmern uns um Immobilien aller Art – zuverlässig und nachhaltig.',
  },
]

const appear = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function UeberUnsPage() {
  return (
    <Layout
      title={`Über uns | ${BRAND_SHORT}`}
      description={`Lernen Sie das Team und die Werte von ${BRAND_FULL} kennen.`}
      keywords={[
        `${BRAND_SHORT} Team`,
        'Facility Management Unternehmen',
        'Facility Services Berlin',
        'Unternehmen Brandenburg',
      ]}
    >
      <div className="space-y-20">
        <motion.header
          className="space-y-4 text-center sm:text-left"
          initial="hidden"
          animate="visible"
          variants={appear}
        >
          <p className="text-sm uppercase tracking-[0.3em] text-primary-700">Unternehmen</p>
          <h1 className="text-3xl font-semibold text-ink sm:text-4xl">
            Über die {BRAND_LEGAL}
          </h1>
          <p className="text-base text-ink-muted">
            Die {BRAND_LEGAL} ist ein regional verwurzeltes Unternehmen mit Sitz in
            Berlin & Brandenburg. Als moderner Dienstleister im Facility Management stehen wir für
            Qualität, Transparenz und Kundennähe.
          </p>
        </motion.header>

        <section className="grid gap-10 lg:grid-cols-2">
          <motion.div
            className="space-y-4 text-base text-ink-muted"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={appear}
          >
            <p>
              Unser Team verbindet Fachwissen mit Engagement und sorgt dafür, dass Immobilien aller
              Art gepflegt, sicher und nachhaltig betrieben werden. Wir hören zu, verstehen
              Anforderungen und entwickeln passende Dienstleistungskonzepte.
            </p>
            <p>
              Dabei setzen wir auf verlässliche Kommunikation, moderne Arbeitsmittel und ein
              motiviertes Team vor Ort. So entstehen langfristige Partnerschaften, auf die sich
              unsere Kundinnen und Kunden verlassen können.
            </p>
            <div className="rounded-3xl border border-white/20 bg-surface-elevated/85 p-8 shadow-soft">
              <h2 className="text-lg font-semibold text-ink">Was uns wichtig ist</h2>
              <p className="mt-4 text-sm text-ink-muted">
                Qualität bedeutet für uns, Immobilien ganzheitlich zu betrachten – von der Sauberkeit
                bis zur technischen Infrastruktur. Transparenz schaffen wir durch nachvollziehbare
                Prozesse. Und Kundennähe zeigt sich in schnellen Reaktionszeiten und persönlichen
                Ansprechpartnern.
              </p>
            </div>
          </motion.div>
          <motion.div
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={appear}
          >
            <div className="relative overflow-hidden rounded-3xl border border-white/20 bg-surface-elevated/80 shadow-soft">
              <div className="relative aspect-[3/2]">
                <Image
                  src="/images/about/about-team-meeting.png"
                  alt={`Führungskräfte von ${BRAND_FULL} besprechen Projekte im hellen Loftbüro`}
                  width={1200}
                  height={800}
                  className="h-full w-full object-cover"
                  sizes="(min-width: 1024px) 480px, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary-600/25 via-transparent to-transparent" aria-hidden="true" />
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-3xl overflow-hidden rounded-3xl border border-white/20 bg-surface-elevated/80 shadow-soft">
              <div className="relative aspect-[3/2]">
                <Image
                  src="/images/about/about-values-team.png"
                  alt={`Team von ${BRAND_FULL} steht gemeinsam im Servicekorridor`}
                  width={1200}
                  height={800}
                  className="h-full w-full object-cover"
                  sizes="(min-width: 1024px) 960px, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent" aria-hidden="true" />
              </div>
            </div>
          </motion.div>
        </section>

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
          <motion.h2 className="text-2xl font-semibold text-ink" variants={appear}>
            Werte, die uns leiten
          </motion.h2>
          <motion.div className="grid gap-6 md:grid-cols-3">
            {values.map((value) => (
              <motion.article
                key={value.title}
                variants={appear}
                className="rounded-3xl border border-white/20 bg-surface-elevated/85 p-6 shadow-soft transition hover:-translate-y-1"
              >
                <h3 className="text-lg font-semibold text-ink">{value.title}</h3>
                <p className="mt-3 text-sm text-ink-muted">{value.description}</p>
              </motion.article>
            ))}
          </motion.div>
        </motion.section>
      </div>
    </Layout>
  )
}
