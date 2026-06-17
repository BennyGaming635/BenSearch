'use client';

import { useState, useMemo, useRef } from 'react';
import sites from '@/data/sites.json';
import { useRouter } from 'next/navigation';

export default function SearchBar() {
    const [query, setQuery] = useState("");
    const [active, setActive] = useState(0);
    const router = useRouter();

    function firstFiveWords(text: string) {
        return text.split(" ").slice(0, 5).join(" ");
    }

    const suggestions = useMemo(() => {
        if (!query) return [];
        const q = query.toLowerCase();
        
        return sites
            .filter(site =>
                site.title.toLowerCase().includes(q)
            )
            .slice(0, 5);
    }, [query]);

    const saveSearch = (query: string) => {
        const existing = JSON.parse(localStorage.getItem("bensearch-history") || "[]");
        const updated = [query, ...existing.filter((q: string) => q !== query)].slice(0, 20);

        localStorage.setItem("bensearch-history", JSON.stringify(updated));
    };

    return (
        <form action="/search">
            <input
                type="text"
                name="q"
                value={query}
                onChange={(e) => {
                    setQuery(e.target.value);
                    setActive(0);
                    saveSearch(query);
                    router.push(`/search?q=${encodeURIComponent(query)}`);
                }}
                placeholder="Search the web..."
                className="w-full p-4 rounded-full border"
            />
            {suggestions.length > 0 && (
                <div className="mt-2 rounded-lg overflow-hidden">
                    {suggestions.map((s, i) => (
                        <div
                            key={s.url}
                            onClick={() => router.push(`/search?q=${s.title}`)}
                            className={`p-3 cursor-pointer ${
                                i === active ? "bg-muted" : ""
                            }`}
                        >
                            {firstFiveWords(s.title)}
                        </div>
                    ))}
                </div>
            )}
        </form>
    );
}