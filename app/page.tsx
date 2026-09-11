import dynamic from 'next/dynamic'

import { Hero } from '@/components/Hero'
import { Partners } from '@/components/Partners'
import { Capabilities } from '@/components/home/Capabilities'
import { WhoWeServe } from '@/components/WhoWeServe'
import { HowWeWork } from '@/components/home/HowWeWork'
import { SelectedWork } from '@/components/home/SelectedWork'
import { Leadership } from '@/components/home/Leadership'
import { CtaBlock } from '@/components/home/CtaBlock'

// The only genuinely client-side, below-the-fold section. The rest are server
// components with no client bundle, so dynamic() there added a chunk boundary
// and deferred nothing.
const HomeFaq = dynamic(() => import('@/components/home/HomeFaq').then(m => m.HomeFaq))

/**
 * The page is set as a document, not a deck.
 *
 * Sections are separated by hairline rules and whitespace rather than by
 * alternating background bands — the ground stays paper almost throughout, so
 * the two dark passages (the process, and the closing ask) actually register.
 * Figures are numbered continuously, Fig. 1 through Fig. 5.
 */
export default function HomePage() {
  return (
    <>
      <Hero />

      <section id="collaborators" className="bg-paper pb-16 md:pb-20">
        <Partners />
      </section>

      <section id="what-we-do" className="bg-paper py-20 md:py-28">
        <Capabilities />
      </section>

      <section id="who-we-serve" className="bg-paper pb-20 md:pb-28">
        <WhoWeServe />
      </section>

      <section id="how-we-work" className="bg-deep py-24 md:py-32">
        <HowWeWork />
      </section>

      <section id="work" className="bg-paper py-20 md:py-28">
        <SelectedWork />
      </section>

      <section id="team" className="bg-paper pb-20 md:pb-28">
        <Leadership />
      </section>



      <section id="faq" className="bg-paper pb-20 md:pb-28">
        <HomeFaq />
      </section>

      <section id="contact" className="bg-deep py-20 md:py-24">
        <CtaBlock />
      </section>
    </>
  )
}
