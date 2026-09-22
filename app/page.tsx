import { Hero } from '@/components/Hero'
import { WhatWeDo } from '@/components/home/WhatWeDo'
import { BoltzModelsAccordion } from '@/components/home/BoltzModelsAccordion'
import { Leadership } from '@/components/home/Leadership'
import { ActiveResearchSpotlight } from '@/components/home/ActiveResearchSpotlight'
import { BoltzDualCta } from '@/components/home/BoltzDualCta'

/**
 * DeepBio Homepage
 */
export default function HomePage() {
  return (
    <div className="bg-white min-h-screen">
      <Hero />
      <WhatWeDo />
      <BoltzModelsAccordion />
      <ActiveResearchSpotlight />
      <Leadership />
      <BoltzDualCta />
    </div>
  )
}
