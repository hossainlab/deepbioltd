import { Hero } from '@/components/Hero'
import { Partners } from '@/components/Partners'
import dynamic from 'next/dynamic'

const WhoWeServe = dynamic(() => import('@/components/WhoWeServe').then(m => m.WhoWeServe))
const CoreExpertise = dynamic(() => import('@/components/CoreExpertise').then(m => m.CoreExpertise))
const FeaturedInitiatives = dynamic(() => import('@/components/FeaturedInitiatives').then(m => m.FeaturedInitiatives))
const Contact = dynamic(() => import('@/components/Contact').then(m => m.Contact))

export default function HomePage() {
  return (
    <>
      <section id="home">
        <Hero />
      </section>
      <section className="py-24 bg-white border-y border-slate-50">
        <Partners />
      </section>
      <section id="who-we-serve" className="py-24 bg-slate-50">
        <WhoWeServe />
      </section>
      <section id="core-expertise" className="py-24 bg-white">
        <CoreExpertise />
      </section>
      <section id="initiatives" className="py-24 bg-slate-50">
        <FeaturedInitiatives />
      </section>
      <section id="contact" className="py-24 bg-white">
        <Contact />
      </section>
    </>
  )
}
