import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const paragraphs = [
  "India's hospitality sector faces rising input costs. With LPG, edible oils, and proteins becoming more expensive, food waste is bleeding margins.",
  "Industry estimates suggest 4–16% of food purchased by Indian hotels ends up as waste. For a premium property with INR 8–12 Cr annual F&B revenue, that means losing INR 32–192 Lakhs annually to preventable inefficiencies.",
  "Most hotel kitchens still operate blind. General Managers and F&B Directors know costs are rising, but lack granular, real-time visibility into exactly where waste occurs and how to adjust menus dynamically based on actual demand.",
  "SAVR is India's first all-in-one hospitality intelligence platform. We replace fragmented point solutions with a unified ecosystem spanning AI Waste Detection, Demand Forecasting, Dynamic Menu Pricing, and Smart Menu Intelligence.",
  "Our computer vision cameras automatically identify, classify, and weigh every discarded item. This completely touchless operation generates real-time dashboards detailing exactly what is being wasted and why—enabling an immediate 30–50% food waste reduction.",
  "Our Demand Forecasting module uses your historical data, occupancy rates, and local patterns to right-size production. We accurately predict how many covers to expect per meal period, saving 15–25% in overproduction costs instantly.",
  "SAVR's Dynamic Menu Pricing intelligently analyses contribution margins, prep time, and demand patterns to confidently recommend optimal pricing for each dish. As a result, slow movers are rotated out, while high-demand items deliver maximum profitability.",
  "We close the loop: waste detection data feeds directly into menu planning. If butter chicken is consistently wasted, the system automatically suggests replacements so your menu gets smarter every single week without relying purely on chef intuition.",
  "Built specifically for Indian hotel economics, SAVR delivers measurable P&L impact. With our OPEX subscription model, the system pays for itself within the first month of full deployment."
]

/* ─── Single word whose opacity is driven by scroll progress ─── */
function ScrollWord({ word, progress, range }) {
  const opacity = useTransform(progress, range, [0.12, 1])
  return (
    <motion.span style={{ opacity }} className="inline">
      {word}{' '}
    </motion.span>
  )
}

/* ─── One paragraph: tracks its own scroll position ─── */
function ScrollParagraph({ text }) {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    // starts when paragraph top hits bottom of viewport,
    // ends when paragraph bottom passes 40% from top of viewport
    offset: ['start 0.95', 'start 0.4'],
  })

  const words = text.split(' ')
  const totalWords = words.length

  return (
    <p ref={ref} className="text-neutral-black">
      {words.map((word, i) => {
        // Each word occupies a small slice of the 0→1 scroll range
        const start = i / totalWords
        const end = start + 1 / totalWords
        return (
          <ScrollWord
            key={i}
            word={word}
            progress={scrollYProgress}
            range={[start, end]}
          />
        )
      })}
    </p>
  )
}

export default function Prose() {
  return (
    <section className="flex justify-center px-[var(--spacing-md)] mt-[2.4rem] mb-[16.4rem] md:mb-[24rem]">
      <div
        className="w-full max-w-[37.5rem] md:max-w-[51rem] text-center mx-auto space-y-[2.4rem]"
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: '2rem',
          lineHeight: '2.8rem',
          fontWeight: 350,
        }}
      >
        {paragraphs.map((text, i) => (
          <ScrollParagraph key={i} text={text} />
        ))}
      </div>
    </section>
  )
}
