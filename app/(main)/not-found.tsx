"use client";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white px-4">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center">
        Page Not Found
      </h2>
      <p className="text-center mb-6 max-w-md">
        The page you are looking for does not exist in this section.
      </p>
      <Link href="/">
        <button className="px-6 py-3 bg-white text-purple-600 font-semibold rounded-lg shadow-lg hover:bg-purple-50 transition">
          Go Back Home
        </button>
      </Link>
    </div>
  );
}
