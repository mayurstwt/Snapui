import React from 'react';
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
];

const ComponentSelector: React.FC<ComponentSelectorProps> = ({ selectedType, onSelect, className = '' }) => {
  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {types.map(({ type, label }) => (
        <button
          key={type}
          onClick={() => onSelect(type)}
          className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
            selectedType === type
              ? 'bg-indigo-600 text-white'
              : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
          } ${className.includes('flex-col') ? 'w-full text-left' : ''}`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}

export default ComponentSelector;