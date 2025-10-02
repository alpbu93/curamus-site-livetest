import { ChangeEvent, FormEvent, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import Layout from '@/components/Layout'
import { BRAND_FULL, BRAND_LEGAL, BRAND_SHORT } from '@/lib/brand'

interface FormState {
  name: string
  email: string
  reason: string
  message: string
}

type FormErrors = Partial<Record<keyof FormState, string>>

const initialState: FormState = {
  name: '',
  email: '',
  reason: '',
  message: '',
}

export default function KontaktPage() {
  const [form, setForm] = useState<FormState>(initialState)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errors, setErrors] = useState<FormErrors>({})
  const [responseMessage, setResponseMessage] = useState<string | null>(null)

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  const validate = (values: FormState): FormErrors => {
    const validationErrors: FormErrors = {}

    if (!values.name.trim()) {
      validationErrors.name = 'Bitte geben Sie Ihren Namen an.'
    }

    if (!values.email.trim()) {
      validationErrors.email = 'Bitte geben Sie Ihre E-Mail-Adresse an.'
    } else if (!emailPattern.test(values.email.trim())) {
      validationErrors.email = 'Bitte geben Sie eine gültige E-Mail-Adresse an.'
    }

    if (!values.reason.trim()) {
      validationErrors.reason = 'Bitte wählen Sie den Grund Ihrer Anfrage aus.'
    }

    if (!values.message.trim()) {
      validationErrors.message = 'Bitte schreiben Sie eine Nachricht.'
    }

    return validationErrors
  }

  const handleFieldChange = (
    field: keyof FormState,
  ) => (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { value } = event.target

    setForm((prev) => ({ ...prev, [field]: value }))

    if (status !== 'idle') {
      setStatus('idle')
    }

    if (responseMessage) {
      setResponseMessage(null)
    }

    setErrors((prev) => {
      if (!prev[field]) {
        return prev
      }
      const next = { ...prev }
      delete next[field]
      return next
    })
  }

  const dismissResponse = () => {
    setResponseMessage(null)
    setStatus('idle')
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setResponseMessage(null)

    const validationErrors = validate(form)

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setErrors({})
    setStatus('loading')

    try {
      const payload = {
        name: form.name.trim(),
        email: form.email.trim(),
        reason: form.reason.trim(),
        message: form.message.trim(),
      }

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      const result = await response.json().catch(() => null)

      if (!response.ok) {
        const errorMessage = typeof result?.error === 'string'
          ? result.error
          : 'Kontaktanfrage konnte nicht gesendet werden. Bitte versuchen Sie es später erneut.'
        throw new Error(errorMessage)
      }

      setStatus('success')
      setResponseMessage('Vielen Dank! Wir melden uns zeitnah.')
      setForm(initialState)
    } catch (error) {
      console.error(error)
      setStatus('error')
      const message = error instanceof Error && error.message ? error.message : null
      setResponseMessage(message ?? 'Es ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut oder kontaktieren Sie uns direkt.')
    }
  }

  return (
    <Layout
      title={`Kontakt | ${BRAND_FULL}`}
      description={`Kontaktieren Sie ${BRAND_FULL} für ein unverbindliches Beratungsgespräch.`}
      keywords={[
        `Kontakt ${BRAND_SHORT}`,
        `Kontakt ${BRAND_FULL}`,
        'Facility Management Anfrage',
        'Kontakt Facility Services Berlin',
        'Angebot Gebäudereinigung',
      ]}
    >
      <div className="space-y-16">
        <header className="space-y-4 text-center sm:text-left">
          <p className="text-sm uppercase tracking-[0.3em] text-primary-700">Kontakt</p>
          <h1 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
            Lassen Sie uns sprechen
          </h1>
          <p className="text-base text-slate-600">
            Haben Sie Fragen oder möchten ein Angebot einholen? Schreiben Sie uns oder greifen Sie
            zum Telefon – wir melden uns schnellstmöglich innerhalb von wenigen Werktagen zurück.
          </p>
        </header>

        <section className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <motion.div
            className="space-y-6 text-sm text-ink-muted"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative overflow-hidden rounded-3xl border border-white/20 bg-surface-elevated/85 shadow-soft">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/contact-support-team.png"
                  alt={`Service-Team von ${BRAND_FULL} beantwortet Telefonanfragen`}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 380px, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary-600/20 via-transparent to-transparent" aria-hidden="true" />
              </div>
            </div>
            <div className="rounded-3xl border border-primary-100 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-slate-900">Direkter Draht</h2>
              <p className="mt-3">
                Telefon:{' '}
                <a
                  className="font-medium text-primary-700 hover:underline"
                  href="tel:+4933772040071"
                >
                  03377 2040071
                </a>
              </p>
              <p className="mt-2">
                E-Mail:{' '}
                <a
                  className="font-medium text-primary-700 hover:underline"
                  href="mailto:info@curamus-facility.de"
                >
                  info@curamus-facility.de
                </a>
              </p>
              <p className="mt-2">
                Bewerbungen:{' '}
                <a
                  className="font-medium text-primary-700 hover:underline"
                  href="mailto:kontakt@curamus-facility.de"
                >
                  kontakt@curamus-facility.de
                </a>
              </p>
              <p className="mt-6 text-xs text-slate-500">
                Wir sind Montag bis Freitag von 8 bis 18 Uhr erreichbar. In dringenden Fällen stehen
                separate Bereitschaftsnummern zur Verfügung.
              </p>
            </div>
            <div className="rounded-3xl border border-primary-100 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-slate-900">Standort</h2>
              <p className="mt-3">{BRAND_LEGAL}</p>
              <p>Saalower Straße 6a</p>
              <p>15806 Zossen</p>
              <p className="mt-1">Berlin & Brandenburg</p>
              <p className="mt-3 text-xs text-slate-500">
                Termine vor Ort nach Vereinbarung. Wir freuen uns auf Ihre Anfrage.
              </p>
            </div>
          </motion.div>

          <motion.form
            noValidate
            onSubmit={handleSubmit}
            className="space-y-6 rounded-3xl border border-white/20 bg-white/95 p-8 shadow-lg"
            style={{
              backgroundImage:
                "linear-gradient(135deg, rgba(255,255,255,0.96), rgba(240,248,255,0.92)), url('/images/patterns/contact-pattern.png')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundBlendMode: 'overlay',
            }}
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
          >
            <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
              Ihr Name
              <input
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? 'contact-name-error' : undefined}
                type="text"
                value={form.name}
                onChange={handleFieldChange('name')}
                className="rounded-xl border border-primary-100 px-4 py-3 text-sm text-slate-900 shadow-sm focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-200"
                placeholder="Vor- und Nachname"
              />
              {errors.name && (
                <p id="contact-name-error" className="text-xs text-red-600">
                  {errors.name}
                </p>
              )}
            </label>

            <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
              E-Mail-Adresse
              <input
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? 'contact-email-error' : undefined}
                type="email"
                value={form.email}
                onChange={handleFieldChange('email')}
                className="rounded-xl border border-primary-100 px-4 py-3 text-sm text-slate-900 shadow-sm focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-200"
                placeholder="name@unternehmen.de"
              />
              {errors.email && (
                <p id="contact-email-error" className="text-xs text-red-600">
                  {errors.email}
                </p>
              )}
            </label>

            <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
              Grund der Anfrage
              <select
                aria-invalid={Boolean(errors.reason)}
                aria-describedby={errors.reason ? 'contact-reason-error' : undefined}
                value={form.reason}
                onChange={handleFieldChange('reason')}
                className="rounded-xl border border-primary-100 px-4 py-3 text-sm text-slate-900 shadow-sm focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-200"
              >
                <option value="">Bitte auswählen</option>
                <option value="Allgemeine Anfrage">Allgemeine Anfrage</option>
                <option value="Angebot anfordern">Angebot anfordern</option>
                <option value="Gebäudereinigung">Gebäudereinigung</option>
                <option value="Hausmeisterdienste">Hausmeisterdienste</option>
                <option value="Technisches Gebäudemanagement">Technisches Gebäudemanagement</option>
                <option value="Sicherheitsdienste in Kooperation">Sicherheitsdienste in Kooperation</option>
                <option value="Grünanlagenpflege">Grünanlagenpflege</option>
                <option value="Winterdienst">Winterdienst</option>
                <option value="Entsorgungsmanagement">Entsorgungsmanagement</option>
                <option value="Bewerbung / Karriere">Bewerbung / Karriere</option>
              </select>
              {errors.reason && (
                <p id="contact-reason-error" className="text-xs text-red-600">
                  {errors.reason}
                </p>
              )}
            </label>

            <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
              Ihre Nachricht
              <textarea
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? 'contact-message-error' : undefined}
                rows={5}
                value={form.message}
                onChange={handleFieldChange('message')}
                className="rounded-xl border border-primary-100 px-4 py-3 text-sm text-slate-900 shadow-sm focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-200"
                placeholder="Beschreiben Sie kurz Ihr Anliegen"
              />
              {errors.message && (
                <p id="contact-message-error" className="text-xs text-red-600">
                  {errors.message}
                </p>
              )}
            </label>

            <div>
              <button
                type="submit"
                disabled={status === 'loading'}
                className="inline-flex items-center justify-center rounded-full bg-primary-700 px-6 py-3 text-sm font-medium text-white shadow transition hover:bg-primary-800 disabled:cursor-not-allowed disabled:bg-slate-300 disabled:text-slate-600"
              >
                {status === 'loading' ? 'Wird gesendet…' : 'Nachricht senden'}
              </button>
              {responseMessage && status !== 'success' && (
                <p className="mt-3 text-sm text-red-600">
                  {responseMessage}
                </p>
              )}
            </div>

            <div className="rounded-2xl border border-primary-100 bg-white/90 p-4 text-xs text-slate-600 shadow-sm">
              <p className="leading-relaxed">
                Mit dem Absenden stimmen Sie der Verarbeitung Ihrer Daten gemäß unserer
                Datenschutzerklärung zu. Ihre Anfrage wird direkt an unser Team weitergeleitet.
              </p>
            </div>
          </motion.form>
        </section>

        <motion.section
          className="space-y-8 rounded-3xl border border-primary-100 bg-primary-50/60 px-6 py-10 shadow-soft lg:px-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.45 }}
        >
          <div className="space-y-4 text-center sm:text-left">
            <p className="text-sm uppercase tracking-[0.3em] text-primary-700">Karriere</p>
            <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">Bewerben bei {BRAND_SHORT}</h2>
            <p className="text-sm text-slate-600 sm:text-base">
              Wir suchen Menschen, die Gebäude lebenswert halten möchten. Damit Sie schnell wissen, ob wir
              zueinander passen, haben wir den Bewerbungsweg transparent gestaltet – von der ersten
              Nachricht bis zum Willkommen im Team.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            <div className="space-y-3 rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="text-base font-semibold text-slate-900">So läuft Ihre Bewerbung ab</h3>
              <ol className="list-decimal space-y-2 pl-6 text-sm text-slate-600">
                <li>
                  Kurze Bewerbung an{' '}
                  <a className="text-primary-700 hover:underline" href="mailto:kontakt@curamus-facility.de">
                    kontakt@curamus-facility.de
                  </a>
                  .
                </li>
                <li>Rückmeldung mit Terminvorschlag innerhalb von zwei Werktagen.</li>
                <li>Kennenlern-Gespräch (online oder vor Ort) und Objektbesichtigung, falls passend.</li>
                <li>Finale Zu-/Absage inklusive Vertragsangebot.</li>
              </ol>
            </div>
            <div className="space-y-3 rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="text-base font-semibold text-slate-900">Das hilft uns bei der Prüfung</h3>
              <ul className="list-disc space-y-2 pl-5 text-sm text-slate-600">
                <li>Kurzprofil mit relevanter Erfahrung oder Lebenslauf</li>
                <li>Bevorzugter Einsatzort (Berlin, Brandenburg oder beides)</li>
                <li>Frühestmöglicher Starttermin und gewünschter Stundenumfang</li>
                <li>Falls vorhanden: Zertifikate (z. B. Sicherheits- oder Reinigungsschulungen)</li>
              </ul>
            </div>
            <div className="space-y-3 rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="text-base font-semibold text-slate-900">Noch Fragen?</h3>
              <p className="text-sm text-slate-600">
                Unser Recruiting-Team ist telefonisch unter{' '}
                <a className="text-primary-700 hover:underline" href="tel:+4933772040071">
                  +49 (0)3377 2040071
                </a>{' '}
                erreichbar. Weitere Einblicke, Benefits und offene Rollen finden Sie auch auf unserer
                <Link className="text-primary-700 hover:underline" href="/karriere">
                  {' '}
                  Karriereseite
                </Link>
                .
              </p>
              <Link
                href="mailto:kontakt@curamus-facility.de"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary-600 px-4 py-2 text-sm font-medium text-white shadow-soft transition hover:bg-primary-500"
              >
                Bewerbungs-E-Mail starten
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </motion.section>
      </div>
      <AnimatePresence>
        {status === 'success' && responseMessage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 px-4 backdrop-blur-sm"
            role="status"
            aria-live="polite"
          >
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.97 }}
              transition={{ duration: 0.35 }}
              className="relative w-full max-w-md rounded-3xl border border-white/20 bg-surface-elevated/95 p-8 text-center shadow-glow"
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-50 text-primary-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="h-6 w-6"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-2xl font-semibold text-ink">Nachricht gesendet</h2>
              <p className="mt-2 text-sm text-ink-muted">{responseMessage}</p>
              <button
                type="button"
                onClick={dismissResponse}
                className="mt-6 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-primary-600 to-primary-400 px-5 py-2 text-sm font-medium text-white shadow-soft transition hover:shadow-glow"
              >
                Fenster schließen
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  )
}
