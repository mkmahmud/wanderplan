"use client"

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
    const router = useRouter();
    return (
        <div>
            <h1>Dashboard</h1>
            <p>Welcome to your dashboard!</p>
            <Link href="/" className="text-blue-500 hover:underline">
                Go home
            </Link>
            {/* Add more dashboard content here */}
            <button
                onClick={async () => {
                    // Add your logout logic here
                    // For example, clear auth tokens and redirect
                    await fetch('/api/auth/logout', { method: 'POST' });
                    router.push('/auth/login');


                }}
                className="bg-error text-white px-4 py-2 rounded"
            >
                Log Out
            </button>
        </div>
    );
}