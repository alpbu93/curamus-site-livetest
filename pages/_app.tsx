import type { AppProps } from 'next/app'
import '@/styles/globals.css'
import 'leaflet/dist/leaflet.css'
import { ThemeProvider } from '@/components/ThemeProvider'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
