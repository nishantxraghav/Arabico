import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown, Star } from 'lucide-react'
import { useRef } from 'react'
import Button from '@/components/ui/Button'

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })

  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.1])
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5], [0.5, 0.8])
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  const line1 = ['Experience', 'the']
  const line2 = ['Art', 'of', 'Coffee']

  return (
    <section ref={sectionRef} className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      <motion.div className="absolute inset-0" style={{ y: imageY, scale: imageScale }}>
        <img
          src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=1920&q=80"
          alt="Premium coffee beans"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <motion.div className="absolute inset-0 bg-black" style={{ opacity: overlayOpacity }} />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-surface-primary" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20" />
      <div className="absolute inset-0 film-grain pointer-events-none" />

      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center"
        style={{ y: contentY, opacity: contentOpacity }}
      >
        <motion.div
          initial={{ opacity: 0, y: 15, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10"
        >
          <span className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-accent-gold/15 bg-accent-gold/[0.03] backdrop-blur-sm">
            <Star className="w-3 h-3 text-accent-gold fill-accent-gold" />
            <span className="text-[11px] tracking-[0.25em] uppercase font-heading text-accent-gold/90">
              4.8 Rated · Premium Cafe
            </span>
          </span>
        </motion.div>

        <h1 className="font-display font-medium leading-[0.9] tracking-[-0.03em] mb-10">
          <span className="block overflow-hidden">
            <span className="flex items-center justify-center gap-[0.25em] text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[8.5rem]">
              {line1.map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ y: '110%', opacity: 0, rotateX: -40 }}
                  animate={{ y: '0%', opacity: 1, rotateX: 0 }}
                  transition={{
                    delay: 0.5 + i * 0.08,
                    duration: 1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="inline-block text-accent-cream/90"
                >
                  {word}
                </motion.span>
              ))}
            </span>
          </span>
          <span className="block overflow-hidden mt-1">
            <span className="flex items-center justify-center gap-[0.25em] text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[8.5rem]">
              {line2.map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ y: '110%', opacity: 0, rotateX: -40 }}
                  animate={{ y: '0%', opacity: 1, rotateX: 0 }}
                  transition={{
                    delay: 0.7 + i * 0.08,
                    duration: 1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className={`inline-block ${
                    word === 'Art' || word === 'Coffee'
                      ? 'text-gradient-gold italic'
                      : 'text-accent-cream/90'
                  }`}
                >
                  {word}
                </motion.span>
              ))}
            </span>
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ delay: 1.2, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="text-stone-400 text-base md:text-lg lg:text-xl max-w-xl mx-auto mb-12 font-light leading-relaxed tracking-wide"
        >
          Specialty coffee, artisan food, and an ambience crafted for those
          who appreciate the finer things. Janakpuri, Delhi.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5"
        >
          <Button variant="primary" size="lg" href="/menu">
            Explore Our Menu
          </Button>
          <Button variant="outline" size="lg" href="/contact">
            Visit Us
          </Button>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase text-stone-500 font-heading">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown className="w-4 h-4 text-accent-gold/40" />
        </motion.div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-surface-primary to-transparent" />
    </section>
  )
}
