"use client"

import { Container } from "@/components/ui/container"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

interface CompanyDescriptionProps {
  className?: string
}

export function CompanyDescription({ className }: CompanyDescriptionProps) {
  const { ref, shouldAnimate } = useScrollAnimation(0.1, true)

  return (
    <section className={cn("py-6", className)}>
      <Container>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-base md:text-lg leading-relaxed">
            TechCrafindo is a technology-driven company dedicated to delivering high-quality web development and
            cybersecurity solutions. We specialize in creating secure, scalable, and innovative digital platforms
            tailored to meet modern business needs. With a team of experienced developers and security experts, we
            ensure that every website, application, and digital solution we build is not only functional and
            user-friendly but also protected against potential cyber threats.
          </p>
        </motion.div>
      </Container>
    </section>
  )
}

