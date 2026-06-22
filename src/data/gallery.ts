export interface GalleryImage {
  id: string
  src: string
  alt: string
  aspect: 'tall' | 'wide' | 'square'
}

export const galleryImages: GalleryImage[] = [
  {
    id: '1',
    src: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80',
    alt: 'Barista preparing a latte with intricate foam art',
    aspect: 'tall',
  },
  {
    id: '2',
    src: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&q=80',
    alt: 'Warm cafe interior with ambient lighting',
    aspect: 'wide',
  },
  {
    id: '3',
    src: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&q=80',
    alt: 'Perfectly brewed cappuccino on a marble table',
    aspect: 'square',
  },
  {
    id: '4',
    src: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=800&q=80',
    alt: 'Coffee beans being roasted to perfection',
    aspect: 'tall',
  },
  {
    id: '5',
    src: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80',
    alt: 'Cozy corner with warm Edison bulb lighting',
    aspect: 'wide',
  },
  {
    id: '6',
    src: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800&q=80',
    alt: 'Artisan pastries displayed with care',
    aspect: 'square',
  },
  {
    id: '7',
    src: 'https://images.unsplash.com/photo-1498804103079-a6351b050096?w=800&q=80',
    alt: 'Iced coffee with artistic presentation',
    aspect: 'tall',
  },
  {
    id: '8',
    src: 'https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=800&q=80',
    alt: 'Friends enjoying coffee in a warm atmosphere',
    aspect: 'wide',
  },
  {
    id: '9',
    src: 'https://images.unsplash.com/photo-1504630083234-14187a9df0f5?w=800&q=80',
    alt: 'Matcha latte with beautiful layers',
    aspect: 'square',
  },
  {
    id: '10',
    src: 'https://images.unsplash.com/photo-1493857671505-72967e2e2760?w=800&q=80',
    alt: 'The bar counter with ambient glow',
    aspect: 'tall',
  },
  {
    id: '11',
    src: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=800&q=80',
    alt: 'Fresh sandwich plated beautifully',
    aspect: 'wide',
  },
  {
    id: '12',
    src: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=800&q=80',
    alt: 'Close-up of espresso extraction',
    aspect: 'square',
  },
]
