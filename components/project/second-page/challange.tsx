"use client"
import { Container } from "@/components/ui/container"
import { Badge } from "@/components/ui/badge"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { motion } from "framer-motion"

export interface Challenge {
  id: number
  title: string
  description: string
  solution: string
}

interface ProjectChallengesProps {
  challenges: Challenge[]
}

export function ProjectChallenges({ challenges }: ProjectChallengesProps) {
  const { ref, shouldAnimate } = useScrollAnimation(0.1, false)

  return (
    <Container className="py-12">
      <div className="flex flex-col gap-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5 }}
          className="flex items-center"
        >
          <Badge variant="outline" className="mr-2">
            🔍 Challenges & Solutions
          </Badge>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-2xl md:text-3xl font-bold mb-8"
        >
          The tech stack that powered the website.
        </motion.h2>

        <div className="space-y-8">
          {challenges.map((challenge, index) => (
            <motion.div
              key={challenge.id}
              initial={{ opacity: 0, y: 30 }}
              animate={shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="grid md:grid-cols-[200px_1fr] gap-4"
            >
              <h3 className="text-xl font-semibold">Challenge {challenge.id}</h3>
              <div className="space-y-2">
                <p className="text-foreground">{challenge.description}</p>
                <p className="text-muted-foreground">
                  <span className="font-medium text-foreground">Solution:</span> {challenge.solution}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Container>
  )
}

