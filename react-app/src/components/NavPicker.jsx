import { useState, useEffect } from 'react'
import logoFull from '../assets/logo_full.svg'

/* ─────────────────────────────────────────────
   DESIGN 1  — Compact Floating Island
   Tight pill that hugs its content. Not full-
   width at all. Logo left, CTA right, compact.
───────────────────────────────────────────── */
function NavIsland({ scrolled }) {
  return (
    <header className="fixed inset-x-0 top-0 z-[1000] flex justify-center items-start pt-[18px] pointer-events-none">
      <div
        className={`
          flex items-center gap-[20px] px-[20px] py-[10px]
          rounded-full pointer-events-auto
          transition-all duration-300
          ${scrolled
            ? 'bg-white/90 backdrop-blur-[20px] border border-black/8 shadow-[0_4px_24px_rgba(0,0,0,0.10)]'
            : 'bg-black/30 backdrop-blur-[20px] border border-white/15 shadow-[0_4px_24px_rgba(0,0,0,0.15)]'
          }
        `}
        style={{ width: 'fit-content' }}
      >
        {/* Logo */}
        <a href="/" className="flex items-center no-underline shrink-0">
          <img
            src={logoFull}
            alt="SAVR Logo"
            className={`h-[28px] w-auto block transition-all duration-300 ${scrolled ? '' : 'brightness-0 invert'}`}
          />
        </a>

        {/* Divider */}
        <span
          className={`w-px h-[18px] shrink-0 transition-colors duration-300 ${scrolled ? 'bg-black/12' : 'bg-white/25'}`}
        />

        {/* CTA */}
        <a
          href="#sign-up"
          className={`
            inline-flex items-center justify-center
            h-[36px] px-[18px] rounded-full
            text-[13px] font-medium leading-none
            whitespace-nowrap no-underline shrink-0
            transition-all duration-200
            ${scrolled
              ? 'bg-[#155c4b] text-white hover:bg-[#0e3f34]'
              : 'bg-white text-[#155c4b] hover:bg-white/90'
            }
          `}
        >
          Request Access
        </a>
      </div>
    </header>
  )
}

/* ─────────────────────────────────────────────
   DESIGN 2  — Split Asymmetric
   Logo floats independently on far left.
   CTA floats independently on far right.
   Nothing connects them — pure air between.
───────────────────────────────────────────── */
function NavSplit({ scrolled }) {
  return (
    <header className="fixed inset-x-0 top-0 z-[1000] flex items-start justify-between px-[28px] pt-[20px] pointer-events-none">
      {/* Logo pill — left */}
      <a
        href="/"
        className={`
          flex items-center px-[16px] py-[10px] rounded-full no-underline
          pointer-events-auto shrink-0
          transition-all duration-300
          ${scrolled
            ? 'bg-white/90 backdrop-blur-[20px] border border-black/8 shadow-[0_4px_20px_rgba(0,0,0,0.08)]'
            : 'bg-black/20 backdrop-blur-[20px] border border-white/15'
          }
        `}
      >
        <img
          src={logoFull}
          alt="SAVR Logo"
          className={`h-[26px] w-auto block transition-all duration-300 ${scrolled ? '' : 'brightness-0 invert'}`}
        />
      </a>

      {/* CTA pill — right */}
      <a
        href="#sign-up"
        className={`
          inline-flex items-center justify-center
          h-[44px] px-[22px] rounded-full
          text-[13px] font-medium leading-none
          whitespace-nowrap no-underline
          pointer-events-auto shrink-0
          transition-all duration-200
          ${scrolled
            ? 'bg-[#155c4b] text-white hover:bg-[#0e3f34] shadow-[0_4px_20px_rgba(21,92,75,0.3)]'
            : 'bg-white/95 text-[#155c4b] hover:bg-white shadow-[0_4px_20px_rgba(0,0,0,0.12)]'
          }
        `}
      >
        Request Access →
      </a>
    </header>
  )
}

/* ─────────────────────────────────────────────
   DESIGN 3  — Sleek Horizontal Bar
   Full-width, ultra-thin, Apple-style.
   Frosted glass. Fine bottom border.
   Logo left · CTA right. No pill at all.
───────────────────────────────────────────── */
function NavBar({ scrolled }) {
  return (
    <header
      className={`
        fixed inset-x-0 top-0 z-[1000]
        flex items-center justify-between
        px-[40px] h-[64px]
        transition-all duration-400
        ${scrolled
          ? 'bg-white/85 backdrop-blur-[24px] border-b border-black/8'
          : 'bg-transparent border-b border-white/10'
        }
      `}
    >
      {/* Logo */}
      <a href="/" className="flex items-center no-underline shrink-0">
        <img
          src={logoFull}
          alt="SAVR Logo"
          className={`h-[24px] w-auto block transition-all duration-300 ${scrolled ? '' : 'brightness-0 invert'}`}
        />
      </a>

      {/* CTA */}
      <a
        href="#sign-up"
        className={`
          inline-flex items-center justify-center
          h-[38px] px-[20px] rounded-full
          text-[13px] font-semibold leading-none tracking-[0.01em]
          whitespace-nowrap no-underline
          transition-all duration-200
          ${scrolled
            ? 'bg-[#155c4b] text-white hover:bg-[#0e3f34]'
            : 'border border-white/50 text-white hover:bg-white/10'
          }
        `}
      >
        Request Access
      </a>
    </header>
  )
}

/* ─────────────────────────────────────────────
   NAV PICKER — wraps all three with a floating
   switcher panel at bottom-center.
───────────────────────────────────────────── */
const DESIGNS = [
  { id: 1, label: 'Island',  description: 'Compact pill · hugs content' },
  { id: 2, label: 'Split',   description: 'Logo left · CTA right · free-floating' },
  { id: 3, label: 'Bar',     description: 'Slim full-width · frosted glass' },
]

export default function NavPicker({ onSelect }) {
  const [active, setActive] = useState(0)       // index 0-2
  const [scrolled, setScrolled] = useState(false)
  const [picked, setPicked] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const prev = () => setActive(i => (i - 1 + DESIGNS.length) % DESIGNS.length)
  const next = () => setActive(i => (i + 1) % DESIGNS.length)

  const handlePick = () => {
    setPicked(true)
    if (onSelect) onSelect(DESIGNS[active].id)
  }

  const NavComponent = [NavIsland, NavSplit, NavBar][active]

  return (
    <>
      {/* Render the active navbar */}
      <NavComponent scrolled={scrolled} />

      {/* ── Floating Picker Panel ── */}
      {!picked && (
        <div
          className="fixed bottom-[28px] left-1/2 z-[9999] -translate-x-1/2 pointer-events-auto"
          style={{ width: 'max-content' }}
        >
          <div
            className="flex items-center gap-[12px] px-[14px] py-[10px] rounded-[20px]"
            style={{
              background: 'rgba(18,18,20,0.88)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255,255,255,0.10)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.40)',
            }}
          >
            {/* Prev arrow */}
            <button
              onClick={prev}
              aria-label="Previous nav design"
              className="flex items-center justify-center w-[34px] h-[34px] rounded-full transition-colors duration-150"
              style={{ background: 'rgba(255,255,255,0.08)', color: '#fff', border: 'none', cursor: 'pointer' }}
              onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.16)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.08)')}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M9 11L5 7L9 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {/* Label block */}
            <div className="flex flex-col items-center" style={{ minWidth: '140px' }}>
              <div className="flex items-center gap-[8px] mb-[2px]">
                {DESIGNS.map((_, i) => (
                  <span
                    key={i}
                    onClick={() => setActive(i)}
                    style={{
                      width: i === active ? '20px' : '6px',
                      height: '6px',
                      borderRadius: '999px',
                      background: i === active ? '#34c789' : 'rgba(255,255,255,0.25)',
                      transition: 'all 0.25s ease',
                      cursor: 'pointer',
                      display: 'block',
                    }}
                  />
                ))}
              </div>
              <span style={{ color: '#fff', fontSize: '13px', fontWeight: 600, lineHeight: 1.2 }}>
                {DESIGNS[active].label}
              </span>
              <span style={{ color: 'rgba(255,255,255,0.45)', fontSize: '11px', lineHeight: 1.2 }}>
                {DESIGNS[active].description}
              </span>
            </div>

            {/* Next arrow */}
            <button
              onClick={next}
              aria-label="Next nav design"
              className="flex items-center justify-center w-[34px] h-[34px] rounded-full transition-colors duration-150"
              style={{ background: 'rgba(255,255,255,0.08)', color: '#fff', border: 'none', cursor: 'pointer' }}
              onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.16)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.08)')}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M5 3L9 7L5 11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {/* Divider */}
            <span style={{ width: '1px', height: '32px', background: 'rgba(255,255,255,0.12)' }} />

            {/* Pick button */}
            <button
              onClick={handlePick}
              style={{
                height: '34px',
                padding: '0 16px',
                borderRadius: '999px',
                background: '#155c4b',
                color: '#fff',
                fontSize: '13px',
                fontWeight: 600,
                border: 'none',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                transition: 'background 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.background = '#0e3f34')}
              onMouseLeave={e => (e.currentTarget.style.background = '#155c4b')}
            >
              Use This One ✓
            </button>
          </div>
        </div>
      )}

      {/* Confirmation toast */}
      {picked && (
        <div
          className="fixed bottom-[28px] left-1/2 z-[9999] -translate-x-1/2 pointer-events-none"
          style={{
            background: 'rgba(18,18,20,0.92)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(52,199,137,0.4)',
            borderRadius: '999px',
            padding: '10px 20px',
            color: '#34c789',
            fontSize: '13px',
            fontWeight: 600,
            boxShadow: '0 8px 32px rgba(0,0,0,0.40)',
            whiteSpace: 'nowrap',
          }}
        >
          ✓ &ldquo;{DESIGNS[active].label}&rdquo; selected — tell me and I&apos;ll make it permanent!
        </div>
      )}
    </>
  )
}
