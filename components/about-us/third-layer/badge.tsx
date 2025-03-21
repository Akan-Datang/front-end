"use client"

import { cn } from "@/lib/utils"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

interface BadgeProps {
  text: string
  className?: string
}

export function Badge({ text, className }: BadgeProps) {
  const { ref, shouldAnimate } = useScrollAnimation(0.1, false)

  return (
    <div
      ref={ref}
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-sm font-medium bg-background transition-all duration-500",
        shouldAnimate ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10",
        className,
      )}
    >
      <span className="text-yellow-500">✦</span> {text}
    </div>
  )
}

