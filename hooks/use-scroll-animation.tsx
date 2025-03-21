"use client"

import { useEffect, useState, useRef } from "react"
import { useInView } from "framer-motion"

export function useScrollAnimation(threshold = 0.1, once = true, immediate = false) {
  const ref = useRef<HTMLDivElement>(null)
  const [shouldAnimate, setShouldAnimate] = useState(immediate)
  const isInView = useInView(ref, {
    once,
    amount: threshold,
  })

  useEffect(() => {
    if (immediate) {
      setShouldAnimate(true)
    } else if (isInView) {
      setShouldAnimate(true)
    } else if (!once) {
      setShouldAnimate(false)
    }
  }, [isInView, immediate, once])

  return { ref, shouldAnimate }
}

