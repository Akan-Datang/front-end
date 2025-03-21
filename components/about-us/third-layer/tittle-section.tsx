"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"

interface SectionTitleProps {
  title: string
}

export function SectionTitle({ title }: SectionTitleProps) {
  const { ref, shouldAnimate } = useScrollAnimation(0.1, false)

  return (
    <h2
      ref={ref}
      className={cn(
        "text-3xl md:text-4xl font-bold tracking-tight transition-all duration-700",
        shouldAnimate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
      )}
    >
      {title}
    </h2>
  )
}

