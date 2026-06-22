import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Coffee, MapPin, Phone, Clock, ArrowUpRight } from 'lucide-react'
import { fadeUp, staggerContainer } from '@/lib/motion'

const footerLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Menu', path: '/menu' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Reviews', path: '/reviews' },
  { name: 'Contact', path: '/contact' },
]

export default function Footer() {
  return (
    <footer className="relative bg-surface-primary border-t border-stone-800/20">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-accent-gold/[0.01] rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-10 relative">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10 mb-20"
        >
          <motion.div variants={fadeUp} className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-7">
              <div className="w-8 h-8 rounded-full bg-accent-gold/[0.06] border border-accent-gold/10 flex items-center justify-center">
                <Coffee className="w-3.5 h-3.5 text-accent-gold/60" />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-lg font-medium text-accent-cream/80 tracking-tight leading-none">
                  Arabico
                </span>
                <span className="text-[8px] tracking-[0.4em] uppercase text-accent-gold/40 font-heading mt-0.5">
                  Coffee & Eatery
                </span>
              </div>
            </Link>
            <p className="text-stone-600 text-[13px] leading-[1.8] max-w-xs tracking-wide">
              A premium coffee experience in the heart of Janakpuri. Crafted beverages, artisan food, and an ambience that feels like home.
            </p>
          </motion.div>

          <motion.div variants={fadeUp}>
            <h4 className="font-heading text-[9px] tracking-[0.3em] uppercase text-accent-gold/50 mb-7">
              Navigate
            </h4>
            <ul className="space-y-3.5">
              {footerLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-[13px] text-stone-500 hover:text-stone-300 transition-colors duration-500 line-reveal pb-0.5 tracking-wide"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={fadeUp}>
            <h4 className="font-heading text-[9px] tracking-[0.3em] uppercase text-accent-gold/50 mb-7">
              Visit Us
            </h4>
            <ul className="space-y-4">
              <li className="flex gap-3 text-[13px] text-stone-500 tracking-wide">
                <MapPin className="w-3.5 h-3.5 text-accent-gold/30 mt-0.5 shrink-0" />
                <span className="leading-[1.7]">5B/11A C Block Janakpuri Road,<br />Block C 4D, Janakpuri,<br />Delhi 110058</span>
              </li>
              <li className="flex gap-3 text-[13px] text-stone-500 tracking-wide">
                <Phone className="w-3.5 h-3.5 text-accent-gold/30 mt-0.5 shrink-0" />
                <a href="tel:+918882548738" className="hover:text-stone-300 transition-colors duration-500">
                  +91 88825 48738
                </a>
              </li>
              <li className="flex gap-3 text-[13px] text-stone-500 tracking-wide">
                <Clock className="w-3.5 h-3.5 text-accent-gold/30 mt-0.5 shrink-0" />
                <span>Open Daily · Until 1:00 AM</span>
              </li>
            </ul>
          </motion.div>

          <motion.div variants={fadeUp}>
            <h4 className="font-heading text-[9px] tracking-[0.3em] uppercase text-accent-gold/50 mb-7">
              Connect
            </h4>
            <div className="space-y-4">
              <a
                href="https://www.instagram.com/arabico.cafe"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-[13px] text-stone-500 hover:text-stone-300 transition-colors duration-500 group tracking-wide"
              >
                <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                <span>@arabico.cafe</span>
                <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-0.5 group-hover:translate-y-0" />
              </a>
              <a
                href="https://wa.me/918882548738"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-[13px] text-stone-500 hover:text-stone-300 transition-colors duration-500 group tracking-wide"
              >
                <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span>WhatsApp</span>
                <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-0.5 group-hover:translate-y-0" />
              </a>
            </div>
          </motion.div>
        </motion.div>

        <div className="border-t border-stone-800/15 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-stone-700 tracking-widest">
            &copy; {new Date().getFullYear()} Arabico Coffee & Eatery
          </p>
          <p className="text-[11px] text-stone-800 tracking-widest">
            Crafted with care in Janakpuri, Delhi
          </p>
        </div>
      </div>
    </footer>
  )
}
