"use client";

import React, { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { Home, Zap, Link2, HelpCircle, Menu, X, User, LogIn } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#", icon: Home },
  { label: "Features", href: "#features", icon: Zap },
  { label: "Integrations", href: "#integrations", icon: Link2 },
  { label: "FAQs", href: "#faqs", icon: HelpCircle },
];

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | null | undefined;
}

const Button: React.FC<ButtonProps> = ({ variant = "primary", className, children, ...props }) => {
  return (
    <button
      className={cn(
        "border h-12 rounded-full px-6 font-medium transition-all duration-300",
        variant === "primary" && "bg-gradient-to-r from-purple-600 to-indigo-700 hover:from-purple-700 hover:to-indigo-800 text-white border-transparent",
        variant === "secondary" && "border-white/20 text-white hover:bg-white/10 backdrop-blur-sm",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default function SimpleNavbarTwo() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

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
    <section className={cn(
      "py-4 sticky top-0 z-50 transition-all duration-300",
      isScrolled ? "bg-black/80 backdrop-blur-xl" : "bg-transparent"
    )}>
      <div className="mx-auto px-4 sm:px-8 lg:px-16 max-w-7xl">
        <div className={cn(
          "flex justify-between items-center rounded-2xl p-3 transition-all duration-300",
          isScrolled ? "bg-black/40 border border-white/10" : "bg-transparent"
        )}>
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-indigo-700 flex items-center justify-center">
              <span className="font-bold text-white">NV1</span>
            </div>
            <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-500">
              Cosmos
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="lg:flex items-center justify-center hidden">
            <nav className="flex gap-8 font-medium">
              {navLinks.map((link) => (
                <a
                  href={link.href}
                  key={link.label}
                  className="flex items-center gap-1.5 text-white/80 hover:text-white transition-colors group"
                >
                  <link.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span className="relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-purple-400 after:to-indigo-500 after:transition-all after:duration-300 group-hover:after:w-full">
                    {link.label}
                  </span>
                </a>
              ))}
            </nav>
          </div>

          {/* Hamburger + Buttons */}
          <div className="flex items-center gap-4 relative" ref={menuRef}>
            <div className="hidden md:flex items-center gap-3">
              <Button variant="secondary" className="flex items-center gap-2">
                <LogIn className="w-4 h-4" />
                Log in
              </Button>
              <Button variant="primary" className="flex items-center gap-2">
                <User className="w-4 h-4" />
                Sign up
              </Button>
            </div>

            <button
              className="lg:hidden w-10 h-10 rounded-full bg-white/10 flex items-center justify-center"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label="Toggle Menu"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

            {/* Mobile Navigation */}
            {menuOpen && (
              <div className="absolute right-0 top-14 bg-black/90 backdrop-blur-xl border border-white/10 rounded-xl w-64 py-5 px-4 shadow-lg lg:hidden z-50">
                <nav className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <a
                      href={link.href}
                      key={link.label}
                      className="flex items-center gap-3 text-white/80 hover:text-white p-2 hover:bg-white/5 rounded-lg transition-colors"
                      onClick={handleMenuClick}
                    >
                      <link.icon className="w-5 h-5" />
                      {link.label}
                    </a>
                  ))}
                  <hr className="my-3 border-white/10" />
                  <Button variant="secondary" className="w-full flex items-center justify-center gap-2 mb-2" onClick={handleMenuClick}>
                    <LogIn className="w-4 h-4" />
                    Log in
                  </Button>
                  <Button variant="primary" className="w-full flex items-center justify-center gap-2" onClick={handleMenuClick}>
                    <User className="w-4 h-4" />
                    Sign up
                  </Button>
                </nav>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}