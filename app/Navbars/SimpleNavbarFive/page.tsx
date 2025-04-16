"use client"

import React, { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { Menu, Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter } from "lucide-react";

const mainLinks = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Products", href: "#products" },
  { label: "Contact", href: "#contact" },
];

const contactInfo = [
  { icon: Phone, text: "+1 (555) 123-4567", href: "tel:+15551234567" },
  { icon: Mail, text: "info@company.com", href: "mailto:info@company.com" },
  { icon: MapPin, text: "123 Business Ave, Suite 100", href: "#location" },
  { icon: Clock, text: "Mon-Fri: 9AM-5PM", href: "#hours" },
];

const socialLinks = [
  { icon: Facebook, href: "#facebook" },
  { icon: Instagram, href: "#instagram" },
  { icon: Twitter, href: "#twitter" },
];

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | null | undefined;
}

const Button: React.FC<ButtonProps> = ({ variant = "primary", className, children, ...props }) => {
  return (
    <button
      className={cn(
        "font-medium transition-all duration-200",
        variant === "primary" && "bg-blue-600 hover:bg-blue-700 text-white py-2.5 px-5 rounded",
        variant === "secondary" && "border border-blue-600 text-blue-600 hover:bg-blue-50 py-2.5 px-5 rounded",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default function SimpleNavbarFive() {
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
    <section className="py-0 sticky top-0 z-50 bg-white shadow-sm">
      {/* Top bar with contact info - hidden on mobile */}
      <div className="hidden md:block bg-blue-600 text-white py-2">
        <div className="mx-auto px-4 sm:px-8 lg:px-16 max-w-7xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6 text-xs">
              {contactInfo.map((item, index) => (
                <a key={index} href={item.href} className="flex items-center space-x-1.5 hover:text-blue-100 transition-colors">
                  <item.icon className="w-3.5 h-3.5" />
                  <span>{item.text}</span>
                </a>
              ))}
            </div>
            <div className="flex items-center space-x-3">
              {socialLinks.map((item, index) => (
                <a key={index} href={item.href} className="hover:text-blue-100 transition-colors">
                  <item.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <div className="bg-white py-5">
        <div className="mx-auto px-4 sm:px-8 lg:px-16 max-w-7xl">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center">
                <span className="font-bold text-white text-lg">C</span>
              </div>
              <div className="ml-3">
                <h1 className="font-bold text-xl text-blue-900">Corporate</h1>
                <p className="text-xs text-blue-500">Business Solutions</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:block">
              <nav className="flex gap-8">
                {mainLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="font-medium text-neutral-700 hover:text-blue-600 transition-colors relative group py-2"
                  >
                    {link.label}
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                  </a>
                ))}
              </nav>
            </div>

            {/* Contact button and mobile menu */}
            <div className="flex items-center space-x-4" ref={menuRef}>
              <div className="hidden md:block">
                <Button variant="primary">Get a Quote</Button>
              </div>
              
              <button
                className="lg:hidden w-10 h-10 flex items-center justify-center border border-neutral-200 rounded"
                onClick={() => setMenuOpen((prev) => !prev)}
                aria-label="Toggle Menu"
              >
                <Menu className="w-5 h-5 text-neutral-700" />
              </button>

              {/* Mobile Navigation */}
              {menuOpen && (
                <div className="absolute top-full right-0 left-0 bg-white shadow-lg lg:hidden z-50 border-t border-neutral-100">
                  <div className="py-3 px-6 md:hidden border-b border-neutral-100">
                    {contactInfo.slice(0, 2).map((item, index) => (
                      <a key={index} href={item.href} className="flex items-center space-x-2 py-2 text-neutral-700 hover:text-blue-600 transition-colors">
                        <item.icon className="w-4 h-4" />
                        <span>{item.text}</span>
                      </a>
                    ))}
                    <div className="flex items-center space-x-3 mt-2 pt-2 border-t border-neutral-100">
                      {socialLinks.map((item, index) => (
                        <a key={index} href={item.href} className="hover:text-blue-600 transition-colors text-neutral-600">
                          <item.icon className="w-5 h-5" />
                        </a>
                      ))}
                    </div>
                  </div>
                  
                  <nav className="flex flex-col">
                    {mainLinks.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        className="px-6 py-4 border-b border-neutral-100 text-neutral-700 hover:bg-neutral-50 transition-colors"
                        onClick={handleMenuClick}
                      >
                        {link.label}
                      </a>
                    ))}
                    <div className="p-6">
                      <Button variant="primary" className="w-full">Get a Quote</Button>
                    </div>
                  </nav>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}