// src/components/call-to-action/section.tsx
"use client"

import React from 'react'
import { Container } from '@/components/ui/container'
import { Button } from '@/components/ui/button'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { cn } from '@/lib/utils'

interface CallToActionProps {
  className?: string
  title?: string
  subtitle?: string
  buttonText?: string
  buttonLink?: string
}

export function CallToActionSection({
  className,
  title = "Let's Build Something Great Together!",
  subtitle = "Have a project in mind? Let's collaborate! Contact us today and take your business to the next level.",
  buttonText = "Contact Us",
  buttonLink = "#contact",
}: CallToActionProps) {
  // Setting once=false to allow re-animation when scrolling up and down
  const { ref, shouldAnimate } = useScrollAnimation(0.3, false)
  
  return (
    <section 
      ref={ref}
      className={cn(
        "py-16 w-full transition-all duration-700",
        className,
        shouldAnimate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      )}
    >
      <Container className="relative">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
          <div className="max-w-2xl">
            <h2 className={cn(
              "text-3xl md:text-4xl font-bold text-foreground mb-4 transition-all duration-700 delay-100",
              shouldAnimate ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            )}>{title}</h2>
            <p className={cn(
              "text-muted-foreground transition-all duration-700 delay-200",
              shouldAnimate ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            )}>{subtitle}</p>
          </div>
          <div className={cn(
            "mt-4 lg:mt-0 transition-all duration-700 delay-300",
            shouldAnimate ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          )}>
            <Button 
              size="lg" 
              className="bg-sky-500 hover:bg-sky-600 text-white dark:bg-sky-600 dark:hover:bg-sky-700 rounded-full px-8"
              asChild
            >
              <a href={buttonLink}>{buttonText}</a>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}