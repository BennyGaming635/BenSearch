import Logo from "@/components/Logo";
import SearchBar from "@/components/SearchBar";
import SearchResult from "@/components/SearchResult";
import NoResults from "@/components/NoResults";
import { parseSearchQuery, search } from "@/lib/search";
import { redirect } from "next/navigation";

type SearchParams = Promise<{
    q: string;
}>;

export default async function Search({
    searchParams
}: {
    searchParams: SearchParams;
}) {
    const params = await searchParams;
    const rawQuery = params.q || "";

    if (rawQuery.toLowerCase().startsWith("!w ")) {
        const searchTerm = rawQuery.slice(3).trim();
        redirect(`https://en.wikipedia.org/wiki/Special:search?search=${encodeURIComponent(searchTerm)}`);
    }

    if (rawQuery.toLowerCase().startsWith("!y ")) {
        const searchTerm = rawQuery.slice(3).trim();
        redirect(`https://www.youtube.com/results?search_query=${encodeURIComponent(searchTerm)}`);
    }

    if (rawQuery.toLowerCase().startsWith("!g ")) {
        const searchTerm = rawQuery.slice(3).trim();
        redirect(`https://www.github.com/search?q=${encodeURIComponent(searchTerm)}`);
    }

    if (rawQuery.toLowerCase().startsWith("!r ")) {
        const searchTerm = rawQuery.slice(3).trim();
        redirect(`https://www.reddit.com/search/?q=${encodeURIComponent(searchTerm)}`);
    }

    const { filters } = parseSearchQuery(rawQuery);
    const queryWords = rawQuery
        .toLowerCase()
        .split(/\s+/)
        .filter(Boolean);

    const results = search(rawQuery)
        .map((site) => {
            let score = 0;

            const title = site.title.toLowerCase();
            const description = site.description.toLowerCase();
            const url = site.url.toLowerCase();

            if (title === rawQuery.toLowerCase()) score += 100;
            if (title.startsWith(rawQuery.toLowerCase())) score += 75;
            queryWords.forEach((word) => {
                if (title.includes(word)) score += 15;
                if (description.includes(word)) score += 5;
                if (url.includes(word)) score += 13;

                if (
                    site.filters?.some(
                        (filter) => filter.toLowerCase() === word
                    )
                ) {
                    score += 50;
                }
        });

        return {
            ...site,
            score,
        };
    })
    .sort((a, b) => b.score - a.score);
    
    return (
        <main className="min-h-screen max-w-5xl mx-auto p-6">
            <div className="mb-6">
                <Logo />
            </div>

            <div className="mb-8">
                <SearchBar />
            </div>

            {filters.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                    {filters.map((filter) => (
                        <span
                            key={filter}
                            className="inline-flex items-center rounded-full border border-gray-300 bg-gray-100 px-3 py-1 text-sm text-gray-700"
                        >
                            {filter}
                        </span>
                    ))}
                </div>
            )}

            <p className="text-gray-500 mb-6">
                Found {results.length} result
                {results.length !== 1 ? "s" : ""}
            </p>

            <div className="space-y-4">
                {results.map((site) => (
                    <SearchResult
                        key={site.url}
                        title={site.title}
                        url={site.url}
                        description={site.description}
                    />
                ))}
            </div>

            {results.length === 0 && (
                <NoResults query={rawQuery} />
            )}
        </main>
    );
}