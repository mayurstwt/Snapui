'use client';

import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface TimelineItem {
  id: number;
  year: string;
  title: string;
  description: string;
  metric?: string;
  growth?: number;
}

const timelineData: TimelineItem[] = [
  { id: 1, year: '2018', title: 'Company Founded', description: 'Started operations...', growth: 50000 },
  { id: 2, year: '2019', title: 'First Major Client', description: 'Secured our first...', growth: 250000 },
  { id: 3, year: '2020', title: 'Product Launch', description: 'Launched our flagship...', growth: 1200000 },
  { id: 4, year: '2021', title: 'Series A Funding', description: 'Raised $5M...', growth: 3600000 },
  { id: 5, year: '2022', title: 'Team Expansion', description: 'Grew to 50+ employees...', growth: 8500000 },
  { id: 6, year: '2023', title: 'Series B Funding', description: 'Raised $20M...', growth: 15000000 },
  { id: 7, year: '2024', title: 'Global Expansion', description: 'Opened offices...', growth: 28000000 },
];

const formatCurrency = (val: number) => `$${val.toLocaleString()}`;

export default function HorizontalCompanyTimeline() {
  const [activeId, setActiveId] = useState(1);
  const scrollRef = useRef<HTMLDivElement>(null);
  const yearRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    yearRefs.current = yearRefs.current.slice(0, timelineData.length);
  }, []);

  const scrollToYear = (id: number) => {
    const el = yearRefs.current[id - 1];
    if (scrollRef.current && el) {
      const center = el.offsetLeft - scrollRef.current.clientWidth / 2 + el.offsetWidth / 2;
      scrollRef.current.scrollTo({ left: center, behavior: 'smooth' });
    }
    setActiveId(id);
  };

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const centerX = scrollRef.current.scrollLeft + scrollRef.current.clientWidth / 2;
    let closest = 1, minDist = Infinity;
    yearRefs.current.forEach((el, i) => {
      if (el) {
        const elCenter = el.offsetLeft + el.offsetWidth / 2;
        const dist = Math.abs(centerX - elCenter);
        if (dist < minDist) {
          minDist = dist;
          closest = i + 1;
        }
      }
    });
    setActiveId(closest);
  };

  const nav = (dir: 'prev' | 'next') => {
    const newId = dir === 'prev' ? Math.max(1, activeId - 1) : Math.min(timelineData.length, activeId + 1);
    scrollToYear(newId);
  };

  const active = timelineData.find(t => t.id === activeId)!;

  return (
    <div className="bg-black text-white py-36 min-h-screen relative">
      <div className="fixed bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-black via-black to-transparent -z-10" />

      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">Company Growth Timeline</h1>

        <div
          ref={scrollRef}
          className="relative overflow-x-auto pb-6 mb-8 hide-scrollbar"
          onScroll={handleScroll}
        >
          <div className="relative min-w-max px-12">
            <div className="h-1 bg-gray-700 absolute left-0 right-0 top-9" />
            <div className="flex items-center">
              {timelineData.map((item, i) => (
                <div
                  key={item.id}
                  ref={(el) => {
                    yearRefs.current[i] = el;
                  }}
                  onClick={() => scrollToYear(item.id)}
                  className="relative flex flex-col items-center mx-16 md:mx-24 cursor-pointer"
                >
                  <div className={`w-6 h-6 rounded-full z-10 flex items-center justify-center transition-all duration-300 
                    ${activeId === item.id ? 'bg-yellow-300 text-black' : 'bg-black border-2 border-gray-600'}`}>
                    <div className={`w-2 h-2 rounded-full ${activeId === item.id ? 'bg-black' : 'bg-yellow-300'}`} />
                  </div>
                  <div className={`mt-2 font-semibold transition-all ${activeId === item.id ? 'text-yellow-300 text-lg' : 'text-gray-400 text-base'}`}>
                    {item.year}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center mb-6 space-x-4 items-center">
          <button onClick={() => nav('prev')} disabled={activeId === 1}
            className={`p-2 rounded-full ${activeId === 1 ? 'bg-gray-800 text-gray-600' : 'bg-yellow-300 text-black'}`}>
            <ChevronLeft size={24} />
          </button>
          <div className="text-yellow-300 font-semibold">{active.year}</div>
          <button onClick={() => nav('next')} disabled={activeId === timelineData.length}
            className={`p-2 rounded-full ${activeId === timelineData.length ? 'bg-gray-800 text-gray-600' : 'bg-yellow-300 text-black'}`}>
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Active Content */}
        <div className="bg-black border-2 border-yellow-300 rounded-xl shadow-lg p-6 max-w-3xl mx-auto transition-all">
          <div className="flex justify-between items-center mb-4">
            <span className="text-lg font-semibold bg-yellow-300 text-black px-4 py-1 rounded-full">{active.year}</span>
            {active.growth && <span className="text-lg text-yellow-300">{formatCurrency(active.growth)}</span>}
          </div>
          <h3 className="text-2xl font-bold mb-2">{active.title}</h3>
          <p className="text-gray-300 text-lg mb-4">{active.description}</p>
          {active.growth && (
            <div>
              <h4 className="text-lg font-semibold mb-2">Revenue Growth</h4>
              <div className="h-8 bg-gray-800 rounded-lg overflow-hidden">
                <div
                  className="h-full bg-yellow-300 flex items-center justify-end pr-3 rounded-l-lg transition-all"
                  style={{ width: `${Math.min((active.growth / 30000000) * 100, 100)}%` }}
                >
                  <span className="text-black font-medium">{formatCurrency(active.growth)}</span>
                </div>
              </div>
            </div>
          )}
        </div>

        <p className="text-center mt-6 text-gray-400">Scroll or use arrows to explore the timeline</p>

        <style jsx>{`.hide-scrollbar::-webkit-scrollbar { display: none; }`}</style>
      </div>
    </div>
  );
}
