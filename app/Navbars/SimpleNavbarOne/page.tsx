"use client";

import { useState, useEffect, useRef } from "react";
import React, { HTMLAttributes } from 'react';
import { cva } from "class-variance-authority";

const navLinks = [
  { label: "Solutions", href: "#solutions" },
  { label: "Products", href: "#products" },
  { label: "Developers", href: "#developers" },
  { label: "Resources", href: "#resources" },
];

export default function SimpleNavbarOne() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setMenuOpen(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <section className="py-6 sticky top-0 z-50">
      <div className="mx-auto px-6 md:px-10 max-w-6xl">
        <div className="flex justify-between items-center bg-black/80 backdrop-blur-md border-b border-zinc-800 py-3 px-5 rounded-lg">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-500 rounded-md flex items-center justify-center">
              <span className="font-bold text-white">T</span>
            </div>
            <span className="font-semibold text-white">TechFlow</span>
          </div>

          {/* Desktop Navigation */}
          <div className="lg:flex items-center justify-center hidden">
            <nav className="flex gap-8 font-medium text-zinc-300">
              {navLinks.map((link) => (
                <a 
                  href={link.href} 
                  key={link.label}
                  className="hover:text-blue-400 transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Hamburger + Buttons */}
          <div className="flex items-center gap-4 relative" ref={menuRef}>
            <button
              className="lg:hidden text-zinc-400 hover:text-white transition-colors"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label="Toggle Menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                {menuOpen ? (
                  <path d="M18 6L6 18M6 6l12 12" />
                ) : (
                  <>
                    <path d="M3 12h18"/>
                    <path d="M3 6h18"/>
                    <path d="M3 18h18"/>
                  </>
                )}
              </svg>
            </button>

            <Button className="hidden md:inline-flex items-center" variant="secondary">
              Sign in
            </Button>
            <Button className="hidden md:inline-flex items-center" variant="primary">
              Get started
            </Button>

            {/* Mobile Navigation */}
            {menuOpen && (
              <div className="absolute right-0 top-12 bg-zinc-900 border border-zinc-800 rounded-lg w-56 py-4 shadow-xl lg:hidden z-50">
                <nav className="flex flex-col">
                  {navLinks.map((link) => (
                    <a
                      href={link.href}
                      key={link.label}
                      className="px-5 py-2 hover:bg-zinc-800 text-zinc-300"
                      onClick={handleMenuClick}
                    >
                      {link.label}
                    </a>
                  ))}
                  <hr className="my-2 border-zinc-800" />
                  <div className="px-4 pt-2 space-y-2">
                    <Button variant="secondary" className="w-full block text-center" onClick={handleMenuClick}>
                      Sign in
                    </Button>
                    <Button variant="primary" className="w-full block text-center" onClick={handleMenuClick}>
                      Get started
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

const classes = cva('h-10 rounded-md px-4 font-medium text-sm transition-all duration-200', {
  variants: {
    variant: {
      primary: 'bg-blue-600 hover:bg-blue-700 text-white border-none',
      secondary: 'border border-zinc-700 text-zinc-300 hover:border-zinc-500 bg-transparent'
    }
  }
});

const Button = (props: { variant?: "primary" | "secondary" | null | undefined } & HTMLAttributes<HTMLButtonElement>) => {
  const {variant, className, ...rest} = props;
  return (
    <button className={classes({variant: variant, className})} {...rest} /> 
  );
}