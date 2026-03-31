import { useState, useEffect } from 'react'
import logoFull from '../assets/logo_full.svg'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className="fixed inset-x-0 top-0 z-[1000] flex items-center px-[var(--spacing-md)] h-[7.6rem] md:h-[9.2rem] pointer-events-none overflow-visible"
    >
      <div
        className={`
          relative z-1 w-full flex items-center justify-between
          rounded-full px-[24px] py-[12px] mt-[16px]
          transition-all duration-300
          pointer-events-auto
          ${scrolled
            ? 'bg-white/80 backdrop-blur-[16px] backdrop-saturate-[180%] border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.12)]'
            : 'bg-white/15 backdrop-blur-[16px] backdrop-saturate-[180%] border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.1)]'
          }
        `}
      >
        {/* Logo */}
        <a
          href="/"
          className="flex items-center no-underline"
          style={{ width: 'auto', maxWidth: 'none' }}
        >
          <img
            src={logoFull}
            alt="SAVR Logo"
            className={`h-[32px] md:h-[52px] w-auto block transition-all duration-300 ${
              scrolled ? '' : 'brightness-0 invert'
            }`}
          />
        </a>

        {/* Nav */}
        <nav aria-label="Main Navigation" className="flex items-center gap-[0.8rem]">
          <a
            href="#sign-up"
            role="button"
            aria-label="Sign Up"
            className={`
              inline-flex items-center justify-center
              h-[4.4rem] px-[2rem] md:px-[2.4rem]
              rounded-full text-[1.4rem] font-normal leading-none
              whitespace-nowrap no-underline
              transition-all duration-[240ms] ease-[cubic-bezier(0.24,0.42,0.42,0.92)]
              border
              ${scrolled
                ? 'bg-neutral-light-gray text-neutral-black border-black/8 hover:bg-savr-green hover:border-savr-green hover:text-white'
                : 'bg-neutral-light-gray text-neutral-black border-black/8 hover:bg-savr-green hover:border-savr-green hover:text-white'
              }
            `}
          >
            Request Access
          </a>
        </nav>
      </div>
    </header>
  )
}
