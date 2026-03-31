import { useState, useEffect, useRef } from 'react'
import heroMobile from '../assets/hero_mobile.jpg'
import logoAnimation from '../assets/logo_animation.mp4'

export default function Hero() {
  const [showScrollText, setShowScrollText] = useState(true)
  const videoRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollText(window.scrollY < 100)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {})
    }
  }, [])

  return (
    <section className="relative w-full min-h-[100svh] md:portrait:aspect-video md:portrait:h-auto md:portrait:min-h-[unset] flex justify-center px-[var(--spacing-md)] overflow-hidden text-white">
      {/* Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {/* Poster image */}
        <picture className="absolute inset-0 w-full h-full">
          <source
            media="(min-width: 768px)"
            srcSet="https://cdn.sanity.io/images/w2mhvsaj/production/80bf2389202e2f096b05570bfb4a0c1f91e2c423-1920x1080.jpg?fm=webp&q=75"
          />
          <img
            className="w-full h-full object-cover"
            src={heroMobile}
            alt=""
          />
        </picture>

        {/* Video overlay */}
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          disableRemotePlayback
          muted
          loop
          playsInline
          autoPlay
          preload="auto"
        >
          <source type="video/mp4" src={logoAnimation} />
        </video>

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
