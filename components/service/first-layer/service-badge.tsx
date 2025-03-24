"use client"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

interface ServiceBadgeProps {
  label: string
  className?: string
}

export function ServiceBadge({ label, className }: ServiceBadgeProps) {
  return (
    <motion.div
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium",
        className,
      )}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <motion.span
        className="mr-1.5"
        animate={{ rotate: [0, 20, 0] }}
        transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatDelay: 1 }}
      >
        ✨
      </motion.span>
      {label}
    </motion.div>
  )
}

