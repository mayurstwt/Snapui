"use client";

import {
  UtensilsCrossed,
  Coffee,
  ChefHat,
  Wine,
  Apple,
  Pizza,
  Soup,
  Cookie,
  LucideIcon,
} from "lucide-react";

const CulinaryBento = () => {
  return (
    <div className="relative py-16 bg-amber-50 text-amber-950 overflow-hidden">
      {/* Texture Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='1'/%3E%3Ccircle cx='13' cy='13' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4">
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-amber-900">
            Culinary Experiences
          </h1>
          <p className="text-xl text-amber-800/90 max-w-2xl mx-auto font-light">
            Discover the art of gastronomy through flavors, techniques, and cultural traditions.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-10">
          <CulinaryCard colSpan="md:col-span-5" rowSpan="md:row-span-2" bgColor="bg-amber-200/40">
            <img
              src="/api/placeholder/500/600"
              alt="Gourmet dish presentation"
              className="w-full h-full object-cover rounded-xl"
            />
          </CulinaryCard>

          <CulinaryCard colSpan="md:col-span-7" bgColor="bg-red-100/60">
            <CulinaryCardContent
              icon={ChefHat}
              title="The Art of Cooking"
              description="Explore culinary techniques that transform ingredients into extraordinary dishes. Master the fundamentals that professional chefs use every day."
            />
          </CulinaryCard>

          <CulinaryCard colSpan="md:col-span-3" bgColor="bg-amber-100/60">
            <CulinaryCardContent
              icon={Coffee}
              title="Coffee Culture"
              description="From bean to cup: the journey of exceptional coffee."
            />
          </CulinaryCard>

          <CulinaryCard colSpan="md:col-span-4" bgColor="bg-orange-100/60">
            <CulinaryCardContent
              icon={Wine}
              title="Wine Pairing"
              description="Discover the perfect wine companions for any cuisine."
            />
          </CulinaryCard>

          <CulinaryCard colSpan="md:col-span-8" rowSpan="md:row-span-2" bgColor="bg-amber-100/50" className="p-0 overflow-hidden">
            <div className="grid md:grid-cols-2 h-full">
              <div className="p-8 flex flex-col justify-center">
                <h3 className="text-2xl font-serif mb-4 text-amber-900">Global Flavors</h3>
                <p className="text-amber-800/90 mb-6">Embark on a culinary journey across continents, exploring the unique ingredients and cooking methods that define each region's cuisine.</p>
                <div className="flex gap-4">
                  <span className="px-3 py-1 bg-amber-200/60 rounded-full text-sm font-medium text-amber-900">Asian</span>
                  <span className="px-3 py-1 bg-amber-200/60 rounded-full text-sm font-medium text-amber-900">Mediterranean</span>
                  <span className="px-3 py-1 bg-amber-200/60 rounded-full text-sm font-medium text-amber-900">Latin</span>
                </div>
              </div>
              <div className="bg-amber-200 flex items-center justify-center">
                <img src="/api/placeholder/400/400" alt="Global cuisine" className="w-4/5 h-4/5 object-cover rounded-lg shadow-lg" />
              </div>
            </div>
          </CulinaryCard>

          <CulinaryCard colSpan="md:col-span-4 md:row-span-2" bgColor="bg-yellow-100/60">
            <CulinaryCardContent
              value="87%"
              label="of chefs consider local sourcing important"
              icon={Apple}
            />
          </CulinaryCard>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <CulinaryCard bgColor="bg-red-100/50">
            <CulinaryCardContent
              icon={Pizza}
              title="Artisan Baking"
              description="The science and art behind perfect breads and pastries."
            />
          </CulinaryCard>

          <CulinaryCard bgColor="bg-green-100/50">
            <CulinaryCardContent
              icon={Soup}
              title="Sustainable Cooking"
              description="Reduce waste and maximize flavor with eco-conscious techniques."
            />
          </CulinaryCard>

          <CulinaryCard bgColor="bg-amber-100/50">
            <CulinaryCardContent
              icon={Cookie}
              title="Sweet Creations"
              description="Master the delicate art of dessert making and patisserie."
            />
          </CulinaryCard>
        </div>
      </div>
    </div>
  );
};

export default CulinaryBento;

// --------------------- COMPONENTS ------------------------

interface CulinaryCardProps {
  children: React.ReactNode;
  className?: string;
  colSpan?: string;
  rowSpan?: string;
  bgColor?: string;
}

const CulinaryCard = ({ 
  children, 
  className = "", 
  colSpan = "", 
  rowSpan = "", 
  bgColor = "bg-amber-100/50" 
}: CulinaryCardProps) => {
  return (
    <div
      className={`
        relative group rounded-3xl p-6 overflow-hidden transition-all duration-300
        border border-amber-200 hover:border-amber-300
        shadow-sm hover:shadow-md ${bgColor}
        min-h-52 ${colSpan} ${rowSpan} ${className}
      `}
    >
      {children}
    </div>
  );
};

interface CulinaryCardContentProps {
  icon?: LucideIcon;
  title?: string;
  description?: string;
  value?: string | number;
  label?: string;
}

const CulinaryCardContent = ({
  icon: Icon,
  title,
  description,
  value,
  label,
}: CulinaryCardContentProps) => {
  return (
    <div className="flex flex-col gap-4 h-full">
      <div className="flex justify-between items-start">
        {title && <h3 className="text-xl font-serif text-amber-900">{title}</h3>}

        {Icon && (
          <div className="p-3 w-12 h-12 rounded-full bg-amber-200/60 flex items-center justify-center">
            <Icon className="w-6 h-6 text-amber-800" />
          </div>
        )}
      </div>
      
      {description && (
        <p className="text-amber-800/80">{description}</p>
      )}

      {value && label && (
        <div className="mt-auto">
          <p className="text-3xl font-bold text-amber-900">{value}</p>
          <p className="text-sm text-amber-700">{label}</p>
        </div>
      )}
    </div>
  );
};