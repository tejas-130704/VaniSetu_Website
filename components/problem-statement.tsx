"use client"

import { useEffect, useRef } from "react"
import { BarChart3, Globe, Smartphone, Languages } from "lucide-react"

export default function ProblemStatement() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed")
          }
        })
      },
      { threshold: 0.1 }
    )

    const cards = sectionRef.current?.querySelectorAll(".scroll-reveal")
    cards?.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  const problems = [
    {
      id: "awareness",
      title: "Awareness Gap",
      description: "Most rural citizens are unaware of government schemes and benefits available to them",
      icon: BarChart3,
    },
    {
      id: "digital",
      title: "Digital Divide",
      description: "Wide gap between urban and rural India in access to digital services",
      icon: Globe,
    },
    {
      id: "access",
      title: "Limited Access",
      description: "No smartphones or internet access in many rural communities",
      icon: Smartphone,
    },
    {
      id: "language",
      title: "Language Barriers",
      description: "Complex government portals and lack of regional language support",
      icon: Languages,
    },
  ]

  return (
    <section ref={sectionRef} id="problem" className="min-h-screen flex items-center py-32 px-4">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-light mb-6 text-white tracking-tight">
            The Problem
          </h2>
          <p className="text-white/50 text-lg font-light max-w-2xl mx-auto">
            Rural communities face significant barriers in accessing vital government support programs
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {problems.map((problem, index) => {
            const IconComponent = problem.icon
            return (
              <div
                key={problem.id}
                className="scroll-reveal glass-hover card-3d p-10 rounded-2xl group relative overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative z-10">
                  <div className="mb-6">
                    <IconComponent className="w-10 h-10 text-white/80" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl font-light text-white mb-4 tracking-tight">{problem.title}</h3>
                  <p className="text-white/50 font-light leading-relaxed">{problem.description}</p>
                </div>

                {/* Subtle gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
