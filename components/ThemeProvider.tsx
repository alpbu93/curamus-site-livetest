import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'

type ThemeMode = 'modern' | 'classic'

interface ThemeContextValue {
  theme: ThemeMode
  setTheme: (mode: ThemeMode) => void
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined)

function applyTheme(mode: ThemeMode) {
  if (typeof document === 'undefined') {
    return
  }
  const themeValue = mode === 'classic' ? 'classic' : 'modern'
  document.documentElement.setAttribute('data-theme', themeValue)
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<ThemeMode>('modern')

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }
    const stored = window.localStorage.getItem('curamus-theme') as ThemeMode | null
    if (stored === 'classic' || stored === 'modern') {
      setThemeState(stored)
      applyTheme(stored)
    } else {
      applyTheme('modern')
    }
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }
    applyTheme(theme)
    window.localStorage.setItem('curamus-theme', theme)
  }, [theme])

  const setTheme = (mode: ThemeMode) => {
    setThemeState(mode)
  }

  const toggleTheme = () => {
    setThemeState((prev) => (prev === 'modern' ? 'classic' : 'modern'))
  }

  const value = useMemo<ThemeContextValue>(
    () => ({ theme, setTheme, toggleTheme }),
    [theme],
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider')
  }
  return context
}
