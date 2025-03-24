"use client"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { motion } from "framer-motion"

interface ProjectDemoButtonProps {
  link: string
}

export function ProjectDemoButton({ link }: ProjectDemoButtonProps) {
  const { ref, shouldAnimate } = useScrollAnimation(0.1, false)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={shouldAnimate ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
    >
      <Button className="flex items-center gap-2" size="lg" onClick={() => window.open(link, "_blank")}>
        <span>Live Demo</span>
        <ExternalLink className="w-4 h-4" />
      </Button>
    </motion.div>
  )
}

