"use client"

import { useEffect, useRef } from "react"
import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import ProblemStatement from "@/components/problem-statement"
import DataAnalysis from "@/components/data-analysis"
import VideoDemo from "@/components/video-demo"
import AudioSamples from "@/components/audio-samples"
import LiveDemo from "@/components/live-demo"
import Impact from "@/components/impact"
import Disclaimer from "@/components/disclaimer"

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth"
  }, [])

  return (
    <div ref={containerRef} className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <ProblemStatement />
        <VideoDemo />
        <DataAnalysis />
        <Disclaimer />
        <LiveDemo />
        <AudioSamples />
        <Impact />
      </main>
    </div>
  )
}
