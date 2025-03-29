"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  const router = useRouter();

  useEffect(() => {
    console.error("Global Error:", error);
  }, [error]);

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-red-100">
      <h1 className="text-4xl font-bold text-red-600">Something went wrong!</h1>
      <p className="text-gray-600 mt-2">An unexpected error occurred.</p>

      <div className="mt-4 flex space-x-4">
        <button
          onClick={() => reset()}
          className="px-4 py-2 bg-blue-500 text-white rounded shadow"
        >
          Try Again
        </button>

        <button
          onClick={() => router.push("/")}
          className="px-4 py-2 bg-gray-500 text-white rounded shadow"
        >
          Go Home
        </button>
      </div>
    </div>
  );
}
