import sites from "@/data/sites.json";
import Logo from "@/components/Logo";
import SearchBar from "@/components/SearchBar";
import SearchResult from "@/components/SearchResult";

type SearchParams = Promise<{
    q: string;
}>;

export default async function Search({
    searchParams.
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
    
}