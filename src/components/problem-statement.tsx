import { BarChart3, Globe, Smartphone, MessageCircle } from "lucide-react"

export default function ProblemStatement() {
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
      icon: MessageCircle,
    },
  ]

  return (
    <section id="problem" className="min-h-screen flex items-center py-20 px-4">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">The Problem We Solve</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Rural communities in India face significant challenges in accessing vital government support programs due to
            digital barriers and awareness gaps.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {problems.map((problem) => {
            const IconComponent = problem.icon
            return (
              <div
                key={problem.id}
                className="glass p-8 rounded-xl hover:bg-white/15 transition-all duration-300 transform hover:scale-105 relative group"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500/20 to-teal-500/20 flex items-center justify-center mb-4">
                  <IconComponent className="w-7 h-7 text-cyan-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{problem.title}</h3>
                <p className="text-gray-300">{problem.description}</p>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
