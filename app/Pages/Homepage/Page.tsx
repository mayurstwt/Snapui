"use client"

import { Montserrat } from 'next/font/google';
import Link from 'next/link';
import ComponentCard from "@/app/components/ComponentCard";
import { ComponentType, components } from '../../data/components';
import { useState } from 'react';

// Initialize the Montserrat font
const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' });

export default function HomePage() {
    const [selectedType, setSelectedType] = useState<ComponentType>('all');

    const getAllComponents = () => {
        const allComponents = selectedType === 'all' ? Object.values(components).flat() : components[selectedType];
        return allComponents.slice(0, 6); // Limit to 6 components
    };

    return (
        <div className={`min-h-screen w-full bg-gradient-to-b from-black via-purple-900 to-black flex flex-col items-center justify-center px-4 md:px-8 lg:px-16 ${montserrat.variable} font-sans overflow-hidden`}>
            <div className="text-center max-w-7xl mx-auto z-10 mb-10 mt-44">
                <h1 className="text-[3rem] md:text-6xl lg:text-7xl xl:text-8xl font-extrabold mb-8 text-white tracking-wide leading-12 md:leading-14 lg:leading-20"> 
                    <span className="hidden md:block">Transform Experience</span>
                    <span className="hidden md:block mt-4">With Our Solution</span>
                    <span className="block md:hidden mt-4">Transform Experience With Our Solution</span>
                </h1>
                <p className="text-xl md:text-2xl text-purple-100 mb-12 max-w-2xl mx-auto">
                    Elevate your business with powerful tools designed for modern challenges.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <button className="px-10 py-4 bg-purple-600 text-white text-lg font-medium rounded-lg hover:bg-purple-700 transition-colors shadow-lg">
                        Get Started
                    </button>
                    <button className="px-10 py-4 bg-transparent text-purple-200 border-2 border-purple-400 text-lg font-medium rounded-lg hover:bg-purple-800 hover:bg-opacity-30 transition-colors">
                        Watch Demo
                    </button>
                </div>
            </div>
            <div className="w-full max-w-7xl relative py-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 z-10">
                    {getAllComponents().map((component, index) => (
                        <ComponentCard
                            key={index}
                            title={component.title}
                            description={component.description}
                            image={component.image}
                            previewUrl={component.previewUrl}
                            sourceUrl={component.sourceUrl}
                        />
                    ))}
                </div>
                {/* View More Button */}
                <div className="text-center mt-12">
                    <Link href="/Pages/ComponentsPage">
                        <button className="px-10 py-4 bg-purple-600 text-white text-lg font-medium rounded-lg hover:bg-purple-700 transition-colors shadow-lg">
                            View More
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
