import type React from "react"
import Image from "next/image"
import { Lato } from "next/font/google"
import { MapPin, Compass } from "lucide-react"

// Initialize the Lato font
const lato = Lato({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-lato",
})

const TravelHero: React.FC = () => {
  return (
    <div
      className={`min-h-screen w-full bg-gradient-to-b from-sky-900 via-sky-800 to-sky-100 flex flex-col items-center justify-center px-4 md:px-8 lg:px-16 ${lato.variable} font-sans overflow-hidden`}
    >
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 text-sky-500 opacity-30">
        <Compass size={60} />
      </div>

      {/* Content Container */}
      <div className="text-center max-w-7xl mx-auto z-10 mb-10 mt-24">
        <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-8 text-white tracking-tight">
          <span className="block">Discover Breathtaking</span>
          <span className="block mt-4">Destinations</span>
        </h1>

        <p className="text-xl md:text-2xl text-sky-100 mb-12 max-w-2xl mx-auto">
          Unforgettable adventures await with our curated travel experiences.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button className="px-10 py-4 bg-sky-500 text-white text-lg font-medium rounded-lg hover:bg-sky-600 transition-colors shadow-lg flex items-center justify-center gap-2">
            <MapPin size={20} />
            Explore Destinations
          </button>
          <button className="px-10 py-4 bg-transparent text-white border-2 border-sky-300 text-lg font-medium rounded-lg hover:bg-sky-800 hover:bg-opacity-30 transition-colors">
            View Packages
          </button>
        </div>
      </div>

      <div className="w-full max-w-5xl relative py-10">
        <div className="relative rounded-xl overflow-hidden aspect-video">
          <div className="absolute inset-0 p-1 rounded-xl bg-gradient-to-br from-sky-400 via-blue-300 to-teal-500 z-0"></div>

          <div className="absolute inset-1 rounded-lg overflow-hidden z-10">
            <Image
              src="/placeholder.svg?height=720&width=1280"
              alt="Tropical beach destination"
              width={1280}
              height={720}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Location badge */}
          <div className="absolute bottom-4 left-4 bg-white bg-opacity-90 rounded-lg px-4 py-2 flex items-center gap-2 z-20">
            <MapPin size={16} className="text-sky-600" />
            <span className="font-medium text-sky-900">Bali, Indonesia</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TravelHero
