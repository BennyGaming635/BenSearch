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

    const { filters } = parseSearchQuery(rawQuery);
    const results = search(rawQuery);

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
                <div className="text-center mt-12">
                    <h2 className="text-xl font-semibold">
                        No results found.
                    </h2>
                    <p className="text-gray-500 mt-2">
                        Try searching for something else?
                    </p>
                </div>
            )}
        </main>
    );
}