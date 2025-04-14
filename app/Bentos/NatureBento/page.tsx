"use client";

import {
  Leaf,
  Droplets,
  Wind,
  Sun,
  Compass,
  Mountain,
  TreePine,
  Bird,
  LucideIcon,
} from "lucide-react";

const NatureBento = () => {
  return (
    <div className="relative py-16 bg-green-950 text-green-50 overflow-hidden">
      {/* Organic Pattern Background */}
      <div className="absolute inset-0 opacity-10 mix-blend-soft-light">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <defs>
            <pattern id="leaves" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M25,0 C35,15 35,35 25,50 C15,35 15,15 25,0" fill="currentColor"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#leaves)"/>
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto px-4">
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-emerald-400">
            Nature & Sustainability
          </h1>
          <p className="text-xl text-green-200/90 max-w-2xl mx-auto">
            Explore the beauty of our natural world and initiatives to preserve it for future generations.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-6 gap-6 mb-12">
          <NatureCard colSpan="sm:col-span-4" rowSpan="sm:row-span-2" gradient="from-green-800/40 to-green-600/40">
            <img
              src="/api/placeholder/800/600"
              alt="Lush forest landscape"
              className="w-full h-full object-cover rounded-xl"
            />
          </NatureCard>

          <NatureCard colSpan="sm:col-span-2" gradient="from-emerald-700/40 to-emerald-500/40">
            <NatureCardContent
              icon={TreePine}
              title="Forest Conservation"
              description="Protecting vital ecosystems and promoting biodiversity through sustainable forest management."
            />
          </NatureCard>

          <NatureCard colSpan="sm:col-span-2" gradient="from-teal-700/40 to-teal-500/40">
            <NatureCardContent
              icon={Droplets}
              title="Water Preservation"
              description="Safeguarding our freshwater resources for generations to come."
            />
          </NatureCard>

          <NatureCard colSpan="sm:col-span-6" height="h-40" gradient="from-green-900/30 to-emerald-800/30">
            <div className="flex items-center justify-between h-full px-4">
              <div className="flex gap-8 items-center">
                <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center">
                  <Leaf className="w-8 h-8 text-green-300" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold">73%</h3>
                  <p className="text-green-300/80">of Earth's surface has been altered by humans</p>
                </div>
              </div>
              <div className="flex gap-8 items-center">
                <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center">
                  <Mountain className="w-8 h-8 text-green-300" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold">15%</h3>
                  <p className="text-green-300/80">of land is formally protected worldwide</p>
                </div>
              </div>
            </div>
          </NatureCard>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <NatureCard gradient="from-emerald-800/40 to-green-700/40">
            <NatureCardContent
              icon={Sun}
              title="Renewable Energy"
              description="Harnessing the sun, wind, and water to power a sustainable future."
            />
          </NatureCard>

          <NatureCard gradient="from-green-700/40 to-teal-600/40">
            <NatureCardContent
              icon={Wind}
              title="Climate Action"
              description="Taking urgent steps to combat climate change and its impacts."
            />
          </NatureCard>

          <NatureCard gradient="from-teal-800/40 to-emerald-700/40">
            <NatureCardContent
              icon={Bird}
              title="Wildlife Protection"
              description="Safeguarding endangered species and their natural habitats."
            />
          </NatureCard>

          <NatureCard colSpan="sm:col-span-3" height="h-64" gradient="from-green-800/30 to-green-600/30">
            <div className="h-full flex flex-col justify-center items-center text-center px-6">
              <p className="text-xl italic text-green-100 mb-6 max-w-2xl">
                "The Earth does not belong to us: we belong to the Earth. What we do to the Earth, we do to ourselves."
              </p>
              <div className="flex items-center gap-4">
                <img src="/api/placeholder/80/80" className="w-12 h-12 rounded-full object-cover" alt="Profile" />
                <div>
                  <p className="font-bold text-green-100">Dr. Jane Reynolds</p>
                  <p className="text-sm text-green-300/80">Environmental Scientist</p>
                </div>
              </div>
            </div>
          </NatureCard>
        </div>
      </div>
    </div>
  );
};

export default NatureBento;

// --------------------- COMPONENTS ------------------------

interface NatureCardProps {
  children: React.ReactNode;
  className?: string;
  colSpan?: string;
  rowSpan?: string;
  height?: string;
  gradient?: string;
}

const NatureCard = ({ 
  children, 
  className, 
  colSpan = "", 
  rowSpan = "", 
  height = "min-h-64", 
  gradient 
}: NatureCardProps) => {
  return (
    <div
      className={`
        relative group rounded-2xl overflow-hidden transition-all duration-300
        backdrop-blur-sm border border-green-400/20 hover:border-green-400/30
        bg-green-900/20 hover:bg-green-900/30 hover:shadow-lg hover:shadow-green-900/20
        ${height} ${colSpan} ${rowSpan} ${className}
      `}
      style={{
        backgroundImage: gradient ? `linear-gradient(to right bottom, ${gradient})` : undefined,
      }}
    >
      {children}
    </div>
  );
};

interface NatureCardContentProps {
  icon?: LucideIcon;
  title?: string;
  description?: string;
  value?: string | number;
  label?: string;
}

const NatureCardContent = ({
  icon: Icon,
  title,
  description,
  value,
  label,
}: NatureCardContentProps) => {
  return (
    <div className="flex flex-col gap-3 p-6 h-full">
      <div className="flex justify-between items-start">
        {title && <h3 className="text-xl font-medium text-green-50">{title}</h3>}

        {Icon && (
          <div className="p-2 w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
            <Icon className="w-5 h-5 text-green-300" />
          </div>
        )}
      </div>
      
      {description && (
        <p className="text-sm text-green-200/90">{description}</p>
      )}

      {value && label && (
        <div className="mt-auto">
          <p className="text-3xl font-bold text-green-50">{value}</p>
          <p className="text-sm text-green-200/80">{label}</p>
        </div>
      )}
    </div>
  );
};