import { cn } from '@/lib/utils'
import type { ReactNode } from 'react'

interface MarqueeProps {
  children: ReactNode
  pauseOnHover?: boolean
  direction?: 'left' | 'right'
  speed?: number
  className?: string
}

export default function Marquee({
  children,
  pauseOnHover = true,
  direction = 'left',
  speed = 40,
  className,
}: MarqueeProps) {
  return (
    <div
      className={cn(
        'w-full overflow-hidden relative',
        className
      )}
    >
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-surface-primary to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-surface-primary to-transparent z-10" />
      <div className="relative flex overflow-hidden">
        <div
          className={cn(
            'flex w-max gap-8 shrink-0',
            pauseOnHover && 'hover:[animation-play-state:paused]',
            direction === 'left' ? 'animate-[marquee_var(--duration)_linear_infinite]' : 'animate-[marquee-reverse_var(--duration)_linear_infinite]'
          )}
          style={{ '--duration': `${speed}s` } as React.CSSProperties}
        >
          {children}
          {children}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes marquee-reverse {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </div>
  )
}
