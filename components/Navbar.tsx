import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { AnimatePresence, motion } from 'framer-motion'
import { BRAND_FULL, BRAND_SHORT } from '@/lib/brand'

const navItems = [
  { href: '/', label: 'Startseite' },
  { href: '/ueber-uns', label: 'Über uns' },
  { href: '/dienstleistungen', label: 'Dienstleistungen' },
  { href: '/referenzen', label: 'Referenzen' },
  { href: '/karriere', label: 'Karriere' },
  { href: '/standort', label: 'Standort' },
  { href: '/impressum', label: 'Impressum' },
  { href: '/datenschutz', label: 'Datenschutz' },
]

export function Navbar() {
  const { pathname } = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const [isCompacted, setIsCompacted] = useState(false)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsCompacted(window.scrollY > 24)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={hasAnimated.current ? false : { opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      onAnimationComplete={() => {
        hasAnimated.current = true
      }}
      className={`sticky top-0 z-40 border-b border-white/10 bg-surface-elevated/80 backdrop-blur-2xl transition-all duration-300 ${
        isCompacted ? 'shadow-soft' : ''
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 lg:max-w-7xl">
        <Link
          href="/"
          className="flex items-center gap-2 text-xl font-semibold text-primary-900"
          aria-label={`${BRAND_FULL} Startseite`}
        >
          <Image
            src="/images/logo-mark.png"
            alt="Stilisiertes C mit Gebäudesilhouette als CURAMUS-Logomarke"
            width={120}
            height={36}
            className="h-9 w-auto"
            priority
          />
          <span className="hidden sm:inline">{BRAND_SHORT}</span>
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
        <nav className="hidden items-center gap-6 text-sm font-medium text-ink-muted sm:flex">
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
            className="rounded-full bg-gradient-to-r from-primary-600 to-primary-400 px-5 py-2 text-white shadow-soft transition hover:shadow-glow"
          >
            Kontakt
          </Link>
        </nav>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="space-y-2 border-t border-white/10 bg-surface-elevated px-4 py-4 text-sm font-medium text-ink sm:hidden shadow-soft"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block rounded-2xl px-3 py-2 transition hover:bg-primary-50 hover:text-primary-700 ${
                  pathname === item.href ? 'bg-primary-50 text-primary-700' : ''
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/kontakt"
              className="block rounded-full bg-gradient-to-r from-primary-600 to-primary-400 px-3 py-2 text-center text-white shadow-soft transition hover:shadow-glow"
              onClick={() => setIsOpen(false)}
            >
              Kontakt
            </Link>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Navbar
