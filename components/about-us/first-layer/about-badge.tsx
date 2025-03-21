"use client"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

interface AboutBadgeProps {
  className?: string
}

export function AboutBadge({ className }: AboutBadgeProps) {
  const { ref, shouldAnimate } = useScrollAnimation(0.1, true)

  return (
    <div className={cn("flex justify-center my-12", className)} ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 10, scale: 0.9 }}
        animate={shouldAnimate ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 10, scale: 0.9 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="inline-flex items-center px-4 py-2 rounded-full border border-primary/20 bg-background shadow-sm"
      >
        <span className="text-yellow-400 mr-2">★</span>
        <span className="text-sm font-medium">About TechCrafindo</span>
      </motion.div>
    </div>
  )
}

