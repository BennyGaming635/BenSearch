import sites from "@/data/sites.json";
import Logo from "@/components/Logo";
import SearchBar from "@/components/SearchBar";
import SearchResult from "@/components/SearchResult";

type SearchParams = Promise<{
    q: string;
}>;

export default async function Search({
    searchParams
}: {
    searchParams: SearchParams;
}) {
    const params = await searchParams;
    const query = (params.q || "").toLowerCase();
    const results = sites.filter(
        (site) =>
            site.title.toLowerCase().includes(query) ||
            site.description.toLowerCase().includes(query) ||
            site.url.toLowerCase().includes(query)
    );

    return (
        <main className="min-h-screen max-w-5xl mx-auto p-6">
            <div className="mb-6">
                <Logo />
            </div>

            <div className="mb-8">
                <SearchBar />
            </div>

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