import type React from "react"
import Image from "next/image"
import { Raleway } from "next/font/google"
import { ShoppingBag, Star } from "lucide-react"

// Initialize the Raleway font
const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
})

const EcommerceHero: React.FC = () => {
  return (
    <div
      className={`min-h-screen w-full bg-gradient-to-b from-gray-50 to-gray-100 flex flex-col items-center justify-center px-4 md:px-8 lg:px-16 ${raleway.variable} font-sans overflow-hidden`}
    >
      {/* Content Container */}
      <div className="text-center max-w-7xl mx-auto z-10 mb-10 mt-24">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Star className="text-yellow-400 fill-yellow-400" size={20} />
          <Star className="text-yellow-400 fill-yellow-400" size={20} />
          <Star className="text-yellow-400 fill-yellow-400" size={20} />
          <Star className="text-yellow-400 fill-yellow-400" size={20} />
          <Star className="text-yellow-400 fill-yellow-400" size={20} />
          <span className="text-gray-600 ml-2">2,500+ Reviews</span>
        </div>

        <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold mb-8 text-gray-900 tracking-tight">
          <span className="block">Summer Collection</span>
          <span className="block mt-4 text-rose-600">Now Available</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto">
          Discover premium quality with up to 40% off this season.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button className="px-10 py-4 bg-rose-600 text-white text-lg font-medium rounded-md hover:bg-rose-700 transition-colors shadow-lg flex items-center justify-center gap-2">
            <ShoppingBag size={20} />
            Shop Now
          </button>
          <button className="px-10 py-4 bg-transparent text-gray-800 border-2 border-gray-300 text-lg font-medium rounded-md hover:bg-gray-100 transition-colors">
            View Catalog
          </button>
        </div>
      </div>

      <div className="w-full max-w-5xl relative py-10">
        <div className="relative rounded-xl overflow-hidden aspect-video">
          <div className="absolute inset-0 p-1 rounded-xl bg-gradient-to-br from-rose-400 via-pink-300 to-rose-500 z-0"></div>

          <div className="absolute inset-1 rounded-lg overflow-hidden z-10">
            <Image
              src="/placeholder.svg?height=720&width=1280"
              alt="Summer fashion collection"
              width={1280}
              height={720}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Product badge */}
          <div className="absolute top-4 right-4 bg-white rounded-full px-4 py-2 font-bold text-rose-600 z-20">
            40% OFF
          </div>
        </div>
      </div>
    </div>
  )
}

export default EcommerceHero
