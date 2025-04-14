import type React from "react"
import Image from "next/image"
import { Poppins } from "next/font/google"
import { Leaf } from "lucide-react"

// Initialize the Poppins font
const poppins = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
})

const EcoFriendlyHero: React.FC = () => {
  return (
    <div
      className={`min-h-screen w-full bg-gradient-to-b from-green-900 via-green-800 to-emerald-100 flex flex-col items-center justify-center px-4 md:px-8 lg:px-16 ${poppins.variable} font-sans overflow-hidden`}
    >
      {/* Decorative leaves */}
      <div className="absolute top-10 left-10 text-green-500 opacity-30">
        <Leaf size={80} />
      </div>
      <div className="absolute bottom-10 right-10 text-green-500 opacity-30">
        <Leaf size={80} />
      </div>

      {/* Content Container */}
      <div className="text-center max-w-7xl mx-auto z-10 mb-10 mt-24">
        <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-8 text-white tracking-tight">
          <span className="block">Sustainable Solutions for</span>
          <span className="block mt-4">A Greener Tomorrow</span>
        </h1>

        <p className="text-xl md:text-2xl text-green-100 mb-12 max-w-2xl mx-auto">
          Join our mission to protect the planet with eco-conscious innovations.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button className="px-10 py-4 bg-emerald-600 text-white text-lg font-medium rounded-full hover:bg-emerald-700 transition-colors shadow-lg">
            Join The Movement
          </button>
          <button className="px-10 py-4 bg-transparent text-green-200 border-2 border-green-400 text-lg font-medium rounded-full hover:bg-green-800 hover:bg-opacity-30 transition-colors">
            Learn More
          </button>
        </div>
      </div>

      <div className="w-full max-w-5xl relative py-10">
        <div className="relative rounded-2xl overflow-hidden aspect-video">
          <div className="absolute inset-0 p-1 rounded-2xl bg-gradient-to-br from-green-400 via-emerald-300 to-teal-500 z-0"></div>

          <div className="absolute inset-1 rounded-xl overflow-hidden z-10">
            <Image
              src="/placeholder.svg?height=720&width=1280"
              alt="Sustainable forest initiative"
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

export default EcoFriendlyHero
