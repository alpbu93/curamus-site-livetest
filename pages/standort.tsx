import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import Layout from '@/components/Layout'
import { BRAND_FULL, BRAND_SHORT } from '@/lib/brand'

const RegionMap = dynamic(() => import('@/components/RegionMap'), { ssr: false })

const fade = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
}

export default function StandortPage() {
  return (
    <Layout
      title={`Standort | ${BRAND_SHORT}`}
      description={`${BRAND_FULL} – tätig in Berlin und Brandenburg. Lernen Sie unseren Standort kennen.`}
      keywords={[
        'Standort Berlin Brandenburg',
        'Facility Management Region',
        `${BRAND_SHORT} Standort`,
        'Facility Services Berlin',
      ]}
    >
      <div className="space-y-20">
        <motion.header
          className="space-y-4 text-center sm:text-left"
          initial="hidden"
          animate="visible"
          variants={fade}
        >
          <p className="text-sm uppercase tracking-[0.3em] text-primary-700">Region</p>
          <h1 className="text-3xl font-semibold text-ink sm:text-4xl">
            Berlin & Brandenburg
          </h1>
          <p className="text-base text-ink-muted">
            Wir betreuen Immobilienportfolios in der Hauptstadtregion. Kurze Wege und lokale Teams
            ermöglichen eine schnelle Reaktionszeit sowie ein tiefes Verständnis für regionale
            Anforderungen.
          </p>
        </motion.header>

        <section className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <motion.div
            className="space-y-4 text-base text-ink-muted"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fade}
          >
            <p>
              Unsere Koordinationszentrale befindet sich in Berlin. Von hier steuern wir Einsätze in
              der gesamten Metropolregion. Für Objekte in Brandenburg verfügen wir über mobile Teams
              und Servicepartner, die eng mit uns zusammenarbeiten.
            </p>
            <p>
              Ein starkes Netzwerk aus Spezialdienstleistern stellt sicher, dass auch besondere
              Anforderungen – etwa in der Industrie oder Forschung – zuverlässig umgesetzt werden.
            </p>
            <div className="rounded-3xl border border-white/20 bg-surface-elevated/85 p-6 shadow-soft">
              <h2 className="text-lg font-semibold text-ink">Kontaktaufnahme</h2>
              <p className="mt-3 text-sm text-ink-muted">
                Vereinbaren Sie einen digitalen Termin mit unserem Team. Wir analysieren Ihren Bedarf
                und entwickeln ein regional passendes Servicekonzept.
              </p>
              <Link
                href="/kontakt"
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary-600 to-primary-400 px-5 py-2 text-sm font-medium text-white shadow-soft transition hover:shadow-glow"
              >
                Jetzt Termin vereinbaren
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </motion.div>
          <motion.div
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fade}
          >
            <div className="relative overflow-hidden rounded-3xl border border-white/20 bg-surface-elevated/80 shadow-soft">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/location-berlin-skyline.png"
                  alt="Abendliche Skyline von Berlin mit Fernsehturm und Spree"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 520px, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary-600/20 via-transparent to-transparent" aria-hidden="true" />
              </div>
            </div>
            <RegionMap />
          </motion.div>
        </section>
      </div>
    </Layout>
  )
}
