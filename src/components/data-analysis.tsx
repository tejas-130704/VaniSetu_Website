"use client"

import { useState, useEffect } from "react"
import { Users, BookOpen, Lightbulb, WifiOff, ArrowRight } from "lucide-react"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  Legend,
} from "recharts"

export default function DataAnalysis() {
  const [stats, setStats] = useState([
    { value: 0, label: "Rural Population %", target: 65, icon: Users },
    { value: 0, label: "Rural Illiteracy %", target: 33, icon: BookOpen },
    { value: 0, label: "Scheme Awareness %", target: 24, icon: Lightbulb },
    { value: 0, label: "No Internet Access %", target: 76, icon: WifiOff },
  ])

  useEffect(() => {
    const interval = setInterval(() => {
      setStats((prevStats) =>
        prevStats.map((stat) => ({
          ...stat,
          value: Math.min(stat.value + Math.ceil(stat.target / 30), stat.target),
        })),
      )
    }, 30)

    return () => clearInterval(interval)
  }, [])

  const ruralPopulationData = [
    { state: "UP", rural: 77, urban: 23 },
    { state: "Bihar", rural: 88, urban: 12 },
    { state: "MP", rural: 72, urban: 28 },
    { state: "Rajasthan", rural: 75, urban: 25 },
    { state: "Maharashtra", rural: 55, urban: 45 },
    { state: "Gujarat", rural: 57, urban: 43 },
  ]

  const ruralIlliteracyData = [
    { name: "Literate", value: 67, color: "#22d3ee" },
    { name: "Illiterate", value: 33, color: "#fb923c" },
  ]

  const schemeAwarenessData = [
    { year: "2018", awareness: 12 },
    { year: "2019", awareness: 15 },
    { year: "2020", awareness: 18 },
    { year: "2021", awareness: 20 },
    { year: "2022", awareness: 22 },
    { year: "2023", awareness: 24 },
  ]

  return (
    <section id="data" className="py-20 px-4 bg-gradient-to-b from-black to-cyan-950/20">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Data Reality of Rural India</h2>
          <p className="text-gray-400 text-lg">Data shown is based on publicly available statistics</p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <div
                key={index}
                className="glass-dark p-8 rounded-xl text-center backdrop-blur-xl hover:bg-white/15 transition-all"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500/20 to-teal-500/20 flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-6 h-6 text-cyan-400" />
                </div>
                <div className="text-5xl font-bold gradient-text mb-4">{stat.value}%</div>
                <p className="text-gray-300 text-lg">{stat.label}</p>
              </div>
            )
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Rural Population Chart */}
          <div className="glass-dark p-6 rounded-xl">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Users className="w-5 h-5 text-cyan-400" />
              Rural vs Urban Population by State
            </h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={ruralPopulationData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                  <XAxis dataKey="state" stroke="rgba(255,255,255,0.6)" />
                  <YAxis stroke="rgba(255,255,255,0.6)" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "rgba(0,0,0,0.9)",
                      border: "1px solid rgba(34, 211, 238, 0.5)",
                      borderRadius: "8px",
                    }}
                  />
                  <Legend />
                  <Bar dataKey="rural" fill="#22d3ee" name="Rural %" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="urban" fill="#14b8a6" name="Urban %" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Rural Illiteracy Pie Chart */}
          <div className="glass-dark p-6 rounded-xl">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-cyan-400" />
              Rural Literacy Distribution
            </h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={ruralIlliteracyData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={5}
                    dataKey="value"
                    label={({ name, value }) => `${name}: ${value}%`}
                  >
                    {ruralIlliteracyData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "rgba(0,0,0,0.9)",
                      border: "1px solid rgba(34, 211, 238, 0.5)",
                      borderRadius: "8px",
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="flex justify-center gap-6 mt-4">
              {ruralIlliteracyData.map((item) => (
                <div key={item.name} className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                  <span className="text-gray-300 text-sm">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scheme Awareness Line Chart */}
        <div className="glass-dark p-6 rounded-xl mb-16">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <Lightbulb className="w-5 h-5 text-cyan-400" />
            Government Scheme Awareness Over Time (%)
          </h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={schemeAwarenessData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis dataKey="year" stroke="rgba(255,255,255,0.6)" />
                <YAxis stroke="rgba(255,255,255,0.6)" domain={[0, 50]} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "rgba(0,0,0,0.9)",
                    border: "1px solid rgba(34, 211, 238, 0.5)",
                    borderRadius: "8px",
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="awareness"
                  stroke="#22d3ee"
                  strokeWidth={3}
                  dot={{ fill: "#22d3ee", r: 6 }}
                  activeDot={{ r: 8 }}
                  name="Awareness %"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Why This Matters */}
        <div className="glass-dark p-8 rounded-xl">
          <h3 className="text-2xl font-bold text-white mb-4">Why This Matters</h3>
          <ul className="space-y-4 text-gray-300">
            {[
              "Over 900 million people live in rural India with limited access to information",
              "Government schemes reach only a fraction of eligible beneficiaries",
              "Language barriers prevent effective communication of scheme details",
              "Illiteracy and lack of digital literacy compound the problem",
            ].map((item, idx) => (
              <li key={idx} className="flex gap-3">
                <ArrowRight className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
