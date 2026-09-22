'use client'

import React, { useEffect, useRef, useState } from 'react'
import { RefreshCw } from 'lucide-react'

/**
 * 3D Interactive Biomolecular Protein / Complex Canvas
 * 
 * Recreates the signature Boltz biomolecular protein structure render
 * using DeepBio's brand blue & cyan palette with dynamic surface rotation,
 * ribbon contours, active pocket illumination, and residue nodes.
 */
export const BoltzHero3DProtein: React.FC<{ className?: string }> = ({ className = '' }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const [isRotating, setIsRotating] = useState(true)
  const [rotationAngle, setRotationAngle] = useState(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number

    // Generate complex macromolecular backbone coordinates
    const targetHelix1 = Array.from({ length: 32 }, (_, i) => {
      const t = i * 0.38
      return {
        x: Math.sin(t) * 90 + Math.cos(t * 0.4) * 25,
        y: (i - 16) * 10,
        z: Math.cos(t) * 90 + Math.sin(t * 0.4) * 25,
        type: 'helix' as const,
        layer: 1,
      }
    })

    const targetHelix2 = Array.from({ length: 28 }, (_, i) => {
      const t = i * 0.42 + 2.0
      return {
        x: Math.sin(t) * 70 - 30,
        y: (i - 14) * 11,
        z: Math.cos(t) * 70 + 40,
        type: 'helix' as const,
        layer: 2,
      }
    })

    const ligandPocket = Array.from({ length: 24 }, (_, i) => {
      const t = i * 0.5 + 1.0
      return {
        x: Math.sin(t) * 40 + 15,
        y: (i - 12) * 8 + Math.sin(i) * 15,
        z: Math.cos(t) * 40 - 15,
        type: 'pocket' as const,
        layer: 3,
      }
    })

    const allNodes = [...targetHelix1, ...targetHelix2, ...ligandPocket]

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const centerX = canvas.width / 2
      const centerY = canvas.height / 2
      const rad = (rotationAngle * Math.PI) / 180

      const cosR = Math.cos(rad)
      const sinR = Math.sin(rad)

      // Project 3D coordinates to 2D
      const projected = allNodes.map((node, index) => {
        const rotX = node.x * cosR - node.z * sinR
        const rotZ = node.x * sinR + node.z * cosR + 280
        const scale = 250 / rotZ
        return {
          px: centerX + rotX * scale,
          py: centerY + node.y * scale,
          depth: rotZ,
          type: node.type,
          index,
        }
      })

      // Sort by depth for correct 3D rendering
      projected.sort((a, b) => b.depth - a.depth)

      // 1. Draw glowing active site aura
      const activePoint = projected.find((p) => p.type === 'pocket')
      if (activePoint) {
        const auraGrad = ctx.createRadialGradient(
          activePoint.px,
          activePoint.py,
          5,
          activePoint.px,
          activePoint.py,
          110
        )
        auraGrad.addColorStop(0, 'rgba(56, 189, 248, 0.45)')
        auraGrad.addColorStop(0.4, 'rgba(32, 94, 146, 0.18)')
        auraGrad.addColorStop(1, 'rgba(32, 94, 146, 0)')
        ctx.fillStyle = auraGrad
        ctx.beginPath()
        ctx.arc(activePoint.px, activePoint.py, 110, 0, Math.PI * 2)
        ctx.fill()
      }

      // 2. Draw Helix 1 Ribbon Path
      ctx.lineWidth = 4
      ctx.strokeStyle = 'rgba(32, 94, 146, 0.35)'
      ctx.beginPath()
      for (let i = 0; i < targetHelix1.length - 1; i++) {
        const p1 = projected.find((p) => p.index === i)
        const p2 = projected.find((p) => p.index === i + 1)
        if (p1 && p2) {
          ctx.moveTo(p1.px, p1.py)
          ctx.lineTo(p2.px, p2.py)
        }
      }
      ctx.stroke()

      // 3. Draw Helix 2 Ribbon Path
      ctx.lineWidth = 3
      ctx.strokeStyle = 'rgba(14, 116, 144, 0.4)'
      ctx.beginPath()
      for (let i = targetHelix1.length; i < targetHelix1.length + targetHelix2.length - 1; i++) {
        const p1 = projected.find((p) => p.index === i)
        const p2 = projected.find((p) => p.index === i + 1)
        if (p1 && p2) {
          ctx.moveTo(p1.px, p1.py)
          ctx.lineTo(p2.px, p2.py)
        }
      }
      ctx.stroke()

      // 4. Draw Ligand Binding Path (Cyan Glow)
      ctx.lineWidth = 3.5
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.85)'
      ctx.beginPath()
      for (let i = targetHelix1.length + targetHelix2.length; i < allNodes.length - 1; i++) {
        const p1 = projected.find((p) => p.index === i)
        const p2 = projected.find((p) => p.index === i + 1)
        if (p1 && p2) {
          ctx.moveTo(p1.px, p1.py)
          ctx.lineTo(p2.px, p2.py)
        }
      }
      ctx.stroke()

      // 5. Draw molecular surface atoms
      projected.forEach((p) => {
        const isPocket = p.type === 'pocket'
        const radius = isPocket ? 4.5 : 3.2

        ctx.beginPath()
        ctx.arc(p.px, p.py, radius, 0, Math.PI * 2)

        if (isPocket) {
          ctx.fillStyle = '#38BDF8'
          ctx.shadowColor = '#38BDF8'
          ctx.shadowBlur = 8
        } else {
          ctx.fillStyle = '#1E4E79'
          ctx.shadowColor = '#1E4E79'
          ctx.shadowBlur = 2
        }

        ctx.fill()
        ctx.shadowBlur = 0
      })

      if (isRotating) {
        setRotationAngle((prev) => (prev + 0.45) % 360)
      }

      animationFrameId = requestAnimationFrame(render)
    }

    render()
    return () => cancelAnimationFrame(animationFrameId)
  }, [rotationAngle, isRotating])

  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* Decorative ambient backdrop */}
      <div className="absolute inset-0 bg-radial from-brand-light/60 to-transparent rounded-full blur-2xl pointer-events-none" />

      <canvas
        ref={canvasRef}
        width={560}
        height={480}
        className="w-full h-auto max-w-[520px] cursor-grab active:cursor-grabbing select-none"
        onClick={() => setIsRotating(!isRotating)}
        title="Click to pause/rotate 3D model"
      />

      {/* Subtle bottom control badge */}
      <button
        onClick={() => setIsRotating(!isRotating)}
        className="absolute bottom-2 right-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 border border-rule text-[11px] font-mono text-slate hover:text-ink shadow-subtle transition-all backdrop-blur-sm"
      >
        <RefreshCw className={`w-3 h-3 ${isRotating ? 'animate-spin' : ''}`} />
        <span>{isRotating ? 'Rotate' : 'Paused'}</span>
      </button>
    </div>
  )
}
