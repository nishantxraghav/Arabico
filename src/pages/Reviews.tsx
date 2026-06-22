import { motion } from 'framer-motion'
import { Star, Quote, ExternalLink } from 'lucide-react'
import { reviews } from '@/data/reviews'
import SectionHeading from '@/components/ui/SectionHeading'
import { fadeUp, staggerContainer } from '@/lib/motion'

export default function Reviews() {
  const avgRating = 4.8
  const totalReviews = 119

  return (
    <>
      <section className="relative pt-36 pb-16">
        <div className="absolute inset-0 bg-gradient-to-b from-surface-elevated/60 to-surface-primary" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <SectionHeading
              label="Reviews"
              title="What Our Guests Say"
              description="Real reviews from real people who've made Arabico their favourite coffee destination."
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="flex flex-col items-center mb-20"
          >
            <div className="glass rounded-2xl p-8 md:p-10 text-center max-w-sm w-full shadow-deep">
              <div className="font-display text-6xl md:text-7xl font-medium text-accent-gold/90 mb-3 tracking-tight">
                {avgRating}
              </div>
              <div className="flex justify-center gap-1.5 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(avgRating)
                        ? 'text-accent-gold fill-accent-gold'
                        : 'text-stone-700'
                    }`}
                  />
                ))}
              </div>
              <p className="text-stone-500 text-sm tracking-wide">
                Based on <span className="text-accent-cream/70 font-medium">{totalReviews}+</span> reviews
              </p>
              <div className="flex justify-center gap-3 mt-5">
                <span className="px-3 py-1 text-[9px] tracking-[0.15em] uppercase font-heading text-stone-500 bg-surface-card/50 rounded-full border border-stone-800/30">
                  Google
                </span>
                <span className="px-3 py-1 text-[9px] tracking-[0.15em] uppercase font-heading text-stone-500 bg-surface-card/50 rounded-full border border-stone-800/30">
                  Zomato
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="pb-28 md:pb-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6"
          >
            {reviews.map((review) => (
              <motion.div
                key={review.id}
                variants={fadeUp}
                className="glass-light rounded-xl p-7 md:p-8 group relative"
              >
                <div className="absolute top-7 right-7">
                  <Quote className="w-8 h-8 text-accent-gold/[0.04]" />
                </div>

                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-accent-gold/[0.06] border border-accent-gold/10 flex items-center justify-center text-[10px] font-heading text-accent-gold/70 tracking-wider">
                      {review.avatar}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-accent-cream/80 tracking-wide">{review.name}</p>
                      <p className="text-[10px] text-stone-600 tracking-wide">{review.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-card/30 border border-stone-800/20">
                    <ExternalLink className="w-2.5 h-2.5 text-stone-600" />
                    <span className="text-[9px] tracking-wider text-stone-600 font-heading uppercase">
                      {review.source}
                    </span>
                  </div>
                </div>

                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star
                      key={j}
                      className={`w-3 h-3 ${
                        j < review.rating
                          ? 'text-accent-gold fill-accent-gold'
                          : 'text-stone-800'
                      }`}
                    />
                  ))}
                </div>

                <p className="text-stone-400/90 text-[13px] leading-[1.8] tracking-wide">
                  "{review.text}"
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-center mt-20"
          >
            <p className="text-stone-600 text-sm mb-5 tracking-wide">
              Want to share your experience?
            </p>
            <a
              href="https://g.page/arabico-coffee/review"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase font-heading text-accent-gold/70 hover:text-accent-gold transition-colors duration-500 line-reveal pb-1"
            >
              Leave a Review on Google
              <ExternalLink className="w-3 h-3" />
            </a>
          </motion.div>
        </div>
      </section>
    </>
  )
}
