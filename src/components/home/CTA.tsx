import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Button from '@/components/ui/Button'
import { MapPin, ArrowRight } from 'lucide-react'

export default function CTA() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const imageY = useTransform(scrollYProgress, [0, 1], ['-10%', '10%'])

  return (
    <section ref={sectionRef} className="py-32 md:py-44 relative overflow-hidden">
      <motion.div className="absolute inset-0" style={{ y: imageY }}>
        <img
          src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=1920&q=80"
          alt="Arabico cafe atmosphere"
          className="w-full h-[120%] object-cover"
          loading="lazy"
        />
      </motion.div>
      <div className="absolute inset-0 bg-black/65" />
      <div className="absolute inset-0 bg-gradient-to-t from-surface-primary via-transparent to-surface-primary/40" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.4)_100%)]" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 48 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-px bg-accent-gold/40 mx-auto mb-6"
          />

          <span className="inline-flex items-center gap-2.5 text-[10px] tracking-[0.35em] uppercase font-heading text-accent-gold/70 mb-8">
            <MapPin className="w-3 h-3" />
            Janakpuri, Delhi
          </span>

          <h2 className="font-display text-4xl md:text-5xl lg:text-[4.5rem] font-medium text-accent-cream/90 leading-[1] tracking-[-0.02em] mb-8">
            Your Table
            <br />
            <span className="text-gradient-gold italic">Awaits</span>
          </h2>

          <p className="text-stone-400/90 text-base md:text-lg max-w-lg mx-auto mb-12 font-light leading-[1.8] tracking-wide">
            Walk in, settle down, and let us take care of the rest.
            Great coffee, beautiful food, and a space that feels like yours.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <Button
              variant="primary"
              size="lg"
              href="https://wa.me/918882548738"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Reserve on WhatsApp
            </Button>
            <Button variant="outline" size="lg" href="/contact">
              Get Directions
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
