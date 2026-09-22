import React from 'react'
import Link from 'next/link'

export const BoltzDualCta: React.FC = () => {
  return (
    <section id="collaborate" className="w-full py-16 md:py-24 bg-[#F0F5FA] border-b border-rule scroll-mt-20 md:scroll-mt-24">
      <div className="max-w-container mx-auto px-6 md:px-10 flex flex-col gap-10">
        {/* Row 1: Partner with us */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-10 border-b border-rule/80">
          <div className="space-y-2 max-w-2xl">
            <h3 className="text-2xl font-bold text-ink">Partner with us</h3>
            <p className="text-sm text-ink-secondary font-light leading-relaxed">
              We invite academic research groups, hospital clinical ICUs, and agricultural institutes to collaborate on foundational AI studies and pilot programs.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center h-10 px-6 rounded-full text-xs font-semibold whitespace-nowrap bg-ink text-white hover:bg-brand transition-all shadow-subtle self-start md:self-auto"
          >
            Partner with us
          </Link>
        </div>

        {/* Row 2: Join our team */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <h3 className="text-2xl font-bold text-ink">Join our team</h3>
            <p className="text-sm text-ink-secondary font-light leading-relaxed">
              We are building an applied computational biology and machine learning team in Dhaka. Join us in shaping foundational AI for life sciences in South Asia.
            </p>
          </div>

          <Link
            href="/team"
            className="inline-flex items-center h-10 px-6 rounded-full text-xs font-semibold whitespace-nowrap bg-ink text-white hover:bg-brand transition-all shadow-subtle self-start md:self-auto"
          >
            Meet our team
          </Link>
        </div>
      </div>
    </section>
  )
}
