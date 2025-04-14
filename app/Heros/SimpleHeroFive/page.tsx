// SimpleHeroFive.tsx
import React from 'react';
import Image from 'next/image';
import { Montserrat } from 'next/font/google';

// Initialize the Montserrat font
const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-montserrat',
});

const SimpleHeroFive: React.FC = () => {
  return (
    <>
    <div className={`min-h-screen w-full bg-gradient-to-b from-black via-purple-900 to-white flex flex-col items-center justify-center px-4 md:px-8 lg:px-16 ${montserrat.variable} font-sans overflow-hidden`}>
      {/* Content Container with increased vertical margin */}
      <div className="text-center max-w-7xl mx-auto z-10 mb-10 mt-24"> 
        {/* Extra large heading - 7 words split across 2 lines */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold mb-8 text-white tracking-tight">
          <span className="block">Transform Your Digital Experience</span>
          <span className="block mt-4">With Our Solution</span>
        </h1>
        
        {/* Description - Kept under 15 words */}
        <p className="text-xl md:text-2xl text-purple-100 mb-12 max-w-2xl mx-auto">
          Elevate your business with powerful tools designed for modern challenges.
        </p>
        
        {/* Two Related Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button className="px-10 py-4 bg-purple-600 text-white text-lg font-medium rounded-lg hover:bg-purple-700 transition-colors shadow-lg">
            Get Started
          </button>
          <button className="px-10 py-4 bg-transparent text-purple-200 border-2 border-purple-400 text-lg font-medium rounded-lg hover:bg-purple-800 hover:bg-opacity-30 transition-colors">
            Watch Demo
          </button>
        </div>
      </div>
      
      {/* Image with Gradient Outline - Positioned to be half in/half out of view */}
      <div className="w-full max-w-5xl relative py-10">
        {/* Container with height that extends beyond viewport */}
        <div className="relative rounded-xl overflow-hidden aspect-video">
          {/* Gradient Outline */}
          <div className="absolute inset-0 p-1 rounded-xl bg-gradient-to-br from-purple-400 via-pink-300 to-blue-500 z-0"></div>
          
          {/* Actual Image/Video Container */}
          <div className="absolute inset-1 rounded-lg overflow-hidden z-10">
            <Image 
              src="https://res.cloudinary.com/damr9jzpb/image/upload/v1735402541/pexels-mikhail-nilov-7988210.jpg" 
              alt="Product showcase" 
              width={1280} 
              height={720}
              className="w-full h-full object-cover"
            />
            {/* Alternatively, use a video:
            <video 
              autoPlay 
              loop 
              muted 
              className="w-full h-full object-cover"
            >
              <source src="/your-video.mp4" type="video/mp4" />
            </video>
            */}
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default SimpleHeroFive;