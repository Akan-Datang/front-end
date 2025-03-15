"use client"

import { useState, useEffect } from "react"

export function useCounterAnimation(target: number, duration = 2000) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number | null = null

    function animation(currentTime: number) {
      if (!startTime) startTime = currentTime
      const timeElapsed = currentTime - startTime
      const progress = Math.min(timeElapsed / duration, 1)
      setCount(Math.floor(progress * target))
      if (progress < 1) {
        requestAnimationFrame(animation)
      }
    }

    if (target > 0) {
      requestAnimationFrame(animation)
    } else {
      setCount(0)
    }
  }, [target, duration])

  return count
}

