
"use client"

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import ComponentCard from '../../components/ComponentCard';
import ComponentSelector from '../../components/ComponentSelector';
import { ComponentType, components } from '../../data/components';

function Components() {
  const [selectedType, setSelectedType] = useState<ComponentType>('all');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const getAllComponents = () => {
    if (selectedType === 'all') {
      return Object.values(components).flat();
    }
    return components[selectedType];
  };

  return (
    <div className="min-h-screen text-gray-100 font-poppins relative  bg-gradient-to-b from-black via-purple-900 to-black">
      {/* Header */}
      <header className=" fixed top-0 w-full z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button 
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="md:hidden text-indigo-400 hover:text-indigo-300 transition-colors absolute right-[9.5rem] top-8">
              {isSidebarOpen ? <X className="w-6 h-6 text-purple-600" /> : <Menu className="text-purple-600 w-6 h-6" />}
            </button>
            <div className="w-6 md:hidden" /> 
          </div>
        </div>
      </header>

      {/* Mobile Sidebar */}
      <div 
        className={`md:hidden fixed inset-y-0 left-0 transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } w-64 bg-black/80 backdrop-blur-sm p-6 transition-transform duration-200 ease-in-out z-40 border-r border-gray-800/30`}
      >
        <div className="mt-14">
          <ComponentSelector 
            selectedType={selectedType} 
            onSelect={(type) => {
              setSelectedType(type);
              setIsSidebarOpen(false);
            }}
            className="flex-col"
          />
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 pt-28 pb-12">
        {/* Desktop Component Selector */}
        <div className="hidden md:block">
          <ComponentSelector 
            selectedType={selectedType} 
            onSelect={setSelectedType}
          />
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
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
      </main>

      {/* Overlay for mobile sidebar */}
      {isSidebarOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-30"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  );
}

export default Components;