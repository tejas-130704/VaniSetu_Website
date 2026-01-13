import { AlertTriangle } from "lucide-react"

export default function Disclaimer() {
  return (
    <section id="disclaimer" className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="glass-dark p-8 md:p-12 rounded-2xl border-l-4 border-amber-400">
          <div className="flex gap-4 items-start">
            <div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0">
              <AlertTriangle className="w-6 h-6 text-amber-400" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Disclaimer</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                This project is created for educational and social awareness purposes only. VaniSetu demonstrates the
                potential of AI-driven voice technology to bridge the information gap in rural India.
              </p>
              <ul className="space-y-3 text-gray-300 text-sm">
                <li className="flex gap-3">
                  <span className="text-cyan-400">•</span>
                  <span>Government scheme eligibility and details may change based on official notifications</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-cyan-400">•</span>
                  <span>All information is provided for demonstration and educational purposes</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-cyan-400">•</span>
                  <span>Users should verify scheme details from official government sources</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-cyan-400">•</span>
                  <span>This is an academic project showcasing social innovation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
