import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Clock, MessageCircle, Send, CheckCircle } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import Button from '@/components/ui/Button'
import { fadeUp, staggerContainer, slideInLeft, slideInRight } from '@/lib/motion'

const contactInfo = [
  {
    icon: MapPin,
    title: 'Address',
    lines: ['5B/11A C Block Janakpuri Road,', 'Block C 4D, Janakpuri,', 'Delhi 110058'],
    action: {
      label: 'Get Directions',
      href: 'https://maps.google.com/?q=Arabico+Coffee+Janakpuri+Delhi',
    },
  },
  {
    icon: Phone,
    title: 'Phone',
    lines: ['+91 88825 48738'],
    action: {
      label: 'Call Now',
      href: 'tel:+918882548738',
    },
  },
  {
    icon: Clock,
    title: 'Hours',
    lines: ['Open Daily', 'Until 1:00 AM'],
    action: null,
  },
]

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
    setFormState({ name: '', email: '', phone: '', message: '' })
  }

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
              label="Contact"
              title="Get in Touch"
              description="Whether you have a question, want to reserve a table, or just want to say hello — we'd love to hear from you."
            />
          </motion.div>
        </div>
      </section>

      <section className="pb-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 mb-16"
          >
            {contactInfo.map((info) => (
              <motion.div
                key={info.title}
                variants={fadeUp}
                className="glass-light rounded-xl p-7 md:p-8 text-center group"
              >
                <div className="w-11 h-11 rounded-full bg-accent-gold/[0.06] flex items-center justify-center mx-auto mb-5 group-hover:bg-accent-gold/[0.12] transition-colors duration-500">
                  <info.icon className="w-4.5 h-4.5 text-accent-gold/60 group-hover:text-accent-gold/80 transition-colors duration-500" />
                </div>
                <h3 className="font-heading text-[10px] tracking-[0.25em] uppercase text-accent-gold/70 mb-4">
                  {info.title}
                </h3>
                {info.lines.map((line, i) => (
                  <p key={i} className="text-stone-400 text-sm tracking-wide">
                    {line}
                  </p>
                ))}
                {info.action && (
                  <a
                    href={info.action.href}
                    target={info.action.href.startsWith('http') ? '_blank' : undefined}
                    rel={info.action.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="inline-block mt-5 text-[10px] tracking-[0.18em] uppercase font-heading text-accent-gold/60 hover:text-accent-gold transition-colors duration-500 line-reveal pb-0.5"
                  >
                    {info.action.label}
                  </a>
                )}
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="flex flex-wrap justify-center gap-4 mb-20"
          >
            <Button
              variant="primary"
              href="https://wa.me/918882548738"
              icon={<MessageCircle className="w-4 h-4" />}
            >
              WhatsApp Us
            </Button>
            <Button
              variant="outline"
              href="tel:+918882548738"
              icon={<Phone className="w-4 h-4" />}
            >
              Call Now
            </Button>
          </motion.div>
        </div>
      </section>

      <section className="pb-28 md:pb-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
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
              <h3 className="font-display text-2xl md:text-3xl font-medium text-accent-cream/90 mb-10 tracking-wide">
                Send Us a <span className="text-gradient-gold italic">Message</span>
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-[9px] tracking-[0.2em] uppercase text-stone-600 font-heading mb-2.5">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-4 py-3 bg-surface-elevated/80 border border-stone-800/50 rounded-lg text-sm text-stone-200 placeholder:text-stone-700 focus:outline-none focus:border-accent-gold/30 focus:bg-surface-elevated transition-all duration-500 tracking-wide"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-[9px] tracking-[0.2em] uppercase text-stone-600 font-heading mb-2.5">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-4 py-3 bg-surface-elevated/80 border border-stone-800/50 rounded-lg text-sm text-stone-200 placeholder:text-stone-700 focus:outline-none focus:border-accent-gold/30 focus:bg-surface-elevated transition-all duration-500 tracking-wide"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-[9px] tracking-[0.2em] uppercase text-stone-600 font-heading mb-2.5">
                    Phone (Optional)
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={formState.phone}
                    onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-surface-elevated/80 border border-stone-800/50 rounded-lg text-sm text-stone-200 placeholder:text-stone-700 focus:outline-none focus:border-accent-gold/30 focus:bg-surface-elevated transition-all duration-500 tracking-wide"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-[9px] tracking-[0.2em] uppercase text-stone-600 font-heading mb-2.5">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-4 py-3 bg-surface-elevated/80 border border-stone-800/50 rounded-lg text-sm text-stone-200 placeholder:text-stone-700 focus:outline-none focus:border-accent-gold/30 focus:bg-surface-elevated transition-all duration-500 resize-none tracking-wide"
                    placeholder="How can we help?"
                  />
                </div>

                <div className="relative pt-2">
                  {submitted ? (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-2.5 px-6 py-3.5 bg-green-950/30 border border-green-800/20 rounded-lg text-green-400/80 text-sm tracking-wide"
                    >
                      <CheckCircle className="w-4 h-4" />
                      Thank you! We'll get back to you soon.
                    </motion.div>
                  ) : (
                    <Button
                      variant="primary"
                      size="md"
                      icon={<Send className="w-3.5 h-3.5" />}
                    >
                      Send Message
                    </Button>
                  )}
                </div>
              </form>
            </motion.div>

            <motion.div
              variants={slideInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              className="relative"
            >
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 48 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="h-px bg-accent-gold/40 mb-5"
              />
              <h3 className="font-display text-2xl md:text-3xl font-medium text-accent-cream/90 mb-10 tracking-wide">
                Find <span className="text-gradient-gold italic">Us</span>
              </h3>
              <div className="rounded-xl overflow-hidden aspect-[4/3] lg:aspect-auto lg:h-[calc(100%-5rem)] min-h-[400px] border border-stone-800/30 shadow-card">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.5!2d77.08!3d28.62!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sJanakpuri%2C+Delhi!5e0!3m2!1sen!2sin!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) saturate(0.2) brightness(0.7) contrast(1.1)' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Arabico Coffee location on Google Maps"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
