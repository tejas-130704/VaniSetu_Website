"use client"

export default function ConclusionSection() {
  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-4 bg-gradient-to-b from-black via-purple-950/40 to-cyan-950/20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-cyan-600/20 rounded-full blur-3xl animate-pulse" />

      <div className="relative z-10 text-center max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold mb-8 gradient-text leading-tight">
          Meaningful Technology Doesn't Need Screens
        </h2>

        <p className="text-2xl text-gray-300 mb-6 leading-relaxed">It Only Needs a Voice</p>

        <p className="text-lg text-gray-400 mb-12 leading-relaxed">
          VaniSetu proves that transformative technology can be simple, accessible, and inclusive. By leveraging the
          ubiquity of voice calls, we can reach and empower millions of rural citizens who are currently left behind by
          the digital revolution.
        </p>

        <div className="mb-12">
          <p className="text-xl text-gray-300 font-semibold mb-4">
            Empowering Rural India Through AI-Driven Voice Accessibility
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="#problem"
              className="px-8 py-3 rounded-full glass hover:bg-white/20 transition-all text-white font-medium"
            >
              Learn More
            </a>
            <button className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold hover:shadow-lg hover:neon-glow transition-all">
              Get in Touch
            </button>
          </div>
        </div>

        {/* Footer credits */}
        <div className="mt-16 pt-8 border-t border-white/10 text-gray-500 text-sm">
          <p>Created for educational and hackathon showcase purposes</p>
          <p className="mt-2">© 2026 VaniSetu - Bridging the Rural Information Gap</p>
        </div>
      </div>
    </section>
  )
}
