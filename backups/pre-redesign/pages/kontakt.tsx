import { ChangeEvent, FormEvent, useState } from 'react'
import Image from 'next/image'
import Layout from '@/components/Layout'

interface FormState {
  name: string
  email: string
  message: string
}

type FormErrors = Partial<Record<keyof FormState, string>>

const initialState: FormState = {
  name: '',
  email: '',
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

    if (!values.message.trim()) {
      validationErrors.message = 'Bitte schreiben Sie eine Nachricht.'
    }

    return validationErrors
  }

  const handleFieldChange = (
    field: keyof FormState,
  ) => (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
      title="Kontakt | Curamus"
      description="Kontaktieren Sie Curamus Facility Services für ein unverbindliches Beratungsgespräch."
      keywords={[
        'Kontakt Curamus',
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
            zum Telefon – wir melden uns innerhalb eines Werktages zurück.
          </p>
        </header>

        <section className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="space-y-6 text-sm text-slate-600">
            <div className="relative overflow-hidden rounded-3xl border border-primary-100 bg-white shadow-sm">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/contact-support-team.png"
                  alt="Service-Team von Curamus beantwortet Telefonanfragen"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 380px, 100vw"
                />
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
              <p className="mt-6 text-xs text-slate-500">
                Wir sind Montag bis Freitag von 8 bis 18 Uhr erreichbar. In dringenden Fällen stehen
                separate Bereitschaftsnummern zur Verfügung.
              </p>
            </div>
            <div className="rounded-3xl border border-primary-100 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-slate-900">Standort</h2>
              <p className="mt-3">Beispielstraße 12, 10115 Berlin</p>
              <p className="mt-1">Berlin & Brandenburg</p>
              <p className="mt-3 text-xs text-slate-500">
                Termine vor Ort nach Vereinbarung. Wir freuen uns auf Ihre Anfrage.
              </p>
            </div>
          </div>

          <form
            noValidate
            onSubmit={handleSubmit}
            className="space-y-6 rounded-3xl border border-primary-100 bg-white/95 p-8 shadow-lg"
            style={{
              backgroundImage:
                "linear-gradient(135deg, rgba(255,255,255,0.96), rgba(240,248,255,0.94)), url('/images/patterns/contact-pattern.png')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundBlendMode: 'overlay',
            }}
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
                <p
                  className={`mt-3 text-sm ${status === 'success' ? 'text-primary-700' : 'text-red-600'}`}
                >
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
          </form>
        </section>
      </div>
      {status === 'success' && responseMessage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 px-4 backdrop-blur-sm" role="status" aria-live="polite">
          <div className="relative w-full max-w-md rounded-3xl border border-primary-100 bg-white p-8 text-center shadow-xl">
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
            <h2 className="text-2xl font-semibold text-slate-900">Nachricht gesendet</h2>
            <p className="mt-2 text-sm text-slate-600">{responseMessage}</p>
            <button
              type="button"
              onClick={dismissResponse}
              className="mt-6 inline-flex items-center justify-center rounded-full bg-primary-700 px-5 py-2 text-sm font-medium text-white shadow transition hover:bg-primary-800"
            >
              Fenster schließen
            </button>
          </div>
        </div>
      )}
    </Layout>
  )
}
