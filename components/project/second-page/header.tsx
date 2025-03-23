"use client"
import { Badge } from "@/components/ui/badge"
import { Container } from "@/components/ui/container"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { motion } from "framer-motion"

interface ProjectHeaderProps {
  title: string
  description: string
  tags: string[]
}

export function ProjectHeader({ title, description, tags }: ProjectHeaderProps) {
  const { ref, shouldAnimate } = useScrollAnimation(0.2, false)

  return (
    <Container className="py-8">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col gap-4"
      >
        <div className="flex items-center">
          <Badge variant="outline" className="mr-2">
            🚀 Project Overview
          </Badge>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-foreground">{title}</h1>

        <p className="text-muted-foreground max-w-3xl">{description}</p>

        <div className="flex flex-wrap gap-2 mt-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </motion.div>
    </Container>
  )
}

