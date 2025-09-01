"use client"

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
    const router = useRouter();
    return (
        <div>
            <h1>Dashboard</h1>
            <button
            onClick={async () => {
                await fetch('/api/auth/logout', { method: 'POST' });
                localStorage.clear(); 
                router.push('/auth/login');
            }}
            className="bg-error text-white px-4 py-2 rounded"
            >
            Log Out
            </button>
        </div>
    );
}