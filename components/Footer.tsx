import Link from 'next/link'
import { useTheme } from '@/components/ThemeProvider'
import { BRAND_LEGAL, BRAND_SHORT } from '@/lib/brand'

export function Footer() {
  const { theme, toggleTheme } = useTheme()
  return (
    <footer
      className="relative overflow-hidden border-t border-white/10 bg-gradient-to-br from-ink via-[#081520] to-[#041018] py-12 text-white"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.12),transparent_55%)]" aria-hidden="true" />
      <div className="relative z-10 mx-auto grid max-w-6xl gap-8 px-4 sm:grid-cols-2 lg:grid-cols-4 lg:max-w-7xl">
        <div className="space-y-3">
          <p className="text-lg font-semibold text-white">{BRAND_SHORT}</p>
          <p className="text-sm text-white/70">
            Ganzheitliches Facility Management für Unternehmen in Berlin und Brandenburg.
          </p>
        </div>
        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-wider text-white/60">Kontakt</p>
          <div className="space-y-1 text-sm text-white/70">
            <p>
              <a className="transition hover:text-white" href="tel:+4933772040071">
                +49 (0)3377 2040071
              </a>
            </p>
            <p>
              <a className="transition hover:text-white" href="mailto:info@curamus-facility.de">
                info@curamus-facility.de
              </a>
            </p>
            <p>
              <a className="transition hover:text-white" href="mailto:kontakt@curamus-facility.de">
                kontakt@curamus-facility.de (Bewerbungen)
              </a>
            </p>
          </div>
        </div>
        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-wider text-white/60">
            Navigation
          </p>
          <ul className="space-y-2 text-sm text-white/70">
            {[
              { href: '/', label: 'Startseite' },
              { href: '/dienstleistungen', label: 'Dienstleistungen' },
              { href: '/referenzen', label: 'Referenzen' },
              { href: '/karriere', label: 'Karriere' },
              { href: '/standort', label: 'Standort' },
            ].map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-wider text-white/60">
            Rechtliches
          </p>
          <ul className="space-y-2 text-sm text-white/70">
            <li>
              <Link href="/impressum" className="transition hover:text-white">
                Impressum
              </Link>
            </li>
            <li>
              <Link href="/datenschutz" className="transition hover:text-white">
                Datenschutz
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="relative z-10 mt-10 border-t border-white/10 pt-6 text-center text-xs text-white/60">
        © {new Date().getFullYear()} {BRAND_LEGAL}. Alle Rechte vorbehalten.
        <button
          type="button"
          onClick={toggleTheme}
          className="ml-3 inline-flex items-center gap-1 rounded-full border border-white/20 px-3 py-1 text-[11px] font-medium text-white/80 transition hover:border-white/40 hover:text-white"
        >
          {theme === 'modern' ? 'Klassische Ansicht' : 'Modernes Design'}
        </button>
      </div>
    </footer>
  )
}

export default Footer
