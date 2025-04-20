"use client";

import React, { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { Home, Zap, Link2, HelpCircle, Menu, X, User, LogIn, Check, FlameKindling } from "lucide-react";
import Image from "next/image";
import { Quicksand } from "next/font/google"
import { Button } from "@/components/ui/button";

import { LucideRocket, LucideHeart, LucideShield, LucideBolt, LucideStar, LucideLeaf } from 'lucide-react';

const benefits = [
    {
        icon: <LucideRocket size={32} />,
        title: "Fast Performance",
        description: "Experience blazing fast load times and optimized assets.",
    },
    {
        icon: <LucideHeart size={32} />,
        title: "User Friendly",
        description: "Clean, intuitive UI for a seamless user experience.",
    },
    {
        icon: <LucideShield size={32} />,
        title: "Secure",
        description: "Top-tier security features protect your data.",
    },
    {
        icon: <LucideBolt size={32} />,
        title: "Lightning Setup",
        description: "Quick and easy to integrate into any project.",
    },
    {
        icon: <LucideStar size={32} />,
        title: "Highly Rated",
        description: "Loved by developers and users worldwide.",
    },
    {
        icon: <LucideLeaf size={32} />,
        title: "Eco Friendly",
        description: "Built with sustainability and efficiency in mind.",
    },
];

const navLinks = [
    { label: "Home", href: "#", icon: Home },
    { label: "Features", href: "#features", icon: Zap },
    { label: "Integrations", href: "#integrations", icon: Link2 },
    { label: "FAQs", href: "#faqs", icon: HelpCircle },
];

const tiers = [
    {
        title: "Starter",
        monthly: "$9",
        yearly: "$90",
        description: "Perfect for individuals getting started.",
        features: ["Basic components", "1 user", "Community support"],
    },
    {
        title: "Pro",
        monthly: "$19",
        yearly: "$190",
        description: "Ideal for teams and developers.",
        features: ["All components", "5 users", "Email support"],
        highlighted: true,
    },
    {
        title: "Enterprise",
        monthly: "$39",
        yearly: "$390",
        description: "Advanced tools for large teams.",
        features: ["Unlimited access", "Unlimited users", "Priority support"],
    },
];

const quicksand = Quicksand({
    subsets: ["latin"],
    variable: "--font-quicksand",
})

export default function Saas() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const [isYearly, setIsYearly] = useState(false);

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
        <>
            {/* Navbar start */}
            <section className={cn(
                "py-4 sticky top-0 z-50 transition-all duration-300",
                isScrolled ? "bg-teal/80 backdrop-blur-xl" : "bg-teal-50"
            )}>
                <div className="mx-auto max-w-[100rem] ">
                    <div className={cn(
                        "flex justify-between items-center px-4 rounded-2xl py-3 transition-all duration-300",
                        isScrolled ? "bg-teal-100 lg:mx-20 px-3 mx-2" : "bg-transparent"
                    )}>
                        <div className="flex items-center">
                            <span className="font-bold flex items-center gap-2 text-[3rem] text-teal-900 tracking-tight">
                               <FlameKindling className="w-8 h-8"/> Cosmos
                            </span>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="lg:flex items-center justify-center hidden">
                            <nav className="flex gap-8 font-medium">
                                {navLinks.map((link) => (
                                    <a
                                        href={link.href}
                                        key={link.label}
                                        className="flex items-center gap-1.5 text-teal-700 hover:text-teal-600 transition-colors group"
                                    >
                                        <link.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                                        <span className="text-lg relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5  group-hover:after:w-full">
                                            {link.label}
                                        </span>
                                    </a>
                                ))}
                            </nav>
                        </div>

                        {/* Hamburger + Buttons */}
                        <div className="flex items-center gap-4 relative" ref={menuRef}>
                            <div className="hidden lg:flex items-center gap-3">
                                <button className="flex px-10 py-4 bg-teal-600 text-white text-lg font-medium rounded-full hover:text-white transition-colors shadow-lg items-center gap-2">
                                    <LogIn className="w-5 h-5 " />
                                    Log in
                                </button>
                                <button className="flex px-10 py-4 bg-transparent text-teal-700 border-2 border-teal-400 text-lg font-medium rounded-full hover:bg-teal-100 transition-colors shadow-lg items-center gap-2">
                                    <User className="w-5 h-5" />
                                    Sign up
                                </button>
                            </div>

                            <button
                                className="lg:hidden w-10 h-10 rounded-full bg-white/10 flex items-center justify-center"
                                onClick={() => setMenuOpen((prev) => !prev)}
                                aria-label="Toggle Menu"
                            >
                                {menuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
                            </button>

                            {/* Mobile Navigation */}
                            {menuOpen && (
                                <div className="absolute right-0 top-16 bg-teal-800 backdrop-blur-xl border border-white/10 rounded-xl w-64 py-5 px-4 shadow-lg lg:hidden z-50">
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
                                        <hr className="my-1 border-white/10" />
                                        <Button className="w-full px-10 py-4 bg-teal-600 text-white text-lg font-medium rounded-full hover:bg-teal-700 transition-colors shadow-lg gap-2" onClick={handleMenuClick}>
                                            <LogIn className="w-4 h-4" />
                                            Log in
                                        </Button>
                                        <Button className="w-full px-10 py-4 bg-teal-600 text-white text-lg font-medium rounded-full hover:bg-teal-700 transition-colors shadow-lg gap-2" onClick={handleMenuClick}>
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

            {/* Navbar end */}



            {/* Hero start */}
            <div className="bg-gradient-to-b from-teal-50 via-teal-100 to-white relative overflow-hidden">
                {/* Decorative Circles */}
                <div className="absolute top-40 left-20 w-40 h-40 rounded-full bg-teal-200 opacity-30 z-0 pointer-events-none"></div>
                <div className="absolute bottom-20 right-20 w-60 h-60 rounded-full bg-teal-200 opacity-30 z-0 pointer-events-none"></div>

                <div
                    className={`py-32 max-w-[100rem] px-4 mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12 ${quicksand.variable} font-sans`}
                >
                    {/* Left Content */}
                    <div className="text-start max-w-3xl z-10">
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-teal-900 tracking-tight">
                            <span className="block">Find Your Balance</span>
                            <span className="block mt-4">Nurture Your Wellbeing</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-teal-700 mb-12 max-w-2xl">
                            Holistic wellness programs designed to restore harmony to mind and body.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6">
                            <button className="px-10 py-4 bg-teal-600 text-white text-lg font-medium rounded-full hover:bg-teal-700 transition-colors shadow-lg">
                                Begin Your Journey
                            </button>
                            <button className="px-10 py-4 bg-transparent text-teal-700 border-2 border-teal-400 text-lg font-medium rounded-full hover:bg-teal-100 transition-colors">
                                Explore Programs
                            </button>
                        </div>
                    </div>

                    {/* Right Image */}

                    <div className="relative hidden lg:block w-1/2">
                        <div className="absolute inset-0 z-0 before:content-[''] before:absolute before:inset-0 before:rounded-xl before:bg-teal-400 before:blur-2xl before:opacity-50 before:animate-pulse"></div>
                        <Image
                            src="https://res.cloudinary.com/damr9jzpb/image/upload/v1744733591/login-image_gj9g7c.jpg"
                            width={1000}
                            height={1000}
                            alt="image"
                            className="w-full h-full object-cover relative z-10"
                        />
                    </div>

                </div>
            </div>

            {/* Hero end */}


            <section className="py-12 bg-gradient-to-b from-white to-teal-100">
                <div className="max-w-[100rem] px-4 mx-auto">
                    <div className="text-center mb-10">
                        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-teal-900 tracking-tight">Why Choose Us</h2>
                        <p className="text-xl md:text-2xl text-teal-700 mb-12 max-w-2xl mx-auto mt-2">
                            Discover the unique benefits that make our solution stand out from the rest.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {benefits.map((item, index) => (
                            <div
                                key={index}
                                className="flex flex-col min-h-[20rem] items-center justify-center text-center p-6 rounded-xl bg-teal-400/10 backdrop-blur-md border border-teal-400/20 shadow-sm hover:shadow-md transition duration-300"
                            >
                                <div className="text-white bg-teal-800 p-4 rounded-full mb-7">{item.icon}</div>
                                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 text-teal-900 tracking-tight">{item.title}</h3>
                                <p className="text-md md:text-lg max-w-[15rem] text-teal-700">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            <section className="relative py-32 px-4 sm:px-8 md:px-16 lg:px-24 bg-gradient-to-b from-teal-100 to-white overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
                    <div className="relative w-[1600px] h-[1200px]">
                        <div className="absolute inset-0 rounded-full border border-teal-400/20" />
                        <div className="absolute inset-8 rounded-full border border-teal-400/20" />
                        <div className="absolute inset-16 rounded-full border border-teal-400/10" />
                        <div className="absolute inset-24 rounded-full border border-teal-400/10" />
                    </div>
                </div>
                <div className="text-center mb-10">
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-teal-900 tracking-tight">Why Choose Us</h2>
                    <p className="text-xl md:text-2xl text-teal-700 mb-12 max-w-2xl mx-auto mt-2">
                        Discover the unique benefits that make our solution stand out from the rest.
                    </p>
                </div>

                <div className="relative w-full max-w-[60rem] mx-auto">
                    {/* Main Image */}
                    <img
                        src="https://res.cloudinary.com/damr9jzpb/image/upload/v1744733591/login-image_gj9g7c.jpg"
                        alt="Component Image"
                        className="w-full h-auto object-cover rounded-xl"
                    />

                    {/* Gradient Mask Overlay */}
                    <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white dark:from-gray-900 to-transparent pointer-events-none rounded-b-xl" />
                </div>
            </section>




            <section className="py-16 px-4 sm:px-8 md:px-16 lg:px-24 bg-gradient-to-b from-white to-teal-100">
                <div className="text-center mb-10">
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-teal-900 tracking-tight">Why Choose Us</h2>
                    <p className="text-xl md:text-2xl text-teal-700 mb-12 max-w-2xl mx-auto mt-2">
                        Discover the unique benefits that make our solution stand out from the rest.
                    </p>

                    {/* Toggle */}
                    <div className="inline-flex items-center gap-2 mt-6 text-xl font-medium text-teal-700 ">
                        <span>Monthly</span>
                        <button
                            onClick={() => setIsYearly(!isYearly)}
                            className={`relative w-12 h-6 rounded-full transition-colors duration-300 ${isYearly ? "bg-teal-500" : "bg-gray-300 "
                                }`}
                        >
                            <span
                                className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full shadow-md transform transition-transform ${isYearly ? "translate-x-6" : ""
                                    }`}
                            ></span>
                        </button>
                        <span>Yearly</span>
                    </div>
                </div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 max-w-[100rem] mx-auto">
                    {tiers.map((tier, i) => (
                        <div
                            key={i}
                            className={`relative flex flex-col justify-between p-6 rounded-2xl border ${tier.highlighted
                                ? "border-teal-500 bg-teal-400/10 shadow-xl"
                                : "border-teal-400/20 bg-teal-400/5"
                                } transition duration-300`}
                        >
                            <div>
                                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-teal-900 tracking-tight">{tier.title}</h3>
                                <p className="text-md md:text-lg text-teal-700 mb-4">{tier.description}</p>
                                <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-teal-900 tracking-tight">
                                    {isYearly ? tier.yearly : tier.monthly}
                                    <span className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-teal-700 tracking-tight ml-1">/ {isYearly ? "year" : "month"}</span>
                                </div>
                                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                                    {tier.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center gap-2 text-sm md:text-md lg:text-lg font-bold mb-6 text-teal-700 tracking-tight">
                                            <Check className="w-7 h-7 p-2 text-teal-500 bg-white rounded-full" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <button className="mt-6 px-10 py-4 w-fit bg-teal-600 text-white text-lg font-medium rounded-full hover:bg-teal-700 transition-colors shadow-lg">
                                Choose {tier.title}
                            </button>
                        </div>
                    ))}
                </div>
            </section>


            <section className="py-20 px-4 sm:px-8 md:px-16 lg:px-24 bg-gradient-to-b from-teal-100 relative overflow-hidden">
                <div className="max-w-[100rem] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center border-2 p-20 border-teal-500 rounded-xl">
                    {/* Left Side */}
                    <div className="text-center lg:text-left">
                        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-teal-900 tracking-tight">Why Choose Us</h2>
                        <p className="text-xl md:text-2xl text-teal-700 mb-8 max-w-2xl mx-auto mt-2">
                            Discover the unique benefits that make our solution stand out from the rest.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <button className="px-6 py-3 rounded-xl text-white bg-teal-500 hover:bg-teal-600 transition font-medium">
                                Get Started
                            </button>
                            <button className="px-6 py-3 rounded-xl border border-teal-500 text-teal-500 hover:bg-teal-100 transition font-medium">
                                Learn More
                            </button>
                        </div>
                    </div>

                    {/* Right Side */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[1, 2, 3, 4].map((_, i) => (
                            <div
                                key={i}
                                className="bg-teal-400/10 border border-teal-300/50 rounded-2xl p-6 flex flex-col items-center text-center shadow-md"
                            >
                                <div className="text-teal-500 mb-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-8 w-8"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                                    Trusted Solution
                                </h3>
                                <div className="flex justify-center gap-1 text-yellow-400 mb-2">
                                    {Array(5)
                                        .fill(0)
                                        .map((_, idx) => (
                                            <svg
                                                key={idx}
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-4 w-4"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.036 3.182a1 1 0 00.95.69h3.356c.969 0 1.371 1.24.588 1.81l-2.715 1.972a1 1 0 00-.364 1.118l1.036 3.182c.3.921-.755 1.688-1.538 1.118l-2.714-1.972a1 1 0 00-1.176 0l-2.714 1.972c-.783.57-1.838-.197-1.538-1.118l1.036-3.182a1 1 0 00-.364-1.118L2.475 8.609c-.783-.57-.38-1.81.588-1.81h3.356a1 1 0 00.95-.69l1.036-3.182z" />
                                            </svg>
                                        ))}
                                </div>
                                <span className="text-sm text-gray-600 dark:text-gray-400">Since {2020 + i}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <footer className="bg-gradient-to-t from-white to-teal-50 dark:from-gray-900 dark:to-teal-900 pt-12">
                <div className="max-w-[100rem] mx-auto px-6 md:px-12">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-teal-200 dark:border-teal-800 pb-10">

                        {/* Brand + Tagline */}
                        <div>
                            <h2 className="text-2xl font-bold text-teal-700 dark:text-teal-400 mb-3">YourCompany</h2>
                            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                                Building beautiful experiences, one pixel at a time. Join the digital revolution.
                            </p>
                        </div>

                        {/* Explore Links */}
                        <div>
                            <h3 className="text-lg font-semibold text-teal-600 dark:text-teal-300 mb-4">Explore</h3>
                            <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                                {["Home", "Features", "Pricing", "Blog"].map((item) => (
                                    <li key={item}>
                                        <a href="#" className="hover:text-teal-500 transition-all duration-200">{item}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Resources Links */}
                        <div>
                            <h3 className="text-lg font-semibold text-teal-600 dark:text-teal-300 mb-4">Resources</h3>
                            <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                                {["Docs", "Support", "Privacy Policy", "Terms"].map((item) => (
                                    <li key={item}>
                                        <a href="#" className="hover:text-teal-500 transition-all duration-200">{item}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div>
                            <h3 className="text-lg font-semibold text-teal-600 dark:text-teal-300 mb-4">Contact</h3>
                            <p className="text-sm mb-2">support@yourcompany.com</p>
                            <p className="text-sm mb-2">+91 12345 67890</p>
                            <div className="flex gap-3 mt-4">
                                {[
                                    { name: "Twitter", href: "#", icon: "🐦" },
                                    { name: "LinkedIn", href: "#", icon: "💼" },
                                    { name: "GitHub", href: "#", icon: "💻" },
                                ].map(({ name, href, icon }) => (
                                    <a
                                        key={name}
                                        href={href}
                                        aria-label={name}
                                        className="w-9 h-9 rounded-full bg-teal-100 dark:bg-teal-800 text-teal-700 dark:text-white flex items-center justify-center hover:scale-110 hover:bg-teal-200 dark:hover:bg-teal-700 transition-all duration-300"
                                    >
                                        <span className="text-lg">{icon}</span>
                                    </a>
                                ))}
                            </div>
                        </div>

                    </div>

                    {/* Bottom Row */}
                    <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 dark:text-gray-400 py-6 gap-4">
                        <p>© {new Date().getFullYear()} YourCompany. All rights reserved.</p>
                        <p>Crafted with 💚 in India</p>
                    </div>
                </div>
            </footer>



        </>
    );
}