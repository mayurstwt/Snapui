"use client";

import React, { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { Search, ShoppingCart, Heart, Menu, Bell } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { label: "Men", href: "#men" },
  { label: "Women", href: "#women" },
  { label: "Kids", href: "#kids" },
  { label: "Collections", href: "#collections" },
  { label: "Sale", href: "#sale", highlight: true },
];

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "icon" | null | undefined;
}

const Button: React.FC<ButtonProps> = ({ variant = "primary", className, children, ...props }) => {
  return (
    <button
      className={cn(
        "font-medium transition-all duration-200",
        variant === "primary" && "bg-black text-white py-3 px-6 hover:bg-neutral-800",
        variant === "icon" && "w-10 h-10 flex items-center justify-center rounded-full bg-neutral-100 hover:bg-neutral-200",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default function SimpleNavbarThree() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu on scroll
  useEffect(() => {
    const handleScroll = () => {
      setMenuOpen(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };
    
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  const handleMenuClick = () => setMenuOpen(false);

  return (
    <section className="py-4 sticky top-0 z-50 bg-black border-b border-neutral-100 shadow-sm">
      <div className="mx-auto px-4 sm:px-8 lg:px-16 max-w-7xl">
        <div className="flex flex-col gap-3">
          {/* Top bar */}
          <div className="flex items-center justify-between">
            <div className="lg:flex items-center gap-3 hidden">
              <Button variant="icon">
                <Search className="w-5 h-5 text-black" />
              </Button>
              <div className="relative ml-2">
                <input 
                  type="text" 
                  placeholder="Search products..." 
                  className="py-2 pl-3 pr-8 border border-neutral-200 rounded-lg focus:outline-none focus:border-black w-60"
                />
                <Search className="w-4 h-4 absolute right-3 top-3 text-neutral-400" />
              </div>
            </div>
            
            <div className="flex-1 flex justify-center">
              <Link href="/" className="text-2xl font-bold tracking-tight">MONOSTORE</Link>
            </div>
            
            <div className="flex items-center gap-3">
              <Button variant="icon" className="hidden sm:flex text-black">
                <Heart className="w-5 h-5" />
              </Button>
              <Button variant="icon" className="hidden sm:flex text-black relative">
                <Bell className="w-5 h-5" />
                <span className="absolute -top-0.5 -right-0.5 bg-red-500 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">3</span>
              </Button>
              <Button variant="icon" className="relative text-black">
                <ShoppingCart className="w-5 h-5" />
                <span className="absolute -top-0.5 -right-0.5 bg-black text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">2</span>
              </Button>
              <button
                className="lg:hidden w-10 h-10 flex items-center justify-center"
                onClick={() => setMenuOpen((prev) => !prev)}
                aria-label="Toggle Menu"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
          
          {/* Main navigation */}
          <div className="hidden lg:flex items-center justify-center border-t border-neutral-100 pt-3">
            <nav className="flex gap-10 font-medium">
              {navLinks.map((link) => (
                <a
                  href={link.href}
                  key={link.label}
                  className={cn(
                    "text-sm uppercase tracking-wider py-1 relative transition-colors",
                    link.highlight ? "text-red-600 font-bold" : "text-white hover:text-white/85"
                  )}
                >
                  {link.label}
                  <span className={cn(
                    "absolute left-0 bottom-0 h-0.5 w-0 bg-black transition-all duration-300 group-hover:w-full",
                    link.highlight && "bg-red-600"
                  )}></span>
                </a>
              ))}
            </nav>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        <div className="lg:hidden" ref={menuRef}>
          {menuOpen && (
            <div className="absolute top-[4.5rem] left-0 w-full bg-white shadow-lg z-50 border-t border-neutral-100">
              <div className="p-4 flex sm:hidden items-center border-b border-neutral-100">
                <Search className="w-5 h-5 mr-3 text-neutral-400" />
                <input 
                  type="text" 
                  placeholder="Search products..." 
                  className="py-2 flex-1 focus:outline-none"
                />
              </div>
              <nav className="flex flex-col">
                {navLinks.map((link) => (
                  <a
                    href={link.href}
                    key={link.label}
                    className={cn(
                      "px-6 py-4 border-b border-neutral-100 transition-colors",
                      link.highlight ? "text-red-600 font-bold" : "text-neutral-800"
                    )}
                    onClick={handleMenuClick}
                  >
                    {link.label}
                  </a>
                ))}
                <div className="p-6 flex flex-col gap-3">
                  <Button variant="primary" className="w-full">Sign In</Button>
                  <Button variant="icon" className="mx-auto bg-black text-white">   
                    <Heart className="w-5 h-5" />
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}