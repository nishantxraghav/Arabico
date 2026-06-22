export interface Review {
  id: string
  name: string
  avatar: string
  rating: number
  text: string
  date: string
  source: string
}

export const reviews: Review[] = [
  {
    id: '1',
    name: 'Priya Sharma',
    avatar: 'PS',
    rating: 5,
    text: 'Absolutely love this place! The Spanish Latte is to die for. The ambience is so warm and cozy — perfect for a date night or a chill evening with friends. Best cafe in Janakpuri, hands down.',
    date: '2 weeks ago',
    source: 'Google',
  },
  {
    id: '2',
    name: 'Arjun Mehta',
    avatar: 'AM',
    rating: 5,
    text: 'Finally a cafe in West Delhi that feels premium without being pretentious. The coffee quality is exceptional, and the falafel wrap is surprisingly good. Became a regular after my first visit.',
    date: '1 month ago',
    source: 'Google',
  },
  {
    id: '3',
    name: 'Sneha Kapoor',
    avatar: 'SK',
    rating: 5,
    text: 'The vanilla matcha here changed my life. I drive 40 minutes just for it. The interiors are gorgeous — very Instagrammable. Staff is super friendly and attentive.',
    date: '3 weeks ago',
    source: 'Google',
  },
  {
    id: '4',
    name: 'Rohan Gupta',
    avatar: 'RG',
    rating: 4,
    text: 'Great ambience and really good coffee. The peri-peri fries are addictive. Only wish they had more seating — it gets packed on weekends. But that says something about how good this place is.',
    date: '1 month ago',
    source: 'Zomato',
  },
  {
    id: '5',
    name: 'Ananya Singh',
    avatar: 'AS',
    rating: 5,
    text: 'This is my go-to work-from-cafe spot. The WiFi is reliable, the cold brew keeps me going, and the vibe is unmatched. Open till 1 AM — that alone makes it the best.',
    date: '2 months ago',
    source: 'Google',
  },
  {
    id: '6',
    name: 'Kabir Malhotra',
    avatar: 'KM',
    rating: 5,
    text: 'Took my parents here and they were impressed. The quality of ingredients, the attention to presentation, and the warm lighting make you feel like you are at a much more expensive place.',
    date: '3 weeks ago',
    source: 'Google',
  },
  {
    id: '7',
    name: 'Diya Verma',
    avatar: 'DV',
    rating: 4,
    text: 'The chicken momos and garlic bread are chef\'s kiss. Coffee is strong and flavourful. A bit pricey for the area but you absolutely get what you pay for. Premium experience.',
    date: '1 month ago',
    source: 'Zomato',
  },
  {
    id: '8',
    name: 'Vikram Joshi',
    avatar: 'VJ',
    rating: 5,
    text: 'Arabico is not just a cafe, it\'s an experience. From the moment you walk in, the aroma, the music, the lighting — everything is curated. The affogato is perfection.',
    date: '2 weeks ago',
    source: 'Google',
  },
]
