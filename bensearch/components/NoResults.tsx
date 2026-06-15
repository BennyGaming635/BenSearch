export default function NoResults({ query }: { query: string }) {
    return (
        <div className="text-center mt-16">
            <h2 className="text-2xl font-semibold">
                No results found...
            </h2>

            <p className="text-gray-500 mt-2">
                We couldn&apos;t find anything for <span className="font-medium">&quot;{query}&quot;</span>
            </p>

            <div className="mt-6 text-sm text-gray-400 space-y-2">
                <p>Try:</p>
                <div className="flex flex-wrap justify-center gap-2 mt-2">
                    <a className="px-3 py-1 border rounded-full" href="/search?q=python">
                        python
                    </a>
                    <a className="px-3 py-1 border rounded-full" href="/search?q=github">
                        github
                    </a>
                    <a className="px-3 py-1 border rounded-full" href="/search?q=wikipedia">
                        wikipedia
                    </a>
                </div>

                <p className="mt-4">
                    Or use <code>filter:</code> or <code>!w, !g or !y</code> to search within a specific category or website.
                </p>
            </div>
        </div>
    );
}