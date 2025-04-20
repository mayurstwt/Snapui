"use client";

import { LogOut } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";

export default function AuthButtons() {
    const { data: session, status } = useSession();
    const [loading, setLoading] = useState(false);

    if (status === "loading") return null;

    const handleLogout = async () => {
        setLoading(true);
        await signOut({ callbackUrl: "/" });
        window.location.reload(); 
    };

    return (
        <>
            {session ? (
                <button
                    onClick={handleLogout}
                    className="big-btn-fade-purple"
                    disabled={loading}
                >
                    {loading ? <LogOut /> : <LogOut />} 
                </button>
            ) : (
                <Link
                    href="/sign-in"
                    className="big-btn-dark-purple"
                >
                    Sign in
                </Link>
            )}
        </>
    );
}
