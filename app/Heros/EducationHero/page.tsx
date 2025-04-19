import type React from "react"
import Image from "next/image"
import { Merriweather } from "next/font/google"
import { BookOpen, GraduationCap } from "lucide-react"

// Initialize the Merriweather font
const merriweather = Merriweather({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-merriweather",
})

const EducationHero: React.FC = () => {
  return (
    <div
      className={`min-h-screen w-full bg-gradient-to-b from-indigo-900 via-indigo-800 to-white flex flex-col items-center justify-center px-4 md:px-8 lg:px-16 ${merriweather.variable} font-serif overflow-hidden`}
    >
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 text-indigo-700 opacity-20">
        <BookOpen size={60} />
      </div>
      <div className="absolute bottom-40 right-10 text-indigo-700 opacity-20">
        <GraduationCap size={60} />
      </div>

      {/* Content Container */}
      <div className="text-center max-w-7xl mx-auto z-10 mb-10 mt-24">
        <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-8 text-white tracking-tight">
          <span className="block">Unlock Your Potential</span>
          <span className="block mt-4">Through Knowledge</span>
        </h1>

        <p className="text-xl md:text-2xl text-indigo-100 mb-12 max-w-2xl mx-auto">
          Comprehensive courses taught by world-class educators and industry experts.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button className="px-10 py-4 bg-amber-500 text-white text-lg font-medium rounded-lg hover:bg-amber-600 transition-colors shadow-lg">
            Explore Courses
          </button>
          <button className="px-10 py-4 bg-transparent text-white border-2 border-indigo-300 text-lg font-medium rounded-lg hover:bg-indigo-800 transition-colors">
            Free Resources
          </button>
        </div>
      </div>

      <div className="w-full max-w-5xl relative py-10">
        <div className="relative rounded-xl overflow-hidden aspect-video">
          <div className="absolute inset-0 p-1 rounded-xl bg-gradient-to-br from-indigo-400 via-blue-300 to-amber-500 z-0"></div>

          <div className="absolute inset-1 rounded-lg overflow-hidden z-10">
            <Image
              src="https://res.cloudinary.com/damr9jzpb/image/upload/v1740925617/66fedc3fd1f116089b632302_hero-img_oh0pmp.webp"
              alt="Students in a learning environment"
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

export default EducationHero
