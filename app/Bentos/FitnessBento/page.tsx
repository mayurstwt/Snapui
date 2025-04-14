"use client";

import {
  Dumbbell,
  Heart,
  Apple,
  Clock,
  Timer,
  Flame,
  Medal,
  LucideIcon,
} from "lucide-react";

const FitnessBento = () => {
  return (
    <div className="relative py-16 bg-white text-gray-900 overflow-hidden">
      {/* Pattern Background */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern id="pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <rect x="0" y="0" width="4" height="4" fill="currentColor" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#pattern)" />
        </svg>
      </div>
      
      <div className="max-w-6xl mx-auto px-4">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Fitness & Wellness
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Achieve your health goals with personalized workouts, nutrition plans, and wellness practices.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-10 gap-5 mb-8">
          <FitnessCard colSpan="md:col-span-6" rowSpan="md:row-span-3" accentColor="bg-rose-500">
            <div className="absolute inset-0 overflow-hidden rounded-2xl">
              <img
                src="/api/placeholder/600/800"
                alt="Person working out"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-rose-900/80 to-transparent"></div>
            </div>
            
            <div className="relative h-full flex flex-col justify-end p-6 text-white">
              <div className="p-2 bg-rose-500 w-fit rounded-lg mb-4">
                <Flame className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-bold mb-2">Daily Challenge</h2>
              <p className="text-xl font-light mb-4">Complete 30 minutes of high-intensity interval training</p>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-full h-2 bg-white/30 rounded-full overflow-hidden">
                  <div className="h-full w-3/4 bg-white"></div>
                </div>
                <span className="font-medium">75%</span>
              </div>
              <button className="mt-4 px-6 py-3 bg-white text-rose-600 rounded-xl font-bold hover:bg-gray-100 transition-colors">
                Start Challenge
              </button>
            </div>
          </FitnessCard>

          <FitnessCard colSpan="md:col-span-4" bgColor="bg-amber-50" accentColor="bg-amber-500">
            <FitnessCardContent
              icon={Apple}
              title="Nutrition Tracking"
              description="Keep track of your daily calories, macros and water intake to fuel your body optimally."
            />
          </FitnessCard>

          <FitnessCard colSpan="md:col-span-2" bgColor="bg-blue-50" accentColor="bg-blue-500" className="p-0">
            <div className="flex flex-col h-full">
              <div className="flex-grow flex flex-col items-center justify-center p-4">
                <div className="w-16 h-16 rounded-full border-4 border-blue-200 flex items-center justify-center mb-2">
                  <Heart className="w-8 h-8 text-blue-500" />
                </div>
                <p className="text-lg font-bold text-blue-900">Heart Rate</p>
                <p className="text-3xl font-bold text-blue-500">78 BPM</p>
              </div>
              <div className="h-8 bg-blue-500"></div>
            </div>
          </FitnessCard>

          <FitnessCard colSpan="md:col-span-2" bgColor="bg-green-50" accentColor="bg-green-500" className="p-0">
            <div className="flex flex-col h-full">
              <div className="flex-grow flex flex-col items-center justify-center p-4">
                <div className="w-16 h-16 rounded-full border-4 border-green-200 flex items-center justify-center mb-2">
                  <Clock className="w-8 h-8 text-green-500" />
                </div>
                <p className="text-lg font-bold text-green-900">Sleep</p>
                <p className="text-3xl font-bold text-green-500">7.5 hrs</p>
              </div>
              <div className="h-8 bg-green-500"></div>
            </div>
          </FitnessCard>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          <FitnessCard height="h-36" bgColor="bg-gray-100" accentColor="bg-gray-600">
            <div className="flex items-center justify-between h-full p-6">
              <div>
                <p className="text-sm text-gray-500 uppercase font-medium">Weekly Progress</p>
                <p className="text-2xl font-bold text-gray-900">5 of 7 days</p>
              </div>
              <div className="w-16 h-16 rounded-full border-4 border-gray-200 flex items-center justify-center">
                <div className="relative w-12 h-12">
                  <svg viewBox="0 0 36 36" className="w-12 h-12">
                    <path
                      d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#e5e5e5"
                      strokeWidth="3"
                    />
                    <path
                      d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#4b5563"
                      strokeWidth="3"
                      strokeDasharray="75, 100"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-bold text-gray-900">75%</span>
                  </div>
                </div>
              </div>
            </div>
          </FitnessCard>

          <FitnessCard height="h-36" bgColor="bg-indigo-50" accentColor="bg-indigo-500">
            <div className="flex justify-between items-center h-full p-6">
              <div>
                <p className="text-sm text-indigo-600 uppercase font-medium">Calories</p>
                <p className="text-2xl font-bold text-indigo-900">1,248</p>
                <p className="text-sm text-indigo-600">burned today</p>
              </div>
              <div className="p-3 bg-indigo-500 rounded-xl">
                <Flame className="w-8 h-8 text-white" />
              </div>
            </div>
          </FitnessCard>

          <FitnessCard height="h-36" bgColor="bg-rose-50" accentColor="bg-rose-500">
            <div className="flex justify-between items-center h-full p-6">
              <div>
                <p className="text-sm text-rose-600 uppercase font-medium">Steps</p>
                <p className="text-2xl font-bold text-rose-900">8,243</p>
                <p className="text-sm text-rose-600">of 10,000 goal</p>
              </div>
              <div className="p-3 bg-rose-500 rounded-xl">
                <Timer className="w-8 h-8 text-white" />
              </div>
            </div>
          </FitnessCard>

          <FitnessCard height="h-36" bgColor="bg-amber-50" accentColor="bg-amber-500">
            <div className="flex justify-between items-center h-full p-6">
              <div>
                <p className="text-sm text-amber-600 uppercase font-medium">Workouts</p>
                <p className="text-2xl font-bold text-amber-900">12</p>
                <p className="text-sm text-amber-600">this week</p>
              </div>
              <div className="p-3 bg-amber-500 rounded-xl">
                <Dumbbell className="w-8 h-8 text-white" />
              </div>
            </div>
          </FitnessCard>

          <FitnessCard colSpan="md:col-span-2" bgColor="bg-purple-50" accentColor="bg-purple-500">
            <FitnessCardContent
              icon={Medal}
              title="Mindfulness"
              description="Reduce stress and improve focus with guided meditation and breathing exercises."
            />
          </FitnessCard>

          <FitnessCard colSpan="md:col-span-2" bgColor="bg-teal-50" accentColor="bg-teal-500">
            <FitnessCardContent
              icon={Medal}
              title="Achievement"
              description="You've completed 14 workouts this month, placing you in the top 10% of users!"
            />
          </FitnessCard>

          <FitnessCard colSpan="md:col-span-4" height="h-40" bgColor="bg-gradient-to-r from-indigo-500 to-purple-500">
            <div className="h-full flex items-center p-6 text-white">
              <div className="flex-grow">
                <p className="text-white/80 font-medium mb-1">PREMIUM FEATURE</p>
                <h3 className="text-xl font-bold mb-2">Personalized Training Plan</h3>
                <p className="text-white/90">Get a custom workout routine tailored to your goals, fitness level, and available equipment.</p>
              </div>
              <button className="px-5 py-3 bg-white text-indigo-600 rounded-xl font-bold hover:bg-gray-100 transition-colors whitespace-nowrap">
                Unlock Now
              </button>
            </div>
          </FitnessCard>
        </div>
      </div>
    </div>
  );
};

export default FitnessBento;

// --------------------- COMPONENTS ------------------------

interface FitnessCardProps {
  children: React.ReactNode;
  className?: string;
  colSpan?: string;
  rowSpan?: string;
  height?: string;
  bgColor?: string;
  accentColor?: string;
}

const FitnessCard = ({ 
  children, 
  className = "", 
  colSpan = "", 
  rowSpan = "", 
  height = "min-h-52", 
  bgColor = "bg-white", 
  accentColor = "bg-gray-900" 
}: FitnessCardProps) => {
  return (
    <div
      className={`
        relative group rounded-2xl overflow-hidden transition-all duration-300
        shadow-sm hover:shadow-lg border border-gray-100
        ${bgColor}
        ${height} ${colSpan} ${rowSpan} ${className}
      `}
    >
      {children}
    </div>
  );
};

interface FitnessCardContentProps {
  icon?: LucideIcon;
  title?: string;
  description?: string;
  value?: string | number;
  label?: string;
}

const FitnessCardContent = ({
  icon: Icon,
  title,
  description,
  value,
  label,
}: FitnessCardContentProps) => {
  return (
    <div className="flex flex-col gap-3 p-6 h-full">
      <div className="flex justify-between items-start">
        {title && <h3 className="text-xl font-bold text-gray-900">{title}</h3>}

        {Icon && (
          <div className="p-2 w-10 h-10 rounded-lg bg-indigo-500 flex items-center justify-center">
            <Icon className="w-5 h-5 text-white" />
          </div>
        )}
      </div>
      
      {description && (
        <p className="text-gray-600">{description}</p>
      )}

      {value && label && (
        <div className="mt-auto">
          <p className="text-2xl font-bold text-gray-900">{value}</p>
          <p className="text-sm text-gray-500">{label}</p>
        </div>
      )}
    </div>
  );
};