import { useState, useCallback, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { galleryImages } from '@/data/gallery'
import SectionHeading from '@/components/ui/SectionHeading'
import { fadeUp, staggerContainer } from '@/lib/motion'

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const openLightbox = (index: number) => setLightboxIndex(index)
  const closeLightbox = () => setLightboxIndex(null)

  const prev = useCallback(() => {
    setLightboxIndex((i) => (i !== null ? (i - 1 + galleryImages.length) % galleryImages.length : null))
  }, [])

  const next = useCallback(() => {
    setLightboxIndex((i) => (i !== null ? (i + 1) % galleryImages.length : null))
  }, [])

  useEffect(() => {
    if (lightboxIndex === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [lightboxIndex, prev, next])

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
              label="Gallery"
              title="Moments at Arabico"
              description="A visual journey through our space, our craft, and the experiences we create."
            />
          </motion.div>
        </div>
      </section>

      <section className="pb-28 md:pb-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="masonry-grid"
          >
            {galleryImages.map((img, i) => (
              <motion.div
                key={img.id}
                variants={fadeUp}
                className="masonry-item group cursor-pointer"
                onClick={() => openLightbox(i)}
              >
                <div
                  className={`relative overflow-hidden rounded-lg shadow-card group-hover:shadow-card-hover transition-shadow duration-700 ${
                    img.aspect === 'tall'
                      ? 'aspect-[3/4]'
                      : img.aspect === 'wide'
                        ? 'aspect-[4/3]'
                        : 'aspect-square'
                  }`}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-700" />
                  <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                    <p className="text-white/80 text-xs tracking-widest uppercase font-heading">{img.alt}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/97 backdrop-blur-2xl flex items-center justify-center"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center text-white/40 hover:text-white/80 transition-colors z-20 rounded-full hover:bg-white/5"
              aria-label="Close lightbox"
            >
              <X className="w-5 h-5" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); prev() }}
              className="absolute left-4 md:left-8 w-12 h-12 flex items-center justify-center text-white/30 hover:text-white/80 transition-colors z-20 rounded-full hover:bg-white/5"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); next() }}
              className="absolute right-4 md:right-8 w-12 h-12 flex items-center justify-center text-white/30 hover:text-white/80 transition-colors z-20 rounded-full hover:bg-white/5"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-5xl max-h-[85vh] mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={galleryImages[lightboxIndex].src.replace('w=800', 'w=1400')}
                alt={galleryImages[lightboxIndex].alt}
                className="w-full h-full object-contain rounded-lg"
              />
              <div className="text-center mt-6">
                <p className="text-white/50 text-xs tracking-widest uppercase font-heading">
                  {galleryImages[lightboxIndex].alt}
                </p>
                <p className="text-white/20 text-[10px] tracking-wider mt-2 font-heading">
                  {lightboxIndex + 1} / {galleryImages.length}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
