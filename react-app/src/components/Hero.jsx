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

      {/* Scroll indicator */}
      <div
        className={`
          absolute inset-x-0 bottom-0 flex flex-col items-center
          pb-6 md:pb-10
          transition-all duration-[400ms] ease-[cubic-bezier(0.24,0.42,0.42,0.92)]
          ${showScrollText ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'}
        `}
        style={{ pointerEvents: 'none' }}
      >
        {/* Mouse icon — desktop */}
        <div className="hidden md:flex flex-col items-center gap-3">
          <div
            className="scroll-mouse"
            style={{
              width: '26px',
              height: '42px',
              borderRadius: '13px',
              border: '2px solid rgba(255,255,255,0.7)',
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <div
              className="scroll-mouse-wheel"
              style={{
                width: '3px',
                height: '8px',
                borderRadius: '2px',
                background: 'rgba(255,255,255,0.9)',
                position: 'absolute',
                top: '8px',
                animation: 'scrollWheel 2s ease-in-out infinite',
              }}
            />
          </div>
          <span
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '12px',
              fontWeight: 500,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.7)',
            }}
          >
            Scroll
          </span>
        </div>

        {/* Chevron — mobile */}
        <div className="flex md:hidden flex-col items-center gap-2">
          <span
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '12px',
              fontWeight: 500,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.7)',
            }}
          >
            Scroll
          </span>
          <div
            style={{ animation: 'bounceDown 2s ease-in-out infinite' }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              style={{ display: 'block' }}
            >
              <path
                d="M4 7L10 13L16 7"
                stroke="rgba(255,255,255,0.8)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
