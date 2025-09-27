import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'

const navItems = [
  { href: '/', label: 'Startseite' },
  { href: '/ueber-uns', label: 'Über uns' },
  { href: '/dienstleistungen', label: 'Dienstleistungen' },
  { href: '/referenzen', label: 'Referenzen' },
  { href: '/standort', label: 'Standort' },
  { href: '/impressum', label: 'Impressum' },
  { href: '/datenschutz', label: 'Datenschutz' },
]

export function Navbar() {
  const { pathname } = useRouter()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="border-b border-primary-100 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link
          href="/"
          className="flex items-center gap-2 text-xl font-semibold text-primary-900"
          aria-label="CURAMUS Facility Services Startseite"
        >
          <Image
            src="/images/logo-mark.png"
            alt="Stilisiertes C mit Gebäudesilhouette als Curamus-Logomarke"
            width={120}
            height={36}
            className="h-9 w-auto"
            priority
          />
          <span className="hidden sm:inline">curamus</span>
        </Link>
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md border border-primary-200 p-2 text-primary-700 transition hover:bg-primary-100 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 sm:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Menü öffnen"
        >
          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 sm:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`transition hover:text-primary-700 ${
                pathname === item.href ? 'text-primary-700' : ''
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/kontakt"
            className="rounded-full bg-primary-700 px-5 py-2 text-white shadow transition hover:bg-primary-800"
          >
            Kontakt
          </Link>
        </nav>
      </div>
      {isOpen && (
        <nav className="space-y-2 border-t border-primary-100 bg-white px-4 py-4 text-sm font-medium text-slate-700 sm:hidden">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`block rounded-lg px-3 py-2 transition hover:bg-primary-50 hover:text-primary-700 ${
                pathname === item.href ? 'bg-primary-50 text-primary-700' : ''
              }`}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/kontakt"
            className="block rounded-full bg-primary-700 px-3 py-2 text-center text-white shadow hover:bg-primary-800"
            onClick={() => setIsOpen(false)}
          >
            Kontakt
          </Link>
        </nav>
      )}
    </header>
  )
}

export default Navbar
