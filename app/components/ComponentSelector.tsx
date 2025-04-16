import React, { useRef, useEffect } from 'react';
import { ComponentType } from '../data/components';

interface ComponentSelectorProps {
  selectedType: ComponentType;
  onSelect: (type: ComponentType) => void;
  className?: string;
}

const types: { type: ComponentType; label: string }[] = [
  { type: 'all', label: 'All Components' },
  { type: 'navbar', label: 'Navigation' },
  { type: 'hero', label: 'Hero Sections' },
  { type: 'about', label: 'About Us' },
  { type: 'contact', label: 'Contact' },
  { type: 'footer', label: 'Footer' },
  // { type: 'testimonials', label: 'Testimonials' },
  // { type: 'pricing', label: 'Pricing' },
  // { type: 'faq', label: 'FAQs' },
  // { type: 'cta', label: 'Call to Action' },
  // { type: 'features', label: 'Features' },
  // { type: 'gallery', label: 'Gallery' },
  // { type: 'stats', label: 'Statistics' },
];

const ComponentSelector: React.FC<ComponentSelectorProps> = ({ selectedType, onSelect, className = '' }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const showScrollButtons = types.length > 12;

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 200;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  // Enable horizontal scrolling with vertical mouse wheel
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const onWheel = (e: WheelEvent) => {
      if (e.deltaY === 0) return;
      e.preventDefault();
      el.scrollBy({
        left: e.deltaY,
      });
    };

    el.addEventListener('wheel', onWheel, { passive: false });
    return () => el.removeEventListener('wheel', onWheel);
  }, []);

  return (
    <div className="relative mt-16 md:mt-5">
      {showScrollButtons && (
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white border rounded-full shadow md:block hidden"
        >
          ◀
        </button>
      )}

      <div
        ref={scrollRef}
        className={`flex gap-2 overflow-x-auto scrollbar-hide max-w-7xl mx-auto ${className}`}
      >
        {types.map(({ type, label }) => (
          <button
            key={type}
            onClick={() => onSelect(type)}
            className={`flex-shrink-0 px-4 py-2 rounded-lg font-medium transition-all duration-200 whitespace-nowrap ${
              selectedType === type
                ? 'bg-purple-600 text-white'
                : 'bg-purple-600 hover:bg-purple-400 text-white'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {showScrollButtons && (
        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white border rounded-full shadow md:block hidden"
        >
          ▶
        </button>
      )}
    </div>
  );
};

export default ComponentSelector;
