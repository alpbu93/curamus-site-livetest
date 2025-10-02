import Image from 'next/image'
import Layout from '@/components/Layout'

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

export default function UeberUnsPage() {
  return (
    <Layout
      title="Über uns | CURAMUS"
      description="Lernen Sie das Team und die Werte von CURAMUS facility services kennen."
      keywords={[
        'CURAMUS Team',
        'Facility Management Unternehmen',
        'Facility Services Berlin',
        'Unternehmen Brandenburg',
      ]}
    >
      <div className="space-y-16">
        <header className="space-y-4 text-center sm:text-left">
          <p className="text-sm uppercase tracking-[0.3em] text-primary-700">Unternehmen</p>
          <h1 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
            Über die CURAMUS facility services GmbH
          </h1>
          <p className="text-base text-slate-600">
            Die CURAMUS facility services GmbH ist ein regional verwurzeltes Unternehmen mit Sitz in
            Berlin & Brandenburg. Als moderner Dienstleister im Facility Management stehen wir für
            Qualität, Transparenz und Kundennähe.
          </p>
        </header>

        <section className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-4 text-base text-slate-600">
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
          </div>
          <div className="space-y-6">
            <div className="relative overflow-hidden rounded-3xl border border-primary-100 bg-white shadow-sm">
              <div className="relative aspect-[3/2]">
                <Image
                  src="/images/about/about-team-meeting.png"
                  alt="CURAMUS Führungskräfte besprechen Projekte im hellen Loftbüro"
                  width={1200}
                  height={800}
                  className="h-full w-full object-cover"
                  sizes="(min-width: 1024px) 480px, 100vw"
                />
              </div>
            </div>
            <div className="rounded-3xl border border-primary-100 bg-white p-8 shadow-sm">
              <h2 className="text-lg font-semibold text-slate-900">Was uns wichtig ist</h2>
              <p className="mt-4 text-sm text-slate-600">
                Qualität bedeutet für uns, Immobilien ganzheitlich zu betrachten – von der Sauberkeit
                bis zur technischen Infrastruktur. Transparenz schaffen wir durch nachvollziehbare
                Prozesse. Und Kundennähe zeigt sich in schnellen Reaktionszeiten und persönlichen
                Ansprechpartnern.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-8">
          <h2 className="text-2xl font-semibold text-slate-900">Werte, die uns leiten</h2>
          <div className="relative overflow-hidden rounded-3xl border border-primary-100 bg-white shadow-sm">
            <div className="relative aspect-[3/2]">
              <Image
                src="/images/about/about-values-team.png"
                alt="Team von CURAMUS facility services steht gemeinsam im Servicekorridor"
                width={1200}
                height={800}
                className="h-full w-full object-cover"
                sizes="(min-width: 1024px) 960px, 100vw"
              />
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {values.map((value) => (
              <article
                key={value.title}
                className="rounded-3xl border border-primary-100 bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-slate-900">{value.title}</h3>
                <p className="mt-3 text-sm text-slate-600">{value.description}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  )
}
