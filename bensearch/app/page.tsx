"use client";

import Logo from "@/components/Logo";
import sites from "@/data/sites.json";
import SearchBar from "@/components/SearchBar";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Menu, History, Shield } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [historyOpen, setHistoryOpen] = useState(false);
  const [searchHistory, setSearchHistory] = useState<string[]>([]);
  const [privacyOpen, setPrivacyOpen] = useState(false);

  const handleSurprise = () => {
    const random = sites[Math.floor(Math.random() * sites.length)];
    router.push(random.url);
  };

  const handleHistoryOpen = () => {
  const history = JSON.parse(
    localStorage.getItem("bensearch-history") || "[]"
  );

  setSearchHistory(history);
  setHistoryOpen(true);
};

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4">
      <section className="min-h-screen flex flex-col items-center justify-center px-4">
      <div className="absolute top-4 right-4">
        <button
          onClick={() => setOpen(true)}
          className="p-2 rounded hover:bg-gray-100"
          aria-label="Open apps"
        >
          <Menu className="w-5 h-5 text-gray-700" />
        </button>
        <button
          onClick={handleHistoryOpen}
          className="p-2 rounded hover:bg-gray-100"
          aria-label="Open search history"
        >
          <History className="w-5 h-5 text-gray-700" />
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
      </section>

      <section className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
        <h2 className="text-8xl md:text-9xl lg:text-[12rem] font-black leading-none">
          {sites.length.toLocaleString()}
        </h2>
        <p className="text-xl md:text-2xl text-gray-500 mt-6">
          sites indexed and counting.
        </p>
         <p className="text-gray-400 mt-4">
          BenSearch is built on a community-driven index of websites, with new sites added regularly.
         </p>
      </section>

      {open && (
        <div className="fixed inset-0 z-50">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setOpen(false)}
          />

          <div className="absolute right-0 top-0 h-full w-72 bg-[#0a0a0a] shadow-xl p-4 transform transition-transform duration-5000 ease-out translate-x-0">
            <h2 className="text-lg text-[#ededed] font-semibold mb-4">
              NoBS Apps
            </h2>

            <div className="space-y-2">
              <Link
                href="https://bgbs.au"
                className="block p-2 hover:bg-gray-900 rounded text-[#ededed]"
                target="_blank"
              >
                NoBS Shortner
              </Link>
            </div>
          </div>
        </div>
      )}

      {historyOpen && (
        <div className="fixed inset-0 z-50">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setHistoryOpen(false)}
          />

          <div className="absolute right-0 top-0 h-full w-72 bg-[#0a0a0a] shadow-xl p-4">
            <h2 className="text-lg text-[#ededed] font-semibold mb-4">
              Search History
            </h2>

            <div className="space-y-2">
              {searchHistory.length > 0 ? (
                searchHistory.map((query, index) => (
                  <Link
                    key={`${query}-${index}`}
                    href={`/search?q=${encodeURIComponent(query)}`}
                    className="block p-2 hover:bg-gray-900 rounded text-[#ededed]"
                    onClick={() => setHistoryOpen(false)}
                  >
                    {query}
                  </Link>
                ))
              ) : (
                <p className="text-sm text-gray-400">
                  No searches yet.
                </p>
              )}
            </div>

            {searchHistory.length > 0 && (
              <button
                onClick={() => {
                  localStorage.removeItem("bensearch-history");
                  setSearchHistory([]);
                }}
                className="mt-4 text-sm text-red-400 hover:text-red-300"
              >
                Clear History
              </button>
            )}
          </div>
        </div>
      )}
    </main>
  );
}