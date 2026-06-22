import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, X } from 'lucide-react'
import { menuItems, categories } from '@/data/menu'
import SectionHeading from '@/components/ui/SectionHeading'
import { fadeUp, staggerContainer } from '@/lib/motion'

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState<string>('All')
  const [searchQuery, setSearchQuery] = useState('')

  const filtered = useMemo(() => {
    return menuItems.filter((item) => {
      const matchesCategory = activeCategory === 'All' || item.category === activeCategory
      const matchesSearch =
        !searchQuery ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase())
      return matchesCategory && matchesSearch
    })
  }, [activeCategory, searchQuery])

  return (
    <>
      <section className="relative pt-36 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-surface-elevated/60 to-surface-primary" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-accent-gold/[0.02] rounded-full blur-[100px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <SectionHeading
              label="The Menu"
              title="What We Serve"
              description="Every item is prepared fresh, with premium ingredients and a whole lot of heart."
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="max-w-md mx-auto mb-12"
          >
            <div className="relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-600 group-focus-within:text-accent-gold/60 transition-colors duration-300" />
              <input
                type="text"
                placeholder="Search the menu..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-10 py-3.5 bg-surface-elevated/80 border border-stone-800/60 rounded-lg text-sm text-stone-200 placeholder:text-stone-600 focus:outline-none focus:border-accent-gold/30 focus:bg-surface-elevated transition-all duration-500 font-body tracking-wide"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-6 h-6 flex items-center justify-center text-stone-600 hover:text-stone-300 transition-colors"
                  aria-label="Clear search"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="flex flex-wrap justify-center gap-2.5 mb-20"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 text-[10px] tracking-[0.18em] uppercase font-heading rounded-full border transition-all duration-500 cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-accent-gold text-accent-espresso border-accent-gold shadow-glow'
                    : 'bg-transparent text-stone-500 border-stone-800/50 hover:border-stone-600 hover:text-stone-300'
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="pb-28 md:pb-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory + searchQuery}
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, transition: { duration: 0.2 } }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5"
            >
              {filtered.length > 0 ? (
                filtered.map((item) => (
                  <motion.div
                    key={item.id}
                    variants={fadeUp}
                    layout
                    className="group glass-light rounded-xl p-6 md:p-7 relative overflow-hidden cursor-default"
                  >
                    <div className="absolute top-0 right-0 w-40 h-40 bg-accent-gold/[0.01] rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-accent-gold/[0.04] group-hover:w-48 group-hover:h-48 transition-all duration-700" />

                    <div className="relative">
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <div className="flex-1">
                          <h3 className="font-display text-lg font-medium text-accent-cream/85 group-hover:text-accent-cream transition-colors duration-500 leading-tight tracking-wide">
                            {item.name}
                          </h3>
                          {item.tag && (
                            <span className="inline-block mt-2 px-2.5 py-0.5 text-[9px] tracking-[0.15em] uppercase font-heading bg-accent-gold/[0.06] text-accent-gold/70 rounded-full border border-accent-gold/10">
                              {item.tag}
                            </span>
                          )}
                        </div>
                        <span className="font-heading text-accent-gold/70 group-hover:text-accent-gold text-sm tracking-wide ml-4 tabular-nums whitespace-nowrap mt-0.5 transition-colors duration-500">
                          ₹{item.price}
                        </span>
                      </div>
                      <p className="text-stone-500/80 text-[13px] leading-relaxed tracking-wide">
                        {item.description}
                      </p>
                    </div>

                    <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-accent-gold/0 to-transparent group-hover:via-accent-gold/15 transition-all duration-700" />
                  </motion.div>
                ))
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="col-span-full text-center py-20"
                >
                  <p className="text-stone-600 text-lg font-light tracking-wide">
                    No items match your search.
                  </p>
                  <button
                    onClick={() => {
                      setSearchQuery('')
                      setActiveCategory('All')
                    }}
                    className="mt-4 text-[11px] tracking-[0.15em] uppercase font-heading text-accent-gold/70 hover:text-accent-gold transition-colors duration-300"
                  >
                    Clear filters
                  </button>
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </>
  )
}
