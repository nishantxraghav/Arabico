import { motion } from 'framer-motion'

interface SectionHeadingProps {
  label: string
  title: string
  description?: string
  align?: 'left' | 'center'
  light?: boolean
}

export default function SectionHeading({ label, title, description, align = 'center', light }: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left'

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className={`max-w-3xl mb-20 md:mb-24 ${alignClass}`}
    >
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: 48 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className={`h-px bg-accent-gold/40 mb-6 ${align === 'center' ? 'mx-auto' : ''}`}
      />
      <span className="inline-block font-heading text-[10px] tracking-[0.35em] uppercase text-accent-gold/80 mb-5">
        {label}
      </span>
      <h2
        className={`font-display text-4xl md:text-5xl lg:text-[3.5rem] xl:text-6xl font-medium leading-[1.05] tracking-[-0.02em] mb-7 ${
          light ? 'text-accent-cream' : 'text-stone-100'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className="text-stone-500 text-lg md:text-xl leading-[1.7] max-w-2xl mx-auto font-light tracking-wide">
          {description}
        </p>
      )}
    </motion.div>
  )
}
