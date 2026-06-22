import Hero from '@/components/home/Hero'
import Stats from '@/components/home/Stats'
import MarqueeDivider from '@/components/home/MarqueeDivider'
import FeaturedItems from '@/components/home/FeaturedItems'
import Testimonials from '@/components/home/Testimonials'
import GalleryPreview from '@/components/home/GalleryPreview'
import CTA from '@/components/home/CTA'

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <MarqueeDivider />
      <FeaturedItems />
      <GalleryPreview />
      <MarqueeDivider />
      <Testimonials />
      <CTA />
    </>
  )
}
