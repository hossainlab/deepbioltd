'use client'

import React, { useEffect, useRef, useState } from 'react'
import { Sparkles, RefreshCw, Eye, Move } from 'lucide-react'

interface BoltzModel3DViewerProps {
  activeModelId: string
  className?: string
}

export const BoltzModel3DViewer: React.FC<BoltzModel3DViewerProps> = ({
  activeModelId = 'boltz-2',
  className = '',
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [rotX, setRotX] = useState(15)
  const [rotY, setRotY] = useState(45)
  const [autoRotate, setAutoRotate] = useState(true)
  const lastMousePos = useRef<{ x: number; y: number }>({ x: 0, y: 0 })

  // Metadata for active model visualization
  const modelVisuals: Record<
    string,
    {
      title: string
      badge: string
      metricLabel: string
      metricValue: string
      secondaryMetric: string
      pocketColor: string
      nodeCount: number
    }
  > = {
    'boltz-2': {
      title: 'Boltz-2 / AlphaFold 3 All-Atom Prediction',
      badge: 'All-Atom Complex',
      metricLabel: 'Mean pLDDT Confidence',
      metricValue: '94.6%',
      secondaryMetric: 'Interface iPAE: 1.8 Å',
      pocketColor: 'rgba(2, 132, 199, 0.9)',
      nodeCount: 65,
    },
    boltzgen: {
      title: 'BoltzGen / RFdiffusion De Novo Binder',
      badge: 'Generative Diffusion',
      metricLabel: 'Predicted Affinity (Kd)',
      metricValue: '1.2 nM',
      secondaryMetric: 'Interface dG: -14.8 kcal/mol',
      pocketColor: 'rgba(16, 185, 129, 0.9)',
      nodeCount: 55,
    },
    'esm-3': {
      title: 'ESM-3 Billion-Parameter Sequence Embedding',
      badge: 'Multimodal Sequence AI',
      metricLabel: 'Zero-Shot Variant AUC',
      metricValue: '0.92',
      secondaryMetric: 'Perplexity: 3.14',
      pocketColor: 'rgba(147, 51, 234, 0.9)',
      nodeCount: 60,
    },
    geneformer: {
      title: 'Geneformer Single-Cell Manifold',
      badge: 'Transcriptomic FM',
      metricLabel: 'Perturbation Prediction',
      metricValue: 'r = 0.89',
      secondaryMetric: '30M Cell Embeddings',
      pocketColor: 'rgba(245, 158, 11, 0.9)',
      nodeCount: 70,
    },
    enformer: {
      title: 'Enformer Genomic Sequence & Epigenetics',
      badge: 'Chromatin AI',
      metricLabel: 'Peak Resolution',
      metricValue: '128 bp',
      secondaryMetric: '100kb Long-Range Tracks',
      pocketColor: 'rgba(79, 70, 229, 0.9)',
      nodeCount: 58,
    },
  }

  const currentVisual = modelVisuals[activeModelId] || modelVisuals['boltz-2']

  // Mouse & Touch Drag Handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setAutoRotate(false)
    lastMousePos.current = { x: e.clientX, y: e.clientY }
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return
    const dx = e.clientX - lastMousePos.current.x
    const dy = e.clientY - lastMousePos.current.y
    setRotY((prev) => prev + dx * 0.5)
    setRotX((prev) => Math.max(-60, Math.min(60, prev - dy * 0.5)))
    lastMousePos.current = { x: e.clientX, y: e.clientY }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  // 3D Canvas Rendering Loop
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number

    // Generate 3D nodes representing macromolecular surface + ribbons + ligand
    const nodes: Array<{
      x: number
      y: number
      z: number
      radius: number
      type: 'surface' | 'backbone' | 'pocket' | 'ligand'
      color: string
    }> = []

    // 1. Organic Biomolecular Surface / Globular Core
    const numCore = currentVisual.nodeCount
    for (let i = 0; i < numCore; i++) {
      const phi = Math.acos(-1 + (2 * i) / numCore)
      const theta = Math.sqrt(numCore * Math.PI) * phi
      const r = 85 + Math.sin(i * 1.5) * 18 + Math.cos(i * 2.2) * 12

      nodes.push({
        x: r * Math.sin(phi) * Math.cos(theta),
        y: r * Math.sin(phi) * Math.sin(theta) * 0.9,
        z: r * Math.cos(phi),
        radius: 14 + Math.sin(i) * 5,
        type: 'surface',
        color: i % 3 === 0 ? 'rgba(32, 94, 146, 0.45)' : 'rgba(30, 78, 121, 0.35)',
      })
    }

    // 2. Alpha Helix Ribbon Backbone
    for (let i = 0; i < 28; i++) {
      const t = i * 0.45
      nodes.push({
        x: Math.sin(t) * 70 + Math.cos(t * 0.3) * 20,
        y: (i - 14) * 9,
        z: Math.cos(t) * 70,
        radius: 6,
        type: 'backbone',
        color: '#0284C7',
      })
    }

    // 3. Active Ligand / Target Binding Pocket
    for (let i = 0; i < 16; i++) {
      const t = i * 0.6
      nodes.push({
        x: Math.sin(t) * 35 + 25,
        y: (i - 8) * 8 - 15,
        z: Math.cos(t) * 35 + 20,
        radius: 9,
        type: 'pocket',
        color: currentVisual.pocketColor,
      })
    }

    const render = () => {
      if (autoRotate && !isDragging) {
        setRotY((prev) => (prev + 0.5) % 360)
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const cx = canvas.width / 2
      const cy = canvas.height / 2

      const radX = (rotX * Math.PI) / 180
      const radY = (rotY * Math.PI) / 180

      const cosX = Math.cos(radX)
      const sinX = Math.sin(radX)
      const cosY = Math.cos(radY)
      const sinY = Math.sin(radY)

      // Project 3D to 2D
      const projected = nodes.map((node) => {
        // Rotate Y
        let x1 = node.x * cosY - node.z * sinY
        let z1 = node.x * sinY + node.z * cosY

        // Rotate X
        let y2 = node.y * cosX - z1 * sinX
        let z2 = node.y * sinX + z1 * cosX + 320

        const scale = 300 / z2
        return {
          px: cx + x1 * scale,
          py: cy + y2 * scale,
          depth: z2,
          radius: node.radius * scale,
          type: node.type,
          color: node.color,
        }
      })

      // Sort by depth (painter's algorithm)
      projected.sort((a, b) => b.depth - a.depth)

      // 1. Soft Ambient Ground Glow beneath molecule
      const ambientGlow = ctx.createRadialGradient(cx, cy + 90, 10, cx, cy + 90, 160)
      ambientGlow.addColorStop(0, 'rgba(32, 94, 146, 0.12)')
      ambientGlow.addColorStop(0.6, 'rgba(2, 132, 199, 0.05)')
      ambientGlow.addColorStop(1, 'rgba(255, 255, 255, 0)')
      ctx.fillStyle = ambientGlow
      ctx.beginPath()
      ctx.arc(cx, cy + 90, 160, 0, Math.PI * 2)
      ctx.fill()

      // 2. Active Pocket Illumination Aura
      const activePockets = projected.filter((p) => p.type === 'pocket')
      if (activePockets.length > 0) {
        const avgPx = activePockets.reduce((sum, p) => sum + p.px, 0) / activePockets.length
        const avgPy = activePockets.reduce((sum, p) => sum + p.py, 0) / activePockets.length

        const aura = ctx.createRadialGradient(avgPx, avgPy, 5, avgPx, avgPy, 110)
        aura.addColorStop(0, 'rgba(56, 189, 248, 0.55)')
        aura.addColorStop(0.4, 'rgba(32, 94, 146, 0.2)')
        aura.addColorStop(1, 'rgba(255, 255, 255, 0)')
        ctx.fillStyle = aura
        ctx.beginPath()
        ctx.arc(avgPx, avgPy, 110, 0, Math.PI * 2)
        ctx.fill()
      }

      // 3. Draw Connecting Backbone Ribbons
      ctx.lineWidth = 2.5
      ctx.strokeStyle = 'rgba(2, 132, 199, 0.5)'
      ctx.beginPath()
      let firstBackbone = true
      for (const p of projected) {
        if (p.type === 'backbone') {
          if (firstBackbone) {
            ctx.moveTo(p.px, p.py)
            firstBackbone = false
          } else {
            ctx.lineTo(p.px, p.py)
          }
        }
      }
      ctx.stroke()

      // 4. Draw Biomolecular Surface Nodes with Soft Radial Shading
      for (const p of projected) {
        const rad = Math.max(1, p.radius)
        const grad = ctx.createRadialGradient(
          p.px - rad * 0.3,
          p.py - rad * 0.3,
          rad * 0.1,
          p.px,
          p.py,
          rad
        )

        if (p.type === 'pocket') {
          grad.addColorStop(0, '#FFFFFF')
          grad.addColorStop(0.3, '#38BDF8')
          grad.addColorStop(1, '#0284C7')
        } else if (p.type === 'backbone') {
          grad.addColorStop(0, '#E0F2FE')
          grad.addColorStop(0.4, '#38BDF8')
          grad.addColorStop(1, '#0369A1')
        } else {
          grad.addColorStop(0, '#EBF3FA')
          grad.addColorStop(0.4, '#93C5FD')
          grad.addColorStop(0.8, '#205E92')
          grad.addColorStop(1, '#0F3759')
        }

        ctx.fillStyle = grad
        ctx.beginPath()
        ctx.arc(p.px, p.py, rad, 0, Math.PI * 2)
        ctx.fill()
      }

      animId = requestAnimationFrame(render)
    }

    render()
    return () => cancelAnimationFrame(animId)
  }, [rotX, rotY, autoRotate, isDragging, currentVisual])

  return (
    <div
      ref={containerRef}
      className={`relative w-full aspect-[4/3] md:aspect-[1.1/1] max-w-[540px] mx-auto rounded-3xl overflow-hidden bg-white/70 backdrop-blur-md border border-rule shadow-subtle p-6 flex flex-col justify-between select-none ${className}`}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      {/* Top Floating Telemetry & Pill Badge */}
      <div className="relative z-10 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="h-7 px-3 rounded-full bg-surface-secondary border border-rule text-ink text-xs font-semibold flex items-center gap-1.5 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-brand animate-pulse" />
            <span>{currentVisual.badge}</span>
          </span>
        </div>

        <button
          onClick={() => setAutoRotate(!autoRotate)}
          className="h-7 px-2.5 rounded-full border border-rule bg-white/90 hover:bg-white text-[11px] font-mono text-slate hover:text-ink flex items-center gap-1 transition-colors"
          title="Toggle Auto Rotation"
        >
          <RefreshCw className={`w-3 h-3 ${autoRotate ? 'animate-spin' : ''}`} />
          <span>{autoRotate ? 'Auto Orbit' : 'Paused'}</span>
        </button>
      </div>

      {/* Main 3D Canvas */}
      <div className="relative flex-1 flex items-center justify-center my-2 cursor-grab active:cursor-grabbing">
        <canvas
          ref={canvasRef}
          width={520}
          height={400}
          className="w-full h-full object-contain"
        />

        {/* Drag Hint Overlay */}
        <div className="absolute bottom-1 right-2 flex items-center gap-1 text-[11px] font-mono text-slate-400 opacity-70 pointer-events-none">
          <Move className="w-3 h-3" />
          <span>Drag to orbit 3D</span>
        </div>
      </div>

      {/* Bottom Model Details & Confidence Telemetry */}
      <div className="relative z-10 pt-4 border-t border-rule/70 flex flex-wrap items-center justify-between gap-3 text-xs">
        <div>
          <p className="font-semibold text-ink text-xs line-clamp-1">{currentVisual.title}</p>
          <p className="text-[11px] font-mono text-slate">{currentVisual.secondaryMetric}</p>
        </div>

        <div className="text-right">
          <span className="text-[10px] font-mono text-slate uppercase block">
            {currentVisual.metricLabel}
          </span>
          <span className="text-sm font-bold font-mono text-brand">
            {currentVisual.metricValue}
          </span>
        </div>
      </div>
    </div>
  )
}
