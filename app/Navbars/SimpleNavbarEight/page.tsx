"use client";

import React, { useState, useEffect, useRef } from "react";
import { cn } from "@/app/lib/utils";
import { Menu, X, ArrowRight, User, ShieldCheck, BookOpen, HeartPulse } from "lucide-react";

const mainLinks = [
  { label: "Home", href: "#" },
  { label: "Services", href: "#services" },
  { label: "Doctors", href: "#doctors" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const serviceLinks = [
  { 
    icon: HeartPulse, 
    label: "Cardiology", 
    href: "#cardiology", 
    description: "Heart health & vascular care"
  },
  { 
    icon: User, 
    label: "Orthopedics", 
    href: "#orthopedics", 
    description: "Bone & joint specialists"
  },
  { 
    icon: ShieldCheck, 
    label: "Pediatrics", 
    href: "#pediatrics", 
    description: "Children's healthcare"
  },
  { 
    icon: BookOpen, 
    label: "Neurology", 
    href: "#neurology", 
    description: "Brain & nervous system"
  },
];

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | null | undefined;
}

const Button: React.FC<ButtonProps> = ({ variant = "primary", className, children, ...props }) => {
  return (
    <button
      className={cn(
        "font-medium transition-all duration-200 rounded-full py-2.5 px-6 text-sm",
        variant === "primary" && "bg-teal-600 text-white hover:bg-teal-700 shadow-sm",
        variant === "outline" && "border border-teal-600 text-teal-600 hover:bg-teal-50",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default function SimpleNavbarEight() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);

  // Detect scroll for styling changes
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      if (menuOpen) setMenuOpen(false);
      if (servicesOpen) setServicesOpen(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuOpen, servicesOpen]);

  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setServicesOpen(false);
      }
    };
    
    if (menuOpen || servicesOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen, servicesOpen]);

  const handleMenuClick = () => {
    setMenuOpen(false);
    setServicesOpen(false);
  };

  return (
    <section className={cn(
      "py-4 lg:py-5 sticky top-0 z-50 transition-all duration-300",
      isScrolled ? "bg-white shadow-sm" : "bg-white"
    )}>
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center">
              <span className="font-bold text-white text-lg">HC</span>
            </div>
            <div className="ml-3">
              <h1 className="font-bold text-xl text-teal-800">HealthCare</h1>
              <p className="text-xs text-teal-600">Medical Center</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            <nav className="flex items-center">
              {mainLinks.map((link, index) => (
                <div key={link.label} className="relative" ref={link.label === "Services" ? servicesRef : undefined}>
                  {link.label === "Services" ? (
                    <button
                      className={cn(
                        "px-4 py-2 text-neutral-700 hover:text-teal-600 font-medium relative transition-colors",
                        servicesOpen && "text-teal-600"
                      )}
                      onClick={() => setServicesOpen(!servicesOpen)}
                    >
                      {link.label}
                      {index === 1 && (
                        <span className="absolute -bottom-1 left-4 right-4 h-0.5 bg-teal-600 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                      )}
                    </button>
                  ) : (
                    <a
                      href={link.href}
                      className="px-4 py-2 text-neutral-700 hover:text-teal-600 font-medium relative transition-colors group"
                    >
                      {link.label}
                      <span className="absolute -bottom-1 left-4 right-4 h-0.5 bg-teal-600 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                    </a>
                  )}

                  {/* Services dropdown */}
                  {link.label === "Services" && servicesOpen && (
                    <div className="absolute left-0 mt-1 bg-white rounded-lg shadow-lg p-4 w-64 border border-neutral-100 z-40">
                      <div className="grid gap-3">
                        {serviceLinks.map((service) => (
                          <a
                            key={service.label}
                            href={service.href}
                            className="flex items-start gap-3 p-2 rounded-md hover:bg-teal-50 transition-colors group"
                            onClick={() => setServicesOpen(false)}
                          >
                            <div className="w-8 h-8 rounded-md bg-teal-100 flex items-center justify-center text-teal-600 group-hover:bg-teal-200 transition-colors">
                              <service.icon className="w-4 h-4" />
                            </div>
                            <div>
                              <p className="font-medium text-neutral-800 group-hover:text-teal-700">{service.label}</p>
                              <p className="text-xs text-neutral-500">{service.description}</p>
                            </div>
                          </a>
                        ))}
                        <a
                          href="#all-services"
                          className="flex items-center justify-between px-2 pt-2 mt-1 text-sm text-teal-600 hover:text-teal-700 border-t border-neutral-100"
                          onClick={() => setServicesOpen(false)}
                        >
                          <span>View all services</span>
                          <ArrowRight className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>

          {/* Right side actions */}
          <div className="flex items-center gap-3" ref={menuRef}>
            <div className="hidden md:flex items-center gap-3">
              <Button variant="outline">Patient Portal</Button>
              <Button variant="primary">Book Appointment</Button>
            </div>

            <button
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-md text-neutral-700 hover:bg-neutral-100"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle Menu"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

            {/* Mobile Navigation */}
            {menuOpen && (
              <div className="absolute inset-x-0 top-full mt-2 bg-white shadow-lg lg:hidden z-40 border-t border-neutral-100">
                <nav className="flex flex-col">
                  {mainLinks.map((link) => (
                    <div key={link.label}>
                      {link.label === "Services" ? (
                        <>
                          <button
                            className="flex items-center justify-between w-full px-6 py-4 border-b border-neutral-100 text-neutral-700 hover:bg-neutral-50 transition-colors"
                            onClick={() => setServicesOpen(!servicesOpen)}
                          >
                            <span className="font-medium">{link.label}</span>
                            <ArrowRight className={cn(
                              "w-4 h-4 transition-transform",
                              servicesOpen ? "rotate-90" : ""
                            )} />
                          </button>
                          
                          {/* Services dropdown (mobile) */}
                          {servicesOpen && (
                            <div className="bg-neutral-50 py-2 px-4 border-b border-neutral-100">
                              {serviceLinks.map((service) => (
                                <a
                                  key={service.label}
                                  href={service.href}
                                  className="flex items-center gap-3 px-4 py-3 text-neutral-700 hover:text-teal-600 transition-colors"
                                  onClick={handleMenuClick}
                                >
                                  <service.icon className="w-5 h-5 text-teal-600" />
                                  <span>{service.label}</span>
                                </a>
                              ))}
                              <a
                                href="#all-services"
                                className="flex items-center justify-between px-4 py-3 text-sm font-medium text-teal-600"
                                onClick={handleMenuClick}
                              >
                                <span>View all services</span>
                                <ArrowRight className="w-4 h-4" />
                              </a>
                            </div>
                          )}
                        </>
                      ) : (
                        <a
                          href={link.href}
                          className="block px-6 py-4 border-b border-neutral-100 text-neutral-700 hover:bg-neutral-50 transition-colors"
                          onClick={handleMenuClick}
                        >
                          {link.label}
                        </a>
                      )}
                    </div>
                  ))}
                  <div className="p-6 flex flex-col gap-3">
                    <Button variant="outline" className="w-full" onClick={handleMenuClick}>
                      Patient Portal
                    </Button>
                    <Button variant="primary" className="w-full" onClick={handleMenuClick}>
                      Book Appointment
                    </Button>
                  </div>
                </nav>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}