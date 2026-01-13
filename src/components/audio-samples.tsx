"use client"

import { useState } from "react"
import { Play, Pause, Languages } from "lucide-react"

export default function AudioSamples() {
  const [playing, setPlaying] = useState<string | null>(null)

  const languages = [
    { id: "hindi", label: "Hindi", region: "North India" },
    { id: "marathi", label: "Marathi", region: "Maharashtra" },
    { id: "tamil", label: "Tamil", region: "Tamil Nadu" },
    { id: "telugu", label: "Telugu", region: "Andhra/Telangana" },
    { id: "bengali", label: "Bengali", region: "West Bengal" },
    { id: "gujarati", label: "Gujarati", region: "Gujarat" },
  ]

  return (
    <section
      id="audio"
      className="min-h-screen flex items-center py-20 px-4 bg-gradient-to-b from-black via-cyan-950/30 to-black"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Multilingual Voice Samples</h2>
          <p className="text-gray-400 text-lg">Experience VaniSetu in your regional language</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {languages.map((lang) => (
            <div key={lang.id} className="glass p-6 rounded-xl hover:bg-white/15 transition-all duration-300 group">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500/20 to-teal-500/20 flex items-center justify-center">
                    <Languages className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <span className="text-xl font-bold text-white block">{lang.label}</span>
                    <span className="text-sm text-gray-400">{lang.region}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 mt-6">
                <button
                  onClick={() => setPlaying(playing === lang.id ? null : lang.id)}
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 hover:neon-glow transition-all"
                >
                  {playing === lang.id ? (
                    <Pause size={20} className="text-white" />
                  ) : (
                    <Play size={20} className="text-white ml-0.5" />
                  )}
                </button>
                <div className="flex-1 flex gap-1 items-center">
                  {[...Array(20)].map((_, i) => (
                    <div
                      key={i}
                      className={`h-1 rounded-full flex-1 ${playing === lang.id ? "bg-cyan-400" : "bg-gray-600"}`}
                    />
                  ))}
                </div>
              </div>

              <p className="text-sm text-gray-400 mt-4">"Government schemes tailored for your needs"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
