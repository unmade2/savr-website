import { useEffect, useRef, useState } from 'react'

export default function Headline() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="flex justify-center px-[var(--spacing-md)] min-h-[100svh] md:portrait:aspect-video md:portrait:h-auto md:portrait:min-h-[unset] items-center">
      <h2
        ref={ref}
        className={`
          w-full max-w-[37.5rem] md:max-w-[80rem] mx-auto text-center
          font-display text-[4.4rem] md:text-[8rem] font-normal leading-[1.12] tracking-normal
          text-savr-green
          transition-all duration-700 ease-out
          ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
        `}
      >
        Turn invisible kitchen losses into visible, measurable savings.
      </h2>
    </section>
  )
}
