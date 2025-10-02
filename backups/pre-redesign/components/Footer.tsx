import Link from 'next/link'

export function Footer() {
  return (
    <footer
      className="relative overflow-hidden border-t border-primary-100 bg-white/80 py-10"
      style={{ backgroundImage: "url('/images/footer-texture.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <span className="absolute inset-0 bg-white/70" aria-hidden="true" />
      <div className="relative z-10 mx-auto grid max-w-6xl gap-8 px-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-3">
          <p className="text-lg font-semibold text-primary-900">CURAMUS</p>
          <p className="text-sm text-slate-600">
            Ganzheitliches Facility Management für Unternehmen in Berlin und Brandenburg.
          </p>
        </div>
        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">Kontakt</p>
          <p className="text-sm text-slate-600">
            <a className="hover:text-primary-700" href="tel:+4930123456789">
              +49 (0)30 123 456 789
            </a>
          </p>
          <p className="text-sm text-slate-600">
            <a className="hover:text-primary-700" href="mailto:info@curamus-facility.de">
              info@curamus-facility.de
            </a>
          </p>
        </div>
        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
            Navigation
          </p>
          <ul className="space-y-2 text-sm text-slate-600">
            {[
              { href: '/', label: 'Startseite' },
              { href: '/dienstleistungen', label: 'Dienstleistungen' },
              { href: '/referenzen', label: 'Referenzen' },
              { href: '/standort', label: 'Standort' },
            ].map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-primary-700">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
            Rechtliches
          </p>
          <ul className="space-y-2 text-sm text-slate-600">
            <li>
              <Link href="/impressum" className="hover:text-primary-700">
                Impressum
              </Link>
            </li>
            <li>
              <Link href="/datenschutz" className="hover:text-primary-700">
                Datenschutz
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="relative z-10 mt-10 border-t border-primary-100 pt-6 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} CURAMUS facility services GmbH. Alle Rechte vorbehalten.
      </div>
    </footer>
  )
}

export default Footer
