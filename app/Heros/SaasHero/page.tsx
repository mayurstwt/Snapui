import type React from "react"
import Image from "next/image"
import { DM_Sans } from "next/font/google"
import { BarChart, CheckCircle } from "lucide-react"

// Initialize the DM Sans font
const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
})

const SaasHero: React.FC = () => {
  return (
    <div
      className={`min-h-screen w-full bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 flex flex-col items-center justify-center px-4 md:px-8 lg:px-16 ${dmSans.variable} font-sans overflow-hidden`}
    >
      {/* Accent colors */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600"></div>

      {/* Content Container */}
      <div className="text-center max-w-7xl mx-auto z-10 mb-10 mt-24">
        <div className="inline-block px-4 py-1 bg-gray-800 rounded-full text-cyan-400 text-sm font-medium mb-6">
          #1 Analytics Platform
        </div>

        <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-8 text-white tracking-tight">
          <span className="block">Data-Driven Decisions</span>
          <span className="block mt-4">
            Made <span className="text-cyan-400">Simple</span>
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Powerful analytics tools that transform your business data into actionable insights.
        </p>

        {/* Feature list */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 mb-10">
          <div className="flex items-center gap-1 text-gray-300">
            <CheckCircle size={16} className="text-cyan-400" />
            <span>Real-time data</span>
          </div>
          <div className="flex items-center gap-1 text-gray-300">
            <CheckCircle size={16} className="text-cyan-400" />
            <span>Custom dashboards</span>
          </div>
          <div className="flex items-center gap-1 text-gray-300">
            <CheckCircle size={16} className="text-cyan-400" />
            <span>AI-powered insights</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button className="px-10 py-4 bg-cyan-500 text-white text-lg font-medium rounded-lg hover:bg-cyan-600 transition-colors shadow-lg flex items-center justify-center gap-2">
            <BarChart size={20} />
            Start Free Trial
          </button>
          <button className="px-10 py-4 bg-gray-800 text-white text-lg font-medium rounded-lg hover:bg-gray-700 transition-colors">
            Schedule Demo
          </button>
        </div>
      </div>

      <div className="w-full max-w-5xl relative py-10">
        <div className="relative rounded-xl overflow-hidden aspect-video">
          <div className="absolute inset-0 p-1 rounded-xl bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-600 z-0"></div>

          <div className="absolute inset-1 rounded-lg overflow-hidden z-10 bg-gray-900">
            <Image
              src="/placeholder.svg?height=720&width=1280"
              alt="Analytics dashboard"
              width={1280}
              height={720}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SaasHero
