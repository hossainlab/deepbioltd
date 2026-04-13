import { Hero } from '@/components/Hero'
import { WhoWeServe } from '@/components/WhoWeServe'
import { CoreExpertise } from '@/components/CoreExpertise'
import { FeaturedInitiatives } from '@/components/FeaturedInitiatives'
import { Contact } from '@/components/Contact'

export default function HomePage() {
  return (
    <>
      <section id="home">
        <Hero />
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
