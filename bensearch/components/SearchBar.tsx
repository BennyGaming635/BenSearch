'use client';

import { useState, useMemo, useRef } from 'react';
import sites from '@/data/sites.json';
import { useRouter } from 'next/navigation';

export default function SearchBar() {
    const [query, setQuery] = useState("");
    const [active, setActive] = useState(0);
    const router = useRouter();

    const suggestions = useMemo(() => {
        if (!query) return [];
        const q = query.toLowerCase();
        
        return sites
            .filter(site =>
                site.title.toLowerCase().includes(q)
            )
            .slice(0, 5);
    }, [query]);

    return (
        <form action="/search">
            <input
                type="text"
                name="q"
                value={query}
                onChange={(e) => {
                    setQuery(e.target.value);
                    setActive(0);
                }}
                placeholder="Search the web..."
                className="w-full p-4 rounded-full border"
            />
        </form>
    );
}