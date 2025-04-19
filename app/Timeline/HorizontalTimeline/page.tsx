'use client';

import { useRef, useState, useEffect } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

interface Milestone {
    id: number;
    title: string;
    subtitle: string;
    detail: string;
    impact?: string;
    year: string;
}

const milestones: Milestone[] = [
    { id: 1, year: '2018', title: 'Launch Sequence Initiated', subtitle: 'Startup ignition', detail: 'In 2018, we laid the foundation of our mission with a small but powerful team.', impact: 'Bootstrapped to $50K' },
    { id: 2, year: '2019', title: 'First Orbit Achieved', subtitle: 'Initial traction', detail: 'Our first major client joined the mission, accelerating our growth.', impact: 'Revenue climbed to $250K' },
    { id: 3, year: '2020', title: 'System Online', subtitle: 'Product launch', detail: 'We released our MVP into the world and received critical acclaim.', impact: 'User base reached 1M+' },
    { id: 4, year: '2021', title: 'Power Boost', subtitle: 'Funding secured', detail: 'Secured Series A and expanded operations to new galaxies.', impact: 'Raised $5M' },
    { id: 5, year: '2022', title: 'Crew Expansion', subtitle: 'Team scaling', detail: 'Grew to a stellar team of 50+ with diverse capabilities.', impact: 'HQ scaled x3' },
    { id: 6, year: '2023', title: 'Warp Drive Engaged', subtitle: 'Series B', detail: 'Series B funding propelled us into new markets with cutting-edge tech.', impact: 'Valued at $40M+' },
    { id: 7, year: '2024', title: 'Universal Reach', subtitle: 'Global footprint', detail: 'Operations now span multiple continents, impacting millions.', impact: 'Global expansion in 12 countries' },
];

export default function VerticalTimelineVariant() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [activeId, setActiveId] = useState(1);
    const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

    const scrollToItem = (id: number) => {
        const el = itemRefs.current[id - 1];
        if (el && containerRef.current) {
            el.scrollIntoView({ behavior: 'smooth', block: 'center' });
            setActiveId(id);
        }
    };

    const nav = (dir: 'up' | 'down') => {
        const newId = dir === 'up' ? Math.max(1, activeId - 1) : Math.min(milestones.length, activeId + 1);
        scrollToItem(newId);
    };

    useEffect(() => {
        itemRefs.current = itemRefs.current.slice(0, milestones.length);
    }, []);

    return (
        <div className="bg-gradient-to-br from-black to-gray-900 text-white py-24 min-h-screen">
            <div className="max-w-4xl mx-auto px-6">
                <h2 className="text-center text-4xl font-bold mb-12">🚀 Mission Timeline</h2>

                {/* Navigation */}
                <div className="flex justify-center mb-6 space-x-6">
                    <button onClick={() => nav('up')} disabled={activeId === 1}
                        className={`p-3 rounded-full ${activeId === 1 ? 'bg-gray-700 text-gray-400' : 'bg-cyan-400 text-black'}`}>
                        <ChevronUp />
                    </button>
                    <button onClick={() => nav('down')} disabled={activeId === milestones.length}
                        className={`p-3 rounded-full ${activeId === milestones.length ? 'bg-gray-700 text-gray-400' : 'bg-cyan-400 text-black'}`}>
                        <ChevronDown />
                    </button>
                </div>

                {/* Timeline Items */}
                <div
                    ref={containerRef}
                    className="space-y-10 max-h-[25rem] overflow-y-auto scroll-smooth snap-y snap-mandatory py-4 px-7 hide-scrollbar"
                >
                    {milestones.map((milestone, i) => (
                        <div
                            key={milestone.id}
                            ref={(el) => {
                                itemRefs.current[i] = el;
                            }}

                            className={`snap-center transition-transform duration-300 rounded-2xl p-6 shadow-lg border 
                ${activeId === milestone.id
                                    ? 'bg-white/10 border-cyan-400 backdrop-blur-md scale-105'
                                    : 'bg-white/5 border-gray-700'} 
              `}
                            onClick={() => scrollToItem(milestone.id)}
                        >
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-cyan-400 font-semibold">{milestone.year}</span>
                                <span className="text-sm text-gray-400">{milestone.subtitle}</span>
                            </div>
                            <h3 className="text-2xl font-bold mb-1">{milestone.title}</h3>
                            <p className="text-gray-300 mb-4">{milestone.detail}</p>
                            {milestone.impact && (
                                <div className="text-cyan-300 font-medium border-t border-cyan-700 pt-3">
                                    Impact: {milestone.impact}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <p className="text-center mt-8 text-gray-500">Click or scroll to explore the full mission journey</p>

                <style jsx>{`
          .hide-scrollbar::-webkit-scrollbar { display: none; }
        `}</style>
            </div>
        </div>
    );
}
