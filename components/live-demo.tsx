"use client"

import { Play } from "lucide-react"

export default function LiveDemo() {
    return (
        <section
            id="live-demo"
            className="min-h-screen flex items-center py-20 px-4 bg-gradient-to-b from-black via-indigo-950/30 to-black"
        >
            <div className="max-w-7xl mx-auto w-full">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
                        Live Demo
                    </h2>
                    <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
                        Watch our AI-powered voice assistant in action, helping rural communities access vital information
                    </p>
                </div>

                <div className="max-w-5xl mx-auto">
                    <div className="glass rounded-2xl overflow-hidden hover:neon-glow transition-all duration-500">
                        {/* Video Container */}
                        <div className="relative aspect-video bg-black/50">
                            <iframe
                                className="w-full h-full"
                                src="https://www.youtube.com/embed/p5uwFnPuCZw"
                                title="VaniSetu Live Demo"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>

                        {/* Video Description */}
                        <div className="p-8 bg-gradient-to-b from-purple-900/20 to-transparent">
                            <h3 className="text-2xl font-bold text-white mb-3">
                                See VaniSetu in Action
                            </h3>
                            <p className="text-gray-300 leading-relaxed">
                                This demonstration showcases how our AI voice assistant bridges the digital divide,
                                enabling seamless access to government schemes and essential information through
                                natural voice conversations in regional languages.
                            </p>
                        </div>
                    </div>

                    {/* Key Features Grid */}
                    <div className="grid md:grid-cols-3 gap-6 mt-12">
                        <div className="glass p-6 rounded-xl text-center hover:bg-white/15 transition-all duration-300">
                            <div className="text-3xl mb-3">🎙️</div>
                            <h4 className="text-lg font-semibold text-white mb-2">Voice-First Interface</h4>
                            <p className="text-gray-400 text-sm">Natural conversation in your language</p>
                        </div>

                        <div className="glass p-6 rounded-xl text-center hover:bg-white/15 transition-all duration-300">
                            <div className="text-3xl mb-3">⚡</div>
                            <h4 className="text-lg font-semibold text-white mb-2">Real-Time Response</h4>
                            <p className="text-gray-400 text-sm">Instant AI-powered assistance</p>
                        </div>

                        <div className="glass p-6 rounded-xl text-center hover:bg-white/15 transition-all duration-300">
                            <div className="text-3xl mb-3">🌐</div>
                            <h4 className="text-lg font-semibold text-white mb-2">Multi-Language Support</h4>
                            <p className="text-gray-400 text-sm">Available in 6+ regional languages</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
