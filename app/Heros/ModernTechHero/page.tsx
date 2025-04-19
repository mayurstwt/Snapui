import type React from "react"
import Image from "next/image"
import { Inter } from "next/font/google"

// Initialize the Inter font
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const ModernTechHero: React.FC = () => {
  return (
    <div
      className={`min-h-screen w-full bg-gradient-to-b from-slate-900 via-blue-900 to-slate-100 flex flex-col items-center justify-center px-4 md:px-8 lg:px-16 ${inter.variable} font-sans overflow-hidden`}
    >
      {/* Content Container */}
      <div className="text-center max-w-7xl mx-auto z-10 mb-10 mt-24">
        <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold mb-8 text-white tracking-tight">
          <span className="block">Innovate Your Digital Infrastructure</span>
          <span className="block mt-4">With Cloud Solutions</span>
        </h1>

        <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-2xl mx-auto">
          Scale your business with enterprise-grade technology built for tomorrow.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button className="px-10 py-4 bg-blue-600 text-white text-lg font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-lg">
            Start Free Trial
          </button>
          <button className="px-10 py-4 bg-transparent text-blue-200 border-2 border-blue-400 text-lg font-medium rounded-lg hover:bg-blue-800 hover:bg-opacity-30 transition-colors">
            View Solutions
          </button>
        </div>
      </div>

      <div className="w-full max-w-5xl relative py-10">
        <div className="relative rounded-xl overflow-hidden aspect-video">
          <div className="absolute inset-0 p-1 rounded-xl bg-gradient-to-br from-blue-400 via-cyan-300 to-indigo-500 z-0"></div>

          <div className="absolute inset-1 rounded-lg overflow-hidden z-10">
            <Image
              src="https://res.cloudinary.com/damr9jzpb/image/upload/v1735402591/pexels-thisisengineering-3861963.jpg"
              alt="Cloud technology dashboard"
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

export default ModernTechHero
