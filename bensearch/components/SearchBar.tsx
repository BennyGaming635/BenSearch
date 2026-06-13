'use client';

import { useState } from 'react';

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