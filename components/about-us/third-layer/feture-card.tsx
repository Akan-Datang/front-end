"use client"

import type { ReactNode } from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"

interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
  delay?: number
}

export function FeatureCard({ icon, title, description, delay = 0 }: FeatureCardProps) {
  const { ref, shouldAnimate } = useScrollAnimation(0.2, false)

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700 transform",
        shouldAnimate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
      )}
      style={{
        transitionDelay: `${delay}ms`,
      }}
    >
      <Card className="border rounded-lg h-full">
        <CardHeader className="pb-2">
          <div className="w-12 h-12 rounded-full bg-sky-200 dark:bg-sky-900 flex items-center justify-center text-sky-500 dark:text-sky-300">
            {icon}
          </div>
        </CardHeader>
        <CardContent>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </CardContent>
      </Card>
    </div>
  )
}

