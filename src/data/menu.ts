export interface MenuItem {
  id: string
  name: string
  description: string
  price: number
  category: string
  tag?: string
  image?: string
}

export const categories = [
  'All',
  'Coffee',
  'Matcha',
  'Sandwiches',
  'Wraps',
  'Snacks',
  'Beverages',
] as const

export const menuItems: MenuItem[] = [
  {
    id: 'spanish-latte',
    name: 'Spanish Latte',
    description: 'Rich espresso blended with sweetened condensed milk, topped with velvety microfoam',
    price: 249,
    category: 'Coffee',
    tag: 'Bestseller',
  },
  {
    id: 'classic-cappuccino',
    name: 'Classic Cappuccino',
    description: 'Double shot espresso with equal parts steamed and foamed milk',
    price: 199,
    category: 'Coffee',
  },
  {
    id: 'caramel-macchiato',
    name: 'Caramel Macchiato',
    description: 'Vanilla-infused steamed milk marked with espresso and caramel drizzle',
    price: 269,
    category: 'Coffee',
  },
  {
    id: 'cold-brew',
    name: 'Cold Brew',
    description: 'Slow-steeped for 18 hours, served over ice with a smooth, bold finish',
    price: 229,
    category: 'Coffee',
  },
  {
    id: 'mocha',
    name: 'Belgian Mocha',
    description: 'Premium Belgian chocolate melted with espresso and steamed milk',
    price: 259,
    category: 'Coffee',
  },
  {
    id: 'affogato',
    name: 'Affogato',
    description: 'Double espresso poured over a scoop of artisan vanilla gelato',
    price: 279,
    category: 'Coffee',
    tag: 'Chef\'s Pick',
  },
  {
    id: 'vanilla-matcha',
    name: 'Vanilla Matcha',
    description: 'Ceremonial-grade matcha whisked with vanilla-infused oat milk',
    price: 279,
    category: 'Matcha',
    tag: 'Popular',
  },
  {
    id: 'iced-matcha',
    name: 'Iced Matcha Latte',
    description: 'Chilled ceremonial matcha over ice with your choice of milk',
    price: 259,
    category: 'Matcha',
  },
  {
    id: 'matcha-frappe',
    name: 'Matcha Frappé',
    description: 'Blended matcha with milk, ice, and a touch of honey',
    price: 289,
    category: 'Matcha',
  },
  {
    id: 'veg-sandwich',
    name: 'Garden Veg Sandwich',
    description: 'Grilled vegetables, herbed cream cheese, sun-dried tomatoes on sourdough',
    price: 219,
    category: 'Sandwiches',
    tag: 'Popular',
  },
  {
    id: 'chicken-club',
    name: 'Chicken Club Sandwich',
    description: 'Grilled chicken breast, crispy bacon, lettuce, tomato, garlic aioli',
    price: 269,
    category: 'Sandwiches',
  },
  {
    id: 'paneer-tikka-sandwich',
    name: 'Paneer Tikka Sandwich',
    description: 'Spiced paneer tikka with mint chutney and pickled onions on multigrain',
    price: 239,
    category: 'Sandwiches',
  },
  {
    id: 'falafel-wrap',
    name: 'Falafel Wrap',
    description: 'Crispy falafel with hummus, fresh veggies, tahini drizzle in lavash',
    price: 229,
    category: 'Wraps',
    tag: 'Bestseller',
  },
  {
    id: 'chicken-shawarma',
    name: 'Chicken Shawarma Wrap',
    description: 'Marinated chicken shawarma with garlic sauce, pickles, and fresh herbs',
    price: 259,
    category: 'Wraps',
  },
  {
    id: 'paneer-wrap',
    name: 'Paneer Tikka Wrap',
    description: 'Tandoori paneer with bell peppers, onions, and mint mayo',
    price: 239,
    category: 'Wraps',
  },
  {
    id: 'chicken-momos',
    name: 'Chicken Momos',
    description: 'Steamed dumplings filled with spiced chicken, served with fiery chutney',
    price: 199,
    category: 'Snacks',
    tag: 'Popular',
  },
  {
    id: 'peri-peri-fries',
    name: 'Peri-Peri Fries',
    description: 'Crispy golden fries tossed in house-blend peri-peri seasoning',
    price: 179,
    category: 'Snacks',
    tag: 'Bestseller',
  },
  {
    id: 'loaded-nachos',
    name: 'Loaded Nachos',
    description: 'Tortilla chips loaded with cheese, jalapeños, salsa, and sour cream',
    price: 229,
    category: 'Snacks',
  },
  {
    id: 'garlic-bread',
    name: 'Cheesy Garlic Bread',
    description: 'Toasted baguette with roasted garlic butter and melted mozzarella',
    price: 189,
    category: 'Snacks',
  },
  {
    id: 'fresh-lime-soda',
    name: 'Fresh Lime Soda',
    description: 'Freshly squeezed lime with soda, mint, and a pinch of rock salt',
    price: 149,
    category: 'Beverages',
  },
  {
    id: 'mango-smoothie',
    name: 'Alphonso Mango Smoothie',
    description: 'Alphonso mango puree blended with yogurt and a drizzle of honey',
    price: 219,
    category: 'Beverages',
  },
  {
    id: 'hot-chocolate',
    name: 'Belgian Hot Chocolate',
    description: 'Rich Belgian chocolate melted into steamed milk with whipped cream',
    price: 239,
    category: 'Beverages',
  },
]
