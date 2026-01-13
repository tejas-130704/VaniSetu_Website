"use client"

import { useState } from "react"
import { Phone, Loader2, CheckCircle, AlertCircle } from "lucide-react"

export default function TryDemo() {
    const [phoneNumber, setPhoneNumber] = useState("")
    const [loading, setLoading] = useState(false)
    const [status, setStatus] = useState<"idle" | "success" | "error">("idle")
    const [message, setMessage] = useState("")

    // Replace with your actual Flask backend URL (ngrok or deployed URL)
    const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:5000"

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        // Basic phone validation
        if (!phoneNumber || phoneNumber.length < 10) {
            setStatus("error")
            setMessage("Please enter a valid phone number")
            return
        }

        setLoading(true)
        setStatus("idle")
        setMessage("")

        try {
            const response = await fetch(`${BACKEND_URL}/make_call`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    to: phoneNumber.startsWith("+") ? phoneNumber : `+91${phoneNumber}`,
                }),
            })

            const data = await response.json()

            if (response.ok) {
                setStatus("success")
                setMessage("Call initiated! You should receive a call shortly.")
                setPhoneNumber("")
            } else {
                setStatus("error")
                setMessage(data.error || "Failed to initiate call. Please try again.")
            }
        } catch (error) {
            setStatus("error")
            setMessage("Unable to connect to server. Please check if the backend is running.")
        } finally {
            setLoading(false)
        }
    }

    return (
        <section id="demo" className="min-h-screen flex items-center py-20 px-4">
            <div className="max-w-4xl mx-auto w-full">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-6xl font-light mb-6 text-white tracking-tight">
                        Try VaniSetu
                    </h2>
                    <p className="text-white/50 text-lg font-light">
                        Experience our AI voice agent - Get a demo call right now
                    </p>
                </div>

                <div className="glass-hover p-8 md:p-12 rounded-2xl max-w-2xl mx-auto">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="phone" className="block text-white/70 mb-2 font-light">
                                Enter your phone number
                            </label>
                            <div className="relative">
                                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                                <input
                                    id="phone"
                                    type="tel"
                                    value={phoneNumber}
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                    placeholder="+91 9876543210"
                                    className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-cyan-500/50 transition-colors"
                                    disabled={loading}
                                />
                            </div>
                            <p className="text-white/40 text-sm mt-2 font-light">
                                We'll call you to demonstrate VaniSetu's multilingual voice assistance
                            </p>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full py-4 bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white font-medium rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        >
                            {loading ? (
                                <>
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                    Initiating Call...
                                </>
                            ) : (
                                <>
                                    <Phone className="w-5 h-5" />
                                    Get Demo Call
                                </>
                            )}
                        </button>

                        {status === "success" && (
                            <div className="flex items-center gap-3 p-4 bg-green-500/10 border border-green-500/20 rounded-xl">
                                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                                <p className="text-green-400 text-sm">{message}</p>
                            </div>
                        )}

                        {status === "error" && (
                            <div className="flex items-center gap-3 p-4 bg-red-500/10 border border-red-500/20 rounded-xl">
                                <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                                <p className="text-red-400 text-sm">{message}</p>
                            </div>
                        )}
                    </form>

                    <div className="mt-8 pt-8 border-t border-white/10">
                        <h3 className="text-white/70 font-light mb-4">What to expect:</h3>
                        <ul className="space-y-2 text-white/50 text-sm font-light">
                            <li className="flex gap-2">
                                <span className="text-cyan-400">1.</span>
                                <span>You'll receive a call from VaniSetu</span>
                            </li>
                            <li className="flex gap-2">
                                <span className="text-cyan-400">2.</span>
                                <span>Choose your preferred language (Hindi, Marathi, or English)</span>
                            </li>
                            <li className="flex gap-2">
                                <span className="text-cyan-400">3.</span>
                                <span>Answer a few simple questions about your profile</span>
                            </li>
                            <li className="flex gap-2">
                                <span className="text-cyan-400">4.</span>
                                <span>Get personalized government scheme recommendations</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
