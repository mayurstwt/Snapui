import type React from "react"
import Image from "next/image"
import { Playfair_Display } from "next/font/google"
import { UtensilsCrossed } from "lucide-react"

// Initialize the Playfair Display font
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

const RestaurantHero: React.FC = () => {
  return (
    <div
      className={`min-h-screen w-full bg-gradient-to-b from-amber-950 via-amber-900 to-amber-100 flex flex-col items-center justify-center px-4 md:px-8 lg:px-16 ${playfair.variable} font-serif overflow-hidden`}
    >
      {/* Content Container */}
      <div className="text-center max-w-7xl mx-auto z-10 mb-10 mt-24">
        <div className="flex justify-center mb-6">
          <UtensilsCrossed className="text-amber-300" size={40} />
        </div>

        <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-8 text-amber-100 tracking-tight">
          <span className="block">Exquisite Flavors</span>
          <span className="block mt-4">Unforgettable Dining</span>
        </h1>

        <p className="text-xl md:text-2xl text-amber-200 mb-12 max-w-2xl mx-auto">
          Savor our chef's signature creations in an elegant atmosphere.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button className="px-10 py-4 bg-amber-600 text-white text-lg font-medium rounded-none hover:bg-amber-700 transition-colors shadow-lg">
            Reserve A Table
          </button>
          <button className="px-10 py-4 bg-transparent text-amber-200 border-2 border-amber-500 text-lg font-medium rounded-none hover:bg-amber-800 hover:bg-opacity-30 transition-colors">
            View Menu
          </button>
        </div>
      </div>

      <div className="w-full max-w-5xl relative py-10">
        <div className="relative rounded-none overflow-hidden aspect-video">
          <div className="absolute inset-0 p-1 bg-gradient-to-br from-amber-500 via-amber-400 to-amber-600 z-0"></div>

          <div className="absolute inset-1 overflow-hidden z-10">
            <Image
              src="/placeholder.svg?height=720&width=1280"
              alt="Gourmet dish presentation"
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

export default RestaurantHero
