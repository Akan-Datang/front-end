"use client"
import Image from "next/image"
import { Container } from "@/components/ui/container"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { motion } from "framer-motion"

interface ProjectImageProps {
  src: string
  alt: string
}

export function ProjectImage({ src, alt }: ProjectImageProps) {
  const { ref, shouldAnimate } = useScrollAnimation(0.2, false)

  return (
    <Container className="py-8">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={shouldAnimate ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="w-full rounded-lg overflow-hidden border border-border"
      >
        <Image
          src={src || "/placeholder.svg"}
          alt={alt}
          width={1200}
          height={675}
          className="w-full h-auto object-cover"
        />
      </motion.div>
    </Container>
  )
}

