"use client";

import {
  Plane,
  Map,
  Compass,
  Mountain,
  Hotel,
  Camera,
  Globe,
  Palmtree,
  LucideIcon,
} from "lucide-react";

const TravelBento = () => {
  return (
    <div className="relative py-16 bg-gradient-to-b from-sky-50 to-blue-100 text-slate-800 overflow-hidden">
      {/* Map Lines Background */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M 100 0 L 0 0 0 100" fill="none" stroke="black" strokeWidth="1"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto px-4">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-blue-900">
            Travel & Adventure
          </h1>
          <p className="text-xl text-blue-800/80 max-w-2xl mx-auto">
            Explore breathtaking destinations and create unforgettable memories around the world.
          </p>
        </header>

        <div className="grid grid-cols-4 md:grid-cols-12 gap-4 mb-8">
          <TravelCard colSpan="col-span-4 md:col-span-8" rowSpan="row-span-2" accentColor="from-blue-600 to-cyan-500">
            <img
              src="https://res.cloudinary.com/damr9jzpb/image/upload/v1740925617/66fedc3fd1f116089b632302_hero-img_oh0pmp.webp"
              alt="Scenic beach view"
              className="w-full h-full object-cover rounded-xl"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent rounded-b-xl">
              <span className="px-2 py-1 bg-yellow-400 text-yellow-900 rounded text-xs font-semibold mb-2 inline-block">FEATURED DESTINATION</span>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-1">Bali, Indonesia</h2>
              <p className="text-white/80">Paradise island with stunning beaches and rich cultural heritage</p>
            </div>
          </TravelCard>

          <TravelCard colSpan="col-span-4 md:col-span-4" accentColor="from-blue-500 to-sky-400">
            <TravelCardContent
              icon={Globe}
              title="Popular Destinations"
              description="Discover the most sought-after locations that travelers are flocking to this season."
            />
          </TravelCard>

          <TravelCard colSpan="col-span-2 md:col-span-2" accentColor="from-cyan-500 to-teal-400">
            <div className="flex flex-col items-center justify-center h-full text-center p-4">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-2">
                <Plane className="w-6 h-6 text-blue-600" />
              </div>
              <p className="text-sm text-blue-800 font-medium">Flights</p>
              <p className="text-xl font-bold text-blue-900">1,249</p>
              <p className="text-xs text-blue-600">available today</p>
            </div>
          </TravelCard>

          <TravelCard colSpan="col-span-2 md:col-span-2" accentColor="from-blue-500 to-sky-400">
            <div className="flex flex-col items-center justify-center h-full text-center p-4">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-2">
                <Hotel className="w-6 h-6 text-blue-600" />
              </div>
              <p className="text-sm text-blue-800 font-medium">Hotels</p>
              <p className="text-xl font-bold text-blue-900">3,780</p>
              <p className="text-xs text-blue-600">with availability</p>
            </div>
          </TravelCard>

          <TravelCard colSpan="col-span-4 md:col-span-12" height="h-24" accentColor="from-blue-600 to-cyan-600">
            <div className="flex items-center justify-between h-full px-6">
              <p className="text-lg font-medium text-white">Ready for your next adventure? <span className="font-bold">Get 15% off</span> when you book today!</p>
              <button className="px-4 py-2 bg-yellow-400 text-yellow-900 rounded-lg font-medium hover:bg-yellow-300 transition-colors">
                Explore Deals
              </button>
            </div>
          </TravelCard>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <TravelCard accentColor="from-cyan-500 to-teal-400">
            <TravelCardContent
              icon={Map}
              title="Travel Guides"
              description="Expert recommendations and insider tips for must-visit attractions."
            />
          </TravelCard>

          <TravelCard accentColor="from-blue-500 to-indigo-400">
            <TravelCardContent
              icon={Compass}
              title="Adventure Tours"
              description="Thrilling experiences for the daring explorer in unique destinations."
            />
          </TravelCard>

          <TravelCard accentColor="from-sky-500 to-blue-400">
            <TravelCardContent
              icon={Camera}
              title="Photography Spots"
              description="Capture breathtaking moments at these picturesque locations."
            />
          </TravelCard>

          <TravelCard accentColor="from-teal-500 to-green-400">
            <TravelCardContent
              icon={Palmtree}
              title="Beach Getaways"
              description="Relax and unwind at these stunning coastal paradises."
            />
          </TravelCard>

          <TravelCard colSpan="md:col-span-4" height="h-64" accentColor="from-blue-600 to-cyan-500">
            <div className="grid md:grid-cols-3 h-full">
              <div className="p-6 flex flex-col justify-center md:col-span-2">
                <h3 className="text-2xl font-bold text-white mb-2">Travel Journal</h3>
                <p className="text-white/90 mb-4">Share your adventures and connect with fellow travelers from around the globe.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm text-white">#Mountains</span>
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm text-white">#BeachLife</span>
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm text-white">#CityEscape</span>
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm text-white">#RoadTrip</span>
                </div>
              </div>
              <div className="hidden md:flex items-center justify-center">
                <Mountain className="w-24 h-24 text-white/30" />
              </div>
            </div>
          </TravelCard>
        </div>
      </div>
    </div>
  );
};

export default TravelBento;

// --------------------- COMPONENTS ------------------------

interface TravelCardProps {
  children: React.ReactNode;
  className?: string;
  colSpan?: string;
  rowSpan?: string;
  height?: string;
  accentColor?: string;
}

const TravelCard = ({ 
  children, 
  className = "", 
  colSpan = "", 
  rowSpan = "", 
  height = "min-h-48", 
  accentColor = "from-blue-500 to-sky-400" 
}: TravelCardProps) => {
  return (
    <div
      className={`
        relative group rounded-xl overflow-hidden transition-all duration-300
        hover:shadow-lg hover:shadow-blue-900/10
        ${accentColor.includes("from") ? `bg-gradient-to-br ${accentColor}` : "bg-white"}
        ${height} ${colSpan} ${rowSpan} ${className}
      `}
    >
      {children}
    </div>
  );
};

interface TravelCardContentProps {
  icon?: LucideIcon;
  title?: string;
  description?: string;
  value?: string | number;
  label?: string;
}

const TravelCardContent = ({
  icon: Icon,
  title,
  description,
  value,
  label,
}: TravelCardContentProps) => {
  return (
    <div className="flex flex-col gap-3 p-6 h-full">
      <div className="flex justify-between items-start">
        {title && <h3 className="text-xl font-medium text-white">{title}</h3>}

        {Icon && (
          <div className="p-2 w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
            <Icon className="w-5 h-5 text-white" />
          </div>
        )}
      </div>
      
      {description && (
        <p className="text-sm text-white/80">{description}</p>
      )}

      {value && label && (
        <div className="mt-auto">
          <p className="text-2xl font-bold text-white">{value}</p>
          <p className="text-sm text-white/70">{label}</p>
        </div>
      )}
    </div>
  );
};