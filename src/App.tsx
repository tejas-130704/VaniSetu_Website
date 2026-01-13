"use client"

import { useEffect, useRef } from "react"
import Navigation from "./components/navigation"
import HeroSection from "./components/hero-section"
import ProblemStatement from "./components/problem-statement"
import VideoDemo from "./components/video-demo"
import DataAnalysis from "./components/data-analysis"
import AudioSamples from "./components/audio-samples"
import Impact from "./components/impact"
import Disclaimer from "./components/disclaimer"
import ConclusionSection from "./components/conclusion"

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth"
  }, [])

  return (
    <div ref={containerRef} className="min-h-screen bg-black">
      <Navigation />
      <main>
        <HeroSection />
        <ProblemStatement />
        <VideoDemo />
        <DataAnalysis />
        <Disclaimer />
        <AudioSamples />
        <Impact />
        <ConclusionSection />
      </main>
    </div>
  )
}
