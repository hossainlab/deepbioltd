'use client'

import React, { useState, useEffect, useRef } from 'react'
import { Cpu, Layers, ShieldAlert, Sparkles, RefreshCw, Info, ExternalLink } from 'lucide-react'

type ViewerMode = 'structural' | 'transcriptomics' | 'pathogen_amr'

interface GenePoint {
  id: string
  name: string
  log2FC: number
  negLogP: number
  category: 'up' | 'down' | 'ns'
  pathway: string
}

interface AMRIsolate {
  id: string
  organism: string
  strain: string
  location: string
  resistanceGenes: string[]
  riskScore: number
  source: string
}

export const BiologicalAIViewer: React.FC<{ className?: string }> = ({ className = '' }) => {
  const [mode, setMode] = useState<ViewerMode>('structural')
  const [selectedGene, setSelectedGene] = useState<GenePoint | null>(null)
  const [selectedIsolate, setSelectedIsolate] = useState<AMRIsolate | null>(null)
  const [rotationAngle, setRotationAngle] = useState(0)
  const [isRotating, setIsRotating] = useState(true)
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  // Synthetic gene set representing foundational single-cell & bulk differential transcriptomics
  const genes: GenePoint[] = [
    { id: 'g1', name: 'VEGFA', log2FC: 3.42, negLogP: 14.2, category: 'up', pathway: 'Angiogenesis / Microenvironment' },
    { id: 'g2', name: 'IL6', log2FC: 2.85, negLogP: 11.5, category: 'up', pathway: 'Cytokine Signaling / Inflammation' },
    { id: 'g3', name: 'MKI67', log2FC: 2.41, negLogP: 9.8, category: 'up', pathway: 'Cell Cycle & Proliferation' },
    { id: 'g4', name: 'PCSK9', log2FC: 1.95, negLogP: 8.2, category: 'up', pathway: 'Lipid Metabolism & LDL-R' },
    { id: 'g5', name: 'STAT3', log2FC: 1.62, negLogP: 6.4, category: 'up', pathway: 'Transcriptional Regulation' },
    { id: 'g6', name: 'TP53', log2FC: -2.15, negLogP: 10.4, category: 'down', pathway: 'Tumor Suppressor Checkpoint' },
    { id: 'g7', name: 'PTEN', log2FC: -2.78, negLogP: 12.1, category: 'down', pathway: 'PI3K-Akt Signaling' },
    { id: 'g8', name: 'CDH1', log2FC: -1.82, negLogP: 7.9, category: 'down', pathway: 'Cell-Cell Adhesion' },
    { id: 'g9', name: 'BRCA1', log2FC: -1.45, negLogP: 5.6, category: 'down', pathway: 'DNA Damage Repair' },
    { id: 'g10', name: 'GAPDH', log2FC: 0.12, negLogP: 0.8, category: 'ns', pathway: 'Housekeeping Control' },
  ]

  // Pathogen & AMR Isolates for Bangladesh Genomic Surveillance Research
  const amrIsolates: AMRIsolate[] = [
    {
      id: 'BD-DH-2026-091',
      organism: 'Klebsiella pneumoniae',
      strain: 'ST147 Hypervirulent',
      location: 'Dhaka Clinical Cohort',
      resistanceGenes: ['blaNDM-1', 'blaOXA-48', 'armA (16S RMTase)', 'mgrB deletion'],
      riskScore: 98,
      source: 'ICU Research Isolate',
    },
    {
      id: 'BD-CT-2026-044',
      organism: 'Vibrio cholerae',
      strain: 'O1 El Tor Ogawa',
      location: 'Chattogram Coastal Belt',
      resistanceGenes: ['SXT element', 'gyrA(S83L)', 'parC(S80I)', 'blaTEM-1'],
      riskScore: 74,
      source: 'Wastewater Surveillance Pilot',
    },
    {
      id: 'BD-SL-2026-112',
      organism: 'Salmonella enterica',
      strain: 'Serovar Typhi H58',
      location: 'Sylhet Regional Division',
      resistanceGenes: ['blaCTX-M-15', 'qnrS1', 'catA1', 'sul1'],
      riskScore: 86,
      source: 'Pediatric Clinical Research',
    },
  ]

  // 3D Protein Canvas Animation Loop
  useEffect(() => {
    if (mode !== 'structural' || !canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number

    // Simulated backbone coordinates for Target Receptor & Designed Binder
    const targetNodes = Array.from({ length: 26 }, (_, i) => {
      const t = i * 0.35
      return {
        x: Math.sin(t) * 75 + Math.cos(t * 0.5) * 20,
        y: (i - 13) * 9,
        z: Math.cos(t) * 75 + Math.sin(t * 0.5) * 20,
        type: 'target' as const,
      }
    })

    const binderNodes = Array.from({ length: 20 }, (_, i) => {
      const t = i * 0.45 + 1.2
      return {
        x: Math.sin(t) * 45 + 40,
        y: (i - 10) * 10,
        z: Math.cos(t) * 45 - 20,
        type: 'binder' as const,
      }
    })

    const allNodes = [...targetNodes, ...binderNodes]

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const centerX = canvas.width / 2
      const centerY = canvas.height / 2
      const rad = (rotationAngle * Math.PI) / 180

      const cosR = Math.cos(rad)
      const sinR = Math.sin(rad)

      const projected = allNodes.map((node, index) => {
        const rotX = node.x * cosR - node.z * sinR
        const rotZ = node.x * sinR + node.z * cosR + 250
        const scale = 220 / rotZ
        return {
          px: centerX + rotX * scale,
          py: centerY + node.y * scale,
          depth: rotZ,
          type: node.type,
          index,
        }
      })

      projected.sort((a, b) => b.depth - a.depth)

      // Target Backbone (Cyan)
      ctx.lineWidth = 2
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.4)'
      ctx.beginPath()
      for (let i = 0; i < targetNodes.length - 1; i++) {
        const p1 = projected.find((p) => p.index === i)
        const p2 = projected.find((p) => p.index === i + 1)
        if (p1 && p2) {
          ctx.moveTo(p1.px, p1.py)
          ctx.lineTo(p2.px, p2.py)
        }
      }
      ctx.stroke()

      // Binder Backbone (Amber)
      ctx.lineWidth = 2.5
      ctx.strokeStyle = 'rgba(245, 158, 11, 0.7)'
      ctx.beginPath()
      for (let i = targetNodes.length; i < allNodes.length - 1; i++) {
        const p1 = projected.find((p) => p.index === i)
        const p2 = projected.find((p) => p.index === i + 1)
        if (p1 && p2) {
          ctx.moveTo(p1.px, p1.py)
          ctx.lineTo(p2.px, p2.py)
        }
      }
      ctx.stroke()

      // Interface contact vector
      ctx.setLineDash([3, 4])
      ctx.lineWidth = 1
      ctx.strokeStyle = 'rgba(16, 185, 129, 0.6)'
      ctx.beginPath()
      const contactTarget = projected.find((p) => p.index === 12)
      const contactBinder = projected.find((p) => p.index === targetNodes.length + 8)
      if (contactTarget && contactBinder) {
        ctx.moveTo(contactTarget.px, contactTarget.py)
        ctx.lineTo(contactBinder.px, contactBinder.py)
      }
      ctx.stroke()
      ctx.setLineDash([])

      // Residues
      projected.forEach((p) => {
        const radius = p.type === 'target' ? 3.5 : 4.5
        ctx.beginPath()
        ctx.arc(p.px, p.py, radius, 0, Math.PI * 2)

        if (p.type === 'binder') {
          ctx.fillStyle = '#F59E0B'
          ctx.shadowColor = '#F59E0B'
          ctx.shadowBlur = 6
        } else {
          ctx.fillStyle = '#0284C7'
          ctx.shadowColor = '#38BDF8'
          ctx.shadowBlur = 3
        }

        ctx.fill()
        ctx.shadowBlur = 0
      })

      if (isRotating) {
        setRotationAngle((prev) => (prev + 0.6) % 360)
      }

      animationFrameId = requestAnimationFrame(render)
    }

    render()
    return () => cancelAnimationFrame(animationFrameId)
  }, [mode, rotationAngle, isRotating])

  return (
    <div className={`bio-card-dark relative overflow-hidden rounded-2xl border border-slate-700/60 p-5 md:p-6 text-on-deep ${className}`}>
      <div className="absolute inset-0 bio-grid-pattern opacity-60 pointer-events-none" />

      {/* Header & Mode Switcher */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 border-b border-deep-rule pb-4">
        <div className="flex items-center gap-2.5">
          <div className="flex h-3 w-3 items-center justify-center">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-beam opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-beam"></span>
            </span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="data text-xs font-semibold text-beam">RESEARCH PROTOTYPE VIEWER</span>
              <span className="rounded bg-slate-800/80 px-1.5 py-0.5 text-[10px] font-mono text-amber-300 border border-slate-700">
                In Active R&amp;D
              </span>
            </div>
            <p className="text-[11px] text-on-deep-mid">Computational Life Science Demonstrations</p>
          </div>
        </div>

        {/* Tab Controls */}
        <div className="flex rounded-md bg-abyss p-1 border border-slate-800 text-xs font-medium">
          <button
            onClick={() => setMode('structural')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded transition-all ${
              mode === 'structural'
                ? 'bg-brand text-white shadow-sm font-semibold'
                : 'text-on-deep-mid hover:text-white'
            }`}
          >
            <Cpu className="w-3.5 h-3.5" />
            <span>Structural Design</span>
          </button>
          <button
            onClick={() => setMode('transcriptomics')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded transition-all ${
              mode === 'transcriptomics'
                ? 'bg-brand text-white shadow-sm font-semibold'
                : 'text-on-deep-mid hover:text-white'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>RNA &amp; Single-Cell</span>
          </button>
          <button
            onClick={() => setMode('pathogen_amr')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded transition-all ${
              mode === 'pathogen_amr'
                ? 'bg-brand text-white shadow-sm font-semibold'
                : 'text-on-deep-mid hover:text-white'
            }`}
          >
            <ShieldAlert className="w-3.5 h-3.5 text-amber-400" />
            <span>AMR Pathogen AI</span>
          </button>
        </div>
      </div>

      {/* Main Interactive Stage */}
      <div className="relative z-10 my-4 min-h-[310px] flex flex-col justify-between">
        {/* MODE 1: Structural & De Novo Binder Design */}
        {mode === 'structural' && (
          <div className="grid md:grid-cols-[1fr_220px] gap-4 items-center">
            <div className="relative flex flex-col items-center justify-center rounded-xl bg-abyss/80 border border-slate-800/80 p-3 h-[270px]">
              <canvas
                ref={canvasRef}
                width={420}
                height={230}
                className="w-full h-full max-h-[230px] cursor-grab active:cursor-grabbing"
                onClick={() => setIsRotating(!isRotating)}
              />

              <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between text-[11px] font-mono text-on-deep-faint">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-beam inline-block" />
                    Target: PCSK9 Receptor
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-helix inline-block" />
                    Designed Binder (RFdiffusion)
                  </span>
                </div>
                <button
                  onClick={() => setIsRotating(!isRotating)}
                  className="hover:text-beam flex items-center gap-1"
                >
                  <RefreshCw className={`w-3 h-3 ${isRotating ? 'animate-spin' : ''}`} />
                  {isRotating ? 'Pause' : 'Rotate'}
                </button>
              </div>
            </div>

            {/* Telemetry panel */}
            <div className="space-y-3 rounded-xl bg-deep/50 border border-slate-800 p-3.5 text-xs">
              <div className="border-b border-deep-rule pb-2">
                <p className="data text-slate-400 uppercase">Method Demonstration</p>
                <p className="font-semibold text-white mt-0.5">PCSK9 Binder Design &amp; Optimization</p>
                <p className="text-[11px] text-beam font-mono">Structural Modeling Framework</p>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Predicted Affinity (Kd):</span>
                  <span className="font-mono font-bold text-emerald-400">1.4 nM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Interface dG:</span>
                  <span className="font-mono text-white">-14.2 kcal/mol</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Target pLDDT:</span>
                  <span className="font-mono text-beam font-bold">92.8%</span>
                </div>
              </div>

              <div className="pt-2 border-t border-deep-rule">
                <span className="inline-flex items-center gap-1 rounded bg-slate-800 border border-slate-700 px-2 py-1 text-[11px] text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                  Active Computational Research
                </span>
              </div>
            </div>
          </div>
        )}

        {/* MODE 2: Multi-Omics Latent Space & Volcano Explorer */}
        {mode === 'transcriptomics' && (
          <div className="grid md:grid-cols-[1.3fr_1fr] gap-4">
            <div className="relative rounded-xl bg-abyss/80 border border-slate-800/80 p-4 h-[270px] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-1">
                  <span>-log10(p-value) vs. log2(Fold Change)</span>
                  <span className="text-beam">Differential Gene Expression</span>
                </div>
                <div className="h-px bg-slate-800 w-full mb-2" />
              </div>

              {/* Volcano plot interactive area */}
              <div className="relative w-full h-[180px] border-b border-l border-slate-700/60 p-2">
                <div className="absolute left-0 right-0 top-[40%] border-t border-dashed border-slate-700/80 text-[9px] font-mono text-slate-500 pl-1">
                  p_adj = 0.01 threshold
                </div>

                {genes.map((g) => {
                  const leftPercent = 50 + (g.log2FC / 4.5) * 45
                  const topPercent = 95 - (g.negLogP / 16) * 90
                  const isSelected = selectedGene?.id === g.id

                  return (
                    <button
                      key={g.id}
                      onClick={() => setSelectedGene(g)}
                      style={{ left: `${leftPercent}%`, top: `${topPercent}%` }}
                      className={`absolute -translate-x-1/2 -translate-y-1/2 transition-transform duration-150 ${
                        isSelected ? 'scale-150 z-20' : 'hover:scale-125 z-10'
                      }`}
                    >
                      <span
                        className={`block rounded-full ${
                          g.category === 'up'
                            ? 'w-3 h-3 bg-helix shadow-[0_0_8px_#F59E0B]'
                            : g.category === 'down'
                            ? 'w-3 h-3 bg-beam shadow-[0_0_8px_#38BDF8]'
                            : 'w-2 h-2 bg-slate-500'
                        } ${isSelected ? 'ring-2 ring-white' : ''}`}
                      />
                      {(g.category !== 'ns' || isSelected) && (
                        <span className="absolute -top-4 left-1/2 -translate-x-1/2 text-[9px] font-mono font-bold text-slate-300 pointer-events-none whitespace-nowrap">
                          {g.name}
                        </span>
                      )}
                    </button>
                  )
                })}
              </div>

              <div className="flex justify-between items-center text-[10px] font-mono text-slate-500 pt-1">
                <span>&larr; Down-regulated</span>
                <span>Click node to inspect gene</span>
                <span>Up-regulated &rarr;</span>
              </div>
            </div>

            {/* Gene detail inspector */}
            <div className="rounded-xl bg-deep/50 border border-slate-800 p-4 text-xs flex flex-col justify-between">
              {selectedGene ? (
                <div className="space-y-3">
                  <div className="flex items-center justify-between border-b border-deep-rule pb-2">
                    <div>
                      <span className="data text-slate-400 uppercase">Target Gene</span>
                      <h4 className="text-base font-bold text-white font-mono">{selectedGene.name}</h4>
                    </div>
                    <span
                      className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                        selectedGene.category === 'up'
                          ? 'bg-amber-950/80 text-amber-300 border border-amber-500/30'
                          : selectedGene.category === 'down'
                          ? 'bg-sky-950/80 text-sky-300 border border-sky-500/30'
                          : 'bg-slate-800 text-slate-300'
                      }`}
                    >
                      {selectedGene.category === 'up' ? 'UPREGULATED' : selectedGene.category === 'down' ? 'DOWNREGULATED' : 'STABLE'}
                    </span>
                  </div>

                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between">
                      <span className="text-slate-400">log2 Fold Change:</span>
                      <span className="font-mono font-bold text-white">
                        {selectedGene.log2FC > 0 ? `+${selectedGene.log2FC}` : selectedGene.log2FC}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">-log10 p-value:</span>
                      <span className="font-mono font-bold text-beam">{selectedGene.negLogP}</span>
                    </div>
                    <div className="pt-2 border-t border-deep-rule">
                      <span className="text-slate-400 block mb-1">Biological Pathway:</span>
                      <p className="text-slate-200 font-medium">{selectedGene.pathway}</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-center p-3 space-y-2 text-slate-400">
                  <Info className="w-7 h-7 text-beam opacity-60" />
                  <p className="font-medium text-slate-300">Click any transcript point to inspect</p>
                  <p className="text-[11px]">
                    Explores statistical significance and functional pathway annotations.
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* MODE 3: Pathogen Surveillance & AMR AI */}
        {mode === 'pathogen_amr' && (
          <div className="grid md:grid-cols-[1.2fr_1fr] gap-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                <span>Bangladeshi Pathogen Research Isolates</span>
                <span className="text-emerald-400 font-semibold">Active R&amp;D</span>
              </div>

              <div className="space-y-2">
                {amrIsolates.map((iso) => {
                  const isSelected = selectedIsolate?.id === iso.id || (!selectedIsolate && iso.id === amrIsolates[0].id)
                  return (
                    <div
                      key={iso.id}
                      onClick={() => setSelectedIsolate(iso)}
                      className={`p-2.5 rounded-xl border transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-deep border-beam'
                          : 'bg-abyss/80 border-slate-800 hover:border-slate-700'
                      }`}
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="flex items-center gap-1.5">
                            <span className="font-semibold text-white font-mono text-xs">{iso.organism}</span>
                            <span className="text-[10px] text-slate-400 font-mono">[{iso.strain}]</span>
                          </div>
                          <p className="text-[11px] text-slate-400">{iso.location}</p>
                        </div>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-950 text-amber-400 border border-amber-800">
                          Risk {iso.riskScore}/100
                        </span>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Detail */}
            <div className="rounded-xl bg-deep/50 border border-slate-800 p-3.5 text-xs flex flex-col justify-between">
              {(() => {
                const active = selectedIsolate || amrIsolates[0]
                return (
                  <div className="space-y-2.5">
                    <div className="border-b border-deep-rule pb-2">
                      <span className="data text-amber-400 uppercase text-[10px] flex items-center gap-1">
                        <ShieldAlert className="w-3 h-3" />
                        AMR Resistance Determinants
                      </span>
                      <h4 className="text-sm font-bold text-white font-mono mt-0.5">{active.organism}</h4>
                      <p className="text-[10px] text-slate-400">{active.source} &bull; {active.location}</p>
                    </div>

                    <div className="space-y-1.5">
                      <p className="text-slate-300 text-[11px] leading-relaxed">
                        <strong className="text-white">Research Focus:</strong> Developing sequence-to-phenotype classifiers predicting multidrug carbapenem resistance directly from raw sequencing reads.
                      </p>

                      <div className="pt-1.5 border-t border-deep-rule">
                        <p className="data text-slate-400 uppercase text-[10px] mb-1">Key Resistance Genes</p>
                        <div className="flex flex-wrap gap-1">
                          {active.resistanceGenes.map((g, i) => (
                            <span key={i} className="bg-slate-900 border border-slate-700 text-[10px] font-mono px-1.5 py-0.5 rounded text-amber-300">
                              {g}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })()}
            </div>
          </div>
        )}
      </div>

      {/* Bottom Telemetry Bar */}
      <div className="relative z-10 pt-3 border-t border-deep-rule flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono text-on-deep-faint">
        <div className="flex items-center gap-3">
          <span>
            <strong className="text-slate-300">Core Framework:</strong> The Life Sciences AI Handbook
          </span>
        </div>
        <div className="flex items-center gap-1.5 text-beam">
          <span>Methodology &amp; Evaluation Principles</span>
          <ExternalLink className="w-3 h-3" />
        </div>
      </div>
    </div>
  )
}
