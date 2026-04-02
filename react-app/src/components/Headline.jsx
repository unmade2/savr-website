import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Headline() {
  const sectionRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  // Map scroll progress to animation values for "invisible"
  // The word reveals as the section scrolls into view (0.2 → 0.5 of scroll range)
  const clipRight = useTransform(scrollYProgress, [0.2, 0.45], [0, 100])
  const wordOpacity = useTransform(scrollYProgress, [0.2, 0.45], [0.15, 1])
  const blurAmount = useTransform(scrollYProgress, [0.2, 0.45], [12, 0])

  // Whole heading fade-in tied to scroll
  const headingOpacity = useTransform(scrollYProgress, [0.05, 0.25], [0, 1])
  const headingY = useTransform(scrollYProgress, [0.05, 0.25], [48, 0])

  return (
    <section
      ref={sectionRef}
      className="flex justify-center px-[var(--spacing-md)] min-h-[100svh] md:portrait:aspect-video md:portrait:h-auto md:portrait:min-h-[unset] items-center"
    >
      <motion.h2
        style={{ opacity: headingOpacity, y: headingY }}
        className="w-full max-w-[37.5rem] md:max-w-[80rem] mx-auto text-center font-display text-[4.4rem] md:text-[8rem] font-normal leading-[1.12] tracking-normal text-savr-green"
      >
        Turn{' '}
        <motion.span
          style={{
            opacity: wordOpacity,
            clipPath: useTransform(clipRight, (v) => `inset(0 ${100 - v}% 0 0)`),
            filter: useTransform(blurAmount, (v) => `blur(${v}px)`),
          }}
          className="inline-block"
        >
          invisible
        </motion.span>{' '}
        kitchen losses into visible, measurable savings.
      </motion.h2>
    </section>
  )
}
