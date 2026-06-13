import sites from "@/data/sites.json";

export function parseSearchQuery(rawQuery: string) {
    const filterMatches = rawQuery.match(/filter:[^\s]+/gi) || [];

    const filters = filterMatches.map((filter) =>
        filter.replace("filter:", "").toLowerCase()
    );

    const query = rawQuery
        .replace(/filter:[^\s]+/gi, "")
        .trim()
        .toLowerCase();

    return { query, filters };
}

export function search(query: string) {
    const { query: parsedQuery, filters } = parseSearchQuery(query);

    return sites.filter(site =>
        (
            parsedQuery === "" ||
            site.title.toLowerCase().includes(parsedQuery) ||
            site.description.toLowerCase().includes(parsedQuery) ||
            site.url.toLowerCase().includes(parsedQuery)
        ) &&
        (
            filters.length === 0 ||
            filters.every((filter) =>
                (site.filters || []).map((f) => f.toLowerCase()).includes(filter)
            )
        )
    );
}