import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const features = [
  {
    category: 'Computer Vision',
    title: 'AI Waste Detection',
    description:
      'Touchless cameras identify, classify, and weigh every discarded item — delivering real-time dashboards that show exactly what is wasted and why.',
    bg: '#f0ebe5',
    placeholder: 'waste-detection',
  },
  {
    category: 'Predictive Analytics',
    title: 'Demand Forecasting',
    description:
      'Uses historical data, occupancy rates, and local patterns to right-size production and predict covers per meal period.',
    bg: '#e5f0ec',
    placeholder: 'demand-forecasting',
  },
  {
    category: 'Revenue Optimisation',
    title: 'Dynamic Menu Pricing',
    description:
      'Analyses contribution margins, prep time, and demand to recommend optimal pricing — rotating slow movers out, maximising top sellers.',
    bg: '#e5eaf0',
    placeholder: 'menu-pricing',
  },
  {
    category: 'Closed-Loop Intelligence',
    title: 'Smart Menu Intelligence',
    description:
      'Waste data feeds directly into menu planning. The system auto-suggests replacements so your menu gets smarter every week.',
    bg: '#eef0e5',
    placeholder: 'menu-intelligence',
  },
]

function FeatureCard({ feature, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.24, 0.42, 0.42, 0.92] }}
      className="group relative flex flex-col overflow-hidden"
      style={{
        background: feature.bg,
        borderRadius: '24px',
        padding: '32px',
        minHeight: '380px',
      }}
    >
      {/* Category label */}
      <span
        style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '13px',
          fontWeight: 500,
          letterSpacing: '0.02em',
          color: 'rgba(0,0,0,0.45)',
          marginBottom: '8px',
        }}
      >
        {feature.category}
      </span>

      {/* Feature title */}
      <h3
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: '28px',
          fontWeight: 500,
          lineHeight: 1.15,
          color: '#141414',
          marginBottom: '12px',
        }}
      >
        {feature.title}
      </h3>

      {/* Description */}
      <p
        style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '14px',
          fontWeight: 400,
          lineHeight: 1.5,
          color: 'rgba(0,0,0,0.5)',
          marginBottom: '20px',
          maxWidth: '320px',
        }}
      >
        {feature.description}
      </p>

      {/* Learn more link */}
      <div style={{ marginTop: 'auto' }}>
        <a
          href="#sign-up"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            fontFamily: 'Inter, sans-serif',
            fontSize: '14px',
            fontWeight: 500,
            color: '#141414',
            textDecoration: 'none',
            padding: '10px 20px',
            borderRadius: '9999px',
            background: 'rgba(255,255,255,0.7)',
            border: '1px solid rgba(0,0,0,0.06)',
            transition: 'background 0.2s, transform 0.2s',
          }}
        >
          Learn more
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ display: 'block' }}>
            <path d="M5.25 3.5L8.75 7L5.25 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>

      {/* Placeholder image area */}
      <div
        style={{
          position: 'absolute',
          bottom: '0',
          right: '0',
          width: '55%',
          height: '55%',
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'flex-end',
          pointerEvents: 'none',
          opacity: 0.12,
        }}
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 200 200"
          fill="none"
          style={{ display: 'block' }}
        >
          <rect x="20" y="20" width="160" height="160" rx="20" stroke="#141414" strokeWidth="1.5" strokeDasharray="6 4" />
          <text x="100" y="106" textAnchor="middle" fill="#141414" fontSize="13" fontFamily="Inter, sans-serif" fontWeight="500">
            Image
          </text>
        </svg>
      </div>
    </motion.div>
  )
}

export default function Features() {
  const headerRef = useRef(null)
  const isHeaderInView = useInView(headerRef, { once: true, margin: '-80px' })

  return (
    <section
      id="features"
      className="px-[var(--spacing-md)] mb-[6.4rem] md:mb-[12rem]"
    >
      <div
        className="w-full mx-auto"
        style={{ maxWidth: '1100px' }}
      >
        {/* Section header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.24, 0.42, 0.42, 0.92] }}
          className="flex flex-col items-center text-center"
          style={{ marginBottom: '56px' }}
        >
          {/* Badge */}
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '8px 18px',
              borderRadius: '9999px',
              border: '1px solid rgba(0,0,0,0.1)',
              fontFamily: 'Inter, sans-serif',
              fontSize: '13px',
              fontWeight: 500,
              color: '#141414',
              marginBottom: '24px',
              background: '#fff',
            }}
          >
            Platform
          </span>

          {/* Headline */}
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 500,
              lineHeight: 1.12,
              color: '#141414',
              marginBottom: '16px',
              maxWidth: '720px',
            }}
            className="text-[28px] md:text-[48px]"
          >
            One platform for your entire kitchen intelligence.
          </h2>

          {/* Subtitle */}
          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 400,
              lineHeight: 1.5,
              color: 'rgba(0,0,0,0.45)',
              maxWidth: '560px',
            }}
            className="text-[14px] md:text-[16px]"
          >
            Four integrated modules that turn waste into savings, guesswork into forecasts, and menus into profit engines.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2"
          style={{ gap: '20px' }}
        >
          {features.map((feature, i) => (
            <FeatureCard key={feature.title} feature={feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
