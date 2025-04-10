"use client";

import React, { useState, useEffect, useRef } from "react";
import { cn } from "@/app/lib/utils";
import { Menu, X, ChevronDown, Laptop, ShieldCheck, Server, Database } from "lucide-react";

const mainLinks = [
  { label: "Products", href: "#products", hasSubmenu: true },
  { label: "Solutions", href: "#solutions" },
  { label: "Pricing", href: "#pricing" },
  { label: "Documentation", href: "#docs" },
];

const productLinks = [
  { 
    icon: Server, 
    label: "Cloud Hosting", 
    description: "Deploy and scale your apps globally",
    href: "#cloud"
  },
  { 
    icon: Database, 
    label: "Database", 
    description: "Fully managed SQL and NoSQL databases",
    href: "#database"
  },
  { 
    icon: ShieldCheck, 
    label: "Security", 
    description: "Advanced protection for your applications",
    href: "#security"
  },
  { 
    icon: Laptop, 
    label: "Dev Tools", 
    description: "Powerful tools for modern development",
    href: "#tools"
  },
];

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "ghost" | "outline" | null | undefined;
}

const Button: React.FC<ButtonProps> = ({ variant = "default", className, children, ...props }) => {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center font-medium transition-all duration-200 text-sm rounded-md",
        variant === "default" && "bg-blue-600 text-white hover:bg-blue-700 h-9 px-4",
        variant === "ghost" && "text-neutral-700 hover:text-blue-600 hover:bg-blue-50/50 h-9 px-4",
        variant === "outline" && "border border-neutral-300 bg-white hover:bg-neutral-50 text-neutral-700 h-9 px-4",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default function SimpleNavbarTen() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const productsRef = useRef<HTMLDivElement>(null);

  // Detect scroll for styling changes
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      if (menuOpen) setMenuOpen(false);
      if (productsOpen) setProductsOpen(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuOpen, productsOpen]);

  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
      if (productsRef.current && !productsRef.current.contains(event.target as Node)) {
        setProductsOpen(false);
      }
    };
    
    if (menuOpen || productsOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen, productsOpen]);

  const handleCloseAll = () => {
    setMenuOpen(false);
    setProductsOpen(false);
  };

  return (
    <section className={cn(
      "py-4 sticky top-0 z-50 transition-all duration-300",
      isScrolled ? "bg-white/80 backdrop-blur shadow-sm" : "bg-white"
    )}>
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            {/* Mobile menu button */}
            <button
              className="lg:hidden -ml-2 p-2 rounded-md text-neutral-500 hover:text-neutral-700 hover:bg-neutral-100"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle Menu"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
            
            {/* Logo */}
            <div className="flex items-center">
              <div className="h-8 w-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded flex items-center justify-center">
                <span className="font-bold text-white text-lg">A</span>
              </div>
              <span className="ml-2 font-semibold text-lg text-neutral-800">Agility</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            <nav className="flex items-center">
              {mainLinks.map((link) => (
                <div key={link.label} className="relative" ref={link.hasSubmenu ? productsRef : undefined}>
                  {link.hasSubmenu ? (
                    <button
                      className={cn(
                        "flex items-center gap-1 px-3 py-2 text-sm font-medium text-neutral-700 hover:text-blue-600",
                        productsOpen && "text-blue-600"
                      )}
                      onClick={() => setProductsOpen(!productsOpen)}
                    >
                      {link.label}
                      <ChevronDown className={cn(
                        "w-4 h-4 transition-transform",
                        productsOpen ? "rotate-180" : ""
                      )} />
                    </button>
                  ) : (
                    <a
                      href={link.href}
                      className="px-3 py-2 text-sm font-medium text-neutral-700 hover:text-blue-600"
                    >
                      {link.label}
                    </a>
                  )}

                  {/* Products dropdown */}
                  {link.hasSubmenu && productsOpen && (
                    <div className="absolute left-0 mt-1 p-4 bg-white rounded-md shadow-xl w-80 border border-neutral-100 z-40">
                      <div className="grid gap-3">
                        {productLinks.map((product) => (
                          <a
                            key={product.label}
                            href={product.href}
                            className="flex gap-3 p-2 rounded hover:bg-blue-50 group"
                            onClick={() => setProductsOpen(false)}
                          >
                            <div className="shrink-0 w-10 h-10 bg-blue-100 rounded-md flex items-center justify-center text-blue-600 group-hover:bg-blue-200 transition-colors">
                              <product.icon className="w-5 h-5" />
                            </div>
                            <div>
                              <p className="font-medium text-neutral-800">{product.label}</p>
                              <p className="text-xs text-neutral-500 mt-1">{product.description}</p>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>

          {/* Right side buttons */}
          <div className="flex items-center space-x-3">
            <Button variant="ghost" className="hidden md:flex">
              Log in
            </Button>
            <Button variant="default">
              Sign up free
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div className="lg:hidden" ref={menuRef}>
        {menuOpen && (
          <div className="fixed inset-0 z-40 flex">
            {/* Backdrop */}
            <div className="fixed inset-0 bg-black/20" onClick={handleCloseAll} />
            
            {/* Drawer */}
            <div className="relative flex flex-col w-full max-w-xs bg-white pb-12 overflow-y-auto">
              <div className="px-4 pt-5 pb-2 flex border-b border-neutral-200">
                <button
                  className="-mr-2 p-2 rounded-md text-neutral-400"
                  onClick={handleCloseAll}
                >
                  <X className="w-5 h-5" />
                  <span className="sr-only">Close menu</span>
                </button>
              </div>
              
              <div className="py-6 px-4 space-y-6">
                <div className="flow-root">
                  <div className="-my-6 divide-y divide-neutral-200">
                    <div className="py-6 space-y-3">
                      {mainLinks.map((link) => (
                        <div key={link.label}>
                          {link.hasSubmenu ? (
                            <>
                              <button
                                className="flex items-center justify-between w-full text-neutral-700 py-2"
                                onClick={() => setProductsOpen(!productsOpen)}
                              >
                                <span className="text-base font-medium">{link.label}</span>
                                <ChevronDown className={cn(
                                  "w-5 h-5 text-neutral-400",
                                  productsOpen ? "rotate-180" : ""
                                )} />
                              </button>
                              
                              {productsOpen && (
                                <div className="mt-3 pl-3 space-y-3">
                                  {productLinks.map((product) => (
                                    <a
                                      key={product.label}
                                      href={product.href}
                                      className="flex items-center py-2 text-neutral-600 hover:text-blue-600"
                                      onClick={handleCloseAll}
                                    >
                                      <product.icon className="w-5 h-5 mr-3 text-blue-500" />
                                      <span>{product.label}</span>
                                    </a>
                                  ))}
                                </div>
                              )}
                            </>
                          ) : (
                            <a
                              href={link.href}
                              className="-m-2 block p-2 text-base font-medium text-neutral-700 hover:text-blue-600"
                              onClick={handleCloseAll}
                            >
                              {link.label}
                            </a>
                          )}
                        </div>
                      ))}
                    </div>
                    <div className="py-6">
                      <a
                        href="#login"
                        className="-m-2 block p-2 text-base font-medium text-neutral-700 hover:text-blue-600"
                        onClick={handleCloseAll}
                      >
                        Log in
                      </a>
                      <div className="mt-6">
                        <Button variant="default" className="w-full" onClick={handleCloseAll}>
                          Sign up free
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
