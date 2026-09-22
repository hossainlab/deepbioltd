'use client'

import React, { useState } from 'react'
import { Mail, Phone, MapPin, Send, CheckCircle2, ShieldCheck, Clock, FileText, Sparkles } from 'lucide-react'

const channels = [
  {
    title: 'Start a Project / Scoping',
    line: 'Direct pipeline scoping, custom models & fixed quotes.',
    value: 'services@deepbioltd.com',
    href: 'mailto:services@deepbioltd.com?subject=DeepBio%20Project%20Scoping',
    icon: Mail,
  },
  {
    title: 'General & Academic Partnerships',
    line: 'Consortia, research wings, press and academic agreements.',
    value: 'info@deepbioltd.com',
    href: 'mailto:info@deepbioltd.com?subject=DeepBio%20Partnership%20Inquiry',
    icon: FileText,
  },
  {
    title: 'Direct Office Phone',
    line: 'Dhaka Lab office hours: Sun to Thu, 9 AM - 6 PM (BST).',
    value: '+880 1843 381652',
    href: 'tel:+8801843381652',
    icon: Phone,
  },
]

export const Contact: React.FC = () => {
  const [dataType, setDataType] = useState('')
  const [dataVolume, setDataVolume] = useState('')
  const [question, setQuestion] = useState('')
  const [deadline, setDeadline] = useState('')
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleComposeMailto = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Project Scoping Request: ${dataType || 'Computational Biology'}`)
    const body = encodeURIComponent(
      `Contact Email: ${email}\n` +
      `Data Type: ${dataType}\n` +
      `Volume/Cohort Size: ${dataVolume}\n` +
      `Target Deadline: ${deadline}\n\n` +
      `Research Question & Objective:\n${question}\n`
    )
    window.location.href = `mailto:services@deepbioltd.com?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  return (
    <div className="max-w-plate mx-auto px-6 md:px-10">
      {/* Header */}
      <div className="max-w-3xl mb-12">
        <div className="inline-flex items-center gap-2 rounded-full bg-brand/10 border border-brand/20 px-3 py-1 text-xs font-mono text-brand mb-4">
          <Sparkles className="w-3.5 h-3.5 text-amber-500" />
          <span>Fixed-Price Scoping &bull; 24h Response</span>
        </div>

        <h1 className="text-display text-ink max-w-[18ch]">
          Tell us what you&rsquo;re working on.
        </h1>

        <p className="mt-4 text-deck text-slate font-light leading-relaxed">
          Send the biological data type, cohort volume, and the scientific question you need answered. You receive a written scope with a fixed price and timeline within 24 business hours. If we are not the right fit, we will say so immediately.
        </p>
      </div>

      <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 items-start">
        {/* Scoping Inquiry Form */}
        <form
          onSubmit={handleComposeMailto}
          className="p-8 rounded-2xl bg-chalk border border-rule space-y-6 shadow-sm"
        >
          <div className="border-b border-rule pb-4">
            <h3 className="text-lg font-bold text-ink">Project Scoping Inquiry</h3>
            <p className="text-xs text-slate mt-1">
              Fill in your parameters to generate an instant formal scoping request.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="data text-slate-700 font-semibold text-xs uppercase">
                Your Email Address *
              </label>
              <input
                type="email"
                required
                placeholder="pi@institution.org"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3.5 py-2 text-xs bg-white border border-rule rounded focus:outline-none focus:border-brand text-ink"
              />
            </div>

            <div className="space-y-1.5">
              <label className="data text-slate-700 font-semibold text-xs uppercase">
                Data Type (e.g. Bulk/scRNA, FASTQ, PDB)
              </label>
              <input
                type="text"
                placeholder="e.g. 10x Single-Cell RNA-seq"
                value={dataType}
                onChange={(e) => setDataType(e.target.value)}
                className="w-full px-3.5 py-2 text-xs bg-white border border-rule rounded focus:outline-none focus:border-brand text-ink"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="data text-slate-700 font-semibold text-xs uppercase">
                Volume / Number of Samples
              </label>
              <input
                type="text"
                placeholder="e.g. 24 samples / 120GB"
                value={dataVolume}
                onChange={(e) => setDataVolume(e.target.value)}
                className="w-full px-3.5 py-2 text-xs bg-white border border-rule rounded focus:outline-none focus:border-brand text-ink"
              />
            </div>

            <div className="space-y-1.5">
              <label className="data text-slate-700 font-semibold text-xs uppercase">
                Target Timeline / Deadline
              </label>
              <input
                type="text"
                placeholder="e.g. 4 weeks / Grant deadline"
                value={deadline}
                onChange={(e) => setDeadline(e.target.value)}
                className="w-full px-3.5 py-2 text-xs bg-white border border-rule rounded focus:outline-none focus:border-brand text-ink"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="data text-slate-700 font-semibold text-xs uppercase">
              Scientific Question &amp; Objectives *
            </label>
            <textarea
              required
              rows={4}
              placeholder="Describe the biological hypotheses, target genes/complexes, or clinical endpoints..."
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              className="w-full px-3.5 py-2 text-xs bg-white border border-rule rounded focus:outline-none focus:border-brand text-ink"
            />
          </div>

          <button
            type="submit"
            className="btn w-full flex items-center justify-center gap-2 py-3 text-sm font-semibold"
          >
            <Send className="w-4 h-4" />
            <span>Generate Scoping Email &amp; Submit</span>
          </button>

          {submitted && (
            <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Email client launched! You can also email services@deepbioltd.com directly.</span>
            </div>
          )}
        </form>

        {/* Channels & Lab Footprint */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-ink">Direct Contact Channels</h3>
            <dl className="space-y-4">
              {channels.map((c) => {
                const Icon = c.icon
                return (
                  <div key={c.title} className="p-5 rounded-xl bg-chalk border border-rule space-y-1">
                    <dt className="flex items-center gap-2 font-bold text-sm text-ink">
                      <Icon className="w-4 h-4 text-brand" />
                      <span>{c.title}</span>
                    </dt>
                    <dd className="text-xs text-slate">
                      <p>{c.line}</p>
                      <a
                        href={c.href}
                        className="mt-2 inline-block font-mono font-semibold text-brand hover:underline"
                      >
                        {c.value}
                      </a>
                    </dd>
                  </div>
                )
              })}
            </dl>
          </div>

          {/* Security & Data Transfer Notice */}
          <div className="p-5 rounded-xl bg-paper border border-rule space-y-3">
            <div className="flex items-center gap-2 text-brand text-xs font-bold uppercase">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Data Protection &amp; Confidentiality</span>
            </div>
            <p className="text-xs text-slate leading-relaxed">
              We execute bilateral Non-Disclosure Agreements (NDAs) and Data Transfer Agreements (DTAs) prior to receiving proprietary datasets. DeepBio Limited operates from Dhaka, Bangladesh, executing computational biology research for international clients.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
