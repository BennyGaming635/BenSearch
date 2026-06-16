"use client";

import Logo from "@/components/Logo";
import sites from "@/data/sites.json";
import SearchBar from "@/components/SearchBar";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Menu } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  
  const handleSurprise = () => {
    const random =
      sites[Math.floor(Math.random() * sites.length)];

    router.push(random.url);
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4">
      <div className="absolute top-4 right-4">
        <button
          onClick={() => setOpen(true)}
          className="p-2 rounded hover:bg-gray-100"
          aria-label="Open apps"
        >
          <Menu className="w-5 h-5 text-gray-700" />
        </button>
      </div>
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