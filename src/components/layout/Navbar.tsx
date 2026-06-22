import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Coffee } from 'lucide-react'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Menu', path: '/menu' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Reviews', path: '/reviews' },
  { name: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          scrolled
            ? 'glass py-3'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded-full bg-accent-gold/[0.06] border border-accent-gold/10 flex items-center justify-center group-hover:bg-accent-gold/[0.12] group-hover:border-accent-gold/20 transition-all duration-500">
              <Coffee className="w-3.5 h-3.5 text-accent-gold/70 group-hover:text-accent-gold transition-colors duration-500" />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-lg font-medium text-accent-cream/90 tracking-tight leading-none">
                Arabico
              </span>
              <span className="text-[8px] tracking-[0.4em] uppercase text-accent-gold/50 font-heading mt-0.5">
                Coffee & Eatery
              </span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-4 py-2 text-[10px] tracking-[0.2em] uppercase font-heading transition-colors duration-500 ${
                    isActive
                      ? 'text-accent-gold'
                      : 'text-stone-500 hover:text-stone-300'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute -bottom-0.5 left-4 right-4 h-px bg-accent-gold/50"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                </Link>
              )
            })}
          </div>

          <div className="hidden lg:flex items-center gap-5">
            <a
              href="tel:+918882548738"
              className="text-[10px] tracking-[0.15em] text-stone-600 hover:text-stone-400 transition-colors duration-500 font-heading"
            >
              +91 88825 48738
            </a>
            <Link
              to="/contact"
              className="text-[10px] tracking-[0.2em] uppercase font-heading px-6 py-2 border border-accent-gold/15 text-accent-gold/80 hover:bg-accent-gold/[0.04] hover:border-accent-gold/30 hover:text-accent-gold transition-all duration-500 rounded-sm"
            >
              Reserve
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center text-stone-400 hover:text-accent-gold transition-colors duration-300"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-surface-primary/98 backdrop-blur-2xl" />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative h-full flex flex-col items-center justify-center gap-1"
            >
              {navLinks.map((link, i) => {
                const isActive = location.pathname === link.path
                return (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, y: 30, filter: 'blur(4px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    transition={{ delay: 0.1 + i * 0.06, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Link
                      to={link.path}
                      className={`block text-3xl md:text-4xl font-display py-2.5 transition-colors duration-500 tracking-tight ${
                        isActive ? 'text-accent-gold' : 'text-stone-400 hover:text-accent-cream'
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                )
              })}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-10 flex flex-col items-center gap-5"
              >
                <a
                  href="tel:+918882548738"
                  className="text-sm tracking-wide text-stone-600 hover:text-accent-gold transition-colors"
                >
                  +91 88825 48738
                </a>
                <Link
                  to="/contact"
                  className="text-[10px] tracking-[0.2em] uppercase font-heading px-8 py-3 border border-accent-gold/20 text-accent-gold hover:bg-accent-gold/[0.04] transition-all duration-500"
                >
                  Reserve a Table
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
