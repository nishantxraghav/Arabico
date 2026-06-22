import { motion } from 'framer-motion'
import { ArrowRight, Plus } from 'lucide-react'
import { Link } from 'react-router-dom'
import SectionHeading from '@/components/ui/SectionHeading'

const images = [
  {
    src: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80',
    alt: 'Barista crafting latte art',
    span: 'md:col-span-2 md:row-span-2',
    height: 'h-72 md:h-full',
  },
  {
    src: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&q=80',
    alt: 'Cappuccino on marble',
    span: '',
    height: 'h-52',
  },
  {
    src: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&q=80',
    alt: 'Cozy cafe corner',
    span: '',
    height: 'h-52',
  },
  {
    src: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=600&q=80',
    alt: 'Coffee beans roasting',
    span: '',
    height: 'h-52',
  },
  {
    src: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&q=80',
    alt: 'Warm cafe interior',
    span: 'md:col-span-2',
    height: 'h-52',
  },
]

export default function GalleryPreview() {
  return (
    <section className="py-28 md:py-36 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          label="The Arabico Experience"
          title="Step Inside"
          description="A space designed for connection, contemplation, and great coffee."
        />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 md:gap-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                delay: i * 0.07,
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`relative overflow-hidden rounded-lg group cursor-pointer ${img.span}`}
            >
              <div className={`${img.height} overflow-hidden`}>
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-700" />

              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                <motion.div
                  initial={false}
                  className="w-11 h-11 rounded-full border border-white/20 bg-white/[0.08] backdrop-blur-md flex items-center justify-center scale-75 group-hover:scale-100 transition-transform duration-500"
                >
                  <Plus className="w-4 h-4 text-white" />
                </motion.div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
                <p className="text-white/80 text-xs tracking-widest uppercase font-heading">{img.alt}</p>
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
            to="/gallery"
            className="inline-flex items-center gap-3 text-[11px] tracking-[0.2em] uppercase font-heading text-accent-gold/80 hover:text-accent-gold transition-colors duration-500 group"
          >
            <span className="line-reveal pb-1">View Full Gallery</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
