import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  onClick?: () => void
  className?: string
  icon?: ReactNode
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  icon,
}: ButtonProps) {
  const base = 'inline-flex items-center justify-center gap-2.5 font-heading font-medium tracking-[0.15em] uppercase relative overflow-hidden group cursor-pointer'

  const variants = {
    primary:
      'bg-accent-gold text-accent-espresso hover:shadow-glow active:scale-[0.97]',
    outline:
      'border border-accent-gold/20 text-accent-gold hover:border-accent-gold/50 hover:bg-accent-gold/[0.04] hover:shadow-glow active:scale-[0.97]',
    ghost:
      'text-stone-400 hover:text-accent-gold active:scale-[0.97]',
  }

  const sizes = {
    sm: 'text-[10px] px-6 py-2.5 rounded-[2px]',
    md: 'text-[10px] px-8 py-3.5 rounded-[2px]',
    lg: 'text-[11px] px-10 py-4 rounded-[3px]',
  }

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`

  const inner = (
    <>
      {variant === 'primary' && (
        <>
          <span className="absolute inset-0 bg-gradient-to-r from-brand-300 via-accent-gold to-brand-300 bg-[length:200%_100%] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.15),transparent_70%)]" />
        </>
      )}
      {variant === 'outline' && (
        <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_50%_50%,rgba(201,169,110,0.06),transparent_70%)]" />
      )}
      <span className="relative z-10 flex items-center gap-2.5">
        <span className="transition-transform duration-300 group-hover:-translate-x-0.5">{children}</span>
        {icon && (
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            {icon}
          </span>
        )}
      </span>
    </>
  )

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: 'spring', stiffness: 400, damping: 20 }}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      >
        {inner}
      </motion.a>
    )
  }

  return (
    <motion.button
      type="submit"
      className={classes}
      onClick={onClick}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
    >
      {inner}
    </motion.button>
  )
}
