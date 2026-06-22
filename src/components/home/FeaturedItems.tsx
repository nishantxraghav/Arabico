import { motion } from 'framer-motion'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import SectionHeading from '@/components/ui/SectionHeading'

const featured = [
  {
    name: 'Spanish Latte',
    description: 'Rich espresso with sweetened condensed milk and velvety microfoam',
    price: 249,
    tag: 'Bestseller',
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&q=80',
  },
  {
    name: 'Vanilla Matcha',
    description: 'Ceremonial-grade matcha whisked with vanilla-infused oat milk',
    price: 279,
    tag: 'Popular',
    image: 'https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=600&q=80',
  },
  {
    name: 'Veg Sandwich',
    description: 'Grilled vegetables with herbed cream cheese on sourdough',
    price: 219,
    tag: 'Fresh',
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=600&q=80',
  },
  {
    name: 'Falafel Wrap',
    description: 'Crispy falafel with hummus, tahini drizzle in warm lavash',
    price: 229,
    tag: 'Bestseller',
    image: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=600&q=80',
  },
  {
    name: 'Chicken Momos',
    description: 'Steamed dumplings with spiced chicken and fiery chutney',
    price: 199,
    tag: 'Popular',
    image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=600&q=80',
  },
  {
    name: 'Peri-Peri Fries',
    description: 'Crispy golden fries in house-blend peri-peri seasoning',
    price: 179,
    tag: 'Bestseller',
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=600&q=80',
  },
]

export default function FeaturedItems() {
  return (
    <section className="py-28 md:py-36 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent-gold/[0.015] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <SectionHeading
          label="Our Signatures"
          title="Crafted to Perfection"
          description="Every item on our menu is a testament to quality. Here are the ones our guests can't stop ordering."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {featured.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{
                delay: i * 0.08,
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative overflow-hidden rounded-xl bg-surface-elevated/80 border border-stone-800/40 hover:border-accent-gold/15 transition-all duration-700 cursor-pointer shadow-card hover:shadow-card-hover hover:-translate-y-1"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.08]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-elevated via-surface-elevated/20 to-transparent" />

                <span className="absolute top-4 left-4 px-3 py-1 text-[9px] tracking-[0.2em] uppercase font-heading bg-surface-primary/80 backdrop-blur-md text-accent-gold rounded-full border border-accent-gold/15">
                  {item.tag}
                </span>

                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/0 group-hover:bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0 border border-white/0 group-hover:border-white/10">
                  <ArrowUpRight className="w-3.5 h-3.5 text-white" />
                </div>
              </div>

              <div className="p-6 pt-5">
                <div className="flex items-start justify-between gap-4 mb-2.5">
                  <h3 className="font-display text-xl font-medium text-accent-cream/90 group-hover:text-accent-cream transition-colors duration-500 leading-tight">
                    {item.name}
                  </h3>
                  <span className="font-heading text-accent-gold/80 text-sm tracking-wide tabular-nums whitespace-nowrap mt-0.5">
                    ₹{item.price}
                  </span>
                </div>
                <p className="text-stone-500 text-[13px] leading-relaxed tracking-wide">
                  {item.description}
                </p>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-gold/0 to-transparent group-hover:via-accent-gold/20 transition-all duration-700" />
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
            to="/menu"
            className="inline-flex items-center gap-3 text-[11px] tracking-[0.2em] uppercase font-heading text-accent-gold/80 hover:text-accent-gold transition-colors duration-500 group/link"
          >
            <span className="line-reveal pb-1">View Full Menu</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
