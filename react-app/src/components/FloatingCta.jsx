import { useState, useEffect } from 'react'
import { PlayIcon } from './Icons'

export default function FloatingCta() {
  const [visible, setVisible] = useState(false)
  const [showVideo, setShowVideo] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 200)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Floating Button */}
      <div
        className={`
          fixed inset-0 z-[900] p-[var(--spacing-md)]
          flex items-end justify-end pointer-events-none
          transition-all duration-[240ms] ease-[cubic-bezier(0.24,0.42,0.42,0.92)]
          ${visible ? 'opacity-100 visible' : 'opacity-0 invisible'}
        `}
      >
        <button
          type="button"
          aria-label="Watch Full Video"
          onClick={() => setShowVideo(true)}
          className="
            pointer-events-auto
            flex items-center justify-center
            h-[4.4rem] px-[2rem] md:px-[2.4rem]
            rounded-full text-[1.4rem] font-normal leading-none whitespace-nowrap
            bg-neutral-light-gray
            text-neutral-black
            border border-black/8
            transition-all duration-[240ms] ease-[cubic-bezier(0.24,0.42,0.42,0.92)]
            hover:bg-savr-green hover:border-savr-green hover:text-white
            max-md:aspect-square max-md:p-0
            shadow-lg
          "
        >
          <span className="md:hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <PlayIcon />
          </span>
          <span className="hidden md:block">Watch Full Video</span>
        </button>
      </div>

      {/* Video Modal */}
      {showVideo && (
        <div
          className="fixed inset-0 z-[1200] flex items-center justify-center p-[var(--spacing-md)]"
          onClick={() => setShowVideo(false)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-white/88 backdrop-blur-[0.8rem] animate-fade-in" />
          
          {/* Content */}
          <div
            className="relative w-full max-w-[96rem] aspect-video animate-fade-in-up"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowVideo(false)}
              className="absolute -top-12 right-0 w-[4.4rem] h-[4.4rem] rounded-full bg-neutral-light-gray border border-black/8 flex items-center justify-center text-neutral-black hover:bg-neutral-black hover:text-white transition-all duration-200"
              aria-label="Close"
            >
              <span className="relative w-[1.6rem] h-[1.6rem]">
                <span className="absolute inset-0 bg-current w-[1.6rem] h-[0.12rem] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45" />
                <span className="absolute inset-0 bg-current w-[1.6rem] h-[0.12rem] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-45" />
              </span>
            </button>
            <iframe
              className="w-full h-full rounded-2xl"
              src="https://www.youtube.com/embed/0H1LSLipOVI?si=ffHSyFAfR7p0KaWg&autoplay=1&playsinline=1"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </>
  )
}
