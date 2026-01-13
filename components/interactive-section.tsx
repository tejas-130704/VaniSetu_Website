"use client"

import type React from "react"

import { useState } from "react"
import DetailModal from "./detail-modal"

interface InteractiveSectionProps {
  title: string
  sectionType: string
  children: React.ReactNode
  className?: string
}

export default function InteractiveSection({ title, sectionType, children, className = "" }: InteractiveSectionProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <div
        onClick={() => setIsModalOpen(true)}
        className={`cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl ${className}`}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && setIsModalOpen(true)}
      >
        {children}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-purple-500/10 to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100" />
      </div>

      <DetailModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} sectionType={sectionType} title={title} />
    </>
  )
}
