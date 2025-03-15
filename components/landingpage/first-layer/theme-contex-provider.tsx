"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { ThemeContext } from "./theme-provider"

export function ThemeContextProvider({ children }: { children: React.ReactNode }) {
  const { theme, setTheme } = useTheme()
  const [isDark, setIsDark] = useState(false)

  // Toggle theme function that can be called from anywhere
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  // Update isDark state when theme changes
  useEffect(() => {
    setIsDark(theme === "dark")
  }, [theme])

  return <ThemeContext.Provider value={{ toggleTheme, isDark }}>{children}</ThemeContext.Provider>
}

