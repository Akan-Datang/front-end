import type React from "react"
import { cn } from "@/lib/utils"

interface ContainerProps {
  children: React.ReactNode
  className?: string
  size?: "default" | "large" | "full"
}

export function Container({ children, className, size = "default" }: ContainerProps) {
  return (
    <div
      className={cn(
        "container mx-auto px-4",
        size === "default" ? "max-w-5xl" : size === "large" ? "max-w-7xl" : "max-w-full px-0",
        className,
      )}
    >
      {children}
    </div>
  )
}

