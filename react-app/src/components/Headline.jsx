import { motion } from 'framer-motion'

export default function Headline() {
  return (
    <section className="flex justify-center px-[var(--spacing-md)] min-h-[100svh] md:portrait:aspect-video md:portrait:h-auto md:portrait:min-h-[unset] items-center">
      <motion.h2
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="w-full max-w-[37.5rem] md:max-w-[80rem] mx-auto text-center font-display text-[4.4rem] md:text-[8rem] font-normal leading-[1.12] tracking-normal text-savr-green"
      >
        Turn invisible kitchen losses into visible, measurable savings.
      </motion.h2>
    </section>
  )
}
