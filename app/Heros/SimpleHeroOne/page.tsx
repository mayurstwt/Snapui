import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const SimpleHeroOne: React.FC = () => {
    return (
        <div className="min-h-screen py-24 w-full flex flex-col items-center justify-center bg-gradient-to-b from-slate-50 to-slate-100 px-4 sm:px-6 lg:px-8 font-['Poppins',sans-serif]">
            {/* Text Content Container */}
            <div className="text-center max-w-4xl mx-auto mb-12">
                {/* Heading with 7 words: 4 in first line, 3 in second line */}
                <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight tracking-tight bg-gradient-to-b from-indigo-500 to-purple-600 bg-clip-text text-transparent">
                    <span className="block">Transform Your Ideas Into</span>
                    <span className="block mt-2">Reality With Our Platform</span>
                </h1>

                {/* Short description */}
                <p className="mt-8 text-lg md:text-2xl text-gray-600 max-w-2xl mx-auto font-light">
                    Streamlined solutions that elevate your digital presence effortlessly.
                </p>

                {/* Two related buttons */}
                <div className="mt-10 flex flex-col sm:flex-row justify-center gap-5">
                    <Link href="/get-started">
                        <button className="px-8 py-4 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-all shadow-lg w-full sm:w-auto text-lg">
                            Get Started
                        </button>
                    </Link>
                    <Link href="/watch-demo">
                        <button className="px-8 py-4 rounded-lg bg-white text-indigo-600 font-medium border border-indigo-200 hover:border-indigo-600 transition-all w-full sm:w-auto flex items-center justify-center gap-2 text-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                            </svg>
                            Watch Demo
                        </button>
                    </Link>
                </div>
            </div>

            {/* Image/Video Container with Gradient Outline */}
            <div className="relative w-full max-w-6xl mx-auto rounded-xl overflow-hidden mt-4">
                {/* Gradient Outline */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl blur-sm opacity-75"></div>

                {/* Image Container */}
                <div className="relative aspect-video w-full rounded-lg overflow-hidden p-2">
                    <Image
                        src="https://res.cloudinary.com/damr9jzpb/image/upload/v1735402541/pexels-mikhail-nilov-7988210.jpg"
                        alt="Platform Preview"
                        width={1200}
                        height={675}
                        className="w-full h-full object-cover rounded-lg"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900/20 to-transparent"></div>
                </div>
            </div>
        </div>
    );
};

export default SimpleHeroOne;