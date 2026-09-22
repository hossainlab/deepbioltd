'use client'

import React, { useRef, useEffect, useState } from 'react'

interface MoleculeVideoProps {
  className?: string
  showBadge?: boolean
  badgeText?: string
  maxHeight?: string
}

export const MoleculeVideo: React.FC<MoleculeVideoProps> = ({
  className = '',
  showBadge = false,
  badgeText = 'All-Atom Biomolecular Structure',
  maxHeight = '480px',
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const [useFallback, setUseFallback] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    const canvas = canvasRef.current
    if (!video || !canvas) return

    let animationFrameId: number
    let gl: WebGLRenderingContext | null = null

    try {
      gl = canvas.getContext('webgl', { alpha: true, premultipliedAlpha: false })
    } catch {
      gl = null
    }

    if (!gl) {
      // If WebGL fails, fallback to 2D or standard video
      setUseFallback(true)
      video.play().catch(() => {})
      return
    }

    // Vertex shader
    const vsSource = `
      attribute vec2 a_position;
      attribute vec2 a_texCoord;
      varying vec2 v_texCoord;
      void main() {
        gl_Position = vec4(a_position, 0.0, 1.0);
        v_texCoord = a_texCoord;
      }
    `

    // Fragment shader: removes the warm light background [244/255, 243/255, 236/255]
    const fsSource = `
      precision mediump float;
      uniform sampler2D u_image;
      varying vec2 v_texCoord;

      void main() {
        vec4 color = texture2D(u_image, v_texCoord);
        // Target background color in sRGB space
        vec3 bg = vec3(244.0 / 255.0, 243.0 / 255.0, 236.0 / 255.0);
        
        // Euclidean distance from background color
        float dist = distance(color.rgb, bg);
        
        // Smooth alpha keying: 0.04 threshold, 0.08 smoothing window
        float alpha = smoothstep(0.03, 0.12, dist);

        // Also check brightness for near-white corners
        float brightness = dot(color.rgb, vec3(0.299, 0.587, 0.114));
        if (brightness > 0.95 && dist < 0.15) {
          alpha = min(alpha, smoothstep(0.04, 0.14, dist));
        }

        gl_FragColor = vec4(color.rgb, color.a * alpha);
      }
    `

    function createShader(glCtx: WebGLRenderingContext, type: number, source: string) {
      const shader = glCtx.createShader(type)
      if (!shader) return null
      glCtx.shaderSource(shader, source)
      glCtx.compileShader(shader)
      if (!glCtx.getShaderParameter(shader, glCtx.COMPILE_STATUS)) {
        glCtx.deleteShader(shader)
        return null
      }
      return shader
    }

    const vs = createShader(gl, gl.VERTEX_SHADER, vsSource)
    const fs = createShader(gl, gl.FRAGMENT_SHADER, fsSource)
    if (!vs || !fs) {
      setUseFallback(true)
      return
    }

    const program = gl.createProgram()
    if (!program) {
      setUseFallback(true)
      return
    }
    gl.attachShader(program, vs)
    gl.attachShader(program, fs)
    gl.linkProgram(program)

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      setUseFallback(true)
      return
    }

    gl.useProgram(program)

    // Setup Quad Buffers
    const positionLocation = gl.getAttribLocation(program, 'a_position')
    const texCoordLocation = gl.getAttribLocation(program, 'a_texCoord')

    const posBuffer = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, posBuffer)
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([
        -1, -1,
         1, -1,
        -1,  1,
        -1,  1,
         1, -1,
         1,  1,
      ]),
      gl.STATIC_DRAW
    )
    gl.enableVertexAttribArray(positionLocation)
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0)

    const texBuffer = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, texBuffer)
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([
        0, 1,
        1, 1,
        0, 0,
        0, 0,
        1, 1,
        1, 0,
      ]),
      gl.STATIC_DRAW
    )
    gl.enableVertexAttribArray(texCoordLocation)
    gl.vertexAttribPointer(texCoordLocation, 2, gl.FLOAT, false, 0, 0)

    // Texture setup
    const texture = gl.createTexture()
    gl.bindTexture(gl.TEXTURE_2D, texture)
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE)
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE)
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR)
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR)

    let isRunning = true

    const render = () => {
      if (!isRunning || !video || !gl) return

      if (video.readyState >= video.HAVE_CURRENT_DATA) {
        if (canvas.width !== video.videoWidth && video.videoWidth > 0) {
          canvas.width = video.videoWidth
          canvas.height = video.videoHeight
          gl.viewport(0, 0, canvas.width, canvas.height)
        }

        gl.bindTexture(gl.TEXTURE_2D, texture)
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, video)

        gl.clearColor(0, 0, 0, 0)
        gl.clear(gl.COLOR_BUFFER_BIT)
        gl.drawArrays(gl.TRIANGLES, 0, 6)
      }

      if ('requestVideoFrameCallback' in video) {
        ;(video as HTMLVideoElement & { requestVideoFrameCallback?: (cb: () => void) => number }).requestVideoFrameCallback?.(render)
      } else {
        animationFrameId = requestAnimationFrame(render)
      }
    }

    const startPlayback = () => {
      video.play().then(() => {
        render()
      }).catch(() => {
        // Autoplay may be deferred
      })
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          isRunning = true
          startPlayback()
        } else {
          isRunning = false
          video.pause()
          if (animationFrameId) cancelAnimationFrame(animationFrameId)
        }
      },
      { threshold: 0.1 }
    )

    if (canvas) observer.observe(canvas)

    return () => {
      isRunning = false
      observer.disconnect()
      if (animationFrameId) cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* Hidden Source Video */}
      <video
        ref={videoRef}
        src="/video/molecule.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="hidden"
        crossOrigin="anonymous"
      />

      {/* Decorative ambient backdrop for 3D depth */}
      <div className="absolute inset-0 bg-radial from-brand/10 via-transparent to-transparent rounded-full blur-2xl pointer-events-none scale-125" />

      {/* Keyed Transparent Canvas */}
      {!useFallback ? (
        <canvas
          ref={canvasRef}
          width={600}
          height={600}
          className="w-full h-auto object-contain pointer-events-none drop-shadow-sm select-none"
          style={{ maxHeight }}
        />
      ) : (
        <video
          src="/video/molecule.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-auto object-contain rounded-2xl pointer-events-none mix-blend-multiply"
          style={{ maxHeight }}
        />
      )}

      {showBadge && (
        <div className="absolute top-4 left-4 z-10">
          <span className="h-7 px-3 rounded-full bg-white/90 backdrop-blur-sm border border-rule text-ink text-xs font-semibold flex items-center gap-1.5 shadow-subtle">
            <span className="w-2 h-2 rounded-full bg-brand animate-pulse" />
            <span>{badgeText}</span>
          </span>
        </div>
      )}
    </div>
  )
}
