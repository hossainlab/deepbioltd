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
 * Three grounds, used for rhythm rather than decoration.
 *
 * Navy opens and closes the page and carries the process band in the middle,
 * because navy is where the mark lives. White holds the reading sections.
 * Chalk marks the two quiet strips — the collaborator row and the audience
 * band — that are context rather than argument.
 *
 * Order is the order a sceptical PI reads in: the claim, who already works with
 * us, what we run, who it is for, how an engagement goes, what the output
 * actually looks like, who does it, the objections, the ask.
 */
export default function HomePage() {
  return (
    <>
      <Hero />

      <section id="collaborators" className="border-b border-rule bg-chalk py-12">
        <Partners />
      </section>

      <section id="what-we-do" className="bg-paper py-20 md:py-28">
        <Capabilities />
      </section>

      <section id="who-we-serve" className="border-y border-rule bg-chalk py-14">
        <WhoWeServe />
      </section>

      <section id="how-we-work" className="on-deep bg-abyss py-20 md:py-28">
        <HowWeWork />
      </section>

      <section id="work" className="bg-paper py-20 md:py-28">
        <SelectedWork />
      </section>

      <section id="team" className="border-t border-rule bg-paper py-20 md:py-28">
        <Leadership />
      </section>

      <section id="faq" className="border-t border-rule bg-chalk py-20 md:py-28">
        <HomeFaq />
      </section>

      <section id="contact" className="on-deep border-b border-deep-rule bg-abyss py-20 md:py-24">
        <CtaBlock />
      </section>
    </>
  )
}
