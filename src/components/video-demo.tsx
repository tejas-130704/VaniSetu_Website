"use client"

import { useState } from "react"
import { Play, CheckCircle } from "lucide-react"

export default function VideoDemo() {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <section id="video" className="min-h-screen flex items-center py-20 px-4">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">AI Caller Agent in Action</h2>
          <p className="text-gray-400 text-lg">Watch how VaniSetu interacts with users through voice calls</p>
        </div>

        <div className="relative w-full max-w-3xl mx-auto group">
          <div className="glass p-1 rounded-2xl neon-glow group-hover:shadow-xl transition-all">
            <div className="bg-black rounded-xl overflow-hidden aspect-video relative">
              <div className="w-full h-full bg-gradient-to-br from-cyan-900 to-teal-900 flex items-center justify-center">
                <button
                  onClick={() => setIsPlaying(true)}
                  className="flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 hover:scale-110 transition-transform duration-300 neon-glow"
                >
                  <Play size={32} className="text-white ml-1" />
                </button>
              </div>
              <div className="absolute inset-0 group-hover:bg-black/10 transition-colors duration-300" />
            </div>
          </div>
        </div>

        <div className="mt-8 glass-dark p-6 rounded-xl max-w-3xl mx-auto">
          <h3 className="text-xl font-bold text-white mb-3">Demonstration Details</h3>
          <p className="text-gray-300 mb-4">
            This video demonstrates a complete interaction flow between the VaniSetu AI agent and a rural farmer. The
            agent:
          </p>
          <ul className="space-y-2 text-gray-300">
            {[
              "Calls the user on a regular feature phone",
              "Conducts a brief voice-based survey (name, age, occupation, etc.)",
              "Identifies relevant government schemes based on responses",
              "Provides information in the user's regional language",
            ].map((item, idx) => (
              <li key={idx} className="flex gap-2 items-start">
                <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
