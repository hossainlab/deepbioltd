'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Terminal, Copy, Check, Cpu, ShieldCheck, Sliders, ArrowUpRight } from 'lucide-react'

export const BoltzPlatformPrimitives: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'python' | 'curl' | 'nextflow'>('python')
  const [activeProduct, setActiveProduct] = useState<'api' | 'biohpc'>('api')
  const [copied, setCopied] = useState(false)

  const codeSnippets = {
    python: `import deepbio as db

# Initialize the DeepBio Life Sciences Foundation Model
client = db.Client(api_key="db_live_...")

# Run Sequence-to-Phenotype Resistance Prediction
prediction = client.models.predict_amr(
    sequence_reads="samples/BD_DH_isolate_091.fastq.gz",
    organism="Klebsiella pneumoniae",
    confidence_threshold=0.95
)

print(f"Resistance Determinants: {prediction.resistance_genes}")
print(f"Carbapenem Risk Score: {prediction.risk_score}/100")`,
    curl: `curl -X POST https://api.deepbioltd.com/v1/models/predict-amr \\
  -H "Authorization: Bearer db_live_..." \\
  -H "Content-Type: application/json" \\
  -d '{
    "organism": "Klebsiella pneumoniae",
    "sample_uri": "s3://deepbio-secure/samples/BD_DH_091.fastq",
    "calibrated_ancestry": "South_Asian"
  }'`,
    nextflow: `process RUN_DEEPBIO_FOUNDATION_AI {
    container 'deepbioltd/foundation-bio:2.6'
    publishDir "results/amr_predictions", mode: 'copy'

    input:
    path reads from ch_sample_reads

    output:
    path "prediction_report.json"

    script:
    """
    deepbio-cli predict-amr --input \${reads} --output prediction_report.json
    """
}`,
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippets[activeTab])
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="w-full pt-20 pb-16 bg-white border-b border-rule">
      <div className="max-w-container mx-auto px-6 md:px-10 flex flex-col gap-8">
        {/* Section Header */}
        <div className="flex flex-col items-start gap-4">
          <div className="inline-flex items-center gap-0 w-fit">
            <span className="w-7 h-7 rounded-full border border-ink text-ink flex items-center justify-center">
              <Terminal className="w-3.5 h-3.5" />
            </span>
            <span className="h-7 px-3 rounded-full border border-ink text-ink text-xs font-semibold -ml-px flex items-center bg-white">
              Platform &amp; Primitives
            </span>
          </div>

          <div className="inline-flex">
            <button
              onClick={() => setActiveProduct('api')}
              className={`h-9 px-5 rounded-full border text-xs font-semibold whitespace-nowrap transition-colors -ml-px first:ml-0 ${
                activeProduct === 'api'
                  ? 'bg-ink text-white border-ink z-10'
                  : 'border-rule text-ink hover:bg-surface-secondary'
              }`}
            >
              DeepBio API
            </button>
            <button
              onClick={() => setActiveProduct('biohpc')}
              className={`h-9 px-5 rounded-full border text-xs font-semibold whitespace-nowrap transition-colors -ml-px first:ml-0 ${
                activeProduct === 'biohpc'
                  ? 'bg-ink text-white border-ink z-10'
                  : 'border-rule text-ink hover:bg-surface-secondary'
              }`}
            >
              BioHPC Cloud Lab
            </button>
          </div>
        </div>

        {/* Big Card (Boltz Style with Soft Blue Tint Ground) */}
        <div className="relative overflow-hidden rounded-2xl p-6 md:p-10 bg-[#EBF3FA] border border-rule transition-all">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-10 items-center">
            {/* Left Column */}
            <div className="space-y-6">
              <h2 className="text-heading-lg text-ink">
                New primitives for agentic computational biology
              </h2>
              <p className="text-base text-ink-secondary font-light leading-relaxed">
                Integrate state-of-the-art biological foundation models into your research pipelines, hospital diagnostic workflows, or bioinformatics scripts.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center h-10 px-6 rounded-full text-xs font-semibold bg-ink text-white hover:bg-brand transition-all shadow-subtle"
              >
                Request API Access
              </Link>
            </div>

            {/* Right Column: Code Block */}
            <div className="rounded-xl bg-abyss border border-slate-700/80 p-4 text-xs font-mono text-on-deep shadow-lg">
              <div className="flex items-center justify-between border-b border-deep-rule pb-3 mb-3">
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => setActiveTab('python')}
                    className={`px-2.5 py-1 rounded text-[11px] ${
                      activeTab === 'python' ? 'bg-slate-800 text-beam font-bold' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Python (pysynthbio)
                  </button>
                  <button
                    onClick={() => setActiveTab('curl')}
                    className={`px-2.5 py-1 rounded text-[11px] ${
                      activeTab === 'curl' ? 'bg-slate-800 text-beam font-bold' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    cURL
                  </button>
                  <button
                    onClick={() => setActiveTab('nextflow')}
                    className={`px-2.5 py-1 rounded text-[11px] ${
                      activeTab === 'nextflow' ? 'bg-slate-800 text-beam font-bold' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Nextflow
                  </button>
                </div>

                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1 text-[11px] text-slate-400 hover:text-white px-2 py-1 rounded bg-slate-900 border border-slate-700"
                >
                  {copied ? <Check className="w-3 h-3 text-emerald" /> : <Copy className="w-3 h-3" />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              <pre className="overflow-x-auto text-[11px] leading-relaxed text-slate-200">
                <code>{codeSnippets[activeTab]}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* 3 Grid Feature Cards (Boltz Style) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="p-6 rounded-2xl bg-surface-secondary border border-rule space-y-4 hover:bg-white hover:shadow-subtle transition-all">
            <div className="h-28 rounded-xl bg-white border border-rule/80 p-3 flex flex-col justify-between">
              <span className="text-[10px] font-mono text-slate uppercase">Latency Telemetry</span>
              <div className="flex items-end justify-between">
                <span className="text-2xl font-bold font-mono text-ink">42 ms</span>
                <span className="text-[10px] font-mono text-emerald px-1.5 py-0.5 rounded bg-emerald-50 border border-emerald-200">
                  GPU Accelerated
                </span>
              </div>
            </div>
            <h3 className="text-base font-bold text-ink">Fast GPU inference</h3>
            <p className="text-xs text-ink-secondary font-light leading-relaxed">
              Sequence-to-structure and transcriptomic predictions run on high-performance compute clusters for rapid turnaround.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-6 rounded-2xl bg-surface-secondary border border-rule space-y-4 hover:bg-white hover:shadow-subtle transition-all">
            <div className="h-28 rounded-xl bg-white border border-rule/80 p-3 flex flex-col justify-between">
              <span className="text-[10px] font-mono text-slate uppercase">Data Sovereignty</span>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-6 h-6 text-emerald" />
                <span className="text-xs font-mono font-bold text-ink">Encrypted &bull; 100% Client Ownership</span>
              </div>
            </div>
            <h3 className="text-base font-bold text-ink">Secure data custody</h3>
            <p className="text-xs text-ink-secondary font-light leading-relaxed">
              Strict execution of NDAs and DTAs with encrypted processing silos ensuring your proprietary datasets remain strictly yours.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-6 rounded-2xl bg-surface-secondary border border-rule space-y-4 hover:bg-white hover:shadow-subtle transition-all">
            <div className="h-28 rounded-xl bg-white border border-rule/80 p-3 flex flex-col justify-between">
              <span className="text-[10px] font-mono text-slate uppercase">Model Tuning</span>
              <div className="flex items-center gap-2">
                <Sliders className="w-6 h-6 text-brand" />
                <span className="text-xs font-mono font-bold text-ink">Ancestry Fine-Tuned</span>
              </div>
            </div>
            <h3 className="text-base font-bold text-ink">Ancestry calibration</h3>
            <p className="text-xs text-ink-secondary font-light leading-relaxed">
              Fine-tune biological foundation models on underrepresented South Asian population cohorts for calibrated risk prediction.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
