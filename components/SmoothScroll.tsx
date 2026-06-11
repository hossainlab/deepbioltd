'use client'

import { useEffect, useState } from 'react'
import Lenis from 'lenis'

export const SmoothScroll: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(
        'ontouchstart' in window || navigator.maxTouchPoints > 0 || window.innerWidth < 768
      )
    }
    checkMobile()
    window.addEventListener('resize', checkMobile, { passive: true })
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    if (isMobile) return

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.5,
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    const rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
    }
  }, [isMobile])

  return null
}
