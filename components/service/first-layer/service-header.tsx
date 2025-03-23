"use client"

import { cn } from "@/lib/utils"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { motion } from "framer-motion"

interface ServiceHeaderProps {
  title: string
  description: string
  className?: string
}

export function ServiceHeader({ title, description, className }: ServiceHeaderProps) {
  const { ref, shouldAnimate } = useScrollAnimation(0.2, false)

  return (
    <motion.div
      ref={ref}
      className={cn("text-center max-w-3xl mx-auto mb-16", className)}
      initial={{ opacity: 0, y: 30 }}
      animate={shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.h1
        className="text-4xl font-bold mb-6"
        initial={{ opacity: 0 }}
        animate={shouldAnimate ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {title}
      </motion.h1>
      <motion.p
        className="text-muted-foreground text-lg"
        initial={{ opacity: 0 }}
        animate={shouldAnimate ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        {description}
      </motion.p>
    </motion.div>
  )
}

