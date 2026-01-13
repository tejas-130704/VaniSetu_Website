"use client"

import { useState } from "react"
import { Play, Film, Clapperboard, Sparkles, Drama } from "lucide-react"

export default function VideoDemo() {
  const [isPlaying, setIsPlaying] = useState(false)

  const features = [
    { icon: Film, text: "Showcases a realistic story of a rural farmer struggling to access government schemes" },
    { icon: Drama, text: "Depicts the challenges faced due to illiteracy and lack of digital access" },
    { icon: Sparkles, text: "Demonstrates how VaniSetu AI agent bridges this information gap" },
    { icon: Clapperboard, text: "Created using AI video generation to visualize the real-world problem" },
  ]

  const handleWatchDemo = () => {
    setIsPlaying(true)
  }

  return (
    <section id="video" className="min-h-screen flex items-center py-20 px-4">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-light mb-6 text-white tracking-tight">Understanding the Problem</h2>
          <p className="text-white/50 text-lg font-light">A story that brings the rural reality to life</p>
        </div>

        <div className="relative w-full max-w-3xl mx-auto group">
          <div className="glass p-1 rounded-2xl glow-subtle-hover group-hover:shadow-xl transition-all">
            <div className="bg-black rounded-xl overflow-hidden aspect-video relative">
              {!isPlaying ? (
                <div className="w-full h-full bg-gradient-to-br from-gray-900 to-black flex items-center justify-center relative">
                  <img
                    src="https://img.youtube.com/vi/kMgZavBw0oo/maxresdefault.jpg"
                    alt="Video thumbnail"
                    className="absolute inset-0 w-full h-full object-cover opacity-50"
                  />
                  <button
                    onClick={handleWatchDemo}
                    className="relative z-10 flex items-center justify-center w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:scale-110 transition-all duration-300"
                  >
                    <Play size={32} className="text-white ml-1" />
                  </button>
                </div>
              ) : (
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/UTSydBvZLI8?si=Rab_QMmasjP_Fg9h"
                  title="VaniSetu Demo Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )}
            </div>
          </div>
        </div>

        <div className="mt-8 glass-hover p-8 rounded-2xl">
          <h3 className="text-xl font-light text-white mb-4 tracking-tight">Demonstration Details</h3>
          <p className="text-white/50 mb-6 font-light leading-relaxed">
            This video tells the story of rural India's information crisis. It portrays the journey of a
            farmer who misses out on beneficial government schemes due to illiteracy and lack of awareness - a reality
            faced by millions. The story illustrates:
          </p>
          <ul className="space-y-3 text-white/50 font-light">
            {features.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <li key={index} className="flex gap-3 items-start">
                  <IconComponent className="w-5 h-5 text-white/60 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                  <span>{feature.text}</span>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
