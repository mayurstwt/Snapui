"use client";

import React, { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/lib/utils";
import { Menu, X, MoonStar, Sun, Github, Twitter, Code } from "lucide-react";

const navLinks = [
  { label: "Docs", href: "#docs" },
  { label: "Components", href: "#components" },
  { label: "Examples", href: "#examples" },
  { label: "GitHub", href: "#github", icon: Github },
];

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | null | undefined;
}

const Button: React.FC<ButtonProps> = ({ variant = "default", className, children, ...props }) => {
  return (
    <button
      className={cn(
        "font-medium rounded-md transition-all duration-200 text-sm h-10 px-4",
        variant === "default" && "bg-white text-neutral-900 hover:bg-neutral-100",
        variant === "outline" && "border border-neutral-800 bg-transparent text-neutral-100 hover:bg-neutral-900",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default function SimpleNavbarFour() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
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
  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <section className="py-4 sticky top-0 z-50 bg-neutral-950 border-b border-neutral-800">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 bg-white rounded-lg flex items-center justify-center">
              <Code className="w-5 h-5 text-neutral-900" />
            </div>
            <span className="font-bold text-xl text-white">DevUI</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <nav className="flex items-center">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-3 py-2 text-sm text-neutral-400 hover:text-white transition-colors rounded-md hover:bg-neutral-800 flex items-center space-x-1.5"
                >
                  {link.icon && <link.icon className="w-4 h-4" />}
                  <span>{link.label}</span>
                </a>
              ))}
            </nav>
          </div>

          {/* Right side controls */}
          <div className="flex items-center space-x-2" ref={menuRef}>
            <button
              onClick={toggleTheme}
              className="w-9 h-9 flex items-center justify-center rounded-md text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
            >
              {isDarkMode ? (
                <Sun className="w-5 h-5" />
              ) : (
                <MoonStar className="w-5 h-5" />
              )}
            </button>
            
            <div className="hidden md:block">
              <Button variant="outline">Sign In</Button>
            </div>
            
            <Button>Get Started</Button>

            <button
              className="md:hidden w-9 h-9 flex items-center justify-center rounded-md text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label="Toggle Menu"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

            {/* Mobile Navigation */}
            {menuOpen && (
              <div className="absolute top-16 left-4 right-4 bg-neutral-900 rounded-lg shadow-lg py-3 md:hidden z-50 border border-neutral-800">
                <nav className="flex flex-col">
                  {navLinks.map((link) => (
                    <a
                      href={link.href}
                      key={link.label}
                      className="flex items-center px-4 py-2.5 text-neutral-300 hover:bg-neutral-800 transition-colors"
                      onClick={handleMenuClick}
                    >
                      {link.icon && <link.icon className="w-4 h-4 mr-3" />}
                      {link.label}
                    </a>
                  ))}
                  <hr className="my-2 border-neutral-800" />
                  <div className="p-3 flex flex-col gap-2">
                    <Button variant="outline" className="w-full justify-center" onClick={handleMenuClick}>
                      Sign In
                    </Button>
                    <Button className="w-full justify-center" onClick={handleMenuClick}>
                      Get Started
                    </Button>
                    <div className="flex items-center justify-center mt-3 gap-3">
                      <a href="#" className="text-neutral-400 hover:text-white">
                        <Github className="w-5 h-5" />
                      </a>
                      <a href="#" className="text-neutral-400 hover:text-white">
                        <Twitter className="w-5 h-5" />
                      </a>
                    </div>
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