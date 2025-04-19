'use client';

import { useState } from 'react';
import { CheckCircle } from 'lucide-react';

interface Milestone {
  id: number;
  year: string;
  title: string;
  description: string;
  details?: string;
}

const milestones: Milestone[] = [
  { id: 1, year: '2018', title: 'Kickoff', description: 'We laid the foundation.', details: 'Registered the company and started brainstorming ideas.' },
  { id: 2, year: '2019', title: 'Built MVP', description: 'Developed our first product.', details: 'Prototype was launched and we got our first users.' },
  { id: 3, year: '2020', title: 'Going Live', description: 'Official product launch.', details: 'Gained traction with media coverage and partnerships.' },
  { id: 4, year: '2021', title: 'Funding Round', description: 'Raised seed funding.', details: 'Brought onboard incredible investors and advisors.' },
  { id: 5, year: '2022', title: 'Team Grows', description: 'Expanded team to 50+.', details: 'Built cross-functional teams and scaled operations.' },
  { id: 6, year: '2023', title: 'New Horizons', description: 'Global expansion.', details: 'Launched in 3 new markets and doubled our user base.' },
];

export default function VerticalMilestoneTimeline() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="bg-gradient-to-b from-slate-950 to-black min-h-screen py-24 px-4 text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Milestone Journey</h2>
        <div className="relative border-l-4 border-yellow-400 pl-6 space-y-12">
          {milestones.map((item) => (
            <div key={item.id} className="relative">
              <div className="absolute -left-[1.45rem] top-1.5 bg-black border-4 border-yellow-400 w-6 h-6 rounded-full flex items-center justify-center z-10">
                <CheckCircle className="w-4 h-4 text-yellow-400" />
              </div>

              <div
                className={`bg-slate-900 p-6 rounded-xl shadow-md border border-slate-700 transition-all duration-300 cursor-pointer hover:border-yellow-400 ${
                  expandedId === item.id ? 'ring-2 ring-yellow-400' : ''
                }`}
                onClick={() => toggleExpand(item.id)}
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="text-yellow-300 font-semibold">{item.year}</span>
                  <span className="text-sm text-gray-400">{expandedId === item.id ? 'Click to collapse' : 'Click to expand'}</span>
                </div>
                <h3 className="text-2xl font-bold mb-1">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
                {expandedId === item.id && item.details && (
                  <p className="text-sm text-gray-400 mt-4 border-t border-slate-700 pt-4">{item.details}</p>
                )}
              </div>
            </div>
          ))}
        </div>
        <p className="text-center mt-12 text-gray-500 text-sm">Tap on each milestone to learn more.</p>
      </div>
    </div>
  );
}
