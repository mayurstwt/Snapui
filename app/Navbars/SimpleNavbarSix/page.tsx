"use client";

import React, { useState, useEffect, useRef } from "react";
import { Menu, X, Search, ShoppingBag, User } from "lucide-react";
import { cn } from "@/app/lib/utils";

const navCategories = [
  { label: "New Arrivals", href: "#new" },
  { label: "Clothing", href: "#clothing" },
  { label: "Accessories", href: "#accessories" },
  { label: "Footwear", href: "#footwear" },
  { label: "Sale", href: "#sale", highlight: true },
];

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "ghost" | "icon" | null | undefined;
}

const Button: React.FC<ButtonProps> = ({ variant = "ghost", className, children, ...props }) => {
  return (
    <button
      className={cn(
        "transition-all duration-200",
        variant === "ghost" && "text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white px-4 py-2 text-sm font-medium",
        variant === "icon" && "w-10 h-10 flex items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/10",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default function SimpleNavbarSix() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);

  // Detect scroll for styling changes
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      if (menuOpen) setMenuOpen(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuOpen]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setSearchOpen(false);
      }
    };
    
    if (menuOpen || searchOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen, searchOpen]);

  const handleMenuClick = () => setMenuOpen(false);
  
  return (
    <div>
      {/* Search overlay */}
      {searchOpen && (
        <div className="fixed inset-0 bg-white dark:bg-black z-50 p-4 sm:p-8" ref={searchRef}>
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-xl font-medium">Search products</h2>
              <button 
                onClick={() => setSearchOpen(false)}
                className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-neutral-100 dark:hover:bg-white/10"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="relative">
              <input
                type="text"
                placeholder="Search for products..."
                className="w-full border-b-2 border-black dark:border-white py-3 px-2 text-lg focus:outline-none pr-10 bg-transparent text-black dark:text-white"
                autoFocus
              />
              <Search className="absolute right-2 top-1/2 transform -translate-y-1/2 w-5 h-5 text-black dark:text-white" />
            </div>
            
            <div className="mt-6">
              <h3 className="font-medium mb-3 text-neutral-600 dark:text-neutral-400">Popular searches</h3>
              <div className="flex flex-wrap gap-2">
                {["Summer collection", "Denim", "Accessories", "Fall styles", "Shoes"].map((term) => (
                  <button 
                    key={term} 
                    className="px-4 py-2 bg-neutral-100 rounded-full text-sm hover:bg-neutral-200 dark:bg-neutral-700 dark:hover:bg-neutral-600"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    
      <section className={cn(
        "py-4 sticky top-0 z-40 transition-all duration-300",
        isScrolled ? "bg-white shadow-sm dark:bg-black dark:shadow-md" : "bg-white dark:bg-black"
      )}>
        <div className="mx-auto px-4 lg:px-10 max-w-7xl">
          <div className="flex items-center justify-between">
            {/* Hamburger for mobile */}
            <div className="lg:hidden">
              <Button 
                variant="icon" 
                onClick={() => setMenuOpen((prev) => !prev)}
                aria-label="Toggle Menu"
              >
                <Menu className="w-5 h-5" />
              </Button>
            </div>
            
            {/* Logo */}
            <div className="flex-1 lg:flex-none flex justify-center lg:justify-start">
              <h1 className="text-2xl font-bold tracking-tighter text-black dark:text-white">MAISON</h1>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:block flex-1">
              <nav className="flex justify-center gap-6">
                {navCategories.map((category) => (
                  <a
                    key={category.label}
                    href={category.href}
                    className={cn(
                      "text-sm font-medium px-3 py-1 transition-colors",
                      category.highlight 
                        ? "text-red-600 hover:text-red-700" 
                        : "text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white"
                    )}
                  >
                    {category.label}
                  </a>
                ))}
              </nav>
            </div>
            
            {/* Icons */}
            <div className="flex items-center gap-1">
              <Button 
                variant="icon" 
                onClick={() => setSearchOpen(true)}
                aria-label="Search"
              >
                <Search className="w-5 h-5 text-black dark:text-white" />
              </Button>
              
              <Button
                variant="icon"
                aria-label="Account"
                className="hidden sm:flex"
              >
                <User className="w-5 h-5 text-black dark:text-white" />
              </Button>
              
              <Button
                variant="icon"
                aria-label="Cart"
                className="relative"
              >
                <ShoppingBag className="w-5 h-5 text-black dark:text-white" />
                <span className="absolute top-0 right-0 w-4 h-4 bg-black text-white rounded-full text-[10px] flex items-center justify-center">
                  2
                </span>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu Drawer */}
        <div className="lg:hidden" ref={menuRef}>
          {menuOpen && (
            <div className="fixed inset-y-0 left-0 z-50 w-72 bg-white shadow-lg overflow-auto dark:bg-black">
              <div className="flex justify-between items-center p-4 border-b dark:border-neutral-700">
                <h2 className="font-medium text-black dark:text-white">Menu</h2>
                <button 
                  className="w-8 h-8 flex items-center justify-center"
                  onClick={() => setMenuOpen(false)}
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <div className="py-2">
                <nav>
                  {navCategories.map((category) => (
                    <a
                      key={category.label}
                      href={category.href}
                      className={cn(
                        "block px-4 py-3 border-b border-neutral-100 dark:border-neutral-700",
                        category.highlight 
                          ? "text-red-600 font-medium" 
                          : "text-neutral-800 dark:text-neutral-300"
                      )}
                      onClick={handleMenuClick}
                    >
                      {category.label}
                      </a>
                  ))}
                </nav>
                
                <div className="px-4 py-4">
                  <a 
                    href="#account" 
                    className="flex items-center gap-3 mb-3 text-neutral-800 dark:text-neutral-300"
                    onClick={handleMenuClick}
                  >
                    <User className="w-5 h-5" />
                    <span>Account</span>
                  </a>
                  
                  <a 
                    href="#orders" 
                    className="flex items-center gap-3 text-neutral-800 dark:text-neutral-300"
                    onClick={handleMenuClick}
                  >
                    <ShoppingBag className="w-5 h-5" />
                    <span>Orders</span>
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
