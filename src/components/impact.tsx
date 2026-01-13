import { Users, WifiOff, Languages, Clock, Target, TrendingUp, Phone, Globe, Scale, Sparkles } from "lucide-react"

export default function Impact() {
  const impacts = [
    { number: "900M+", label: "Rural Population Reached", icon: Users },
    { number: "Zero", label: "Internet Required", icon: WifiOff },
    { number: "10+", label: "Regional Languages", icon: Languages },
    { number: "24/7", label: "Availability", icon: Clock },
  ]

  const benefits = [
    { text: "Empowers farmers and rural citizens with accessible information", icon: Target },
    { text: "Increases awareness of government schemes and subsidies", icon: TrendingUp },
    { text: "Works with basic feature phones - no smartphones needed", icon: Phone },
    { text: "Supports multiple regional languages for inclusivity", icon: Globe },
    { text: "Reduces information inequality across digital divide", icon: Scale },
    { text: "Enables equitable access to welfare programs", icon: Sparkles },
  ]

  return (
    <section id="impact" className="min-h-screen flex items-center py-20 px-4">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Impact & Benefits</h2>
          <p className="text-gray-400 text-lg">How VaniSetu creates meaningful change in rural India</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {impacts.map((impact, index) => {
            const IconComponent = impact.icon
            return (
              <div
                key={index}
                className="glass-dark p-8 rounded-xl text-center transform hover:scale-105 transition-transform duration-300 hover:bg-white/15"
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-cyan-500/20 to-teal-500/20 flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-7 h-7 text-cyan-400" />
                </div>
                <div className="text-4xl font-bold gradient-text mb-2">{impact.number}</div>
                <p className="text-gray-300">{impact.label}</p>
              </div>
            )
          })}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon
            return (
              <div key={index} className="glass p-6 rounded-xl flex gap-4 hover:bg-white/15 transition-all">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-teal-500/20 flex items-center justify-center flex-shrink-0">
                  <IconComponent className="w-5 h-5 text-cyan-400" />
                </div>
                <p className="text-gray-300">{benefit.text}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
