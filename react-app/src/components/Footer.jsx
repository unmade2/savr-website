import { InstagramIcon, XIcon, LinkedInIcon } from './Icons'
import footerBg from '../assets/footer_bg.webp'

export default function Footer() {
  return (
    <footer className="relative flex flex-col mt-auto px-[var(--spacing-md)] pt-[1.2rem] pb-[calc(var(--spacing-md)*2)] md:p-[var(--spacing-md)]">
      {/* Background Image */}
      <div className="absolute inset-x-0 bottom-0 w-full aspect-[375/392] md:aspect-auto md:h-[50rem] pointer-events-none overflow-clip">
        <picture className="absolute inset-0 w-full h-full md:w-[144rem] md:h-[50rem] md:inset-auto md:top-0 md:left-1/2 md:-translate-x-1/2">
          <img
            alt="Footer Background"
            loading="lazy"
            className="w-full h-full object-cover"
            src={footerBg}
          />
        </picture>
      </div>

      {/* Content */}
      <div className="relative flex flex-wrap justify-between md:justify-start gap-y-[3.6rem] gap-x-[2.4rem] md:gap-y-[2rem] md:gap-x-[4rem] w-full mt-auto">
        {/* Social Links */}
        <div className="flex justify-center md:justify-start gap-[1.6rem] md:gap-[0.8rem] w-full md:w-auto">
          <h2 className="hidden md:block text-gray-extra-dark text-[1.2rem] leading-[1.12] tracking-[0.012rem]">
            Social
          </h2>
          <SocialLink href="https://www.instagram.com/savr_ai" label="Instagram" icon={<InstagramIcon />} />
          <SocialLink href="https://x.com/savr_ai" label="X" icon={<XIcon />} />
          <SocialLink href="https://www.linkedin.com/company/savr-ai" label="LinkedIn" icon={<LinkedInIcon />} />
        </div>

        {/* Join Us */}
        <div className="flex gap-[2.4rem] md:gap-[0.8rem]">
          <h2 className="hidden md:block text-gray-extra-dark text-[1.2rem] leading-[1.12] tracking-[0.012rem]">
            Join Us
          </h2>
          <a
            href="/careers"
            className="
              text-[1.2rem] leading-[1.12] tracking-[0.012rem] no-underline
              text-neutral-black
              hover:underline
              transition-all duration-200
            "
          >
            Careers
          </a>
        </div>

        {/* Legal */}
        <div className="flex gap-[2.4rem] md:gap-[0.8rem]">
          <h2 className="hidden md:block text-gray-extra-dark text-[1.2rem] leading-[1.12] tracking-[0.012rem]">
            Legal
          </h2>
          <a
            href="/privacy-policy"
            className="
              text-[1.2rem] leading-[1.12] tracking-[0.012rem] no-underline
              text-neutral-black
              hover:underline
              transition-all duration-200
            "
          >
            Privacy
          </a>
        </div>

        {/* Copyright */}
        <span className="text-gray-extra-dark text-[1.2rem] leading-[1.12] tracking-[0.012rem] ml-auto">
          SAVR © 2026
        </span>
      </div>
    </footer>
  )
}

function SocialLink({ href, label, icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer nofollow"
      aria-label={label}
      className="
        flex items-center gap-[0.4rem]
        text-[1.2rem] leading-[1.12] tracking-[0.012rem] no-underline
        text-neutral-black
        transition-all duration-200
        group
      "
    >
      <span className="hidden md:block hover:underline">{label}</span>
      <span className="md:hidden flex items-center justify-center w-[4.4rem] h-[4.4rem] min-w-[4.4rem] rounded-full border border-black/8 transition-colors duration-200 hover:border-current group-hover:border-current">
        <span className="w-[2.4rem] min-w-[2.4rem] h-auto text-current">
          {icon}
        </span>
      </span>
    </a>
  )
}
