"use client"

import { useState, useEffect } from "react"
import { ArrowRight, Users, BookOpen, Bell, WifiOff, UserX } from "lucide-react"
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
    { value: 0, label: "Scheme Awareness %", target: 24, icon: Bell },
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
    { state: "Bihar", rural: 88.7, urban: 11.3 },
    { state: "Himachal", rural: 89.9, urban: 10.1 },
    { state: "UP", rural: 77.7, urban: 22.3 },
    { state: "Rajasthan", rural: 75.1, urban: 24.9 },
    { state: "MP", rural: 72.4, urban: 27.6 },
    { state: "Odisha", rural: 83.3, urban: 16.7 },
  ]

  const literacyData = [
    { name: "Literate", value: 67, color: "#22d3ee" },
    { name: "Illiterate", value: 33, color: "#f97316" },
  ]

  const awarenessData = [
    { year: "2018", awareness: 12 },
    { year: "2019", awareness: 15 },
    { year: "2020", awareness: 17 },
    { year: "2021", awareness: 19 },
    { year: "2022", awareness: 21 },
    { year: "2023", awareness: 22 },
    { year: "2024", awareness: 24 },
  ]

  const illiteracyImpactData = [
    { category: "Unable to Read Scheme Documents", affected: 78, notAffected: 22 },
    { category: "Cannot Fill Application Forms", affected: 85, notAffected: 15 },
    { category: "Miss Deadlines Due to Unawareness", affected: 67, notAffected: 33 },
    { category: "Cannot Navigate Digital Portals", affected: 92, notAffected: 8 },
    { category: "Rely on Middlemen (Risk of Fraud)", affected: 71, notAffected: 29 },
  ]

  return (
    <section
      id="data"
      className="min-h-screen flex items-center py-20 px-4 bg-gradient-to-b from-black to-purple-950/20"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Data Reality of Rural India</h2>
          <p className="text-gray-400 text-lg">Data shown is based on publicly available statistics</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <div
                key={index}
                className="glass-dark p-8 rounded-xl text-center backdrop-blur-xl hover:bg-white/15 transition-all"
              >
                <IconComponent className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <div className="text-5xl font-bold gradient-text mb-4">{stat.value}%</div>
                <p className="text-gray-300 text-lg">{stat.label}</p>
              </div>
            )
          })}
        </div>

        <div className="mt-16 grid lg:grid-cols-2 gap-8">
          {/* Rural Population Chart */}
          <div className="glass-dark p-6 rounded-xl">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Users className="w-5 h-5 text-cyan-400" />
              Rural vs Urban Population by State
            </h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={ruralPopulationData} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                  <XAxis type="number" domain={[0, 100]} stroke="#888" />
                  <YAxis dataKey="state" type="category" stroke="#888" width={80} />
                  <Tooltip
                    contentStyle={{ backgroundColor: "#1a1a2e", border: "1px solid #333", borderRadius: "8px" }}
                    labelStyle={{ color: "#fff" }}
                  />
                  <Legend />
                  <Bar dataKey="rural" name="Rural %" fill="#22d3ee" radius={[0, 4, 4, 0]} />
                  <Bar dataKey="urban" name="Urban %" fill="#a855f7" radius={[0, 4, 4, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Rural Literacy Chart */}
          <div className="glass-dark p-6 rounded-xl">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-cyan-400" />
              Rural Literacy Distribution
            </h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={literacyData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={5}
                    dataKey="value"
                    label={({ name, value }) => `${name}: ${value}%`}
                  >
                    {literacyData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{ backgroundColor: "#1a1a2e", border: "1px solid #333", borderRadius: "8px" }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Scheme Awareness Line Chart */}
        <div className="mt-8 glass-dark p-6 rounded-xl">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Bell className="w-5 h-5 text-cyan-400" />
            Government Scheme Awareness Growth Over Time
          </h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={awarenessData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                <XAxis dataKey="year" stroke="#888" />
                <YAxis domain={[0, 30]} stroke="#888" />
                <Tooltip
                  contentStyle={{ backgroundColor: "#1a1a2e", border: "1px solid #333", borderRadius: "8px" }}
                  labelStyle={{ color: "#fff" }}
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="awareness"
                  name="Awareness %"
                  stroke="#22d3ee"
                  strokeWidth={3}
                  dot={{ fill: "#22d3ee", strokeWidth: 2, r: 6 }}
                  activeDot={{ r: 8, fill: "#a855f7" }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="mt-8 glass-dark p-6 rounded-xl border border-orange-500/30">
          <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
            <UserX className="w-5 h-5 text-orange-400" />
            Impact of Illiteracy on Government Scheme Access
          </h3>
          <p className="text-gray-400 text-sm mb-4">
            Percentage of illiterate rural population facing these challenges
          </p>
          <div className="h-96">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={illiteracyImpactData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                <XAxis type="number" domain={[0, 100]} stroke="#888" />
                <YAxis dataKey="category" type="category" stroke="#888" width={200} tick={{ fontSize: 12 }} />
                <Tooltip
                  contentStyle={{ backgroundColor: "#1a1a2e", border: "1px solid #333", borderRadius: "8px" }}
                  labelStyle={{ color: "#fff" }}
                />
                <Legend />
                <Bar dataKey="affected" name="Affected %" fill="#f97316" radius={[0, 4, 4, 0]} />
                <Bar dataKey="notAffected" name="Not Affected %" fill="#22c55e" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="mt-8 glass-dark p-8 rounded-xl">
          <h3 className="text-2xl font-bold text-white mb-4">Why This Matters</h3>
          <ul className="space-y-4 text-gray-300">
            <li className="flex gap-3">
              <ArrowRight className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
              <span>Over 900 million people live in rural India with limited access to information</span>
            </li>
            <li className="flex gap-3">
              <ArrowRight className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
              <span>Government schemes reach only a fraction of eligible beneficiaries</span>
            </li>
            <li className="flex gap-3">
              <ArrowRight className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
              <span>Language barriers prevent effective communication of scheme details</span>
            </li>
            <li className="flex gap-3">
              <ArrowRight className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
              <span>Illiteracy and lack of digital literacy compound the problem</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
