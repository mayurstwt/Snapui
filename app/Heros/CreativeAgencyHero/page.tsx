import type React from "react"
import Image from "next/image"
import { Playfair_Display } from "next/font/google"

// Initialize the Playfair Display font
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

const CreativeAgencyHero: React.FC = () => {
  return (
    <div
      className={`min-h-screen w-full bg-black flex flex-col items-center justify-center px-4 md:px-8 lg:px-16 ${playfair.variable} font-serif overflow-hidden relative`}
    >
      {/* Abstract background shapes */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-pink-500 rounded-full filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-500 rounded-full filter blur-3xl opacity-20"></div>
      <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-purple-500 rounded-full filter blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2"></div>

      {/* Content Container */}
      <div className="text-center max-w-7xl mx-auto z-10 mb-10 mt-24">
        <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-8 text-white tracking-tight">
          <span className="block">Crafting Bold Experiences</span>
          <span className="block mt-4 text-pink-400">That Captivate</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Award-winning creative studio delivering unforgettable brand stories.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button className="px-10 py-4 bg-gradient-to-r from-pink-500 to-orange-500 text-white text-lg font-medium rounded-md hover:from-pink-600 hover:to-orange-600 transition-all shadow-lg">
            See Our Work
          </button>
          <button className="px-10 py-4 bg-transparent text-white border border-white text-lg font-medium rounded-md hover:bg-white hover:bg-opacity-10 transition-colors">
            Contact Us
          </button>
        </div>
      </div>

      <div className="w-full max-w-5xl relative py-10">
        <div className="relative rounded-none overflow-hidden aspect-video transform rotate-1">
          <div className="absolute inset-0 p-1 bg-gradient-to-br from-pink-500 via-purple-500 to-yellow-500 z-0"></div>

          <div className="absolute inset-1 overflow-hidden z-10">
            <Image
              src="https://res.cloudinary.com/damr9jzpb/image/upload/v1735402591/pexels-thisisengineering-3861963.jpg"
              alt="Creative portfolio showcase"
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

export default CreativeAgencyHero
