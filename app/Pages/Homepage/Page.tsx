"use client"

import { Montserrat } from 'next/font/google';
import Link from 'next/link';
import ComponentCard from "@/app/components/ComponentCard";
import { ComponentType, components } from '../../data/components';
import { useState } from 'react';
import "@/app/globals.css";
import { cn } from '@/lib/utils';
import { ChevronRight } from 'lucide-react';

// Initialize the Montserrat font
const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' });

export default function HomePage() {
    const [selectedType, setSelectedType] = useState<ComponentType>('all');

    const getAllComponents = () => {
        const allComponents = selectedType === 'all' ? Object.values(components).flat() : components[selectedType];
        return allComponents.slice(0, 6); // Limit to 6 components
    };

    return (
        <div className="relative min-h-screen w-full bg-gradient-to-b from-black via-purple-900 to-black flex flex-col items-center justify-center px-4 md:px-8 lg:px-16">
            <div className={`relative z-10 text-center max-w-7xl mx-auto mb-10 mt-32 md:mt-44`}>
                <h1 className="text-[3.7rem] md:text-6xl lg:text-7xl xl:text-8xl font-extrabold mb-8 text-white tracking-wide leading-12 md:leading-14 lg:leading-20">
                    <span className="hidden md:block">Build Faster with </span>
                    <span className="hidden md:block mt-4">Modern Components</span>
                    <span className="block md:hidden text-start mt-4 leading-14 tracking-wide">Transform Experience With Our Solution</span>
                </h1>
                <p className="text-xl text-purple-100 mb-12 max-w-2xl text-center md:mx-auto">
                    Browse, edit, and export clean, responsive UI blocks for any project.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <Link href="/Pages/ComponentsPage">
                        <button className="big-btn-dark-purple">
                            Get started
                        </button>
                    </Link>
                </div>
            </div>
            <div className="w-full max-w-7xl relative py-10 z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
            </div>
        </div>

    );
}
