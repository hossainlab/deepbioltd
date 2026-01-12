import { Hero } from '@/components/Hero'
import { Services } from '@/components/Services'
import { Contact } from '@/components/Contact'

export default function HomePage() {
  return (
    <>
      <section id="home">
        <Hero />
      </section>
      <section id="services" className="py-24 bg-white">
        <Services />
      </section>
      <section id="contact" className="py-24 bg-white">
        <Contact />
      </section>
    </>
  )
}
