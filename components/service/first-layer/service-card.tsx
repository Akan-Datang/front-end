"use client"

import Image from "next/image"
import { cn } from "@/lib/utils"
import { ServiceBadge } from "./service-badge"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { motion } from "framer-motion"

interface ServiceCardProps {
  title: string
  description: string
  badgeLabel: string
  imageSrc: string
  imageAlt: string
  className?: string
}

export function ServiceCard({ title, description, badgeLabel, imageSrc, imageAlt, className }: ServiceCardProps) {
  const { ref, shouldAnimate } = useScrollAnimation(0.2, false)

  return (
    <motion.div
      ref={ref}
      className={cn("rounded-xl border bg-card p-6 shadow-sm dark:bg-card/5", className)}
      initial={{ opacity: 0, y: 40 }}
      animate={shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={shouldAnimate ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <ServiceBadge label={badgeLabel} />
          </motion.div>

          <motion.h2
            className="text-3xl font-bold tracking-tight"
            initial={{ opacity: 0, x: -20 }}
            animate={shouldAnimate ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {title}
          </motion.h2>

          <motion.p
            className="text-muted-foreground"
            initial={{ opacity: 0, x: -20 }}
            animate={shouldAnimate ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {description}
          </motion.p>
        </div>

        <motion.div
          className="relative overflow-hidden rounded-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={shouldAnimate ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Image
            src={imageSrc || "/placeholder.svg"}
            alt={imageAlt}
            width={600}
            height={400}
            className="h-full w-full object-cover"
          />
        </motion.div>
      </div>
    </motion.div>
  )
}

