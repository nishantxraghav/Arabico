import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { Link } from 'react-router-dom'
import { reviews } from '@/data/reviews'
import SectionHeading from '@/components/ui/SectionHeading'

export default function Testimonials() {
  const featured = reviews.slice(0, 3)

  return (
    <section className="py-28 md:py-36 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,169,110,0.03),transparent_70%)]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          label="What People Say"
          title="Loved by Our Guests"
          description="Don't just take our word for it — hear from the people who've made Arabico their favourite spot."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {featured.map((review, i) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{
                delay: i * 0.1,
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`glass-light rounded-xl p-7 md:p-8 relative ${
                i === 1 ? 'md:-translate-y-4' : ''
              }`}
            >
              <div className="absolute top-6 right-7">
                <Quote className="w-10 h-10 text-accent-gold/[0.06]" />
              </div>

              <div className="flex gap-0.5 mb-5">
                {Array.from({ length: review.rating }).map((_, j) => (
                  <Star key={j} className="w-3 h-3 text-accent-gold fill-accent-gold" />
                ))}
              </div>

              <p className="text-stone-300/90 text-[14px] leading-[1.75] mb-7 line-clamp-5 tracking-wide">
                "{review.text}"
              </p>

              <div className="flex items-center gap-3 pt-5 border-t border-stone-800/30">
                <div className="w-9 h-9 rounded-full bg-accent-gold/[0.07] flex items-center justify-center text-[10px] font-heading text-accent-gold/80 tracking-wider">
                  {review.avatar}
                </div>
                <div>
                  <p className="text-sm font-medium text-accent-cream/80 tracking-wide">{review.name}</p>
                  <p className="text-[11px] text-stone-600 tracking-wide">{review.date} · {review.source}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-center mt-16"
        >
          <Link
            to="/reviews"
            className="inline-flex items-center gap-3 text-[11px] tracking-[0.2em] uppercase font-heading text-accent-gold/80 hover:text-accent-gold transition-colors duration-500 group"
          >
            <span className="line-reveal pb-1">Read All Reviews</span>
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-accent-gold/10 text-[9px] font-medium text-accent-gold">
              {reviews.length}
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
