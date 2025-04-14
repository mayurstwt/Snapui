import {
    Brush,
    Camera,
    Lightbulb,
    Pen,
    Monitor,
    Film,
    Palette,
    Type,
    LucideIcon,
  } from "lucide-react";
  import { cn } from "@/app/lib/utils";
  
  const CreativeBento = () => {
    return (
      <div className="py-16 bg-gradient-to-br from-rose-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4">
          <header className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-orange-400">
              Creative & Design
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Unlock your creative potential with design strategies, tools, and inspirations from top creators.
            </p>
          </header>
  
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <Card
              colSpan="md:col-span-1"
              rowSpan="row-span-2"
              gradient="linear-gradient(90deg, rgba(253, 164, 175, 0.3), rgba(251, 113, 133, 0.3))"
              animationType="fade"
            >
              <ImageCard
                src="https://res.cloudinary.com/damr9jzpb/image/upload/v1735402541/pexels-mikhail-nilov-7988210.jpg"
                alt="Creative workspace"
                caption="Inspiring workspaces for creativity"
              />
            </Card>
  
            <Card
              colSpan="md:col-span-2"
              gradient="linear-gradient(90deg, rgba(251, 113, 133, 0.3), rgba(244, 63, 94, 0.3))"
              animationType="scale"
            >
              <FeatureCard
                title="Digital Illustration"
                description="Master illustration techniques used by top artists across the world using tools like Procreate, Illustrator, and Photoshop."
                icon={Brush}
                className="text-rose-600"
              />
            </Card>
  
            <Card
              gradient="linear-gradient(90deg, rgba(251, 146, 60, 0.3), rgba(234, 88, 12, 0.3))"
              animationType="fade"
            >
              <FeatureCard
                title="Photography"
                description="Learn how to tell powerful stories through composition, lighting, and editing."
                icon={Camera}
                className="text-orange-600"
              />
            </Card>
  
            <Card
              colSpan="md:col-span-1"
              gradient="linear-gradient(90deg, rgba(252, 165, 165, 0.3), rgba(248, 113, 113, 0.3))"
              animationType="slide"
            >
              <StatCard
                value="93%"
                label="Designers prefer digital tools"
                className="text-red-600"
              />
            </Card>
  
            <Card
              colSpan="md:col-span-3"
              gradient="linear-gradient(90deg, rgba(253, 186, 116, 0.3), rgba(251, 146, 60, 0.3))"
              animationType="fade"
            >
              <TestimonialCard
                quote="Design isn't just about aesthetics—it's about making ideas real. Great design solves problems."
                author="Samantha Lee"
                role="Lead Product Designer at Adobe"
                className="text-orange-700"
                avatar="https://randomuser.me/api/portraits/women/44.jpg"
              />
            </Card>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card
              gradient="linear-gradient(90deg, rgba(249, 168, 212, 0.3), rgba(244, 114, 182, 0.3))"
              animationType="fade"
            >
              <FeatureCard
                title="Color Theory"
                description="Understand how colors affect mood, perception, and user behavior in design."
                icon={Palette}
                className="text-pink-600"
              />
            </Card>
  
            <Card
              gradient="linear-gradient(90deg, rgba(253, 164, 175, 0.3), rgba(251, 113, 133, 0.3))"
              animationType="scale"
            >
              <FeatureCard
                title="Typography"
                description="Typography is the silent voice of design. Learn how to use type effectively."
                icon={Type}
                className="text-rose-600"
              />
            </Card>
  
            <Card
              gradient="linear-gradient(90deg, rgba(254, 215, 170, 0.3), rgba(253, 186, 116, 0.3))"
              animationType="fade"
            >
              <FeatureCard
                title="Motion Design"
                description="Bring static visuals to life with engaging animations and transitions."
                icon={Film}
                className="text-amber-700"
              />
            </Card>
  
            <Card
              colSpan="md:col-span-3"
              gradient="linear-gradient(90deg, rgba(254, 202, 202, 0.2), rgba(252, 165, 165, 0.2))"
              animationType="slide"
            >
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <FeatureCard
                  title="Creative Process"
                  description="Explore how top designers move from ideation to final execution using proven methods."
                  icon={Lightbulb}
                  className="flex-1 text-red-600"
                />
                <FeatureCard
                  title="Digital Tools"
                  description="Discover cutting-edge tools that boost productivity and creativity."
                  icon={Monitor}
                  className="flex-1 text-red-600"
                />
                <FeatureCard
                  title="Design Thinking"
                  description="Adopt a user-centered mindset to create designs that truly resonate."
                  icon={Pen}
                  className="flex-1 text-red-600"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    );
  };
  
  export default CreativeBento;
  
  // --- Subcomponents ---
  
  interface CardProps {
    children: React.ReactNode;
    className?: string;
    colSpan?: string;
    rowSpan?: string;
    gradient?: string;
    animationType?: "fade" | "scale" | "slide" | "bounce" | "none";
  }
  
  const Card = ({
    children,
    className,
    colSpan = "",
    rowSpan = "",
    gradient,
    animationType = "fade",
  }: CardProps) => {
    const animationClass =
      animationType === "fade"
        ? "animate-fade-in"
        : animationType === "scale"
        ? "animate-scale-in"
        : animationType === "slide"
        ? "animate-slide-in-right"
        : "";
  
    return (
      <div
        className={cn(
          "rounded-xl p-6 overflow-hidden transition-all duration-300 bg-white/10 backdrop-blur-lg border border-white/10 hover:shadow-xl",
          "min-h-[300px]",
          animationClass,
          colSpan,
          rowSpan,
          className
        )}
        style={{ backgroundImage: gradient }}
      >
        {children}
      </div>
    );
  };
  
  interface ImageCardProps {
    src: string;
    alt: string;
    caption?: string;
  }
  
  const ImageCard = ({ src, alt, caption }: ImageCardProps) => {
    return (
      <div className="relative h-full w-full">
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover rounded-lg"
        />
        {caption && (
          <div className="absolute bottom-0 left-0 right-0 bg-black/40 p-4 text-white rounded-b-lg text-sm">
            {caption}
          </div>
        )}
      </div>
    );
  };
  
  interface FeatureCardProps {
    title: string;
    description: string;
    icon?: LucideIcon;
    className?: string;
  }
  
  const FeatureCard = ({ title, description, icon: Icon, className }: FeatureCardProps) => (
    <div className={cn("flex flex-col gap-2", className)}>
      {Icon && (
        <div className="p-2 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
          <Icon className="w-5 h-5 text-primary" />
        </div>
      )}
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
  
  interface StatCardProps {
    value: string | number;
    label: string;
    className?: string;
  }
  
  const StatCard = ({ value, label, className }: StatCardProps) => (
    <div className={cn("flex flex-col", className)}>
      <span className="text-3xl font-bold">{value}</span>
      <span className="text-sm text-muted-foreground">{label}</span>
    </div>
  );
  
  interface TestimonialCardProps {
    quote: string;
    author: string;
    role?: string;
    avatar?: string;
    className?: string;
  }
  
  const TestimonialCard = ({
    quote,
    author,
    role,
    avatar,
    className,
  }: TestimonialCardProps) => (
    <div className={cn("flex flex-col gap-4", className)}>
      <p className="text-lg italic">"{quote}"</p>
      <div className="flex items-center gap-3">
        {avatar && (
          <img
            src={avatar}
            alt={author}
            className="w-10 h-10 rounded-full object-cover"
          />
        )}
        <div>
          <p className="font-medium">{author}</p>
          {role && <p className="text-sm text-muted-foreground">{role}</p>}
        </div>
      </div>
    </div>
  );
  