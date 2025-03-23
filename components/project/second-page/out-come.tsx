"use client"
import { Container } from "@/components/ui/container"
import { Badge } from "@/components/ui/badge"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { motion } from "framer-motion"

interface ProjectOutcomeProps {
  outcome: string
}

export function ProjectOutcome({ outcome }: ProjectOutcomeProps) {
  const { ref, shouldAnimate } = useScrollAnimation(0.1, false)

  return (
    <Container className="py-12">
      <div className="flex flex-col gap-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center"
        >
          <Badge variant="outline" className="mr-2">
            ✨ Outcome
          </Badge>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-lg text-muted-foreground leading-relaxed">{outcome}</p>
        </motion.div>
      </div>
    </Container>
  )
}

