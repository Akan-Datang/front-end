"use client"

import React from "react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function MissionSection() {
  // Gunakan `once: false` agar animasi bisa berulang
  const { shouldAnimate, ref } = useScrollAnimation(0.2, false)

  return (
    <section
      ref={ref}
      className="w-full py-16 px-4 md:px-8 transition-colors duration-300 bg-background"
    >
      <div
        className={`max-w-6xl mx-auto transition-all duration-700 ease-in-out ${
          shouldAnimate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="flex justify-start mb-6">
          <div className="inline-flex items-center rounded-full border border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700 px-4 py-2">
            <span className="text-yellow-400 mr-2">★</span>
            <span className="font-medium">Our Mission</span>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-16">
          <div className="w-full lg:w-1/2">
            <h3 className="text-3xl sm:text-4xl font-bold leading-tight">
              Empowering Businesses with Secure Digital Solutions
            </h3>
          </div>

          <div className="w-full lg:w-1/2">
            <p className="text-base sm:text-lg leading-relaxed text-foreground/80">
              Our mission is to empower businesses with cutting-edge digital solutions that
              enhance productivity, security, and customer engagement. We strive to bridge
              the gap between technology and user experience with innovative approaches.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
