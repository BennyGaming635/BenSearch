import sites from "@/data/sites.json";

export function normalizeUrl(url: string) {
    try {
        const parsed = new URL(url);
        const path = parsed.pathname === "/" ? "/" : parsed.pathname.replace(/\/+$/, "");

        return `${parsed.protocol}//${parsed.host}${path}${parsed.search}`.toLowerCase();
    } catch {
        return url.toLowerCase();
    }
}

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
            normalizeUrl(site.url).includes(parsedQuery)
        ) &&
        (
            filters.length === 0 ||
            filters.every((filter) =>
                (site.filters || []).map((f) => f.toLowerCase()).includes(filter)
            )
        )
    );
}