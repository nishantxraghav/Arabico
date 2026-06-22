import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { Star, MessageSquare, Coffee, IndianRupee, Clock } from 'lucide-react'

const stats = [
  { icon: Star, value: '4.8', label: 'Rating', suffix: '' },
  { icon: MessageSquare, value: '119', label: 'Reviews', suffix: '+' },
  { icon: Coffee, value: 'Premium', label: 'Coffee', suffix: '' },
  { icon: IndianRupee, value: '200–400', label: 'Per Person', suffix: '' },
  { icon: Clock, value: '1 AM', label: 'Open Until', suffix: '' },
]

function AnimatedNumber({ value, suffix }: { value: string; suffix: string }) {
  const [display, setDisplay] = useState(value)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return
    const num = parseFloat(value)
    if (isNaN(num)) {
      setDisplay(value)
      return
    }

    const isFloat = value.includes('.')
    const duration = 1800
    const steps = 50
    const increment = num / steps
    let current = 0
    let step = 0

    const timer = setInterval(() => {
      step++
      current = Math.min(current + increment, num)
      setDisplay(isFloat ? current.toFixed(1) : Math.round(current).toString())
      if (step >= steps) {
        clearInterval(timer)
        setDisplay(value)
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [isInView, value])

  return (
    <span ref={ref}>
      {display}{suffix}
    </span>
  )
}

export default function Stats() {
  return (
    <section className="relative py-6 -mt-16 z-20">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="glass rounded-2xl p-6 md:p-8 shadow-deep"
        >
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="text-center group relative"
              >
                {i > 0 && (
                  <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 w-px h-8 bg-stone-800/60" />
                )}
                <div className="w-8 h-8 rounded-full bg-accent-gold/[0.07] flex items-center justify-center mx-auto mb-2.5 group-hover:bg-accent-gold/[0.12] transition-colors duration-500">
                  <stat.icon className="w-3.5 h-3.5 text-accent-gold/70" />
                </div>
                <div className="font-display text-xl md:text-2xl font-medium text-accent-cream/90 mb-0.5 tracking-tight">
                  <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-[9px] tracking-[0.2em] uppercase text-stone-600 font-heading">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
