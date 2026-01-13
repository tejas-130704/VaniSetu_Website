"use client"

import { useState, useRef, useEffect } from "react"
import { Play, Pause, Globe } from "lucide-react"

export default function AudioSamples() {
  const [playing, setPlaying] = useState<string | null>(null)
  const [progress, setProgress] = useState<{ [key: string]: number }>({})
  const audioRefs = useRef<{ [key: string]: HTMLAudioElement }>({})

  const languages = [
    { id: "hindi", label: "Hindi", file: "/hi.wav" },
    { id: "marathi", label: "Marathi", file: "/mar.wav" },
    { id: "tamil", label: "Tamil", file: "/ta.wav" },
    { id: "telugu", label: "Telugu", file: "/te.wav" },
    { id: "bengali", label: "Bengali", file: "/bn.wav" },
    { id: "english", label: "English", file: "/en.wav" },
  ]

  const togglePlay = (langId: string) => {
    const audio = audioRefs.current[langId]
    if (!audio) return

    if (playing === langId) {
      audio.pause()
      setPlaying(null)
    } else {
      // Pause all other audio
      Object.values(audioRefs.current).forEach((a) => a.pause())
      audio.play()
      setPlaying(langId)
    }
  }

  useEffect(() => {
    // Initialize audio elements
    languages.forEach((lang) => {
      if (!audioRefs.current[lang.id]) {
        const audio = new Audio(lang.file)
        audio.addEventListener("timeupdate", () => {
          setProgress((prev) => ({
            ...prev,
            [lang.id]: (audio.currentTime / audio.duration) * 100 || 0,
          }))
        })
        audio.addEventListener("ended", () => {
          setPlaying(null)
          setProgress((prev) => ({ ...prev, [lang.id]: 0 }))
        })
        audioRefs.current[lang.id] = audio
      }
    })

    return () => {
      // Cleanup
      Object.values(audioRefs.current).forEach((audio) => {
        audio.pause()
        audio.src = ""
      })
    }
  }, [])

  return (
    <section
      id="audio"
      className="min-h-screen flex items-center py-20 px-4 bg-gradient-to-b from-black via-purple-950/30 to-black"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">VaniSetu</h2>
          <p className="text-gray-400 text-lg">Experience VaniSetu in your regional language</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {languages.map((lang) => (
            <div key={lang.id} className="glass p-6 rounded-xl hover:bg-white/15 transition-all duration-300 group">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <Globe className="w-8 h-8 text-cyan-400" />
                  <span className="text-xl font-bold text-white">{lang.label}</span>
                </div>
              </div>

              <div className="flex items-center gap-4 mt-6">
                <button
                  onClick={() => togglePlay(lang.id)}
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 hover:neon-glow transition-all"
                >
                  {playing === lang.id ? (
                    <Pause size={20} className="text-white" />
                  ) : (
                    <Play size={20} className="text-white ml-0.5" />
                  )}
                </button>
                <div className="flex-1 flex gap-1 items-center">
                  {[...Array(20)].map((_, i) => {
                    const segmentProgress = ((progress[lang.id] || 0) / 100) * 20
                    return (
                      <div
                        key={i}
                        className={`h-1 flex-1 rounded-full transition-colors ${i < segmentProgress ? "bg-cyan-400" : "bg-gray-600"
                          }`}
                      />
                    )
                  })}
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
