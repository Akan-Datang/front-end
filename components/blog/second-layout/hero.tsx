import { Container } from "@/components/ui/container"
import { Star } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"

export function HeroSection() {
  // Set once to false to make animations replay when scrolling back
  const badgeAnimation = useScrollAnimation(0.1, false)
  const headingAnimation = useScrollAnimation(0.1, false)
  const textAnimation = useScrollAnimation(0.1, false)

  return (
    <section className="py-12 md:py-20 bg-muted/30 dark:bg-muted/10">
      <Container>
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <div
            ref={badgeAnimation.ref}
            className={cn(
              "transition-all duration-700 transform",
              badgeAnimation.shouldAnimate ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0",
            )}
          >
            <Badge
              variant="outline"
              className="rounded-full px-4 py-1 border-primary/20 bg-primary/5 text-primary hover:bg-primary/10"
            >
              <Star className="w-3.5 h-3.5 mr-1.5 fill-yellow-400 stroke-yellow-500" />
              Blog
            </Badge>
          </div>

          <div
            ref={headingAnimation.ref}
            className={cn(
              "transition-all duration-800 delay-100 transform",
              headingAnimation.shouldAnimate ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
            )}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">Latest Insights & Articles</h1>
          </div>

          <div
            ref={textAnimation.ref}
            className={cn(
              "transition-all duration-800 delay-200 transform",
              textAnimation.shouldAnimate ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
            )}
          >
            <p className="text-lg text-muted-foreground">
              Stay updated with the latest trends, tips, and best practices in technology and cybersecurity.
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}

