import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Coffee, Sun, Heart, Users } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import { fadeUp, staggerContainer, slideInLeft, slideInRight } from '@/lib/motion'

const values = [
  {
    icon: Coffee,
    title: 'Quality Coffee',
    description:
      'Every cup begins with ethically sourced, single-origin beans — roasted in small batches to bring out the unique character of each region. We don\'t compromise.',
  },
  {
    icon: Sun,
    title: 'Warm Ambience',
    description:
      'Step inside and let the world slow down. Warm Edison bulbs, rich wooden textures, and carefully curated music create a space that feels like a quiet escape from the city.',
  },
  {
    icon: Heart,
    title: 'Crafted with Love',
    description:
      'From our baristas who perfect every pour to our kitchen team who source the freshest ingredients — every detail is handled with intention and care.',
  },
  {
    icon: Users,
    title: 'Friendly Service',
    description:
      'Our team doesn\'t just serve coffee — they remember your order, ask about your day, and make sure every visit feels personal. Hospitality is in our DNA.',
  },
]

export default function About() {
  const heroRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const heroImageY = useTransform(scrollYProgress, [0, 1], ['0%', '15%'])

  return (
    <>
      <section ref={heroRef} className="relative min-h-[75vh] flex items-end overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: heroImageY }}>
          <img
            src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1920&q=80"
            alt="Arabico cafe interior"
            className="w-full h-[115%] object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-surface-primary via-surface-primary/50 to-black/30" />
        <div className="absolute inset-0 film-grain pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pb-20 pt-48">
          <motion.div
            initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 48 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-px bg-accent-gold/40 mb-5"
            />
            <span className="inline-block text-[10px] tracking-[0.35em] uppercase font-heading text-accent-gold/70 mb-5">
              Est. Janakpuri, Delhi
            </span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-medium text-accent-cream/90 leading-[0.95] tracking-[-0.02em]">
              Our <span className="text-gradient-gold italic">Story</span>
            </h1>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-surface-primary to-transparent" />
      </section>

      <section className="py-28 md:py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28 items-center">
            <motion.div
              variants={slideInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
            >
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 48 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="h-px bg-accent-gold/40 mb-5"
              />
              <span className="inline-block text-[10px] tracking-[0.35em] uppercase font-heading text-accent-gold/70 mb-5">
                Who We Are
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-accent-cream/90 leading-[1.05] tracking-[-0.02em] mb-10">
                More Than Just
                <br />
                <span className="text-gradient-gold italic">a Coffee Shop</span>
              </h2>
              <div className="space-y-6 text-stone-400/90 leading-[1.8] tracking-wide text-[15px]">
                <p>
                  Arabico was born from a simple belief: that a great cup of coffee,
                  served in a beautiful space, can transform an ordinary moment into
                  something meaningful.
                </p>
                <p>
                  Nestled in the heart of Janakpuri, we've created a sanctuary for
                  coffee lovers, food enthusiasts, and anyone looking for a space
                  that feels like home. Every element — from our hand-selected beans
                  to our warm interiors — is designed with intention.
                </p>
                <p>
                  We stay open until 1 AM because we believe the best conversations
                  happen late. Whether you're here for a morning espresso or a
                  midnight matcha, Arabico welcomes you.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={slideInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] shadow-deep">
                <img
                  src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=800&q=80"
                  alt="Coffee beans being roasted"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -left-6 glass rounded-xl p-6 max-w-[180px] shadow-deep">
                <div className="font-display text-3xl font-medium text-accent-gold mb-1 tracking-tight">1 AM</div>
                <div className="text-[9px] tracking-[0.2em] uppercase text-stone-500 font-heading">
                  Open Until
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-28 md:py-36 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(201,169,110,0.02),transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <SectionHeading
            label="Our Values"
            title="What Sets Us Apart"
            description="Four pillars that define the Arabico experience."
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6"
          >
            {values.map((val) => (
              <motion.div
                key={val.title}
                variants={fadeUp}
                className="glass-light rounded-xl p-8 md:p-10 group"
              >
                <div className="w-11 h-11 rounded-full bg-accent-gold/[0.06] flex items-center justify-center mb-7 group-hover:bg-accent-gold/[0.12] transition-colors duration-500">
                  <val.icon className="w-4.5 h-4.5 text-accent-gold/60 group-hover:text-accent-gold/80 transition-colors duration-500" />
                </div>
                <h3 className="font-display text-xl md:text-2xl font-medium text-accent-cream/85 mb-4 tracking-wide">
                  {val.title}
                </h3>
                <p className="text-stone-500 leading-[1.8] text-[14px] tracking-wide">
                  {val.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-28 md:py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28 items-center">
            <motion.div
              variants={slideInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              className="relative order-2 lg:order-1"
            >
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-xl overflow-hidden aspect-square shadow-card">
                  <img
                    src="https://images.unsplash.com/photo-1511920170033-f8396924c348?w=400&q=80"
                    alt="Artisan pastries"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="rounded-xl overflow-hidden aspect-square mt-10 shadow-card">
                  <img
                    src="https://images.unsplash.com/photo-1498804103079-a6351b050096?w=400&q=80"
                    alt="Iced coffee presentation"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="rounded-xl overflow-hidden aspect-square -mt-6 shadow-card">
                  <img
                    src="https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=400&q=80"
                    alt="Espresso extraction"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="rounded-xl overflow-hidden aspect-square mt-4 shadow-card">
                  <img
                    src="https://images.unsplash.com/photo-1504630083234-14187a9df0f5?w=400&q=80"
                    alt="Matcha latte layers"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={slideInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              className="order-1 lg:order-2"
            >
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 48 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="h-px bg-accent-gold/40 mb-5"
              />
              <span className="inline-block text-[10px] tracking-[0.35em] uppercase font-heading text-accent-gold/70 mb-5">
                The Details
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-accent-cream/90 leading-[1.05] tracking-[-0.02em] mb-10">
                Every Detail,{' '}
                <span className="text-gradient-gold italic">Considered</span>
              </h2>
              <div className="space-y-6 text-stone-400/90 leading-[1.8] tracking-wide text-[15px]">
                <p>
                  The playlist that sets the mood. The angle of the Edison bulbs.
                  The weight of the ceramic in your hands. The foam pattern on
                  your latte. We think about it all.
                </p>
                <p>
                  Arabico isn't just designed to look good — it's designed to make
                  you feel something. A sense of calm. A moment of luxury.
                  A reminder to slow down and savour.
                </p>
              </div>

              <div className="mt-12 grid grid-cols-2 gap-5">
                <div className="glass-light rounded-xl p-6">
                  <div className="font-display text-2xl font-medium text-accent-gold/80 mb-1 tracking-tight">119+</div>
                  <div className="text-[9px] tracking-[0.2em] uppercase text-stone-600 font-heading">Happy Reviews</div>
                </div>
                <div className="glass-light rounded-xl p-6">
                  <div className="font-display text-2xl font-medium text-accent-gold/80 mb-1 tracking-tight">4.8</div>
                  <div className="text-[9px] tracking-[0.2em] uppercase text-stone-600 font-heading">Star Rating</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
