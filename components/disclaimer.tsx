"use client"

import { useState } from "react"
import { AlertTriangle, Phone, ExternalLink, Loader2 } from "lucide-react"

export default function Disclaimer() {
  const [phoneNumber, setPhoneNumber] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState("")

  const handleCall = async () => {
    if (!phoneNumber || phoneNumber.length < 10) {
      setMessage("Please enter a valid phone number")
      return
    }
    setIsLoading(true)
    setMessage("")
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      setMessage("Call initiated! Please wait for the AI agent to connect.")
    }, 2000)
  }

  return (
    <section id="disclaimer" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-6xl font-light mb-6 text-white tracking-tight">
                        Try VaniSetu
                    </h2>
                    <p className="text-white/50 text-lg font-light">
                        Experience our AI voice agent - Get a demo call right now
                    </p>
                </div>
        <div className="glass-dark p-8 md:p-12 rounded-2xl border-l-4 border-orange-400">
          <div className="flex gap-4 items-start">
            
            <AlertTriangle className="w-8 h-8 text-orange-400 flex-shrink-0" />
            <div className="w-full">
              <h3 className="text-2xl font-bold text-white mb-4">Important Disclaimer</h3>

              <div className="space-y-4 text-gray-300 mb-6">
                <p className="leading-relaxed">
                  The VaniSetu Caller Agent is currently running on an{" "}
                  <span className="text-orange-400 font-semibold">International Number</span>. Most Indian SIM cards do
                  not support receiving international calls by default.
                </p>

                <div className="glass p-4 rounded-lg border border-cyan-500/30">
                  <p className="text-cyan-400 font-semibold mb-2">
                    To receive the call, your number must be verified on Twilio:
                  </p>
                  <ol className="list-decimal list-inside space-y-2 text-sm">
                    <li>
                      Go to{" "}
                      <a
                        href="https://www.twilio.com/console/phone-numbers/verified"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-400 hover:underline inline-flex items-center gap-1"
                      >
                        Twilio Verified Caller IDs <ExternalLink className="w-3 h-3" />
                      </a>
                    </li>
                    <li>Sign in or create a free Twilio account</li>
                    <li>Click "Add a new Caller ID"</li>
                    <li>Enter your phone number with country code (+91 for India)</li>
                    <li>Verify via the call or SMS you receive</li>
                  </ol>
                </div>
              </div>

              <div id="call-input" className="mt-8 p-6 glass rounded-xl border border-purple-500/30">
                <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Phone className="w-5 h-5 text-cyan-400" />
                  Try VaniSetu Now
                </h4>
                <p className="text-gray-400 text-sm mb-4">
                  Enter your Twilio-verified phone number below to receive a call from our AI agent.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="flex-1">
                    <input
                      type="tel"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      placeholder="+91 9876543210"
                      className="w-full px-4 py-3 rounded-lg bg-black/50 border border-gray-600 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>
                  <button
                    onClick={handleCall}
                    disabled={isLoading}
                    className="px-8 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Calling...
                      </>
                    ) : (
                      <>
                        <Phone className="w-5 h-5" />
                        Call Me
                      </>
                    )}
                  </button>
                </div>
                {message && (
                  <p className={`mt-3 text-sm ${message.includes("initiated") ? "text-green-400" : "text-orange-400"}`}>
                    {message}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
