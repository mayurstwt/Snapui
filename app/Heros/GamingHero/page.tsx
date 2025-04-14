import type React from "react"
import Image from "next/image"
import { Orbitron } from "next/font/google"
import { Gamepad2, Zap } from "lucide-react"

// Initialize the Orbitron font
const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
})

const GamingHero: React.FC = () => {
  return (
    <div
      className={`min-h-screen w-full bg-gradient-to-b from-black via-violet-950 to-black flex flex-col items-center justify-center px-4 md:px-8 lg:px-16 ${orbitron.variable} font-sans overflow-hidden relative`}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/placeholder.svg?height=100&width=100')] bg-repeat opacity-5"></div>
      </div>

      {/* Glowing accent */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-violet-600 filter blur-[100px] opacity-20 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-cyan-500 filter blur-[100px] opacity-20 animate-pulse"></div>

      {/* Content Container */}
      <div className="text-center max-w-7xl mx-auto z-10 mb-10 mt-24">
        <div className="flex justify-center mb-4">
          <Gamepad2 className="text-violet-400" size={50} />
        </div>

        <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-8 text-white tracking-tight">
          <span className="block">Enter The Next Level</span>
          <span className="block mt-4 text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">
            Of Gaming
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Experience immersive worlds with cutting-edge graphics and gameplay.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button className="px-10 py-4 bg-gradient-to-r from-violet-600 to-cyan-600 text-white text-lg font-medium rounded-md hover:from-violet-700 hover:to-cyan-700 transition-all shadow-lg flex items-center justify-center gap-2 group">
            <Zap size={20} className="group-hover:animate-pulse" />
            Play Now
          </button>
          <button className="px-10 py-4 bg-transparent text-white border border-violet-500 text-lg font-medium rounded-md hover:bg-violet-900 hover:bg-opacity-30 transition-colors">
            Watch Trailer
          </button>
        </div>
      </div>

      <div className="w-full max-w-5xl relative py-10">
        <div className="relative rounded-md overflow-hidden aspect-video">
          <div className="absolute inset-0 p-1 rounded-md bg-gradient-to-br from-violet-500 via-purple-500 to-cyan-500 z-0 animate-pulse"></div>

          <div className="absolute inset-1 rounded-sm overflow-hidden z-10">
            <Image
              src="/placeholder.svg?height=720&width=1280"
              alt="Epic game scene"
              width={1280}
              height={720}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Game badge */}
          <div className="absolute top-4 left-4 bg-black bg-opacity-70 border border-violet-500 rounded-md px-4 py-2 text-violet-400 font-bold z-20">
            NEW RELEASE
          </div>
        </div>
      </div>
    </div>
  )
}

export default GamingHero
