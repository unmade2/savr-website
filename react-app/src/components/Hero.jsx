import { useState, useEffect } from 'react'
import hero1 from '../assets/hero 1.webp'
import hero2 from '../assets/hero 2.webp'
import hero3 from '../assets/hero 3.webp'
import hero4 from '../assets/hero 4.webp'
import hero5 from '../assets/hero 5.webp'

const heroImages = [hero1, hero2, hero3, hero4, hero5]

export default function Hero() {
  const [showScrollText, setShowScrollText] = useState(true)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollText(window.scrollY < 100)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length)
    }, 5000) // Change image every 5 seconds
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative w-full min-h-[100svh] md:portrait:aspect-video md:portrait:h-auto md:portrait:min-h-[unset] flex justify-center px-[var(--spacing-md)] overflow-hidden text-white">
      {/* Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {/* Slideshow background */}
        {heroImages.map((src, index) => (
          <img
            key={src}
            src={src}
            alt=""
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-true-black/20" style={{ background: 'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.2) 100%), rgba(0,0,0,0.2)' }} />
      </div>

      {/* Content */}
      <div
        className={`
          absolute inset-0 flex flex-col justify-end items-start
          p-[var(--spacing-lg)] px-[calc(var(--spacing-md)*2)]
          transition-all duration-[240ms] ease-[cubic-bezier(0.24,0.42,0.42,0.92)]
          ${showScrollText ? 'opacity-100 visible' : 'opacity-0 invisible'}
        `}
      >
        <span className="font-body text-[1.4rem] text-white text-center w-full animate-pulse-soft">
          Scroll to Explore
        </span>
      </div>
    </section>
  )
}
