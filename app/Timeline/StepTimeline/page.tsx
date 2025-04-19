'use client';

import { useState, useRef, useEffect, JSX } from 'react';
import { Rocket, Star, Users, Globe, DollarSign, Shield } from 'lucide-react';

interface Step {
  id: number;
  title: string;
  subtitle: string;
  icon: JSX.Element;
}

const steps: Step[] = [
  { id: 1, title: 'Launch', subtitle: 'Kickstarted in 2018', icon: <Rocket size={20} /> },
  { id: 2, title: 'Team Built', subtitle: 'First hires in 2019', icon: <Users size={20} /> },
  { id: 3, title: 'Product Shipped', subtitle: 'Live in 2020', icon: <Star size={20} /> },
  { id: 4, title: 'Secured Funding', subtitle: 'Raised $5M in 2021', icon: <DollarSign size={20} /> },
  { id: 5, title: 'Global Reach', subtitle: 'Expanded in 2022', icon: <Globe size={20} /> },
  { id: 6, title: 'Trusted Brand', subtitle: '100K+ users in 2023', icon: <Shield size={20} /> },
];

export default function StepTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(1);

  const scrollToStep = (id: number) => {
    const el = document.getElementById(`step-${id}`);
    if (el && containerRef.current) {
      const offset = el.offsetLeft - containerRef.current.offsetWidth / 2 + el.offsetWidth / 2;
      containerRef.current.scrollTo({ left: offset, behavior: 'smooth' });
    }
    setActiveStep(id);
  };

  useEffect(() => {
    scrollToStep(activeStep);
  }, []);

  return (
    <div className="bg-neutral-950 text-white min-h-screen py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Our Startup Journey</h2>

        <div
          ref={containerRef}
          className="flex overflow-x-auto space-x-8 hide-scrollbar snap-x snap-mandatory pb-10 px-2"
        >
          {steps.map((step) => (
            <div
              id={`step-${step.id}`}
              key={step.id}
              onClick={() => scrollToStep(step.id)}
              className={`snap-center min-w-[260px] bg-neutral-900 border border-neutral-700 rounded-xl p-6 cursor-pointer transition-all duration-300 flex-shrink-0 ${
                activeStep === step.id ? 'border-yellow-400 ring-2 ring-yellow-300' : 'hover:border-yellow-400'
              }`}
            >
              <div className="flex items-center mb-4">
                <div
                  className={`w-10 h-10 flex items-center justify-center rounded-full ${
                    activeStep === step.id ? 'bg-yellow-300 text-black' : 'bg-gray-800 text-yellow-300'
                  }`}
                >
                  {step.icon}
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-bold">{step.title}</h4>
                  <p className="text-gray-400 text-sm">{step.subtitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-gray-500">Tap on a step to highlight and scroll into view.</p>

        <style jsx>{`
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </div>
    </div>
  );
}
