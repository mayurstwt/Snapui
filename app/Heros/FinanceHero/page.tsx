import type React from "react"
import Image from "next/image"
import { Roboto } from "next/font/google"
import { TrendingUp, Shield } from "lucide-react"

// Initialize the Roboto font
const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
})

const FinanceHero: React.FC = () => {
  return (
    <div
      className={`min-h-screen w-full bg-gradient-to-b from-slate-900 via-slate-800 to-white flex flex-col items-center justify-center px-4 md:px-8 lg:px-16 ${roboto.variable} font-sans overflow-hidden`}
    >
      {/* Content Container */}
      <div className="text-center max-w-7xl mx-auto z-10 mb-10 mt-24">
        <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-8 text-white tracking-tight">
          <span className="block">Secure Your Financial</span>
          <span className="block mt-4">Future Today</span>
        </h1>

        <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-2xl mx-auto">
          Expert financial solutions tailored to help you achieve your goals.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button className="px-10 py-4 bg-emerald-600 text-white text-lg font-medium rounded-md hover:bg-emerald-700 transition-colors shadow-lg flex items-center justify-center gap-2">
            <TrendingUp size={20} />
            Start Investing
          </button>
          <button className="px-10 py-4 bg-transparent text-white border border-slate-400 text-lg font-medium rounded-md hover:bg-slate-800 transition-colors flex items-center justify-center gap-2">
            <Shield size={20} />
            Financial Planning
          </button>
        </div>

        {/* Trust indicators */}
        <div className="flex justify-center gap-8 mt-8">
          <div className="text-slate-400 text-sm">FDIC Insured</div>
          <div className="text-slate-400 text-sm">256-bit Encryption</div>
          <div className="text-slate-400 text-sm">24/7 Support</div>
        </div>
      </div>

      <div className="w-full max-w-5xl relative py-10">
        <div className="relative rounded-md overflow-hidden aspect-video">
          <div className="absolute inset-0 p-1 rounded-md bg-gradient-to-br from-emerald-500 via-slate-500 to-slate-700 z-0"></div>

          <div className="absolute inset-1 rounded-sm overflow-hidden z-10">
            <Image
              src="https://res.cloudinary.com/damr9jzpb/image/upload/v1735402591/pexels-thisisengineering-3861963.jpg"
              alt="Financial dashboard"
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

export default FinanceHero
