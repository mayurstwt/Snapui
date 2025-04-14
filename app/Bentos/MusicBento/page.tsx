"use client";

import {
  Music,
  Mic,
  Radio,
  Headphones,
  PlayCircle,
  Settings,
  Album,
  ListMusic,
  LucideIcon,
} from "lucide-react";

const MusicBento = () => {
  return (
    <div className="relative py-16 bg-slate-900 text-white overflow-hidden">
      {/* Sound Wave Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern id="wave" x="0" y="0" width="100" height="20" patternUnits="userSpaceOnUse">
            <path d="M0 10 Q 25 20, 50 10 T 100 10" stroke="white" fill="none" />
          </pattern>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#wave)" />
        </svg>
      </div>
      
      <div className="max-w-6xl mx-auto px-4">
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
            Music Exploration
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover, create, and connect through the universal language of sound.
          </p>
        </header>

        <div className="grid grid-cols-2 md:grid-cols-6 gap-4 md:gap-6 mb-8">
          <MusicCard colSpan="col-span-2 md:col-span-3" rowSpan="md:row-span-3" bgColor="bg-gradient-to-br from-purple-900/70 to-purple-600/50">
            <div className="absolute inset-0 flex items-center justify-center">
              <img 
                src="/api/placeholder/500/500" 
                alt="Album artwork" 
                className="w-full h-full object-cover opacity-60"
              />
            </div>
            <div className="relative z-10 h-full flex flex-col justify-end p-6">
              <span className="px-2 py-1 bg-pink-500/80 rounded-md text-xs font-medium inline-block w-fit mb-4">NOW PLAYING</span>
              <h3 className="text-2xl md:text-3xl font-bold mb-1">Midnight Echoes</h3>
              <p className="text-gray-300 mb-4">The Crystal Visions</p>
              <div className="flex items-center gap-3">
                <button className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md">
                  <PlayCircle className="w-8 h-8 text-white" />
                </button>
                <div className="h-1 bg-gray-700 flex-grow rounded-full overflow-hidden">
                  <div className="h-full w-2/3 bg-gradient-to-r from-purple-500 to-pink-500"></div>
                </div>
                <span className="text-sm text-gray-400">2:18</span>
              </div>
            </div>
          </MusicCard>

          <MusicCard colSpan="col-span-2 md:col-span-3" bgColor="bg-pink-900/40">
            <MusicCardContent
              icon={Headphones}
              title="Discover Weekly"
              description="Your personalized playlist of fresh discoveries and forgotten favorites, updated every Monday."
            />
          </MusicCard>

          <MusicCard colSpan="col-span-1 py-2 md:row-span-2 md:col-span-1" height="h-28 md:h-full" bgColor="bg-purple-800/30">
            <div className="flex flex-col items-center justify-center h-full">
              <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center">
                <Album className="w-6 h-6 text-purple-300" />
              </div>
              <p className="text-gray-300 text-sm mt-2">Albums</p>
              <p className="text-xl font-bold">238</p>
            </div>
          </MusicCard>

          <MusicCard colSpan="col-span-1 py-2 md:row-span-2 md:col-span-1" height="h-28 md:h-full" bgColor="bg-pink-800/30">
            <div className="flex flex-col items-center justify-center h-full">
              <div className="w-12 h-12 rounded-full bg-pink-500/20 flex items-center justify-center">
                <Music className="w-6 h-6 text-pink-300" />
              </div>
              <p className="text-gray-300 text-sm mt-2">Songs</p>
              <p className="text-xl font-bold">3.4K</p>
            </div>
          </MusicCard>

          <MusicCard colSpan="col-span-1 py-2 md:row-span-2 md:col-span-1" height="h-28 md:h-full" bgColor="bg-indigo-800/30">
            <div className="flex flex-col items-center justify-center h-full">
              <div className="w-12 h-12 rounded-full bg-indigo-500/20 flex items-center justify-center">
                <Mic className="w-6 h-6 text-indigo-300" />
              </div>
              <p className="text-gray-300 text-sm mt-2">Artists</p>
              <p className="text-xl font-bold">412</p>
            </div>
          </MusicCard>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          <MusicCard bgColor="bg-indigo-900/40">
            <MusicCardContent
              icon={Radio}
              title="Live Radio"
              description="Tune in to curated stations featuring the best new music from around the globe."
            />
          </MusicCard>

          <MusicCard bgColor="bg-purple-900/40">
            <MusicCardContent
              icon={ListMusic}
              title="Your Playlists"
              description="Access your carefully crafted collections for every mood and moment."
            />
          </MusicCard>

          <MusicCard bgColor="bg-pink-900/40">
            <MusicCardContent
              icon={Settings}
              title="Sound Settings"
              description="Customize your audio experience with equalizer and spatial sound options."
            />
          </MusicCard>

          <MusicCard colSpan="md:col-span-3" height="h-32" bgColor="bg-gradient-to-r from-purple-900/40 to-pink-900/40">
            <div className="h-full flex items-center justify-between px-6">
              <div className="flex items-center gap-4">
                <img src="/api/placeholder/60/60" className="w-16 h-16 rounded-md object-cover" alt="Album cover" />
                <div>
                  <p className="font-medium text-sm text-gray-400">RECENTLY PLAYED</p>
                  <p className="font-bold">Quantum Harmonies</p>
                  <p className="text-sm text-gray-300">Stellar Vibrations</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <PlayCircle className="w-6 h-6 text-white" />
                </button>
                <button className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-medium">
                  Add to Library
                </button>
              </div>
            </div>
          </MusicCard>
        </div>
      </div>
    </div>
  );
};

export default MusicBento;

// --------------------- COMPONENTS ------------------------

interface MusicCardProps {
  children: React.ReactNode;
  className?: string;
  colSpan?: string;
  rowSpan?: string;
  height?: string;
  bgColor?: string;
}

const MusicCard = ({ 
  children, 
  className = "", 
  colSpan = "", 
  rowSpan = "", 
  height = "min-h-48", 
  bgColor = "bg-slate-800/50" 
}: MusicCardProps) => {
  return (
    <div
      className={`
        relative group rounded-xl overflow-hidden transition-all duration-300
        border border-gray-700 hover:border-gray-600
        ${bgColor} backdrop-blur-sm
        ${height} ${colSpan} ${rowSpan} ${className}
      `}
    >
      {children}
    </div>
  );
};

interface MusicCardContentProps {
  icon?: LucideIcon;
  title?: string;
  description?: string;
  value?: string | number;
  label?: string;
}

const MusicCardContent = ({
  icon: Icon,
  title,
  description,
  value,
  label,
}: MusicCardContentProps) => {
  return (
    <div className="flex flex-col gap-3 p-6 h-full">
      <div className="flex justify-between items-start">
        {title && <h3 className="text-xl font-medium text-white">{title}</h3>}

        {Icon && (
          <div className="p-2 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
            <Icon className="w-5 h-5 text-gray-200" />
          </div>
        )}
      </div>
      
      {description && (
        <p className="text-sm text-gray-300">{description}</p>
      )}

      {value && label && (
        <div className="mt-auto">
          <p className="text-2xl font-bold text-white">{value}</p>
          <p className="text-sm text-gray-400">{label}</p>
        </div>
      )}
    </div>
  );
};