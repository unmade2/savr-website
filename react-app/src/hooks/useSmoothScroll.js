import { useEffect, useRef } from 'react'
import Lenis from 'lenis'

/**
 * Custom hook to initialise Lenis smooth-scroll on the page.
 *
 * Options reference → https://lenis.darkroom.engineering/
 *
 * @param {Object} options – Lenis constructor overrides
 * @returns {React.MutableRefObject<Lenis|null>} ref to the Lenis instance
 */
export default function useSmoothScroll(options = {}) {
  const lenisRef = useRef(null)

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,           // scroll duration (seconds)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easeOutExpo
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      touchMultiplier: 2,
      ...options,
    })

    lenisRef.current = lenis

    // RAF loop
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
      lenisRef.current = null
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return lenisRef
}
