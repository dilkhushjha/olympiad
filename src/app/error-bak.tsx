"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error("Error caught:", error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 text-gray-800">
      <div className="max-w-lg text-center p-6 bg-white rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-red-600 mb-4">Something went wrong!</h1>
        <p className="text-lg mb-4">We encountered an unexpected error. Please try again later.</p>
        
        <div className="flex gap-4">
          <button
            onClick={() => reset()}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Retry
          </button>
          <Link
            href="/"
            className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}
