import React from 'react'
import Link from 'next/link'
import { ArrowUpRight, Mail, Sparkles } from 'lucide-react'

export const CtaBlock: React.FC = () => {
  return (
    <div className="max-w-plate mx-auto px-6 md:px-10">
      <div className="rounded-3xl bg-surface-pale border border-rule p-8 md:p-14">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:gap-16">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-rule px-3 py-1 text-xs font-mono text-ink bg-white shadow-subtle mb-4">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>Open Research &amp; Clinical Collaborations</span>
            </div>

            <h2 className="text-heading-lg text-ink max-w-[18ch]">
              Collaborate with DeepBio on Life Sciences AI
            </h2>

            <p className="mt-4 max-w-measure text-deck text-ink-secondary font-light leading-relaxed">
              Whether you are a hospital research team with clinical cohorts, an academic lab, or a regional institution, we invite collaborative studies to develop and benchmark biological foundation models for South Asia.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col items-start lg:items-end gap-4">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 h-11 pl-6 pr-2 rounded-full text-sm font-semibold bg-ink text-white hover:bg-brand transition-all"
            >
              <span>Propose a collaboration</span>
              <span className="w-7 h-7 rounded-full bg-white text-ink flex items-center justify-center text-xs group-hover:rotate-45 transition-transform duration-200">
                &rarr;
              </span>
            </Link>

            <a
              href="mailto:info@deepbioltd.com"
              className="inline-flex items-center gap-2 text-xs font-mono text-slate hover:text-ink pt-1"
            >
              <Mail className="w-3.5 h-3.5 text-brand" />
              <span>info@deepbioltd.com</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
