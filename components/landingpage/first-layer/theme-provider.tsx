"use client"

import { createContext, useContext, useEffect, useState } from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import type { ThemeProviderProps } from "next-themes"

// Create a context to access theme functions throughout the app
export const ThemeContext = createContext({
  toggleTheme: () => {},
  isDark: false,
})

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const [mounted, setMounted] = useState(false)

  // After mounting, we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  return <NextThemesProvider {...props}>{mounted && children}</NextThemesProvider>
}

// Custom hook to use theme throughout the app
export function useThemeContext() {
  return useContext(ThemeContext)
}

