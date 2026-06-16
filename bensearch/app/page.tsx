"use client";

import Logo from "@/components/Logo";
import sites from "@/data/sites.json";
import SearchBar from "@/components/SearchBar";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const router = useRouter();
  
  const handleSurprise = () => {
    const random =
      sites[Math.floor(Math.random() * sites.length)];

    router.push(random.url);
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4">
      <Logo />

      <p className="text-gray-500 mt-2 mb-8">
        Search without nonsense.
      </p>

      <div className="w-full max-w-2xl">
        <SearchBar />
      </div>

      <p className="mt-8 text-sm text-gray-400">
        Made with the community at heart.
      </p>

      <button
        onClick={handleSurprise}
        className="mt-6 text-sm text-gray-400 hover:text-gray-600"
      >
        ???
      </button>
    </main>
  );
}