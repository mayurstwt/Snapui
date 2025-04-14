import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const SimpleHeroFour = () => {
    return (
        <div className="min-h-screen py-24 w-full flex flex-col items-center justify-center bg-black px-4 sm:px-6 lg:px-8 font-['Poppins',sans-serif] relative overflow-hidden">
            {/* Cyberpunk grid background */}
            <div className="absolute inset-0 bg-[url('/api/placeholder/20/20')] bg-repeat opacity-5"></div>
            
            {/* Glowing accents */}
            <div className="absolute top-0 left-0 w-full h-2 bg-cyan-500 opacity-70"></div>
            <div className="absolute bottom-0 left-0 w-full h-2 bg-fuchsia-500 opacity-70"></div>

            {/* Text Content Container */}
            <div className="text-center max-w-4xl mx-auto mb-12 relative z-10">
                <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight tracking-tight">
                    <span className="block text-cyan-400 drop-shadow-lg">Transform Your Ideas Into</span>
                    <span className="block mt-2 text-fuchsia-400 drop-shadow-lg">Reality With Our Platform</span>
                </h1>

                <p className="mt-8 text-lg md:text-2xl text-gray-300 max-w-2xl mx-auto font-light">
                    Streamlined solutions that elevate your digital presence effortlessly.
                </p>

                <div className="mt-10 flex flex-col sm:flex-row justify-center gap-5">
                    <Link href="/get-started">
                        <button className="px-8 py-4 rounded-lg bg-cyan-600 text-white font-medium hover:bg-cyan-700 transition-all shadow-lg w-full sm:w-auto text-lg border border-cyan-400">
                            Get Started
                        </button>
                    </Link>
                    <Link href="/watch-demo">
                        <button className="px-8 py-4 rounded-lg bg-transparent text-fuchsia-400 font-medium border border-fuchsia-500 hover:bg-fuchsia-900/30 transition-all w-full sm:w-auto flex items-center justify-center gap-2 text-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                            </svg>
                            Watch Demo
                        </button>
                    </Link>
                </div>
            </div>

            <div className="relative w-full max-w-6xl mx-auto mt-4 z-10">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-fuchsia-600 rounded-xl blur opacity-75"></div>
                <div className="relative aspect-video w-full rounded-lg overflow-hidden bg-black">
                    <Image
                        src="https://res.cloudinary.com/damr9jzpb/image/upload/v1735402541/pexels-mikhail-nilov-7988210.jpg"
                        alt="Platform Preview"
                        width={1200}
                        height={675}
                        className="w-full h-full object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-cyan-900/40 to-fuchsia-900/20"></div>
                </div>
            </div>
        </div>
    );
};

export default SimpleHeroFour;