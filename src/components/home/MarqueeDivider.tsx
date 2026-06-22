import Marquee from '@/components/ui/Marquee'

const items = [
  'Spanish Latte',
  'Vanilla Matcha',
  'Cold Brew',
  'Affogato',
  'Falafel Wrap',
  'Peri-Peri Fries',
  'Chicken Momos',
  'Caramel Macchiato',
  'Belgian Mocha',
  'Veg Sandwich',
]

export default function MarqueeDivider() {
  return (
    <div className="py-8 border-y border-stone-800/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-surface-primary via-surface-elevated/20 to-surface-primary" />
      <Marquee speed={45} pauseOnHover>
        {items.map((item) => (
          <span
            key={item}
            className="flex items-center gap-8 text-xl md:text-2xl font-display text-stone-800/70 whitespace-nowrap select-none tracking-wide italic"
          >
            {item}
            <span className="w-1.5 h-1.5 rounded-full bg-accent-gold/20 not-italic" />
          </span>
        ))}
      </Marquee>
    </div>
  )
}
