"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Container } from "@/components/ui/container"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"

interface BlogHeroProps {
  title: string
  description: string
  badgeText?: string
  longDescription?: string
  className?: string
}

export function BlogHero({
  title,
  description,
  badgeText = "✨ Exploring the Future of Digital Innovation",
  longDescription,
  className,
}: BlogHeroProps) {
  const { ref, shouldAnimate } = useScrollAnimation(0.1, true)

  return (
    <section className={cn("py-12 md:py-16 lg:py-20 w-full", className)}>
      <Container>
        <div
          ref={ref}
          className={cn(
            "max-w-4xl mx-auto text-center space-y-6 transition-all duration-700",
            shouldAnimate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          )}
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">{title}</h1>

          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">{description}</p>

          <div>
            <Button className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground">Read More</Button>
          </div>

          {badgeText && (
            <div className="pt-4">
              <Badge
                variant="outline"
                className="px-4 py-1.5 text-sm rounded-full border border-border bg-background/50"
              >
                {badgeText}
              </Badge>
            </div>
          )}

          {longDescription && (
            <div className="pt-6">
              <p className="text-center text-muted-foreground max-w-3xl mx-auto">{longDescription}</p>
            </div>
          )}
        </div>
      </Container>
    </section>
  )
}

