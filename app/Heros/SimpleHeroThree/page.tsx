import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const SimpleHeroThree = () => {
    return (
        <div className="min-h-screen py-24 w-full flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-indigo-100 px-4 sm:px-6 lg:px-8 font-['Poppins',sans-serif] relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-20 left-20 w-24 h-24 rounded-full bg-blue-300 opacity-50 blur-md"></div>
            <div className="absolute bottom-32 right-24 w-32 h-32 rounded-full bg-indigo-300 opacity-50 blur-md"></div>
            <div className="absolute top-40 right-20 w-20 h-20 rounded-full bg-indigo-400 opacity-30 blur-md"></div>

            {/* Text Content Container */}
            <div className="text-center max-w-4xl mx-auto mb-12 relative z-10">
                <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight tracking-tight bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">
                    <span className="block">Transform Your Ideas Into</span>
                    <span className="block mt-2">Reality With Our Platform</span>
                </h1>

                <p className="mt-8 text-lg md:text-2xl text-gray-700 max-w-2xl mx-auto font-light">
                    Streamlined solutions that elevate your digital presence effortlessly.
                </p>

                <div className="mt-10 flex flex-col sm:flex-row justify-center gap-5">
                    <Link href="/get-started">
                        <button className="px-8 py-4 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-all shadow-lg w-full sm:w-auto text-lg">
                            Get Started
                        </button>
                    </Link>
                    <Link href="/watch-demo">
                        <button className="px-8 py-4 rounded-lg bg-white text-blue-600 font-medium border border-blue-200 hover:border-blue-600 transition-all w-full sm:w-auto flex items-center justify-center gap-2 text-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                            </svg>
                            Watch Demo
                        </button>
                    </Link>
                </div>
            </div>

            <div className="relative w-full max-w-6xl mx-auto rounded-xl overflow-hidden mt-4 z-10">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl blur-sm opacity-75"></div>
                <div className="relative aspect-video w-full rounded-lg overflow-hidden p-2">
                    <Image
                        src="/api/placeholder/1200/675"
                        alt="Platform Preview"
                        width={1200}
                        height={675}
                        className="w-full h-full object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 to-transparent"></div>
                </div>
            </div>
        </div>
    );
};

export default SimpleHeroThree;