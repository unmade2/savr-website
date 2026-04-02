import { useState, useRef, useEffect } from 'react'
import { GoogleIcon, AppleIcon } from './Icons'

export default function SignUp() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const sectionRef = useRef(null)
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
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
    }
  }

  return (
    <section
      id="sign-up"
      ref={sectionRef}
      className="px-[var(--spacing-md)] py-[3.2rem] md:py-[4.6rem] scroll-mt-[10rem] md:scroll-mt-[11.6rem]"
    >
      <div className="w-full grid">
        {/* Initial Content */}
        <div
          className={`
            flex flex-col items-center justify-center gap-[2.4rem] md:gap-[4.4rem]
            col-start-1 row-start-1
            transition-all duration-[240ms] ease-[cubic-bezier(0.24,0.42,0.42,0.92)]
            ${submitted ? 'opacity-0 invisible pointer-events-none -translate-y-[2.4rem]' : ''}
            ${visible ? 'animate-fade-in-up' : 'opacity-0'}
          `}
        >
          {/* Description */}
          <div className="flex flex-col items-center gap-[1.6rem]">
            <h2 className="w-full max-w-[37.5rem] md:max-w-[90rem] text-center font-display text-[3.2rem] md:text-[4.4rem] font-normal leading-[1.12] text-neutral-black">
              SAVR is entering beta
            </h2>
            <p className="w-full max-w-[37.5rem] md:max-w-[50rem] text-center text-gray-400 text-[1.6rem] leading-[1.4] font-body">
              We are reviewing applications to join our platform, and look forward to welcoming you soon.
            </p>
          </div>

          {/* Form Card */}
          <div className="flex justify-center w-full max-w-[33.5rem] md:max-w-[40rem]">
            <div className="w-full bg-neutral-light-gray border border-black/8 rounded-[6.6rem] p-[4.4rem] flex justify-center">
              <div className="flex flex-col items-center gap-[0.8rem] md:gap-[1.6rem] w-full relative">
                {/* OAuth Providers */}
                <div className="flex flex-col gap-[1.2rem] w-full">
                  <button
                    type="button"
                    className="
                      flex items-center justify-center gap-[0.8rem]
                      h-[4.4rem] px-[2rem] md:px-[2.4rem]
                      rounded-full text-[1.4rem] font-normal leading-none whitespace-nowrap
                      bg-black/8 border border-black/8
                      text-neutral-black
                      transition-all duration-[240ms] ease-[cubic-bezier(0.24,0.42,0.42,0.92)]
                      hover:bg-neutral-black hover:border-neutral-black hover:text-neutral-white
                     
                    "
                  >
                    <GoogleIcon />
                    Continue with Google
                  </button>
                  <button
                    type="button"
                    className="
                      flex items-center justify-center gap-[0.8rem]
                      h-[4.4rem] px-[2rem] md:px-[2.4rem]
                      rounded-full text-[1.4rem] font-normal leading-none whitespace-nowrap
                      bg-black/8 border border-black/8
                      text-neutral-black
                      transition-all duration-[240ms] ease-[cubic-bezier(0.24,0.42,0.42,0.92)]
                      hover:bg-neutral-black hover:border-neutral-black hover:text-neutral-white
                     
                    "
                  >
                    <AppleIcon />
                    Continue with Apple
                  </button>
                </div>

                {/* Divider */}
                <div className="flex items-center gap-[2.4rem] w-full h-[4.8rem]">
                  <div className="flex-1 h-px bg-black/8" />
                  <span className="text-gray-400 text-[1.2rem] text-center leading-[1.12] tracking-[0.012rem]">or</span>
                  <div className="flex-1 h-px bg-black/8" />
                </div>

                {/* Email form */}
                <form className="flex flex-col gap-[1.2rem] w-full" onSubmit={handleSubmit}>
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="
                      h-[4.4rem] px-[2.8rem] rounded-full
                      bg-transparent border border-black/8
                      text-neutral-black
                      text-[1.2rem] leading-[1.12] tracking-[0.012rem]
                      placeholder:text-gray-400
                      focus:outline-none focus:border-savr-green
                      transition-colors duration-200
                    "
                  />
                  <button
                    type="submit"
                    className="
                      flex items-center justify-center
                      h-[4.4rem] px-[2rem] md:px-[2.4rem]
                      rounded-full text-[1.4rem] font-normal leading-none whitespace-nowrap
                      bg-black/8 border border-black/8
                      text-neutral-black
                      transition-all duration-[240ms] ease-[cubic-bezier(0.24,0.42,0.42,0.92)]
                      hover:bg-savr-green hover:border-savr-green hover:text-white
                    "
                  >
                    Continue with Email
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Success Content */}
        <div
          className={`
            flex flex-col items-center justify-center gap-[1.6rem]
            col-start-1 row-start-1
            transition-all duration-[240ms] ease-[cubic-bezier(0.24,0.42,0.42,0.92)] delay-[240ms]
            ${submitted ? 'opacity-100 visible pointer-events-auto' : 'opacity-0 invisible pointer-events-none'}
          `}
        >
          <div className="flex flex-col items-center gap-[1.6rem]">
            <h2 className="text-center font-display text-[3.2rem] md:text-[4.4rem] font-normal leading-[1.12] text-neutral-black">
              You're signed up
            </h2>
            <p className="text-center text-gray-400 text-[1.6rem] leading-[1.4] font-body">
              We are reviewing applications to join our platform, and look forward to welcoming you soon.
            </p>
          </div>
          <div className="w-full max-w-[30rem] md:max-w-[31.2rem] aspect-square flex items-center justify-center">
            <div className="w-32 h-32 rounded-full bg-savr-green/10 flex items-center justify-center">
              <svg className="w-16 h-16 text-savr-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
