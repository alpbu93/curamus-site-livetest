import Head from 'next/head'
import type { ReactNode } from 'react'
import { Navbar } from './Navbar'
import { Footer } from './Footer'

interface LayoutProps {
  children: ReactNode
  title?: string
  description?: string
  keywords?: string[] | string
}

const defaultTitle = 'CURAMUS Facility Management'
const defaultDescription =
  'Wir unterstützen Unternehmen mit intelligentem, nachhaltigem Facility Management in Berlin und Brandenburg.'
const defaultKeywords = [
  'CURAMUS',
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
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="CURAMUS facility services" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
      </Head>
      <div className="flex min-h-screen flex-col bg-gradient-to-b from-primary-50 via-white to-white">
        <Navbar />
        <main className="flex-1">
          <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:py-16">{children}</div>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default Layout
