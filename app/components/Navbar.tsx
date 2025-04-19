"use client";

import { useState, useEffect, useRef } from "react";
import React, { HTMLAttributes } from 'react';
import { cva } from "class-variance-authority";
import Link from "next/link";
import AuthButtons from "./AuthButtons";


export default function NavbarComponent() {
    
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


    return (
        <section className="fixed py-2 top-0 z-50 w-full">
            <div className="mx-auto max-w-7xl px-4 xl:px-0">
                <div className="flex justify-between px-4 items-center bg-black py-3 rounded-lg">
                    <Link className="flex items-center space-x-2" href="/">
                        <span className="font-bold text-white text-3xl">Snap UI</span>
                    </Link>
                    <div className="flex items-center gap-4 relative" ref={menuRef}>
                        <AuthButtons />
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
    const { variant, className, ...rest } = props;
    return (
        <button className={classes({ variant: variant, className })} {...rest} />
    );
}