'use client';

import { useState, useMemo, useRef } from 'react';
import sites from '@/data/sites.json';
import { useRouter } from 'next/navigation';

export default function SearchBar() {
    const [query, setQuery] = useState("");

    return (
        <form action="/search">
            <input
                type="text"
                name="q"
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="Search the web..."
                className="w-full p-4 rounded-full border"
            />
        </form>
    );
}