"use client"

import React, { useState, useEffect, useRef } from "react";
import { cn } from "@/app/lib/utils";
import { Menu, Music, Home, Search, Library, UserCircle, PlusCircle } from "lucide-react";

const mainLinks = [
  { label: "Home", href: "#", icon: Home },
  { label: "Search", href: "#search", icon: Search },
  { label: "Your Library", href: "#library", icon: Library },
];

const playlists = [
  "Liked Songs",
  "Today's Top Hits",
  "Discover Weekly",
  "Dance Mix",
  "Chill Vibes",
  "Workout Playlist"
];

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | null | undefined;
}

const Button: React.FC<ButtonProps> = ({ variant = "primary", className, children, ...props }) => {
  return (
    <button
      className={cn(
        "font-medium transition-all duration-200 rounded-full py-1.5 px-4 text-sm",
        variant === "primary" && "bg-green-500 text-black hover:bg-green-400",
        variant === "outline" && "border border-white/20 text-white hover:border-white",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default function SimpleNavbarNine() {
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
    <section className="py-3 sticky top-0 z-50 bg-black border-b border-neutral-800">
      <div className="mx-auto px-4 max-w-7xl">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center">
              <Music className="w-8 h-8 text-white" />
            </div>
            <span className="font-bold text-xl text-white">Soundify</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block flex-1 max-w-md mx-auto">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search for songs, artists, or albums..." 
                className="bg-neutral-800 text-white text-sm rounded-full w-full py-2.5 px-10 focus:outline-none focus:ring-1 focus:ring-white/30"
              />
              <Search className="absolute left-3.5 top-3 w-4 h-4 text-neutral-400" />
            </div>
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-3" ref={menuRef}>
            <div className="hidden md:flex items-center gap-3">
              <Button variant="outline">Upgrade</Button>
              <Button variant="primary">Open App</Button>
            </div>
            
            <button
              className="md:hidden w-10 h-10 flex items-center justify-center text-white"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label="Toggle Menu"
            >
              <Menu className="w-6 h-6" />
            </button>

            {/* Mobile Navigation */}
            {menuOpen && (
              <div className="absolute top-full left-0 right-0 bg-neutral-900 shadow-lg md:hidden z-40 border-t border-neutral-800">
                <div className="p-4">
                  <div className="relative mb-4">
                    <input 
                      type="text" 
                      placeholder="Search..." 
                      className="bg-neutral-800 text-white text-sm rounded-full w-full py-2.5 px-10 focus:outline-none focus:ring-1 focus:ring-white/30"
                    />
                    <Search className="absolute left-3.5 top-3 w-4 h-4 text-neutral-400" />
                  </div>
                  
                  <nav className="mb-4">
                    {mainLinks.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        className="flex items-center gap-3 px-2 py-3 text-neutral-300 hover:text-white transition-colors"
                        onClick={handleMenuClick}
                      >
                        <link.icon className="w-5 h-5" />
                        <span className="font-medium">{link.label}</span>
                      </a>
                    ))}
                  </nav>
                  
                  <div className="border-t border-neutral-800 pt-4 mb-4">
                    <div className="flex items-center justify-between mb-2 px-2">
                      <h3 className="text-sm font-bold text-neutral-400">Your Playlists</h3>
                      <button className="text-neutral-400 hover:text-white">
                        <PlusCircle className="w-5 h-5" />
                      </button>
                    </div>
                    <div className="space-y-1">
                      {playlists.map((playlist) => (
                        <a
                          key={playlist}
                          href="#"
                          className="block px-2 py-2 text-sm text-neutral-300 hover:text-white transition-colors"
                          onClick={handleMenuClick}
                        >
                          {playlist}
                        </a>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-2 border-t border-neutral-800">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-neutral-700 flex items-center justify-center">
                        <UserCircle className="w-6 h-6 text-neutral-300" />
                      </div>
                      <span className="text-sm font-medium text-white">User Name</span>
                    </div>
                    <Button variant="primary" className="text-xs py-1 px-3" onClick={handleMenuClick}>
                      Open App
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}