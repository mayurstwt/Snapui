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
                    className="px-7 py-2 bg-purple-700 text-white text-lg font-medium rounded-lg hover:bg-purple-800 transition-colors disabled:opacity-50"
                    disabled={loading}
                >
                    {loading ? <LogOut /> : <LogOut />} 
                </button>
            ) : (
                <Link
                    href="/sign-in"
                    className="px-10 py-2 bg-transparent text-white border-2 border-purple-400 text-lg font-medium rounded-lg hover:bg-purple-800 hover:bg-opacity-30 transition-colors"
                >
                    Sign in
                </Link>
            )}
        </>
    );
}
