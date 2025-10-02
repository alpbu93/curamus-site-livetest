import Head from 'next/head'
import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { BRAND_FULL, BRAND_SHORT } from '@/lib/brand'

interface LayoutProps {
  children: ReactNode
  title?: string
  description?: string
  keywords?: string[] | string
}

const defaultTitle = `${BRAND_SHORT} Facility Management`
const defaultDescription =
  `${BRAND_SHORT} unterstützt Unternehmen mit intelligentem, nachhaltigem Facility Management in Berlin und Brandenburg.`
const defaultKeywords = [
  BRAND_SHORT,
  BRAND_FULL,
  'Facility Management',
  'Gebäudereinigung',
  'Berlin',
  'Brandenburg',
]

export function Layout({
  children,
  title = defaultTitle,
  description = defaultDescription,
  keywords,
}: LayoutProps) {
  const keywordList = Array.isArray(keywords)
    ? keywords
    : typeof keywords === 'string' && keywords.trim().length > 0
      ? keywords.split(',').map((keyword) => keyword.trim())
      : []
  const mergedKeywords = [...defaultKeywords, ...keywordList]
    .map((keyword) => keyword.trim())
    .filter(Boolean)
  const uniqueKeywords = Array.from(new Set(mergedKeywords))

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        {uniqueKeywords.length > 0 && (
          <meta name="keywords" content={uniqueKeywords.join(', ')} />
        )}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={BRAND_FULL} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
      </Head>
      <div className="relative flex min-h-screen flex-col bg-surface transition-colors duration-500">
        <div className="pointer-events-none absolute inset-0 select-none bg-[radial-gradient(circle_at_top,rgba(13,107,113,0.14),transparent_55%)] opacity-90" aria-hidden="true" />
        <Navbar />
        <main className="relative flex-1">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto w-full max-w-6xl px-4 pb-16 pt-12 sm:pt-16 lg:max-w-7xl"
          >
            {children}
          </motion.div>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default Layout
