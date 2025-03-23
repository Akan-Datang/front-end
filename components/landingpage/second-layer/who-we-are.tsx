"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { StatsCard } from "./stats-card"
import { users } from "@/lib/api/user"
import { useRouter } from 'next/navigation'; 

export function HwoWeAre() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)
    const router = useRouter();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Set isVisible to true jika komponen masuk ke viewport
        if (entry.isIntersecting) {
          setIsVisible(true)
        } else {
          // Set isVisible to false jika komponen keluar dari viewport
          setIsVisible(false)
        }
      },
      { threshold: 0.1 } // Threshold rendah untuk memastikan animasi dipicu lebih sering
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  const clientUsers = users.slice(0, 3)

  return (
    <section className="py-20" ref={sectionRef}>
      <Container>
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center rounded-full border bg-background px-3 py-1 text-sm"
          >
            ⭐ About Us
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-center text-3xl font-bold sm:text-4xl md:text-5xl"
          >
            Who We Are & What We Do
          </motion.h1>

          <div className="mt-16 grid w-full gap-8 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col"
            >
              <div className="border-b pb-6">
                <p className="text-lg text-muted-foreground">
                  We specialize in website development and cyber security, helping businesses grow with secure,
                  high-performing digital solutions. From stunning websites to top-tier protection, we ensure your
                  success in the digital world.
                </p>
              </div>
              <Button
              onClick={()=> router.push('/about-us')}
                className="mt-8 self-start bg-[#5CC1E0] text-white hover:bg-[#4BA8C7] dark:bg-white dark:text-black dark:hover:bg-gray-300"
                size="lg"
              >
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>

            {/* Right Column */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid gap-4 sm:grid-cols-2 lg:gap-6"
            >
              <StatsCard
                title="Clients"
                description="100+ Happy Clients Worldwide"
                images={clientUsers.map((user) => user.avatar)}
              />

              <StatsCard 
                title="Projects" 
                description="130+ projects have been perfectly made" 
              />
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  )
}