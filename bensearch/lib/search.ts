import sites from "@/data/sites.json";

export function search(query: string) {
    const q = query.toLowerCase();

    return sites.filter(site =>
        site.title.toLowerCase().includes(q) ||
        site.description.toLowerCase().includes(q) ||
        site.url.toLowerCase().includes(q)
    );
}