"use client"

import { Container } from "@/components/ui/container"
import { ContactBadge } from "@/components/service/second-layer/badge"
import { ContactForm } from "@/components/service/second-layer/form"
import { ContactInfo } from "@/components/service/second-layer/contact-info"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { motion } from "framer-motion"

export function ContactSection() {
  const { ref, shouldAnimate } = useScrollAnimation(0.1, false)

  return (
    <section className="py-12 md:py-16 lg:py-20" ref={ref} id="contact-section">
      <Container>
        <motion.div
          className="flex justify-start mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          <ContactBadge />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={shouldAnimate ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <ContactInfo />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={shouldAnimate ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </Container>
    </section>
  )
}

