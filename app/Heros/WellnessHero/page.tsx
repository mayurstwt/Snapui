import type React from "react"
import Image from "next/image"
import { Quicksand } from "next/font/google"

// Initialize the Quicksand font
const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
})

const WellnessHero: React.FC = () => {
  return (
    <div
      className={`min-h-screen w-full bg-gradient-to-b from-teal-50 via-teal-100 to-white flex flex-col items-center justify-center px-4 md:px-8 lg:px-16 ${quicksand.variable} font-sans overflow-hidden`}
    >
      {/* Decorative circles */}
      <div className="absolute top-20 left-20 w-40 h-40 rounded-full bg-teal-200 opacity-30"></div>
      <div className="absolute bottom-20 right-20 w-60 h-60 rounded-full bg-teal-200 opacity-30"></div>

      {/* Content Container */}
      <div className="text-center max-w-7xl mx-auto z-10 mb-10 mt-24">
        <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-8 text-teal-900 tracking-tight">
          <span className="block">Find Your Balance</span>
          <span className="block mt-4">Nurture Your Wellbeing</span>
        </h1>

        <p className="text-xl md:text-2xl text-teal-700 mb-12 max-w-2xl mx-auto">
          Holistic wellness programs designed to restore harmony to mind and body.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button className="px-10 py-4 bg-teal-600 text-white text-lg font-medium rounded-full hover:bg-teal-700 transition-colors shadow-lg">
            Begin Your Journey
          </button>
          <button className="px-10 py-4 bg-transparent text-teal-700 border-2 border-teal-400 text-lg font-medium rounded-full hover:bg-teal-100 transition-colors">
            Explore Programs
          </button>
        </div>
      </div>

      <div className="w-full max-w-5xl relative py-10">
        <div className="relative rounded-3xl overflow-hidden aspect-video">
          <div className="absolute inset-0 p-1 rounded-3xl bg-gradient-to-br from-teal-400 via-cyan-300 to-teal-500 z-0"></div>

          <div className="absolute inset-1 rounded-2xl overflow-hidden z-10">
            <Image
              src="https://res.cloudinary.com/damr9jzpb/image/upload/v1735402591/pexels-thisisengineering-3861963.jpg"
              alt="Peaceful meditation scene"
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

export default WellnessHero
