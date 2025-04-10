"use client";

import React, { useState, useEffect, useRef } from "react";
import { cn } from "@/app/lib/utils";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";

interface NavLink {
  label: string;
  href: string;
  submenu?: { label: string; href: string; description?: string }[];
}

const navLinks: NavLink[] = [
  {
    label: "Products",
    href: "#products",
    submenu: [
      {
        label: "Analytics Platform",
        href: "#analytics",
        description: "Real-time data insights for your business"
      },
      {
        label: "Marketing Suite",
        href: "#marketing",
        description: "Boost your brand presence and engagement"
      },
      {
        label: "E-commerce Tools",
        href: "#ecommerce",
        description: "Everything you need to sell online"
      },
      {
        label: "Developer APIs",
        href: "#api",
        description: "Integrate our solutions into your workflow"
      }
    ]
  },
  {
    label: "Solutions",
    href: "#solutions",
    submenu: [
      { label: "For Startups", href: "#startups" },
      { label: "For Enterprise", href: "#enterprise" },
      { label: "For Agencies", href: "#agencies" },
      { label: "For Developers", href: "#developers" }
    ]
  },
  { label: "Pricing", href: "#pricing" },
  { label: "Resources", href: "#resources" }
];

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | null | undefined;
}

const Button: React.FC<ButtonProps> = ({ variant = "primary", className, children, ...props }) => {
  return (
    <button
      className={cn(
        "font-medium transition-all duration-200 rounded-lg py-2.5 px-5 text-sm",
        variant === "primary" &&
          "bg-indigo-600 text-white hover:bg-indigo-700 shadow-sm",
        variant === "secondary" &&
          "bg-indigo-50 text-indigo-600 hover:bg-indigo-100 dark:bg-neutral-800 dark:text-white dark:hover:bg-neutral-700",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default function SimpleNavbarSeven() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      if (menuOpen) setMenuOpen(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
        setActiveSubmenu(null);
      }
    };

    if (menuOpen || activeSubmenu) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen, activeSubmenu]);

  const handleSubmenuToggle = (label: string) => {
    setActiveSubmenu(activeSubmenu === label ? null : label);
  };

  const handleCloseAll = () => {
    setMenuOpen(false);
    setActiveSubmenu(null);
  };

  return (
    <section
      className={cn(
        "py-4 sticky top-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white shadow-md py-3 dark:bg-neutral-900 dark:shadow-lg"
          : "bg-white dark:bg-neutral-900"
      )}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className="h-9 w-9 rounded-lg bg-indigo-600 flex items-center justify-center">
              <span className="font-bold text-white text-lg">N</span>
            </div>
            <span className="ml-2.5 font-bold text-xl text-neutral-800 dark:text-white">Nexus</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex lg:items-center lg:space-x-2">
            {navLinks.map((link) => (
              <div key={link.label} className="relative group" ref={!link.submenu ? undefined : menuRef}>
                {link.submenu ? (
                  <button
                    className={cn(
                      "px-3 py-2 rounded-md text-sm font-medium flex items-center gap-1.5 group",
                      activeSubmenu === link.label
                        ? "text-indigo-600 bg-indigo-50 dark:bg-neutral-800 dark:text-white"
                        : "text-neutral-700 hover:text-indigo-600 hover:bg-indigo-50/50 dark:text-neutral-300 dark:hover:text-white dark:hover:bg-neutral-800"
                    )}
                    onClick={() => handleSubmenuToggle(link.label)}
                  >
                    {link.label}
                    <ChevronDown
                      className={cn(
                        "w-4 h-4 transition-transform",
                        activeSubmenu === link.label ? "rotate-180" : ""
                      )}
                    />
                  </button>
                ) : (
                  <a
                    href={link.href}
                    className="px-3 py-2 rounded-md text-sm font-medium text-neutral-700 hover:text-indigo-600 hover:bg-indigo-50/50 dark:text-neutral-300 dark:hover:text-white dark:hover:bg-neutral-800"
                  >
                    {link.label}
                  </a>
                )}

                {/* Desktop Submenu */}
                {link.submenu && activeSubmenu === link.label && (
                  <div className="absolute left-0 top-full mt-1 bg-white dark:bg-neutral-900 rounded-lg shadow-lg w-80 p-4 border border-neutral-100 dark:border-neutral-800 z-40">
                    <div className="grid gap-y-4">
                      {link.submenu.map((item) => (
                        <a
                          key={item.label}
                          href={item.href}
                          className="flex items-start p-2 rounded-md hover:bg-indigo-50 dark:hover:bg-neutral-800 group/item"
                          onClick={handleCloseAll}
                        >
                          <div>
                            <p className="font-medium text-neutral-800 dark:text-white group-hover/item:text-indigo-600">
                              {item.label}
                            </p>
                            {item.description && (
                              <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-0.5">
                                {item.description}
                              </p>
                            )}
                          </div>
                          <ArrowRight className="w-4 h-4 ml-auto opacity-0 group-hover/item:opacity-100 transition-opacity text-indigo-600 mt-1" />
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right controls */}
          <div className="flex items-center gap-3" ref={menuRef}>
            <div className="hidden md:flex items-center gap-3">
              <Button variant="secondary">Log in</Button>
              <Button variant="primary">Start for free</Button>
            </div>

            <button
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label="Toggle Menu"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

            {/* Mobile Nav */}
            {menuOpen && (
              <div className="absolute inset-x-0 top-full mt-2 p-4 bg-white dark:bg-neutral-900 shadow-lg rounded-b-lg lg:hidden z-40 border-t border-neutral-100 dark:border-neutral-800">
                <nav className="grid gap-2">
                  {navLinks.map((link) => (
                    <div key={link.label}>
                      {link.submenu ? (
                        <>
                          <button
                            className={cn(
                              "flex items-center justify-between w-full p-3 rounded-md",
                              activeSubmenu === link.label
                                ? "bg-indigo-50 text-indigo-600 dark:bg-neutral-800 dark:text-white"
                                : "hover:bg-neutral-50 dark:hover:bg-neutral-800 dark:text-white"
                            )}
                            onClick={() => handleSubmenuToggle(link.label)}
                          >
                            <span className="font-medium">{link.label}</span>
                            <ChevronDown
                              className={cn(
                                "w-4 h-4 transition-transform",
                                activeSubmenu === link.label ? "rotate-180" : ""
                              )}
                            />
                          </button>
                          {activeSubmenu === link.label && (
                            <div className="pl-4 mt-1 mb-2 space-y-2 border-l-2 border-indigo-200 dark:border-indigo-400">
                              {link.submenu.map((item) => (
                                <a
                                  key={item.label}
                                  href={item.href}
                                  className="block p-2 text-neutral-700 dark:text-neutral-300 hover:text-indigo-600 dark:hover:text-white"
                                  onClick={handleCloseAll}
                                >
                                  {item.label}
                                </a>
                              ))}
                            </div>
                          )}
                        </>
                      ) : (
                        <a
                          href={link.href}
                          className="block p-3 rounded-md hover:bg-neutral-50 dark:hover:bg-neutral-800 font-medium text-neutral-800 dark:text-white"
                          onClick={handleCloseAll}
                        >
                          {link.label}
                        </a>
                      )}
                    </div>
                  ))}
                </nav>

                <div className="mt-4 pt-4 border-t border-neutral-100 dark:border-neutral-800 grid gap-2">
                  <Button variant="secondary" className="w-full" onClick={handleCloseAll}>
                    Log in
                  </Button>
                  <Button variant="primary" className="w-full" onClick={handleCloseAll}>
                    Start for free
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
