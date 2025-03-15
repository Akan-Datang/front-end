"use client"

import { useTheme } from "next-themes"

export function ThemeTest() {
  const { theme } = useTheme()

  return (
    <div className="fixed bottom-4 right-4 bg-background border border-border rounded-md p-2 text-xs">
      Current theme: {theme}
    </div>
  )
}

