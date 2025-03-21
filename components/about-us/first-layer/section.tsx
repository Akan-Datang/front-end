import { HeroSection } from "./hero"
import { AboutBadge } from "./about-badge"
import { CompanyDescription } from "./description"
import { StatsCounter } from "./stats-counter"
import { cn } from "@/lib/utils"

interface AboutUsSectionProps {
  className?: string
}

export function AboutUsSection({ className }: AboutUsSectionProps) {
  return (
    <div className={cn("py-8 md:py-12", className)}>
      <HeroSection />
      <AboutBadge />
      <CompanyDescription />
      <StatsCounter />
    </div>
  )
}

