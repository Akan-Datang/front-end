"use client"

import Image from "next/image"
import { Container } from "@/components/ui/container"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

interface HeroSectionProps {
  className?: string
}

export function HeroSection({ className }: HeroSectionProps) {
  // Set immediate=true untuk animasi langsung saat halaman dimuat
  const { ref, shouldAnimate } = useScrollAnimation(0.1, true, true)

  return (
    <section className={cn("py-12 md:py-16 lg:py-20", className)}>
      <Container>
        <div ref={ref} className="flex flex-col items-center text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
          >
            Who We Are & What We Do
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
            className="text-muted-foreground max-w-3xl mb-10 text-base md:text-lg"
          >
            At Auriga Sakti Teknologi, we combine cutting-edge web development with top-tier cybersecurity to help businesses
            thrive safely in the digital world. Your security and success are our priorities.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={shouldAnimate ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="w-full max-w-4xl rounded-2xl overflow-hidden shadow-lg"
          >
            <Image
              src="/aboutus/about.png"
              alt="Auriga Sakti Teknologi Team"
              width={800}
              height={400}
              className="w-full h-auto object-contain"
            />
          </motion.div>
        </div>
      </Container>
    </section>
  )
}

