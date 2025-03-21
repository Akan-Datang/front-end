"use client"

import { Badge } from "./badge"
import { SectionTitle } from "./tittle-section"
import { FeatureCard } from "./feture-card"
import { Rocket, Shield, Search, Key } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"

export function TrustSection() {
  const { ref, shouldAnimate } = useScrollAnimation(0.05, false)

  return (
    <section
      ref={ref}
      className={cn(
        "py-12 md:py-16 px-4 container mx-auto transition-opacity duration-500",
        shouldAnimate ? "opacity-100" : "opacity-0",
      )}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-start gap-4 mb-10 md:mb-16">
          <Badge text="Why Our Clients Trust Us" />
          <SectionTitle title="Delivering Secure & Scalable Solutions" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FeatureCard
            icon={<Rocket size={24} />}
            title="Scalable & Reliable Solutions"
            description="Our web solutions are designed for growth, providing seamless performance as your business expands."
            delay={100}
          />

          <FeatureCard
            icon={<Shield size={24} />}
            title="Proven Security Expertise"
            description="We safeguard businesses with top-tier cybersecurity measures, ensuring protection from cyber threats."
            delay={200}
          />

          <FeatureCard
            icon={<Search size={24} />}
            title="Continuous Monitoring & Support"
            description="We proactively monitor and update security systems to keep your website safe 24/7."
            delay={300}
          />

          <FeatureCard
            icon={<Key size={24} />}
            title="Trusted by Industry Leaders"
            description="Businesses across various industries rely on our expertise to secure and optimize their digital presence."
            delay={400}
          />
        </div>
      </div>
    </section>
  )
}

