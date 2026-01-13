"use client"

import { Phone } from "lucide-react"
import ThreeBackground from "./three-background"

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Three.js Background */}
      <ThreeBackground />

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50 pointer-events-none" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="flex items-center justify-center gap-4 mb-12 animate-fade-in-up">
          <Phone className="w-10 h-10 text-white/80" strokeWidth={1.5} />
          <h1 className="text-6xl md:text-8xl font-light tracking-tight text-white">
            VaniSetu
          </h1>
        </div>

        <h2 className="text-3xl md:text-5xl font-light mb-8 text-white tracking-tight animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          Meaningful Technology Doesn't Need Screens
        </h2>

        <p className="text-2xl md:text-3xl text-white/70 mb-8 leading-relaxed font-light animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          It Only Needs a Voice
        </p>

        <p className="text-base md:text-lg text-white/50 mb-16 leading-relaxed font-light max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          AI-powered voice calls connecting rural India with government schemes and opportunities
        </p>
      </div>
    </section>
  )
}
