"use client"

import { useCounterAnimation } from "@/hooks/use-counter-animation"
import { Container } from "@/components/ui/container"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { useEffect, useState } from "react"

interface StatItemProps {
  value: number
  label: string
  suffix?: string
  delay: number
  isVisible: boolean
}

function StatItem({ value, label, suffix = "", delay, isVisible }: StatItemProps) {
  // Hanya mulai menghitung jika komponen terlihat
  const [shouldCount, setShouldCount] = useState(false)

  useEffect(() => {
    if (isVisible) {
      // Delay sebelum mulai menghitung
      const timer = setTimeout(() => {
        setShouldCount(true)
      }, delay * 1000)

      return () => clearTimeout(timer)
    }
  }, [isVisible, delay])

  const count = useCounterAnimation(shouldCount ? value : 0)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className="flex flex-col items-center"
    >
      <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-2">
        {count}
        {suffix}
      </div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </motion.div>
  )
}

interface StatsCounterProps {
  className?: string
}

export function StatsCounter({ className }: StatsCounterProps) {
  // Set once=true untuk memastikan animasi hanya berjalan sekali
  const { ref, shouldAnimate } = useScrollAnimation(0.2, true)

  return (
    <section className={cn("py-12", className)}>
      <Container>
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {shouldAnimate && (
            <>
              <StatItem value={100} label="Client Reviews" suffix="+" delay={0} isVisible={shouldAnimate} />
              <StatItem value={130} label="Completed Projects" suffix="+" delay={0.2} isVisible={shouldAnimate} />
              <StatItem value={2} label="Years of Experience" suffix="+" delay={0.4} isVisible={shouldAnimate} />
              <StatItem value={50} label="Satisfied Clients" suffix="+" delay={0.6} isVisible={shouldAnimate} />
            </>
          )}
        </div>
      </Container>
    </section>
  )
}

