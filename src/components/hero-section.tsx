"use client"

import { useEffect, useRef } from "react"
import { ChevronDown } from "lucide-react"

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: { x: number; y: number; vx: number; vy: number; radius: number; color: string }[] = []
    const particleCount = 50

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2,
        color: `hsl(${170 + Math.random() * 40}, 80%, 50%)`,
      })
    }

    const animate = () => {
      ctx.fillStyle = "#000000"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      particles.forEach((p) => {
        p.x += p.vx
        p.y += p.vy

        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0

        ctx.fillStyle = p.color
        ctx.globalAlpha = 0.6
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fill()
      })

      ctx.globalAlpha = 0.2
      ctx.strokeStyle = "#22d3ee"
      particles.forEach((p, i) => {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[j].x - p.x
          const dy = particles[j].y - p.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 150) {
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text leading-tight">VaniSetu</h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-4 leading-relaxed">
          Bridging the Information Gap in Rural India Using AI Voice Technology
        </p>

        <p className="text-lg text-gray-400 mb-12 leading-relaxed">
          An AI caller agent that informs rural citizens and farmers about government schemes and scholarships through a
          simple phone call — no internet, no smartphone.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a
            href="#problem"
            className="px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-semibold hover:shadow-lg hover:neon-glow transition-all transform hover:scale-105"
          >
            Explore the Project
          </a>
          <a
            href="#video"
            className="px-8 py-3 rounded-full glass text-white font-semibold hover:bg-white/20 transition-all"
          >
            Watch Demo
          </a>
        </div>

        <div className="flex justify-center animate-bounce">
          <ChevronDown size={32} className="text-cyan-400 neon-cyan" />
        </div>
      </div>
    </section>
  )
}
